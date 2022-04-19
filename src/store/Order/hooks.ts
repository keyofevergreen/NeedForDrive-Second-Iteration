import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrder } from './thunks';
import { Dispatcher } from '../../types/store';
import { IFetchOrderProps, OrderResponse, OrderState } from '../../types/Order';

export const useOrder = ({ page }: IFetchOrderProps): [OrderResponse, boolean, string | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { orders, error, loading } = useSelector<{
    order: OrderState;
  }, OrderState>((state) => state.order);

  useEffect(() => {
    dispatch(fetchOrder({ page }));
  }, []);

  return [orders, loading, error];
};
