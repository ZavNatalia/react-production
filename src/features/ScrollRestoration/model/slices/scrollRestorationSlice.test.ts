import {
    scrollRestorationActions,
    scrollRestorationReducer,
} from '../slices/scrollRestorationSlice';
import { ScrollRestorationSchema } from '../types/ScrollRestorationSchema';

describe('scrollRestorationSlice.test', () => {
    test('success', () => {
        const state: DeepPartial<ScrollRestorationSchema> = {
            scroll: { articles: 0 },
        };
        expect(
            scrollRestorationReducer(
                state as ScrollRestorationSchema,
                scrollRestorationActions.setScrollPosition({
                    path: 'articles',
                    position: 100,
                }),
            ),
        ).toEqual({ scroll: { articles: 100 } });
    });
});
