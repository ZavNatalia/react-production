import { ArticleDetailsSchema } from 'entities/Article';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';

describe('articleDetailsSlice.test', () => {
    test('test get article service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            error: undefined,
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual(state);
    });
});
