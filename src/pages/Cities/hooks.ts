import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../../store/Cities/thunks';
import { Dispatcher } from '../../types/store';
import { CitiesState, City } from '../../types/Cities';
import { SearchState } from '../../types/Search';
import { UploadedEntityState } from '../../types/Edit';

const citiesAlerts: string[] = [
  'Статус заказа сохранен',
  'Статус заказа создан',
  'Статус заказа удален',
];

export const useCities = (): [City[], boolean, number | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { cities, loading, error } = useSelector<{
    cities: CitiesState;
  }, CitiesState>((state) => state.cities);

  const { successAlertMessage } = useSelector<{
    uploadedEntity: UploadedEntityState;
  }, UploadedEntityState>((state) => state.uploadedEntity);

  useEffect(() => {
    if (citiesAlerts.includes(successAlertMessage)) {
      dispatch(fetchCities());
    }
  }, [successAlertMessage]);

  useEffect(() => {
    dispatch(fetchCities());
  }, []);

  return [cities, loading, error];
};

export const useSearchSortedCities = (cities: City[]): City[] => {
  const { searchSort } = useSelector<{
    search: SearchState;
  }, SearchState>((state) => state.search);

  if (cities) {
    return cities.filter((city) => {
      return city.name
        .toLowerCase()
        .includes(
          searchSort.toLowerCase()
        );
    });
  }
  return [];
};
