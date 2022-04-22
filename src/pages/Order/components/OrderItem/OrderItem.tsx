import React from 'react';
import { Form } from 'react-bootstrap';
import { format, toDate } from 'date-fns';
import { imageOnErrorHandler } from '../../../../utils/helpers/imageOnErrorHandler';
import SettingButton from '../../../../components/SettingButton/SettingButton';
import styles from './styles.module.scss';

interface IOrderItemProps {
  img: string,
  carName: string,
  city: string,
  address: string,
  dateFrom: number,
  dateTo: number,
  orderStatusId: string,
  color: string,
  price: number,
  isFullTank: boolean,
  isNeedChildChair: boolean,
  isRightWheel: boolean,
}

const OrderItem = (props: IOrderItemProps): React.ReactElement => {
  const { img, carName, city, address, dateFrom, dateTo, color, price, isFullTank, isNeedChildChair, isRightWheel, orderStatusId } = props;

  return (
    <tr>
      <td>
        <img
          className={styles['order-item__img']}
          src={img}
          alt={carName}
          onError={imageOnErrorHandler}
          crossOrigin="anonymous"
          referrerPolicy="origin"
        />
      </td>
      <td>
        <div className={styles['order-item__details']}>
          <span>
            <strong>
              {`${carName ? carName.toUpperCase() : 'Машина не указана'} `}
            </strong>
            в
            <strong>
              {` ${city}`}
            </strong>,
            {` ${address}`}
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
              {` ${color}`}
            </strong>
          </span>
        </div>
      </td>
      <td>
        <div className={styles['order-item__options']}>
          <Form.Check
            type="checkbox"
            id="checkbox-1"
            label="Полный бак"
            defaultChecked={isFullTank}
            disabled
          />
          <Form.Check
            type="checkbox"
            id="checkbox-1"
            label="Детское кресло"
            defaultChecked={isNeedChildChair}
            disabled
          />
          <Form.Check
            type="checkbox"
            id="checkbox-1"
            label="Правый руль"
            defaultChecked={isRightWheel}
            disabled
          />
        </div>
      </td>
      <td>
        <span className={styles['order-item__price']}>
          {`${price} ₽`}
        </span>
      </td>
      <td>
        {orderStatusId}
      </td>
      <td>
        <SettingButton className={styles['order-item__actions']} />
      </td>
    </tr>
  );
};

export default OrderItem;
