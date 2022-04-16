import React from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import TableItem from '../../components/TableItem/TableItem';
import { Rate } from '../../types/Rates';

const rates: Rate[] = [
  {
    name: 'Месячный',
    unit: '30 дней',
    price: 24000,
    id: 1,
  },
  {
    name: 'Недельный',
    unit: '7 дней',
    price: 5000,
    id: 2,
  },
  {
    name: 'Поминутно',
    unit: 'минута',
    price: 15,
    id: 3,
  }
];

const Rates = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);

  return (
    <ContentContainer title="Тарифы">
      <div className="entity-header">
        <div className="entity-header__options">
          <Form.Select size="sm">
            <option>Все тарифы</option>
            <option>Месячный</option>
            <option>Недельный</option>
            <option>Поминутно</option>
          </Form.Select>
          <Form.Select size="sm">
            <option>Все Е.В.</option>
            <option>30 дней</option>
            <option>7 дней</option>
            <option>Минута</option>
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
              <th>Название</th>
              <th>Единица времени</th>
              <th>Стоимость, ₽</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rates.map((rate) => (
              <TableItem
                key={rate.id}
                columns={[rate.name, rate.unit, rate.price]}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </ContentContainer>
  );
};

export default Rates;
