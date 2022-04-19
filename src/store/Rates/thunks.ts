import { ThunkResult } from '../../types/thunk';
import { requestRate, requestRateError, requestRateSuccess } from './actions';

export const fetchRates = (): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestRate());
    const { data } = await services.table.getRates();
    dispatch(requestRateSuccess(data.data));
  } catch (error) {
    dispatch(requestRateError(error.message));
  }
};
