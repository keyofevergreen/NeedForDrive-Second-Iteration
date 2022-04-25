import { ThunkResult } from '../../types/thunk';
import { requestOrder, requestOrderError, requestOrderSuccess } from './actions';

export const fetchOrder = (config): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestOrder());
    const { data } = await services.table.getEntities('order', config);
    dispatch(requestOrderSuccess(data));
  } catch (error) {
    dispatch(requestOrderError(error.response?.status));
  }
};
