import { AxiosResponse } from 'axios';
import { RateAxiosConfig } from '../../../types/Rates';
import instance from '../../../http';

export interface RatesServiceInterface {
  getRates: (priceRange?: number[] | null, page?: number) => Promise<AxiosResponse>,
}

const ratesService = (): RatesServiceInterface => ({
  getRates: async (priceRange, page): Promise<AxiosResponse> => {
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
    return instance.get('/db/rate', config);
  },
});

export default ratesService;
