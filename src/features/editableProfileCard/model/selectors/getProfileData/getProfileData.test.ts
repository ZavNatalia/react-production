import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
