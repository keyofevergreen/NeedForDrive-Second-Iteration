import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderStatuses } from '../../store/OrderStatus/thunks';
import { Dispatcher } from '../../types/store';
import { OrderStatus, OrderStatusState } from '../../types/OrderStatus';
import { SearchState } from '../../types/Search';
import { UploadedEntityState } from '../../types/Edit';

const statusOrderAlerts: string[] = [
  'Статус заказа сохранен',
  'Статус заказа создан',
  'Статус заказа удален',
];

export const useOrderStatuses = (): [OrderStatus[], boolean, number | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { orderStatus, loading, error } = useSelector<{
    orderStatus: OrderStatusState;
  }, OrderStatusState>((state) => state.orderStatus);

  const { successAlertMessage } = useSelector<{
    uploadedEntity: UploadedEntityState;
  }, UploadedEntityState>((state) => state.uploadedEntity);

  useEffect(() => {
    if (statusOrderAlerts.includes(successAlertMessage)) {
      dispatch(fetchOrderStatuses());
    }
  }, [successAlertMessage]);

  useEffect(() => {
    dispatch(fetchOrderStatuses());
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
