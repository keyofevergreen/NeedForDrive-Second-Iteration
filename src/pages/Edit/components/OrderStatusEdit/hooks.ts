import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UseFormSetValue } from 'react-hook-form/dist/types/form';
import { Dispatcher } from '../../../../types/store';
import { OrderStatusState } from '../../../../types/OrderStatus';
import { fetchOrderStatus } from '../../../../store/OrderStatus/thunks';
import { OrderStatusForm } from '../../../../types/Edit';

export const useOrderStatusById = (orderStatusId: string, setValue: UseFormSetValue<OrderStatusForm>): boolean => {
  const dispatch = useDispatch<Dispatcher>();
  const { orderStatusById, orderStatusByIdLoading } = useSelector<{
    orderStatus: OrderStatusState;
  }, OrderStatusState>((state) => state.orderStatus);

  const setValuesToForm = async (orderStatus): Promise<void> => {
    setValue('name', orderStatus.name, { shouldDirty: true });
  };

  useEffect(() => {
    if (orderStatusId) {
      dispatch(fetchOrderStatus(orderStatusId));
    }
  }, [orderStatusId]);

  useEffect(() => {
    if (orderStatusById && orderStatusId) {
      setValuesToForm(orderStatusById);
    }
  }, [orderStatusById]);

  return orderStatusByIdLoading;
};
