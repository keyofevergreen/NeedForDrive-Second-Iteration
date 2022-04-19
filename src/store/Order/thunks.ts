import { ThunkResult } from '../../types/thunk';
import { requestOrder, requestOrderError, requestOrderSuccess } from './actions';
import { IFetchOrderProps } from '../../types/Order';

export const fetchOrder = ({ page }: IFetchOrderProps): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestOrder());
    const { data } = await services.table.getOrders({ page });
    dispatch(requestOrderSuccess(data));
  } catch (error) {
    dispatch(requestOrderError(error.message));
  }
};
