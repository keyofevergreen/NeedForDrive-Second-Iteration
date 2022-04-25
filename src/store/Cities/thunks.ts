import { ThunkResult } from '../../types/thunk';
import { requestCities, requestCitiesError, requestCitiesSuccess } from './actions';

export const fetchCities = (): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestCities());
    const { data } = await services.cities.getCities();
    dispatch(requestCitiesSuccess(data.data));
  } catch (error) {
    dispatch(requestCitiesError(error.response.status));
  }
};
