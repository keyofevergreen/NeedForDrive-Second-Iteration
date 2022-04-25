import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatcher } from '../../types/store';
import { PointResponse, PointsAxiosConfig, PointsState } from '../../types/Points';
import { fetchPoints } from '../../store/Points/thunks';

export const usePoints = (cityId: string | null, page: number): [PointResponse, boolean, number | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { points, error, loading } = useSelector<{
    points: PointsState;
  }, PointsState>((state) => state.points);

  useEffect(() => {
    const config: PointsAxiosConfig = {
      params: {
        page,
        limit: 10,
      },
    };
    if (cityId && cityId !== 'Все города') {
      config.params['cityId[id]'] = cityId;
    }
    dispatch(fetchPoints(config));
  }, [cityId, page]);

  return [points, loading, error];
};
