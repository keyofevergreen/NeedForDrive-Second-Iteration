import { ThunkResult } from '../../types/thunk';
import { requestPoints, requestPointsError, requestPointsSuccess } from './actions';

export const fetchPoints = (config): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestPoints());
    const { data } = await services.table.getEntities('point', config);
    dispatch(requestPointsSuccess(data));
  } catch (error) {
    dispatch(requestPointsError(error.message));
  }
};
