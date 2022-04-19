import { AxiosResponse } from 'axios';
import instance from '../../../http';
import { IFetchOrderProps } from '../../../types/Order';

export interface TableServiceInterface {
  getCars: () => Promise<AxiosResponse>,
  getCities: () => Promise<AxiosResponse>,
  getRates: () => Promise<AxiosResponse>,
  getRateTypes: () => Promise<AxiosResponse>,
  getOrders: (page: IFetchOrderProps) => Promise<AxiosResponse>,
  getOrderStatus: () => Promise<AxiosResponse>,
  getPoints: () => Promise<AxiosResponse>,
  getCategory: () => Promise<AxiosResponse>,
}

const tableService = (): TableServiceInterface => ({
  getCars: async (): Promise<AxiosResponse> => {
    return instance.get('/db/car');
  },
  getRates: async (): Promise<AxiosResponse> => {
    return instance.get('/db/rate');
  },
  getRateTypes: async (): Promise<AxiosResponse> => {
    return instance.get('/db/rateType?sort[createdAt]=-1');
  },
  getCities: async (): Promise<AxiosResponse> => {
    return instance.get('/db/city');
  },
  getOrders: async (page: IFetchOrderProps): Promise<AxiosResponse> => {
    return instance.get('/db/order?sort[createdAt]=-1', {
      params: {
        page,
        limit: 5,
      }
    });
  },
  getOrderStatus: async (): Promise<AxiosResponse> => {
    return instance.get('/db/orderStatus');
  },
  getPoints: async (): Promise<AxiosResponse> => {
    return instance.get('/db/point');
  },
  getCategory: async (): Promise<AxiosResponse> => {
    return instance.get('/db/category');
  },
});

export default tableService;
