import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrder } from '../../store/Order/thunks';
import { Dispatcher } from '../../types/store';
import { OrderResponse, OrderSort, OrderState } from '../../types/Order';
import createOrderAxiosConfig from './createOrderAxiosConfig';

export const useOrder = (sorts: OrderSort, page: number): [OrderResponse, boolean, number | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { orders, error, loading } = useSelector<{
    order: OrderState;
  }, OrderState>((state) => state.order);
  const [currentSorts, setCurrentSorts] = useState<OrderSort>(sorts);
  const [currentPage, setCurrentPage] = useState<number>(page);

  useEffect(() => {
    const config = createOrderAxiosConfig(sorts, page);
    dispatch(fetchOrder(config));
  }, []);

  useEffect(() => {
    if (JSON.stringify(currentSorts) !== JSON.stringify(sorts) || currentPage !== page) {
      const config = createOrderAxiosConfig(sorts, page);
      dispatch(fetchOrder(config));
      setCurrentSorts(sorts);
      setCurrentPage(page);
    }
  }, [sorts, page]);

  return [orders, loading, error];
};
