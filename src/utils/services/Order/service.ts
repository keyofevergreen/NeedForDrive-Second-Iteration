import { AxiosResponse } from 'axios';
import { RateTypesAxiosConfig } from '../../../types/RateTypes';
import { OrderSort } from '../../../types/Order';
import instance from '../../../http';

export interface OrderServiceInterface {
  getOrders: (sorts: OrderSort, page: number) => Promise<AxiosResponse>,
}

const orderService = (): OrderServiceInterface => ({
  getOrders: async (sorts, page): Promise<AxiosResponse> => {
    const { cityId, orderStatusId, date, isFullTank, isNeedChildChair, isRightWheel } = sorts;
    const config: RateTypesAxiosConfig = {
      params: {
        page,
        limit: 5,
      },
    };
    config.params['sort[createdAt]'] = -1;

    if (cityId && cityId !== 'Все города') {
      config.params['cityId[id]'] = cityId;
    }

    if (date && date !== 'За все время') {
      config.params['createdAt[$gt]'] = date;
    }

    if (orderStatusId && orderStatusId !== 'Все заказы') {
      config.params['orderStatusId[id]'] = orderStatusId;
    }

    if (isFullTank) {
      config.params.isFullTank = true;
    }

    if (isNeedChildChair) {
      config.params.isNeedChildChair = true;
    }

    if (isRightWheel) {
      config.params.isRightWheel = true;
    }

    return instance.get('/db/order', config);
  },
});

export default orderService;
