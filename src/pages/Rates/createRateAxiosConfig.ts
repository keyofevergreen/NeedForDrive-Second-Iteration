import { RateAxiosConfig } from '../../types/Rates';

const createRateAxiosConfig = (priceRange, page): RateAxiosConfig => {
  const config: RateAxiosConfig = {
    params: {
      page,
      limit: 10,
    },
  };
  if (priceRange) {
    const [lowerPrice, higherPrice] = priceRange;
    config.params['price[$gt]'] = lowerPrice;
    config.params['price[$lt]'] = higherPrice;
  }

  return config;
};

export default createRateAxiosConfig;
