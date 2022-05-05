import React from 'react';
import { Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import TableItem from '../../components/TableItem/TableItem';
import Spin from '../../components/Spin/Spin';
import { useOrderStatuses, useSortedOrderStatus } from './hooks';
import AddTableItemLink from '../../components/AddTableItemLink/AddTableItemLink';

const OrderStatus = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);
  const [orderStatus, orderStatusLoading] = useOrderStatuses();
  const sortedOrderStatuses = useSortedOrderStatus(orderStatus);

  return (
    <>
      <Helmet>
        <title>Need For Drive - Статусы заказов</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Статусы заказов">
        <div className="table-container">
          <AddTableItemLink to="/edit/order-status" />
          {orderStatus && !orderStatusLoading && (
            <Table
              hover
              borderless
              responsive={isResponsive}
            >
              <thead>
                <tr>
                  <th>Название статуса</th>
                </tr>
              </thead>
              <tbody>
                {sortedOrderStatuses.map((status) => (
                  <TableItem
                    key={status.id}
                    id={status.id}
                    columns={[status.name]}
                    editPageLink="order-status"
                  />
                ))}
                {sortedOrderStatuses.length === 0 && (
                  <tr>
                    <td>
                      По вашему запросу ничего не найдено
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          )}
          {orderStatusLoading && (
            <Spin />
          )}
        </div>
      </ContentContainer>
    </>
  );
};

export default OrderStatus;
