import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { getArticlesPageInited } from '../../../model/selectors/articlesPageSelector';
import { articlesPageActions } from '../../../model/slices/articlesPageSlice';
import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void,
    URLSearchParams,
    ThunkConfig<string>>(
        'articlesPage/initArticlesPage',
        async (URLSearchParams, thunkAPI) => {
            const { dispatch, getState } = thunkAPI;
            const inited = getArticlesPageInited(getState());

            if (!inited) {
                const orderFromUrl = URLSearchParams.get('order') as SortOrder;
                const sortFromUrl = URLSearchParams.get('sort') as ArticleSortField;
                const searchQueryFromUrl = URLSearchParams.get('searchQuery');
                const typeFromUrl = URLSearchParams.get('type') as ArticleType;

                if (orderFromUrl) {
                    dispatch(articlesPageActions.setOrder(orderFromUrl));
                }
                if (sortFromUrl) {
                    dispatch(articlesPageActions.setSort(sortFromUrl));
                }
                if (searchQueryFromUrl) {
                    dispatch(articlesPageActions.setSearchQuery(searchQueryFromUrl));
                }
                if (typeFromUrl) {
                    dispatch(articlesPageActions.setType(typeFromUrl));
                }

                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesList({}));
            }
        },
    );
