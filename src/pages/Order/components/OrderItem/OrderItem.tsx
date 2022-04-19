import React from 'react';
import { Form } from 'react-bootstrap';
import SettingButton from '../../../../components/SettingButton/SettingButton';
import styles from './styles.module.scss';
import { imageOnErrorHandler } from '../../../../utils/helpers/imageOnErrorHandler';

interface IOrderItemProps {
  img: string,
  carName: string,
  city: string,
  address: string,
  dateRange: string,
  color: string,
  price: number,
  isFullTank: boolean,
  isNeedChildChair: boolean,
  isRightWheel: boolean,
}

const OrderItem = (props: IOrderItemProps): React.ReactElement => {
  const { img, carName, city, address, dateRange, color, price, isFullTank, isNeedChildChair, isRightWheel } = props;

  return (
    <div className={styles['order-item']}>
      <div className={styles['order-item__details']}>
        <img
          src={img}
          alt={carName}
          onError={imageOnErrorHandler}
          crossOrigin="anonymous"
          referrerPolicy="origin"
        />
        <div>
          <span>
            <strong>
              {`${carName.toUpperCase()} `}
            </strong>
            в
            <strong>
              {` ${city}`}
            </strong>,
            {` ${address}`}
          </span>
          <span>
            {dateRange}
          </span>
          <span>
            Цвет:
            <strong>
              {` ${color}`}
            </strong>
          </span>
        </div>
      </div>
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
      <span className={styles['order-item__price']}>
        {`${price} ₽`}
      </span>
      <SettingButton className={styles['order-item__actions']} />
    </div>
  );
};

export default OrderItem;
