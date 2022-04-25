import React, { useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { getTime, startOfToday, subDays, subMonths } from 'date-fns';
import { useCities } from '../Cities/hooks';
import { useOrder } from './hooks';
import { useOrderStatus } from '../OrderStatus/hooks';
import { OrderSort } from '../../types/Order';
import ErrorProvider from '../../components/ErrorProvider/ErrorProvider';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import OrderItem from './components/OrderItem/OrderItem';
import TableSorting from '../../components/TableSorting/TableSorting';
import useResize from '../../hooks/useResize';
import Spin from '../../components/Spin/Spin';
import styles from './styles.module.scss';

const TODAY = startOfToday();
const LAST_WEEK = subDays(TODAY, 7);
const LAST_MONTH = subMonths(TODAY, 1);

const Order: React.FC = () => {
  const isResponsive = useResize(1, 1440);
  const [cities, citiesLoading, citiesError] = useCities();
  const [orderStatus, orderStatusLoading, orderStatusError] = useOrderStatus();
  const [citySort, setCitySort] = useState<string>('Все города');
  const [dateSort, setDateSort] = useState<string>('За все время');
  const [orderStatusSort, setOrderStatusSort] = useState<string>('Все заказы');
  const [isFullTankSort, setFullTankSort] = useState<boolean>(false);
  const [isNeedChildChairSort, setNeedChildChairSort] = useState<boolean>(false);
  const [isRightWheelSort, setRightWheelSort] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [sorts, setSorts] = useState<OrderSort>({
    cityId: citySort,
    orderStatusId: orderStatusSort,
    date: dateSort,
    isFullTank: isFullTankSort,
    isNeedChildChair: isNeedChildChairSort,
    isRightWheel: isRightWheelSort,
  });
  const [orders, ordersLoading, ordersError] = useOrder(sorts, page);

  const submitSort = (): void => {
    setSorts({
      cityId: citySort,
      orderStatusId: orderStatusSort,
      date: dateSort,
      isFullTank: isFullTankSort,
      isNeedChildChair: isNeedChildChairSort,
      isRightWheel: isRightWheelSort,
    });
    setPage(0);
  };

  const resetSort = (): void => {
    setSorts({
      cityId: 'Все города',
      orderStatusId: 'Все заказы',
      date: 'За все время',
      isFullTank: false,
      isNeedChildChair: false,
      isRightWheel: false,
      // lowerPrice: 0,
      // higherPrice: 9999999,
    });
    setCitySort('Все города');
    setOrderStatusSort('Все заказы');
    setDateSort('За все время');
    setFullTankSort(false);
    setNeedChildChairSort(false);
    setRightWheelSort(false);
    setPage(0);
  };

  return (
    <>
      <Helmet>
        <title>Need For Drive - Список заказов</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ErrorProvider errorStatus={[ordersError, citiesError, orderStatusError]}>
        <ContentContainer
          title="Заказы"
          page={page}
          itemCount={orders?.count}
          onSetPage={setPage}
        >
          <TableSorting
            onSubmitSort={submitSort}
            onResetSort={resetSort}
            isSorted={
              sorts.cityId !== 'Все города' ||
              sorts.orderStatusId !== 'Все заказы' ||
              sorts.date !== 'За все время' ||
              sorts.isFullTank !== false ||
              sorts.isNeedChildChair !== false ||
              sorts.isRightWheel !== false
            }
          >
            <Form.Select
              size="sm"
              value={dateSort}
              onChange={(e) => setDateSort(e.target.value)}
            >
              <option value="За все время">За все время</option>
              <option value={getTime(TODAY)}>За день</option>
              <option value={getTime(LAST_WEEK)}>За неделю</option>
              <option value={getTime(LAST_MONTH)}>За месяц</option>
            </Form.Select>
            <Form.Select
              size="sm"
              disabled={citiesLoading}
              value={citySort}
              onChange={(e) => setCitySort(e.target.value)}
            >
              <option value="Все города">
                Все города
              </option>
              {cities && cities.map((city) => (
                <option
                  value={city.id}
                  key={city.id}
                >
                  {city.name}
                </option>
              ))}
            </Form.Select>
            <Form.Select
              size="sm"
              disabled={orderStatusLoading}
              value={orderStatusSort}
              onChange={(e) => setOrderStatusSort(e.target.value)}
            >
              <option value="Все заказы">
                Все заказы
              </option>
              {orderStatus && orderStatus.map((status) => (
                <option
                  key={status.id}
                  value={status.id}
                >
                  {status.name}
                </option>
              ))}
            </Form.Select>
            <div className={styles['checkbox-wrap']}>
              <Form.Check
                type="checkbox"
                label="Полный бак"
                onChange={() => setFullTankSort(!isFullTankSort)}
                defaultChecked={isFullTankSort}
              />
              <Form.Check
                type="checkbox"
                label="Детское кресло"
                onChange={() => setNeedChildChairSort(!isNeedChildChairSort)}
                defaultChecked={isNeedChildChairSort}
              />
              <Form.Check
                type="checkbox"
                label="Правый руль"
                onChange={() => setRightWheelSort(!isRightWheelSort)}
                defaultChecked={isRightWheelSort}
              />
            </div>
          </TableSorting>
          <div className="table-container">
            {orders && !ordersLoading && (
              <Table
                hover
                borderless
                responsive={isResponsive}
                style={{ tableLayout: 'fixed' }}
              >
                <thead>
                  <tr>
                    <th className={styles['cols']} />
                    <th className={styles['cols']} />
                    <th className={styles['cols']} />
                    <th className={styles['cols']} />
                    <th className={styles['cols']} />
                  </tr>
                </thead>
                <tbody>
                  {orders && orders.data.map((order) => (
                    <OrderItem
                      key={order.id}
                      img={order.carId?.thumbnail?.path}
                      carName={order?.carId?.name}
                      city={order.cityId?.name}
                      orderStatusId={order?.orderStatusId?.name}
                      address={order.pointId?.address ? order.pointId?.address : 'улица не указана'}
                      dateFrom={order.dateFrom}
                      dateTo={order.dateTo}
                      color={order.color}
                      price={order.price}
                      isFullTank={order.isFullTank}
                      isNeedChildChair={order.isNeedChildChair}
                      isRightWheel={order.isRightWheel}
                    />
                  ))}
                  {orders && orders.data.length === 0 && (
                    <tr>
                      <td>
                        По вашему запросу ничего не найдено
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            )}
            {ordersLoading && (
              <Spin />
            )}
          </div>
        </ContentContainer>
      </ErrorProvider>
    </>
  );
};

export default Order;
