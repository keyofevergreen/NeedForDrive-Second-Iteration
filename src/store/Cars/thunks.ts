import { ThunkResult } from '../../types/thunk';
import { requestCars, requestCarsError, requestCarsSuccess } from './actions';
import { CarSort } from '../../types/Cars';

export const fetchCars = (sorts?: CarSort, page?: number): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestCars());
    const { data } = await services.cars.getCars(sorts, page);
    dispatch(requestCarsSuccess(data));
  } catch (error) {
    dispatch(requestCarsError(error.message));
  }
};
