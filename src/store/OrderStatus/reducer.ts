import { createReducer } from '@reduxjs/toolkit';
import { requestOrderStatus, requestOrderStatusError, requestOrderStatusSuccess } from './actions';
import { OrderStatusState } from '../../types/OrderStatus';

const orderStatusReducer = createReducer<OrderStatusState>({
  orderStatus: null,
  loading: false,
  error: null,
}, {
  [requestOrderStatus.type]: (state) => ({
    ...state,
    orderStatus: null,
    loading: true,
    error: null,
  }),
  [requestOrderStatusSuccess.type]: (state, { payload }) => ({
    ...state,
    orderStatus: payload,
    loading: false,
    error: null,
  }),
  [requestOrderStatusError.type]: (state, { payload }) => ({
    ...state,
    orderStatus: null,
    loading: false,
    error: payload,
  }),
});

export default orderStatusReducer;
