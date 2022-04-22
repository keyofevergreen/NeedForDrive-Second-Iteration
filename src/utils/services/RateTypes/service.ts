import { AxiosResponse } from 'axios';
import { RateTypesAxiosConfig } from '../../../types/RateTypes';
import instance from '../../../http';

export interface RateTypesInterface {
  getRateTypes: (name?: string | null, page?: number | null) => Promise<AxiosResponse>,
}

const rateTypesService = (): RateTypesInterface => ({
  getRateTypes: async (name, page): Promise<AxiosResponse> => {
    const config: RateTypesAxiosConfig = {
      params: {
        page,
        limit: 10,
      },
    };
    config.params['sort[createdAt]'] = -1;

    if (name && name !== 'Все тарифы') {
      config.params.name = name;
    }

    return instance.get('/db/rateType', config);
  },
});

export default rateTypesService;
