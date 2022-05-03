import { ThunkResult } from '../../types/thunk';
import {
  requestRateType, requestRateTypeError,
  requestRateTypes,
  requestRateTypesError,
  requestRateTypesSuccess,
  requestRateTypeSuccess
} from './actions';
import { addToErrorHandler } from '../ErrorProvider/actions';

export const fetchRateTypes = (config: object): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestRateTypes());
    const { data } = await services.table.getEntities('rateType', config);
    dispatch(requestRateTypesSuccess(data));
  } catch (error) {
    dispatch(requestRateTypesError(error.response.status));
    dispatch(addToErrorHandler(error.response.status));
  }
};

export const fetchRateType = (rateTypeId: string): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestRateType());
    const { data } = await services.table.getEntities('rateType', {}, rateTypeId);
    dispatch(requestRateTypeSuccess(data.data));
  } catch (error) {
    dispatch(requestRateTypeError(error.response.status));
    dispatch(addToErrorHandler(error.response.status));
  }
};
