import { AxiosResponse } from 'axios';
import instance from '../../../http';

export interface CategoryServiceInterface {
  getCategory: () => Promise<AxiosResponse>,
}

const categoryService = (): CategoryServiceInterface => ({
  getCategory: async (): Promise<AxiosResponse> => {
    return instance.get('/db/category');
  },
});

export default categoryService;
