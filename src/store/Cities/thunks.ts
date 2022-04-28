import { ThunkResult } from '../../types/thunk';
import { requestCities, requestCitiesError, requestCitiesSuccess } from './actions';
import { addToErrorHandler } from '../ErrorProvider/actions';

export const fetchCities = (): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestCities());
    const { data } = await services.table.getEntities('city', {});
    dispatch(requestCitiesSuccess(data.data));
  } catch (error) {
    dispatch(requestCitiesError(error.response.status));
    dispatch(addToErrorHandler(error.response.status));
  }
};
