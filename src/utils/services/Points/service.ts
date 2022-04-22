import { AxiosResponse } from 'axios';
import { PointsAxiosConfig } from '../../../types/Points';
import instance from '../../../http';

export interface PointsServiceInterface {
  getPoints: (cityId: string | null, page: number) => Promise<AxiosResponse>,
}

const pointsService = (): PointsServiceInterface => ({
  getPoints: async (cityId, page): Promise<AxiosResponse> => {
    const config: PointsAxiosConfig = {
      params: {
        page,
        limit: 10,
      },
    };
    if (cityId && cityId !== 'Все города') {
      config.params['cityId[id]'] = cityId;
    }
    return instance.get('/db/point', config);
  },
});

export default pointsService;
