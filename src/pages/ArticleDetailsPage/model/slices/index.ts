import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from '../../model/slices/articleDetailsCommentSlice';
import { articleDetailsRecommendationsReducer } from '../../model/slices/articleDetailsRecommendationsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        recommendations: articleDetailsRecommendationsReducer,
        comments: articleDetailsCommentsReducer,
    });
