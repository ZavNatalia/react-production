import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearchQuery,
    getArticlesPageSort,
    getArticlesPageType,
} from '../../selectors/articlesPageSelector';

interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
    >(
        'articleDetails/fetchArticlesList',
        async (props, thunkAPI) => {
            const { rejectWithValue, extra, getState } = thunkAPI;
            const page = getArticlesPageNum(getState());
            const limit = getArticlesPageLimit(getState());
            const order = getArticlesPageOrder(getState());
            const sort = getArticlesPageSort(getState());
            const searchQuery = getArticlesPageSearchQuery(getState());
            const type = getArticlesPageType(getState());

            try {
                addQueryParams({
                    sort, order, searchQuery, type,
                });
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _order: order,
                        _sort: sort,
                        q: searchQuery,
                        type: type === ArticleType.ALL ? undefined : type,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
