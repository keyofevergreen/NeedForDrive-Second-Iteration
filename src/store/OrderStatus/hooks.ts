import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderStatus } from './thunks';
import { Dispatcher } from '../../types/store';
import { OrderStatusState } from '../../types/OrderStatus';

export const useOrderStatus = (): [boolean, string | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { error, loading } = useSelector<{
    orderStatus: OrderStatusState;
  }, OrderStatusState>((state) => state.orderStatus);

  useEffect(() => {
    dispatch(fetchOrderStatus());
  }, []);

  return [loading, error];
};
