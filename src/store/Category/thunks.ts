import { ThunkResult } from '../../types/thunk';
import {
  requestCategories,
  requestCategoriesError,
  requestCategoriesSuccess,
  requestCategory, requestCategoryError,
  requestCategorySuccess
} from './actions';
import { addToErrorHandler } from '../ErrorProvider/actions';

export const fetchCategories = (): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestCategories());
    const { data } = await services.table.getEntities('category', {});
    dispatch(requestCategoriesSuccess(data.data));
  } catch (error) {
    dispatch(requestCategoriesError(error.response.status));
    dispatch(addToErrorHandler(error.response.status));
  }
};

export const fetchCategory = (categoryId: string): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestCategory());
    const { data } = await services.table.getEntities('category', {}, categoryId);
    dispatch(requestCategorySuccess(data.data));
  } catch (error) {
    dispatch(requestCategoryError(error.response.status));
    dispatch(addToErrorHandler(error.response.status));
  }
};
