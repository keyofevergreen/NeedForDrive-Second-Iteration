import { ThunkResult } from '../../types/thunk';
import { requestOrder, requestOrderError, requestOrderSuccess } from './actions';
import { OrderSort } from '../../types/Order';

export const fetchOrder = (sorts: OrderSort, page: number): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestOrder());
    const { data } = await services.order.getOrders(sorts, page);
    dispatch(requestOrderSuccess(data));
  } catch (error) {
    dispatch(requestOrderError(error.response?.status));
  }
};
