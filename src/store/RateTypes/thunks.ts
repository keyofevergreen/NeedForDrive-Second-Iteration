import { ThunkResult } from '../../types/thunk';
import { requestRateTypes, requestRateTypesError, requestRateTypesSuccess } from './actions';

export const fetchRateTypes = (): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestRateTypes());
    const { data } = await services.table.getRateTypes();
    dispatch(requestRateTypesSuccess(data));
  } catch (error) {
    dispatch(requestRateTypesError(error.message));
  }
};
