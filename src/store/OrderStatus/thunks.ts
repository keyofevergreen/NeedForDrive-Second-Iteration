import { ThunkResult } from '../../types/thunk';
import { requestOrderStatus, requestOrderStatusError, requestOrderStatusSuccess } from './actions';

export const fetchOrderStatus = (): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestOrderStatus());
    const { data } = await services.table.getEntities('orderStatus', {});
    dispatch(requestOrderStatusSuccess(data.data));
  } catch (error) {
    dispatch(requestOrderStatusError(error.message));
  }
};
