import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useOrder } from './hooks';
import { OrderSort } from '../../types/Order';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import OrderItem from './components/OrderItem/OrderItem';
import TableFilter from '../../components/TableFilter/TableFilter';
import OrderFilters from './components/OrderFilters/OrderFilters';
import Spin from '../../components/Spin/Spin';

const Order: React.FC = () => {
  const isResponsive = useResize(1, 1440);
  const [cityFilter, setCityFilter] = useState<string>('Все города');
  const [dateFilter, setDateFilter] = useState<string>('За все время');
  const [orderStatusFilter, setOrderStatusFilter] = useState<string>('Все заказы');
  const [isFullTankFilter, setFullTankFilter] = useState<boolean>(false);
  const [isNeedChildChairFilter, setNeedChildChairFilter] = useState<boolean>(false);
  const [isRightWheelFilter, setRightWheelFilter] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [filters, setFilters] = useState<OrderSort>({
    cityId: cityFilter,
    orderStatusId: orderStatusFilter,
    date: dateFilter,
    isFullTank: isFullTankFilter,
    isNeedChildChair: isNeedChildChairFilter,
    isRightWheel: isRightWheelFilter,
  });
  const [orders, ordersLoading] = useOrder(filters, page);

  const submitFilter = (): void => {
    setFilters({
      cityId: cityFilter,
      orderStatusId: orderStatusFilter,
      date: dateFilter,
      isFullTank: isFullTankFilter,
      isNeedChildChair: isNeedChildChairFilter,
      isRightWheel: isRightWheelFilter,
    });
    setPage(0);
  };

  const resetFilter = (): void => {
    setFilters({
      cityId: 'Все города',
      orderStatusId: 'Все заказы',
      date: 'За все время',
      isFullTank: false,
      isNeedChildChair: false,
      isRightWheel: false,
    });
    setCityFilter('Все города');
    setOrderStatusFilter('Все заказы');
    setDateFilter('За все время');
    setFullTankFilter(false);
    setNeedChildChairFilter(false);
    setRightWheelFilter(false);
    setPage(0);
  };

  return (
    <>
      <Helmet>
        <title>Need For Drive - Список заказов</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer
        title="Заказы"
        page={page}
        itemCount={orders?.count}
        onSetPage={setPage}
      >
        <TableFilter
          onSubmitFilter={submitFilter}
          onResetFilter={resetFilter}
          isFiltered={
            filters.cityId !== 'Все города' ||
            filters.orderStatusId !== 'Все заказы' ||
            filters.date !== 'За все время' ||
            filters.isFullTank !== false ||
            filters.isNeedChildChair !== false ||
            filters.isRightWheel !== false
          }
        >
          <OrderFilters
            dateFilter={dateFilter}
            setDateFilter={setDateFilter}
            cityFilter={cityFilter}
            setCityFilter={setCityFilter}
            orderStatusFilter={orderStatusFilter}
            setOrderStatusFilter={setOrderStatusFilter}
            setFullTankFilter={setFullTankFilter}
            isFullTankFilter={isFullTankFilter}
            setNeedChildChairFilter={setNeedChildChairFilter}
            isNeedChildChairFilter={isNeedChildChairFilter}
            setRightWheelFilter={setRightWheelFilter}
            isRightWheelFilter={isRightWheelFilter}
          />
        </TableFilter>
        <div className="table-container">
          {orders && !ordersLoading && (
            <Table
              hover
              borderless
              responsive={isResponsive}
              style={{ tableLayout: 'fixed' }}
            >
              <tbody>
                {orders && orders.data.map((order) => (
                  <OrderItem
                    key={order.id}
                    order={order}
                    filters={filters}
                    page={page}
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
    </>
  );
};

export default Order;
