import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrder } from '../../store/Order/thunks';
import { Dispatcher } from '../../types/store';
import { OrderResponse, OrderSort, OrderState } from '../../types/Order';
import { RateTypesAxiosConfig } from '../../types/RateTypes';

export const useOrder = (sorts: OrderSort, page: number): [OrderResponse, boolean, number | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { orders, error, loading } = useSelector<{
    order: OrderState;
  }, OrderState>((state) => state.order);

  useEffect(() => {
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

    dispatch(fetchOrder(config));
  }, [sorts, page]);

  return [orders, loading, error];
};
