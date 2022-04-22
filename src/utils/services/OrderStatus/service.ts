import { AxiosResponse } from 'axios';
import instance from '../../../http';

export interface OrderStatusServiceInterface {
  getOrderStatus: () => Promise<AxiosResponse>,
}

const orderStatusService = (): OrderStatusServiceInterface => ({
  getOrderStatus: async (): Promise<AxiosResponse> => {
    return instance.get('/db/orderStatus');
  },
});

export default orderStatusService;
