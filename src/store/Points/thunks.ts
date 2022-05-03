import { ThunkResult } from '../../types/thunk';
import {
  requestPoint,
  requestPointError,
  requestPoints,
  requestPointsError,
  requestPointsSuccess,
  requestPointSuccess
} from './actions';
import { addToErrorHandler } from '../ErrorProvider/actions';

export const fetchPoints = (config): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestPoints());
    const { data } = await services.table.getEntities('point', config);
    dispatch(requestPointsSuccess(data));
  } catch (error) {
    dispatch(requestPointsError(error.response.status));
    dispatch(addToErrorHandler(error.response.status));
  }
};

export const fetchPoint = (pointId: string): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestPoint());
    const { data } = await services.table.getEntities('point', {}, pointId);
    dispatch(requestPointSuccess(data.data));
  } catch (error) {
    dispatch(requestPointError(error.response.status));
    dispatch(addToErrorHandler(error.response.status));
  }
};
