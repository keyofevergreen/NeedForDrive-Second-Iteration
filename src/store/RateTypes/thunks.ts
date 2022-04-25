import { ThunkResult } from '../../types/thunk';
import { requestRateTypes, requestRateTypesError, requestRateTypesSuccess } from './actions';

export const fetchRateTypes = (config: object): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestRateTypes());
    const { data } = await services.table.getEntities('rateType', config);
    dispatch(requestRateTypesSuccess(data));
  } catch (error) {
    dispatch(requestRateTypesError(error.response.status));
  }
};
