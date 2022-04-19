import { ThunkResult } from '../../types/thunk';
import { requestPoints, requestPointsError, requestPointsSuccess } from './actions';

export const fetchPoints = (): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestPoints());
    const { data } = await services.table.getPoints();
    dispatch(requestPointsSuccess(data));
  } catch (error) {
    dispatch(requestPointsError(error.message));
  }
};
