import { useEffect } from 'react';
import { UseFormSetValue } from 'react-hook-form/dist/types/form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCar } from '../../../../store/Cars/thunks';
import { Dispatcher } from '../../../../types/store';
import { Car, CarsState } from '../../../../types/Cars';
import { CarForm } from '../../../../types/Edit';
import fetchLocalImage from '../../../../utils/helpers/fetchLocalImage';

export const useCarById = (carId: string, setValue: UseFormSetValue<CarForm>): [Car, boolean] => {
  const dispatch = useDispatch<Dispatcher>();
  const { carById, carByIdLoading } = useSelector<{
    cars: CarsState;
  }, CarsState>((state) => state.cars);

  const setValuesToForm = async (car): Promise<void> => {
    const carImage = await fetchLocalImage(car.thumbnail.path, car.thumbnail.originalname);
    await setValue('thumbnail', carImage, { shouldDirty: true });
    setValue('name', car?.name, { shouldDirty: true });
    setValue('categoryId', car?.categoryId?.id, { shouldDirty: true });
    setValue('description', car?.description, { shouldDirty: true });
    setValue('colors', car?.colors, { shouldDirty: true });
    setValue('name', car?.name, { shouldDirty: true });
    setValue('number', car?.number?.toUpperCase(), { shouldDirty: true });
    setValue('priceMin', car?.priceMin.toString(), { shouldDirty: true });
    setValue('priceMax', car?.priceMax.toString(), { shouldDirty: true });
    setValue('tank', car?.tank || '', { shouldDirty: true });
  };

  useEffect(() => {
    if (carId) {
      dispatch(fetchCar(carId));
    }
  }, [carId]);

  useEffect(() => {
    if (carById && carId) {
      setValuesToForm(carById);
    }
  }, [carById]);

  return [carById, carByIdLoading];
};
