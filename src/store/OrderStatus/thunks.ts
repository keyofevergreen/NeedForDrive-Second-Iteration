import { ThunkResult } from '../../types/thunk';
import {
  requestOrderStatus,
  requestOrderStatusError,
  requestOrderStatuses,
  requestOrderStatusesError,
  requestOrderStatusesSuccess,
  requestOrderStatusSuccess, setCanceledStatusId, setSubmittedStatusId,
} from './actions';
import { addToErrorHandler } from '../ErrorProvider/actions';

export const fetchOrderStatuses = (): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestOrderStatuses());
    const { data } = await services.table.getEntities('orderStatus', {});
    dispatch(requestOrderStatusesSuccess(data.data));
    const submitStatus = data.data.find((status) => status.name === 'Подтвержденные');
    const cancelStatus = data.data.find((status) => status.name === 'Отмененные');
    dispatch(setSubmittedStatusId(submitStatus.id));
    dispatch(setCanceledStatusId(cancelStatus.id));
  } catch (error) {
    dispatch(requestOrderStatusesError(error.response.status));
    dispatch(addToErrorHandler(error.response.status));
  }
};

export const fetchOrderStatus = (orderStatusId: string): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestOrderStatus());
    const { data } = await services.table.getEntities('orderStatus', {}, orderStatusId);
    dispatch(requestOrderStatusSuccess(data.data));
  } catch (error) {
    dispatch(requestOrderStatusError(error.response.status));
    dispatch(addToErrorHandler(error.response.status));
  }
};
