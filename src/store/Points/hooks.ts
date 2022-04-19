import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatcher } from '../../types/store';
import { PointsState } from '../../types/Points';
import { fetchPoints } from './thunks';

export const usePoints = (): [boolean, string | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { error, loading } = useSelector<{
    points: PointsState;
  }, PointsState>((state) => state.points);

  useEffect(() => {
    dispatch(fetchPoints());
  }, []);

  return [loading, error];
};
