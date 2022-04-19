import { createReducer } from '@reduxjs/toolkit';
import { CategoryState } from '../../types/Category';
import { requestCategory, requestCategoryError, requestCategorySuccess } from './actions';

const categoryReducer = createReducer<CategoryState>({
  category: null,
  loading: false,
  error: null,
}, {
  [requestCategory.type]: (state) => ({
    ...state,
    category: null,
    loading: true,
    error: null,
  }),
  [requestCategorySuccess.type]: (state, { payload }) => ({
    ...state,
    category: payload,
    loading: false,
    error: null,
  }),
  [requestCategoryError.type]: (state, { payload }) => ({
    ...state,
    category: null,
    loading: false,
    error: payload,
  }),
});

export default categoryReducer;
