import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { Profile } from '@/entities/Profile';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '5',
    firstname: 'Ivan',
    lastname: 'Petrov',
    age: 27,
    currency: Currency.EUR,
    country: Country.Uzbekistan,
    city: 'Tashkent',
    username: 'Vasya I',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '5' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard', () => {
    test('Readonly mode should switch', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));
        expect(screen.getByTestId('EditableProfilePageHeader.CancelButton')).toBeInTheDocument();
    });

    test('Values should be resettled when canceling', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'Petya');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'Ivanov');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('Petya');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('Ivanov');

        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('Ivan');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('Petrov');
    });

    test('An error should appear', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('if there are no validation errors, then PUT request should be sent to the server', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'Petya');

        await userEvent.click(screen.getByTestId('EditableProfilePageHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
