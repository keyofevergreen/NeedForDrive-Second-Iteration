import { ThunkResult } from '../../types/thunk';
import { requestCars, requestCarsError, requestCarsSuccess } from './actions';

export const fetchCars = (): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestCars());
    const { data } = await services.table.getCars();
    dispatch(requestCarsSuccess(data));
  } catch (error) {
    dispatch(requestCarsError(error.message));
  }
};
