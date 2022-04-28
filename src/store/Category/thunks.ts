import { ThunkResult } from '../../types/thunk';
import { requestCategory, requestCategoryError, requestCategorySuccess } from './actions';
import { addToErrorHandler } from '../ErrorProvider/actions';

export const fetchCategory = (): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestCategory());
    const { data } = await services.table.getEntities('category', {});
    dispatch(requestCategorySuccess(data.data));
  } catch (error) {
    dispatch(requestCategoryError(error.response.status));
    dispatch(addToErrorHandler(error.response.status));
  }
};
