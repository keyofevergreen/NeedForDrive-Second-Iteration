import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UseFormSetValue } from 'react-hook-form/dist/types/form';
import { PointForm } from '../../../../types/Edit';
import { Dispatcher } from '../../../../types/store';
import { PointsState } from '../../../../types/Points';
import { fetchPoint } from '../../../../store/Points/thunks';

export const usePointsById = (pointId: string, setValue: UseFormSetValue<PointForm>): boolean => {
  const dispatch = useDispatch<Dispatcher>();
  const { pointById, pointByIdLoading } = useSelector<{
    points: PointsState;
  }, PointsState>((state) => state.points);

  const setValuesToForm = async (orderStatus): Promise<void> => {
    setValue('name', orderStatus.name, { shouldDirty: true });
    setValue('address', orderStatus.address, { shouldDirty: true });
    setValue('cityId', orderStatus?.cityId?.id || 'Выберите город', { shouldDirty: true });
  };

  useEffect(() => {
    if (pointId) {
      dispatch(fetchPoint(pointId));
    }
  }, [pointId]);

  useEffect(() => {
    if (pointById && pointId) {
      setValuesToForm(pointById);
    }
  }, [pointById]);

  return pointByIdLoading;
};
