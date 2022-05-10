import { OrderAxiosConfig } from '../../types/Order';

const createOrderAxiosConfig = (sorts, page): OrderAxiosConfig => {
  const { cityId, orderStatusId, date, isFullTank, isNeedChildChair, isRightWheel } = sorts;
  const config: OrderAxiosConfig = {
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

  return config;
};

export default createOrderAxiosConfig;
