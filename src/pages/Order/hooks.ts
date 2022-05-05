import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrder } from '../../store/Order/thunks';
import { Dispatcher } from '../../types/store';
import { OrderResponse, OrderSort, OrderState } from '../../types/Order';
import getAxiosConfig from './getAxiosConfig';

export const useOrder = (sorts: OrderSort, page: number): [OrderResponse, boolean, number | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { orders, error, loading } = useSelector<{
    order: OrderState;
  }, OrderState>((state) => state.order);

  useEffect(() => {
    const config = getAxiosConfig(sorts, page);
    dispatch(fetchOrder(config));
  }, [sorts, page]);

  return [orders, loading, error];
};
