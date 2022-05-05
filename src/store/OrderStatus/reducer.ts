import { createReducer } from '@reduxjs/toolkit';
import {
  requestOrderStatus,
  requestOrderStatusError,
  requestOrderStatuses,
  requestOrderStatusesError,
  requestOrderStatusesSuccess,
  requestOrderStatusSuccess, setCanceledStatusId, setSubmittedStatusId,
} from './actions';
import { OrderStatusState } from '../../types/OrderStatus';

const orderStatusReducer = createReducer<OrderStatusState>({
  orderStatus: null,
  loading: false,
  error: null,
  orderStatusById: null,
  orderStatusByIdLoading: false,
  orderStatusByIdError: null,
  submitStatusId: null,
  cancelStatusId: null,
}, {
  [requestOrderStatuses.type]: (state) => ({
    ...state,
    orderStatus: null,
    loading: true,
    error: null,
  }),
  [requestOrderStatusesSuccess.type]: (state, { payload }) => ({
    ...state,
    orderStatus: payload,
    loading: false,
    error: null,
  }),
  [requestOrderStatusesError.type]: (state, { payload }) => ({
    ...state,
    orderStatus: null,
    loading: false,
    error: payload,
  }),
  [requestOrderStatus.type]: (state) => ({
    ...state,
    orderStatusById: null,
    orderStatusByIdLoading: true,
    orderStatusByIdError: null,
  }),
  [requestOrderStatusSuccess.type]: (state, { payload }) => ({
    ...state,
    orderStatusById: payload,
    orderStatusByIdLoading: false,
    orderStatusByIdError: null,
  }),
  [requestOrderStatusError.type]: (state, { payload }) => ({
    ...state,
    orderStatusById: null,
    orderStatusByIdLoading: false,
    orderStatusByIdError: payload,
  }),
  [setSubmittedStatusId.type]: (state, { payload }) => ({
    ...state,
    submitStatusId: payload,
  }),
  [setCanceledStatusId.type]: (state, { payload }) => ({
    ...state,
    cancelStatusId: payload,
  }),
});

export default orderStatusReducer;
