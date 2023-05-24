import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'John' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('Vasya'),
        )).toEqual({ username: 'Vasya' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'qwerty' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('ytrewq!'),
        )).toEqual({ password: 'ytrewq!' });
    });
});
