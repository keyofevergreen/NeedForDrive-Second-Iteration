import { createReducer } from '@reduxjs/toolkit';
import { OrderState } from '../../types/Order';
import { requestOrder, requestOrderError, requestOrderSuccess } from './actions';

const orderReducer = createReducer<OrderState>({
  orders: null,
  loading: false,
  error: null,
}, {
  [requestOrder.type]: (state) => ({
    ...state,
    orders: null,
    loading: true,
    error: null,
  }),
  [requestOrderSuccess.type]: (state, { payload }) => ({
    ...state,
    orders: payload,
    loading: false,
    error: null,
  }),
  [requestOrderError.type]: (state, { payload }) => ({
    ...state,
    orders: null,
    loading: false,
    error: payload,
  }),
});

export default orderReducer;
