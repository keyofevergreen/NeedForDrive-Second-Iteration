import { ThunkResult } from '../../types/thunk';
import {
  requestRate,
  requestRateError,
  requestRates,
  requestRatesError,
  requestRatesSuccess,
  requestRateSuccess
} from './actions';
import { addToErrorHandler } from '../ErrorProvider/actions';

export const fetchRates = (config: object): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestRates());
    const { data } = await services.table.getEntities('rate', config);
    dispatch(requestRatesSuccess(data));
  } catch (error) {
    dispatch(requestRatesError(error.response.status));
    dispatch(addToErrorHandler(error.response.status));
  }
};

export const fetchRate = (rateId): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestRate());
    const { data } = await services.table.getEntities('rate', {}, rateId);
    dispatch(requestRateSuccess(data.data));
  } catch (error) {
    dispatch(requestRateError(error.response.status));
    dispatch(addToErrorHandler(error.response.status));
  }
};
