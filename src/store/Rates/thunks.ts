import { ThunkResult } from '../../types/thunk';
import { requestRate, requestRateError, requestRateSuccess } from './actions';

export const fetchRates = (priceRange?: number[] | null, page?: number): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestRate());
    const { data } = await services.rates.getRates(priceRange, page);
    dispatch(requestRateSuccess(data));
  } catch (error) {
    dispatch(requestRateError(error.message));
  }
};
