import React, { useState } from 'react';
import { ButtonGroup, Form, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import TableSorting from '../../components/TableSorting/TableSorting';
import TableItem from '../../components/TableItem/TableItem';
import Spin from '../../components/Spin/Spin';
import { useRates } from './hooks';

const Rates = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);
  const [lowerPriceFilter, setLowerPriceFilter] = useState<number | null>(0);
  const [higherPriceFilter, setHigherPriceFilter] = useState<number | null>(999999);
  const [filters, setFilters] = useState<number[] | null>(null);
  const [page, setPage] = useState<number>(0);
  const [rates, loading, error] = useRates(filters, page);

  const submitFilter = (): void => {
    setFilters([lowerPriceFilter, higherPriceFilter]);
    setPage(0);
  };

  const resetFilter = (): void => {
    setLowerPriceFilter(0);
    setHigherPriceFilter(999999);
    setFilters(null);
    setPage(0);
  };

  return (
    <>
      <Helmet>
        <title>Need For Drive - Тарифы</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Тарифы">
        <TableSorting
          onSubmitFilter={submitFilter}
          onResetFilter={resetFilter}
          isFiltered={filters !== null && !(lowerPriceFilter === 0 && higherPriceFilter === 999999)}
        >
          <ButtonGroup>
            <Form.Select
              size="sm"
              className="range-select"
              onChange={(e) => setLowerPriceFilter(Number(e.target.value))}
              value={lowerPriceFilter}
            >
              <option value="0">От 0 ₽</option>
              {higherPriceFilter > 1000 && (
                <option value="1000">От 1000 ₽</option>
              )}
              {higherPriceFilter > 3000 && (
                <option value="3000">От 3000 ₽</option>
              )}
              {higherPriceFilter > 5000 && (
                <option value="5000">От 5000 ₽</option>
              )}
              {higherPriceFilter > 10000 && (
                <option value="10000">От 10000 ₽</option>
              )}
            </Form.Select>
            <Form.Select
              size="sm"
              className="range-select"
              onChange={(e) => setHigherPriceFilter(Number(e.target.value))}
              value={higherPriceFilter}
            >
              <option value="99999999">До ∞</option>
              {lowerPriceFilter < 5000 && (
                <option value="5000">До 5000 ₽</option>
              )}
              {lowerPriceFilter < 10000 && (
                <option value="10000">До 10000 ₽</option>
              )}
              {lowerPriceFilter < 25000 && (
                <option value="25000">До 25000 ₽</option>
              )}
              {lowerPriceFilter < 55000 && (
                <option value="55000">До 55000 ₽</option>
              )}
              {lowerPriceFilter < 300000 && (
                <option value="300000">До 300000 ₽</option>
              )}
            </Form.Select>
          </ButtonGroup>
        </TableSorting>
        <div className="table-container">
          {rates && !loading && !error && (
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
                </tr>
              </thead>
              <tbody>
                {rates.data.map((rate) => (
                  <TableItem
                    key={rate.id}
                    columns={[rate.rateTypeId?.name, rate.rateTypeId?.unit, rate.price]}
                  />
                ))}
                {rates.data.length === 0 && (
                  <tr>
                    <td>
                      По вашему запросу ничего не найдено
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          )}
          {loading && (
            <Spin />
          )}
        </div>
      </ContentContainer>
    </>
  );
};

export default Rates;
