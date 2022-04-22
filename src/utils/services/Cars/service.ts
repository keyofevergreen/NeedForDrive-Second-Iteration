import { AxiosResponse } from 'axios';
import { CarsAxiosConfig, CarSort } from '../../../types/Cars';
import instance from '../../../http';

export interface CarsServiceInterface {
  getCars: (sorts?: CarSort, page?: number) => Promise<AxiosResponse>,
}

const carsService = (): CarsServiceInterface => ({
  getCars: async (sorts, page): Promise<AxiosResponse> => {
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
    return instance.get('/db/car', config);
  },
});

export default carsService;
