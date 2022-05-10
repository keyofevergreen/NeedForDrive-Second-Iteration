import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { OrderStatus, OrderStatusState } from '../../../../types/OrderStatus';
import CheckMark from '../../../../assets/CheckMark.component.svg';
import CloseIcon from '../../../../assets/CloseIcon.component.svg';
import { Order, OrderSort } from '../../../../types/Order';
import { Dispatcher } from '../../../../types/store';
import { editEntity } from '../../../../store/Edit/thunks';
import { fetchOrder } from '../../../../store/Order/thunks';
import createOrderAxiosConfig from '../../createOrderAxiosConfig';
import { UploadedEntityState } from '../../../../types/Edit';

const cx = classNames;

interface IOrderItemStatusButtons {
  currentOrderStatus: OrderStatus,
  filters: OrderSort,
  page: number,
  order: Order,
}

const OrderItemStatusButtons = ({ currentOrderStatus, filters, page, order }: IOrderItemStatusButtons): React.ReactElement => {
  const { id, carId, cityId, pointId, orderStatusId } = order;
  const dispatch = useDispatch<Dispatcher>();

  const { orderStatus, loading, submitStatusId, cancelStatusId } = useSelector<{
    orderStatus: OrderStatusState;
  }, OrderStatusState>((state) => state.orderStatus);
  const { successAlertMessage } = useSelector<{
    uploadedEntity: UploadedEntityState;
  }, UploadedEntityState>((state) => state.uploadedEntity);

  const [editMode, setEditMode] = useState<boolean>(false);
  const [orderStatusValue, setOrderStatus] = useState<string | null>(orderStatusId?.id || 'Выберите статус заказа');

  const onSubmitStatus = (): void => {
    dispatch(editEntity(
      { orderStatusId: submitStatusId },
      'order',
      id,
      `Заказ №${id?.substr(0, 6)}, ${carId?.name} в ${cityId?.name} на ${pointId?.address} сохранен`
    ));
  };

  const onCancelStatus = (): void => {
    dispatch(editEntity(
      { orderStatusId: cancelStatusId },
      'order',
      id,
      `Заказ №${id?.substr(0, 6)}, ${carId?.name} в ${cityId?.name} на ${pointId?.address} отменен`
    ));
  };

  const onEditStatus = (): void => {
    if (orderStatusValue !== 'Выберите статус заказа') {
      dispatch(editEntity(
        { orderStatusId: orderStatusValue },
        'order',
        id,
        `Статус заказа №${id?.substr(0, 6)}, ${carId?.name} в ${cityId?.name} на ${pointId?.address} изменен`
      ));
    }
  };

  useEffect(() => {
    if (successAlertMessage) {
      const config = createOrderAxiosConfig(filters, page);
      dispatch(fetchOrder(config));
    }
  }, [successAlertMessage]);

  return (
    <ButtonGroup className={cx('order-item-status-edit-btn', { 'edit-mode': editMode })}>
      {!editMode && currentOrderStatus?.name === 'Новые' && (
        <>
          <Button size="sm" variant="outline-primary" onClick={() => onSubmitStatus()}>Подтвердить</Button>
          <Button size="sm" variant="outline-danger" onClick={() => onCancelStatus()}>Отменить</Button>
        </>
      )}
      {!editMode && currentOrderStatus?.name !== 'Новые' && (
        <>
          {currentOrderStatus?.name !== 'Отмененные' && (
            <Button size="sm" variant="outline-danger" onClick={() => onCancelStatus()}>Отменить</Button>
          )}
          <Button size="sm" variant="outline-primary" onClick={() => setEditMode(true)}>Изменить</Button>
        </>
      )}
      {editMode && currentOrderStatus?.name !== 'Новые' && (
        <>
          <Form.Select
            size="sm"
            value={orderStatusValue}
            onChange={(e) => setOrderStatus(e.target.value)}
            disabled={loading}
            className="status-edit-select"
          >
            {orderStatusValue === 'Выберите статус заказа' && (
              <option value="Выберите статус заказа" disabled>Выберите статус</option>
            )}
            {orderStatus && orderStatus.map((status) => (
              <option key={status.id} value={status.id}>{status.name}</option>
            ))}
          </Form.Select>
          <Button
            size="sm"
            variant="outline-primary"
            className="submit-btn"
            disabled={orderStatusValue === orderStatusId?.id}
            onClick={() => onEditStatus()}
          >
            <CheckMark />
          </Button>
          <Button size="sm" variant="outline-danger" className="cancel-btn" onClick={() => setEditMode(false)}>
            <CloseIcon />
          </Button>
        </>
      )}
    </ButtonGroup>
  );
};

export default OrderItemStatusButtons;
