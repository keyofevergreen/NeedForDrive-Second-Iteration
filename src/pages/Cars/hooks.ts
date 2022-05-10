import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../store/Cars/thunks';
import { Dispatcher } from '../../types/store';
import { CarResponse, CarSort, CarsState } from '../../types/Cars';
import { UploadedEntityState } from '../../types/Edit';
import createCarsAxiosConfig from './createCarsAxiosConfig';

export const useCars = (sorts?: CarSort, page?: number): [CarResponse, boolean, number | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { cars, loading, error } = useSelector<{
    cars: CarsState;
  }, CarsState>((state) => state.cars);
  const { uploadedEntity } = useSelector<{
    uploadedEntity: UploadedEntityState;
  }, UploadedEntityState>((state) => state.uploadedEntity);
  const [currentSorts, setCurrentSorts] = useState<CarSort>(sorts);
  const [currentPage, setCurrentPage] = useState<number>(page);

  useEffect(() => {
    const config = createCarsAxiosConfig(sorts, page);
    dispatch(fetchCars(config));
  }, [uploadedEntity]);

  useEffect(() => {
    if (JSON.stringify(currentSorts) !== JSON.stringify(sorts) || currentPage !== page) {
      const config = createCarsAxiosConfig(sorts, page);
      dispatch(fetchCars(config));
      setCurrentSorts(sorts);
      setCurrentPage(page);
    }
  }, [sorts, page, uploadedEntity]);

  return [cars, loading, error];
};
