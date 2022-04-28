import { ThunkResult } from '../../types/thunk';
import { requestOrderStatus, requestOrderStatusError, requestOrderStatusSuccess } from './actions';
import { addToErrorHandler } from '../ErrorProvider/actions';

export const fetchOrderStatus = (): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestOrderStatus());
    const { data } = await services.table.getEntities('orderStatus', {});
    dispatch(requestOrderStatusSuccess(data.data));
  } catch (error) {
    dispatch(requestOrderStatusError(error.response.status));
    dispatch(addToErrorHandler(error.response.status));
  }
};
