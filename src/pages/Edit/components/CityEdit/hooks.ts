import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UseFormSetValue } from 'react-hook-form/dist/types/form';
import { CityForm } from '../../../../types/Edit';
import { Dispatcher } from '../../../../types/store';
import { CitiesState } from '../../../../types/Cities';
import { fetchCity } from '../../../../store/Cities/thunks';

export const useCityById = (cityId: string, setValue: UseFormSetValue<CityForm>): boolean => {
  const dispatch = useDispatch<Dispatcher>();
  const { cityById, cityByIdLoading } = useSelector<{
    cities: CitiesState;
  }, CitiesState>((state) => state.cities);

  const setValuesToForm = async (city): Promise<void> => {
    setValue('name', city.name, { shouldDirty: true });
  };

  useEffect(() => {
    if (cityId) {
      dispatch(fetchCity(cityId));
    }
  }, [cityId]);

  useEffect(() => {
    if (cityById && cityId) {
      setValuesToForm(cityById);
    }
  }, [cityById]);

  return cityByIdLoading;
};
