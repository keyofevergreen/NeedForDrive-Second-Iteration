import React from 'react';
import { Form } from 'react-bootstrap';
import { format, toDate } from 'date-fns';
import { imageOnErrorHandler } from '../../../../utils/helpers/imageOnErrorHandler';
import { Order, OrderSort } from '../../../../types/Order';
import { Checkbox } from '../../../../types/Filter';
import styles from './styles.module.scss';
import OrderItemStatusButtons from '../OrderItemStatusButtons/OrderItemStatusButtons';

interface IOrderItemProps {
  order: Order,
  filters: OrderSort,
  page: number,
}

const OrderItem = ({ order, filters, page }: IOrderItemProps): React.ReactElement => {
  const {
    carId,
    cityId,
    pointId,
    dateFrom,
    dateTo,
    color,
    price,
    isFullTank,
    isNeedChildChair,
    isRightWheel,
    orderStatusId
  } = order;
  const checkboxes: Checkbox[] = [
    {
      label: 'Полный бак',
      value: isFullTank,
    },
    {
      label: 'Детское кресло',
      value: isNeedChildChair,
    },
    {
      label: 'Правый руль',
      value: isRightWheel,
    },
  ];

  return (
    <tr>
      <td className={styles['cols']}>
        <img
          className={styles['order-item__img']}
          src={carId?.thumbnail?.path}
          alt={carId?.name}
          onError={imageOnErrorHandler}
          crossOrigin="anonymous"
          referrerPolicy="origin"
        />
      </td>
      <td className={styles['cols']}>
        <div className={styles['order-item__details']}>
          <span>
            <strong>
              {`${carId?.name ? carId?.name.toUpperCase() : 'Машина не указана'} `}
            </strong>
            в
            <strong>
              {` ${cityId?.name}`}
            </strong>,
            {` ${pointId?.address ? pointId?.address : 'улица не указана'}`}
          </span>
          <span>
            {
              `${dateFrom ? format(toDate(dateFrom), 'dd.MM.yyyy HH:mm') : 'Не указано'}
              —
              ${dateTo ? format(toDate(dateTo), 'dd.MM.yyyy HH:mm') : 'Не указано'}`
            }
          </span>
          <span className={styles['order-item__colors']}>
            Цвет:
            <strong>
              {color ? color : 'Не указано'}
            </strong>
          </span>
        </div>
      </td>
      <td className={styles['cols']}>
        <div className={styles['order-item__options']}>
          {checkboxes.map((checkbox, index) => (
            <Form.Check
              type="checkbox"
              key={checkbox.label}
              id={`checkbox-${index}`}
              label={checkbox.label}
              defaultChecked={checkbox.value}
              disabled
            />
          ))}
        </div>
      </td>
      <td className={styles['cols']}>
        <span className={styles['order-item__price']}>
          {price ? `${price} ₽` : 'Не указано'}
        </span>
      </td>
      <td className={styles['cols']}>
        {orderStatusId?.name}
      </td>
      <td className={styles['cols']}>
        <OrderItemStatusButtons
          currentOrderStatus={orderStatusId}
          filters={filters}
          page={page}
          order={order}
        />
      </td>
    </tr>
  );
};

export default OrderItem;
