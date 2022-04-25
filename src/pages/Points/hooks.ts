import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatcher } from '../../types/store';
import { PointResponse, PointsState } from '../../types/Points';
import { fetchPoints } from '../../store/Points/thunks';

export const usePoints = (cityId: string | null, page: number): [PointResponse, boolean, number | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { points, error, loading } = useSelector<{
    points: PointsState;
  }, PointsState>((state) => state.points);

  useEffect(() => {
    dispatch(fetchPoints(cityId, page));
  }, [cityId, page]);

  return [points, loading, error];
};
