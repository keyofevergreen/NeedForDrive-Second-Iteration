import { ThunkResult } from '../../types/thunk';
import { requestPoints, requestPointsError, requestPointsSuccess } from './actions';

export const fetchPoints = (cityId: string | null, page: number): ThunkResult => async (dispatch, getState, { services }) => {
  try {
    dispatch(requestPoints());
    const { data } = await services.points.getPoints(cityId, page);
    dispatch(requestPointsSuccess(data));
  } catch (error) {
    dispatch(requestPointsError(error.response.status));
  }
};
