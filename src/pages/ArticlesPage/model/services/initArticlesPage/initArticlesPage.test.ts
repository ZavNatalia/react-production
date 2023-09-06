import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 1,
                isLoading: false,
                _inited: false,
            },
        });
        // await thunk.callThunk();
        // expect(thunk.dispatch).toBeCalledTimes(4);
        // expect(fetchArticlesList).toHaveBeenCalledWith({});
    });

    test('_inited was inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 1,
                isLoading: false,
                _inited: true,
            },
        });

        // await thunk.callThunk();
        // expect(thunk.dispatch).toBeCalledTimes(2);
        // expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
