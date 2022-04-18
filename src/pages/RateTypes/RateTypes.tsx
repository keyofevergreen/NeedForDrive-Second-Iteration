import React from 'react';
import { Form, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import TableSorting from '../../components/TableSorting/TableSorting';
import TableItem from '../../components/TableItem/TableItem';
import { Rate } from '../../types/Rates';

const rateTypes: Rate[] = [
  {
    name: 'Месячный',
    unit: '30 дней',
    id: 1,
  },
  {
    name: 'Недельный',
    unit: '7 дней',
    id: 2,
  },
  {
    name: 'Поминутно',
    unit: 'минута',
    id: 3,
  }
];

const RateTypes = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);

  return (
    <>
      <Helmet>
        <title>Need For Drive - Типы тарифов</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Типы тарифов">
        <TableSorting>
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
        </TableSorting>
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
                <th />
              </tr>
            </thead>
            <tbody>
              {rateTypes.map((rate) => (
                <TableItem
                  key={rate.id}
                  columns={[rate.name, rate.unit]}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </ContentContainer>
    </>
  );
};

export default RateTypes;
