import { ThunkResult } from '../../types/thunk';
import { requestRateTypes, requestRateTypesError, requestRateTypesSuccess } from './actions';

export const fetchRateTypes = (name?: string | null, page?: number): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestRateTypes());
    const { data } = await services.rateTypes.getRateTypes(name, page);
    dispatch(requestRateTypesSuccess(data));
  } catch (error) {
    dispatch(requestRateTypesError(error.response.status));
  }
};
