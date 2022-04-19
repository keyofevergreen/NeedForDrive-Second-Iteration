import React from 'react';
import { Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import OrderItem from './components/OrderItem/OrderItem';
import TableSorting from '../../components/TableSorting/TableSorting';
import styles from './styles.module.scss';
import { useOrder } from '../../store/Order/hooks';

const Order: React.FC = () => {
  const [orders, loading, error] = useOrder({ page: 1 });

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
          {orders && orders.data.map((order) => (
            <OrderItem
              key={order.id}
              img={order.carId.thumbnail.path}
              carName={order.carId.name}
              city={order.cityId.name}
              address={order.pointId.address}
              dateRange={`${order.dateFrom} - ${order.dateTo}`}
              color={order.color}
              price={order.price}
              isFullTank={order.isFullTank}
              isNeedChildChair={order.isNeedChildChair}
              isRightWheel={order.isRightWheel}
            />
          ))}
        </div>
      </ContentContainer>
    </>
  );
};

export default Order;
