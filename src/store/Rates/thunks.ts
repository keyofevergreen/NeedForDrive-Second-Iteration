import { ThunkResult } from '../../types/thunk';
import { requestRate, requestRateError, requestRateSuccess } from './actions';
import { addToErrorHandler } from '../ErrorProvider/actions';

export const fetchRates = (config: object): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestRate());
    const { data } = await services.table.getEntities('rate', config);
    dispatch(requestRateSuccess(data));
  } catch (error) {
    dispatch(requestRateError(error.response.status));
    dispatch(addToErrorHandler(error.response.status));
  }
};
