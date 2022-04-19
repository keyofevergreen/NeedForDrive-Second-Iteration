import { ThunkResult } from '../../types/thunk';
import { requestCategory, requestCategoryError, requestCategorySuccess } from './actions';

export const fetchCategory = (): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestCategory());
    const { data } = await services.table.getCategory();
    dispatch(requestCategorySuccess(data.data));
  } catch (error) {
    dispatch(requestCategoryError(error.message));
  }
};
