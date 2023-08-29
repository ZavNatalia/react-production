import { StateSchema } from '@/app/providers/StoreProvider';
import { getCounterValue } from '../../../model/selectors/getCounterValue/getCounterValue';

describe('getCounterValue.test', () => {
    test('get counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
