import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import TableSorting from '../../components/TableSorting/TableSorting';
import TableItem from '../../components/TableItem/TableItem';
import { OrderStatusState } from '../../types/OrderStatus';

const OrderStatus = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);

  const { orderStatus, error, loading } = useSelector<{
    orderStatus: OrderStatusState;
  }, OrderStatusState>((state) => state.orderStatus);

  return (
    <>
      <Helmet>
        <title>Need For Drive - Статусы заказов</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Статусы заказов">
        <TableSorting>
          <Form.Select size="sm">
            <option>Все статусы</option>
            <option>Новые</option>
            <option>Подтвержденные</option>
          </Form.Select>
        </TableSorting>
        <div className="table-container">
          <Table
            hover
            borderless
            responsive={isResponsive}
          >
            <thead>
              <tr>
                <th>Название статуса</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {orderStatus && orderStatus.map((status) => (
                <TableItem
                  key={status.id}
                  columns={[status.name]}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </ContentContainer>
    </>
  );
};

export default OrderStatus;
