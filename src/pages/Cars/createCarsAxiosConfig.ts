import { CarsAxiosConfig } from '../../types/Cars';

const createCarsAxiosConfig = (sorts, page): CarsAxiosConfig => {
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
  return config;
};

export default createCarsAxiosConfig;
