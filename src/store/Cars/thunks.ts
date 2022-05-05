import { ThunkResult } from '../../types/thunk';
import {
  requestCar,
  requestCarError,
  requestCars,
  requestCarsError,
  requestCarsSuccess,
  requestCarSuccess,
} from './actions';
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

export const fetchCar = (id): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestCar());
    const { data } = await services.table.getEntities('car', {}, id);
    dispatch(requestCarSuccess(data.data));
  } catch (error) {
    dispatch(requestCarError(error.response.status));
    dispatch(addToErrorHandler(error.response.status));
  }
};
