import React from 'react';
import { Form } from 'react-bootstrap';
import ActionButtonGroup from '../../../../components/ActionsButtonGroup/ActionButtonGroup';
import styles from './styles.module.scss';

type Options = {
  fullTank: boolean
  childSeat: boolean,
  rightWheel: boolean,
};

interface IOrderItemProps {
  img: string,
  carName: string,
  city: string,
  address: string,
  dateRange: string,
  color: string,
  price: string,
  options: Options,
}

const OrderItem = (props: IOrderItemProps): React.ReactElement => {
  const { img, carName, city, address, dateRange, color, price, options } = props;

  return (
    <div className={styles['order-item']}>
      <div className={styles['order-item__info']}>
        <div className={styles['order-item__details']}>
          <img src={img} alt={carName} />
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
            defaultChecked={options.fullTank}
            disabled
          />
          <Form.Check
            type="checkbox"
            id="checkbox-1"
            label="Детское кресло"
            defaultChecked={options.childSeat}
            disabled
          />
          <Form.Check
            type="checkbox"
            id="checkbox-1"
            label="Правый руль"
            defaultChecked={options.rightWheel}
            disabled
          />
        </div>
        <span className={styles['order-item__price']}>
          {`${price} ₽`}
        </span>
        <ActionButtonGroup />
      </div>
    </div>
  );
};

export default OrderItem;
