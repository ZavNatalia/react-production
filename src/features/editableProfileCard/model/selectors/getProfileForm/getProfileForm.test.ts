import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should work with filled state', () => {
        const data = {
            username: 'admin',
            age: 35,
            firstname: 'Vasya',
            lastname: 'Petrov',
            city: 'Astana',
            currency: Currency.KZT,
            country: Country.Kazakhstan,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
