import { ThunkResult } from '../../types/thunk';
import { requestCars, requestCarsError, requestCarsSuccess } from './actions';
import { CarsAxiosConfig } from '../../types/Cars';
import { addToErrorHandler } from '../ErrorProvider/actions';

export const fetchCars = (config: CarsAxiosConfig): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestCars());
    const { data } = await services.table.getEntities('car', config);
    dispatch(requestCarsSuccess(data));
  } catch (error) {
    dispatch(requestCarsError(error.response.status));
    dispatch(addToErrorHandler(error.response.status));
  }
};
