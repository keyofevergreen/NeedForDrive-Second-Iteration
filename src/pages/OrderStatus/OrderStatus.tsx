import React from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import TableItem from '../../components/TableItem/TableItem';

const statusList: string[] = [
  'Новые',
  'Подтвержденные',
  'Отмененные',
  'Временные'
];

const OrderStatus = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);

  return (
    <ContentContainer title="Статусы заказов">
      <div className="entity-header">
        <div className="entity-header__options">
          <Form.Select size="sm">
            <option>Все статусы</option>
            <option>Новые</option>
            <option>Подтвержденные</option>
          </Form.Select>
        </div>
        <div className="entity-header__buttons">
          <Button
            variant="danger"
            size="sm"
            type="button"
          >
            Сбросить
          </Button>
          <Button
            variant="primary"
            size="sm"
            type="button"
          >
            Применить
          </Button>
        </div>
      </div>
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
            {statusList.map((status) => (
              <TableItem
                key={status}
                columns={[status]}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </ContentContainer>
  );
};

export default OrderStatus;
