import { createReducer } from '@reduxjs/toolkit';
import { CategoryState } from '../../types/Category';
import {
  requestCategories,
  requestCategoriesError,
  requestCategoriesSuccess,
  requestCategory, requestCategoryError,
  requestCategorySuccess
} from './actions';

const categoryReducer = createReducer<CategoryState>({
  category: null,
  loading: false,
  error: null,
  categoryById: null,
  categoryByIdLoading: false,
  categoryByIdError: null,
}, {
  [requestCategories.type]: (state) => ({
    ...state,
    category: null,
    loading: true,
    error: null,
  }),
  [requestCategoriesSuccess.type]: (state, { payload }) => ({
    ...state,
    category: payload,
    loading: false,
    error: null,
  }),
  [requestCategoriesError.type]: (state, { payload }) => ({
    ...state,
    category: null,
    loading: false,
    error: payload,
  }),
  [requestCategory.type]: (state) => ({
    ...state,
    categoryById: null,
    categoryByIdLoading: true,
    categoryByIdError: null,
  }),
  [requestCategorySuccess.type]: (state, { payload }) => ({
    ...state,
    categoryById: payload,
    categoryByIdLoading: false,
    categoryByIdError: null,
  }),
  [requestCategoryError.type]: (state, { payload }) => ({
    ...state,
    categoryById: null,
    categoryByIdLoading: false,
    categoryByIdError: payload,
  }),
});

export default categoryReducer;
