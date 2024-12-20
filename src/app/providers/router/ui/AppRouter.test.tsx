import { act, screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import {
    getRouteAbout,
    getRouteAdmin,
    getRouteProfile,
} from '@/shared/const/router';
import { UserRole } from '@/entities/User';

describe('app/router/AppRouter', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation((query) => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // Deprecated
                removeListener: jest.fn(), // Deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        });
    });

    test('the page must be rendered', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('page is not found', async () => {
        componentRender(<AppRouter />, {
            route: '/qweqweqwe',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('redirect an unauthorized user to the main page', async () => {
        componentRender(<AppRouter />, {
            route: '/articles',
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('access to a closed page for an authorized user', async () => {
        await act(() => {
            componentRender(<AppRouter />, {
                route: getRouteProfile('1'),
                initialState: {
                    user: {
                        _mounted: true,
                        authData: { id: '1' },
                    },
                },
            });
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('access denied (missing required role)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _mounted: true,
                    authData: {
                        id: '2',
                    },
                },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('access is allowed (have required role)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _mounted: true,
                    authData: {
                        roles: [UserRole.ADMIN],
                    },
                },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
