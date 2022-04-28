import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderStatus } from '../../store/OrderStatus/thunks';
import { Dispatcher } from '../../types/store';
import { OrderStatus, OrderStatusState } from '../../types/OrderStatus';
import { SearchState } from '../../types/Search';

export const useOrderStatus = (): [OrderStatus[], boolean, string | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { orderStatus, loading, error } = useSelector<{
    orderStatus: OrderStatusState;
  }, OrderStatusState>((state) => state.orderStatus);

  useEffect(() => {
    dispatch(fetchOrderStatus());
  }, []);

  return [orderStatus, loading, error];
};

export const useSortedOrderStatus = (orderStatuses: OrderStatus[]): OrderStatus[] => {
  const { searchSort } = useSelector<{
    search: SearchState;
  }, SearchState>((state) => state.search);

  if (orderStatuses) {
    return orderStatuses.filter((orderStatus) => {
      return orderStatus.name
        .toLowerCase()
        .includes(
          searchSort.toLowerCase()
        );
    });
  }
  return [];
};
