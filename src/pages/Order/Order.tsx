import React from 'react';
import { Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import OrderItem from './components/OrderItem/OrderItem';
import TableSorting from '../../components/TableSorting/TableSorting';
import carImg from '../../assets/carMock.png';
import styles from './styles.module.scss';

const Order: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Need For Drive - Список заказов</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Заказы">
        <TableSorting>
          <Form.Select size="sm">
            <option>За день</option>
            <option>За неделю</option>
            <option>За месяц</option>
          </Form.Select>
          <Form.Select size="sm">
            <option>Elantra</option>
            <option>Ford</option>
            <option>Porsche</option>
          </Form.Select>
          <Form.Select size="sm">
            <option>Ульяновск</option>
            <option>Санкт-Петербург</option>
            <option>Тольятти</option>
          </Form.Select>
          <Form.Select size="sm">
            <option>В процессе</option>
            <option>Временные</option>
            <option>Закрытые</option>
          </Form.Select>
        </TableSorting>
        <div className={styles['order-list']}>
          <OrderItem
            img={carImg}
            carName="Elantra"
            city="Ульяновск"
            address="Нариманова 42"
            dateRange="12.06.2019 12:00 — 13.06.2019 12:00"
            color="Голубой"
            price="4300"
            options={
              {
                fullTank: true,
                childSeat: false,
                rightWheel: false,
              }
            }
          />
          <OrderItem
            img={carImg}
            carName="Elantra"
            city="Ульяновск"
            address="Нариманова 42"
            dateRange="12.06.2019 12:00 — 13.06.2019 12:00"
            color="Голубой"
            price="4300"
            options={
              {
                fullTank: true,
                childSeat: false,
                rightWheel: false,
              }
            }
          />
        </div>
      </ContentContainer>
    </>
  );
};

export default Order;
