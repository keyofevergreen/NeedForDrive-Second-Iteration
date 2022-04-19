import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import TableSorting from '../../components/TableSorting/TableSorting';
import TableItem from '../../components/TableItem/TableItem';
import { RateState } from '../../types/Rates';

const Rates = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);

  const { rates, error, loading } = useSelector<{
    rates: RateState;
  }, RateState>((state) => state.rates);

  return (
    <>
      <Helmet>
        <title>Need For Drive - Тарифы</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Тарифы">
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
                <th>Стоимость, ₽</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {rates && rates.map((rate) => (
                <TableItem
                  key={rate.id}
                  columns={[rate.rateTypeId?.name, rate.rateTypeId?.unit, rate.price]}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </ContentContainer>
    </>
  );
};

export default Rates;
