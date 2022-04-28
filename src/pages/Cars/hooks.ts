import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../store/Cars/thunks';
import { Dispatcher } from '../../types/store';
import { CarResponse, CarsAxiosConfig, CarSort, CarsState } from '../../types/Cars';

export const useCars = (sorts?: CarSort, page?: number): [CarResponse, boolean, number | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { cars, loading, error } = useSelector<{
    cars: CarsState;
  }, CarsState>((state) => state.cars);

  useEffect(() => {
    const { categoryId, tank, lowerPrice, higherPrice } = sorts;
    const config: CarsAxiosConfig = {
      params: {
        page,
        limit: 10,
      },
    };
    config.params['priceMin[$gt]'] = lowerPrice;
    config.params['priceMax[$lt]'] = higherPrice;

    if (categoryId && categoryId !== 'Все категории') {
      config.params['categoryId[id]'] = categoryId;
    }
    if (tank && tank !== 'Любой запас топлива') {
      if (tank === '100') {
        config.params.tank = tank;
      } else {
        config.params['tank[$gt]'] = tank;
      }
    }
    dispatch(fetchCars(config));
  }, [sorts, page]);

  return [cars, loading, error];
};
