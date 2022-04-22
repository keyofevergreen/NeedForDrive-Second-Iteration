import { AxiosResponse } from 'axios';
import instance from '../../../http';

export interface CitiesServiceInterface {
  getCities: () => Promise<AxiosResponse>,
}

const citiesService = (): CitiesServiceInterface => ({
  getCities: async (): Promise<AxiosResponse> => {
    return instance.get('/db/city');
  },
});

export default citiesService;
