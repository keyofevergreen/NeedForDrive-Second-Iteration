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
  const [lowerPriceSort, setLowerPriceSort] = useState<number | null>(0);
  const [higherPriceSort, setHigherPriceSort] = useState<number | null>(999999);
  const [sorts, setSorts] = useState<number[] | null>(null);
  const [page, setPage] = useState<number>(0);
  const [rates, loading, error] = useRates(sorts, page);

  const submitSort = (): void => {
    setSorts([lowerPriceSort, higherPriceSort]);
    setPage(0);
  };

  const resetSort = (): void => {
    setLowerPriceSort(0);
    setHigherPriceSort(999999);
    setSorts(null);
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
          onSubmitSort={submitSort}
          onResetSort={resetSort}
          isSorted={sorts !== null && !(lowerPriceSort === 0 && higherPriceSort === 999999)}
        >
          <ButtonGroup>
            <Form.Select
              size="sm"
              className="range-select"
              onChange={(e) => setLowerPriceSort(Number(e.target.value))}
              value={lowerPriceSort}
            >
              <option value="0">От 0 ₽</option>
              {higherPriceSort > 1000 && (
                <option value="1000">От 1000 ₽</option>
              )}
              {higherPriceSort > 3000 && (
                <option value="3000">От 3000 ₽</option>
              )}
              {higherPriceSort > 5000 && (
                <option value="5000">От 5000 ₽</option>
              )}
              {higherPriceSort > 10000 && (
                <option value="10000">От 10000 ₽</option>
              )}
            </Form.Select>
            <Form.Select
              size="sm"
              className="range-select"
              onChange={(e) => setHigherPriceSort(Number(e.target.value))}
              value={higherPriceSort}
            >
              <option value="99999999">До ∞</option>
              {lowerPriceSort < 5000 && (
                <option value="5000">До 5000 ₽</option>
              )}
              {lowerPriceSort < 10000 && (
                <option value="10000">До 10000 ₽</option>
              )}
              {lowerPriceSort < 25000 && (
                <option value="25000">До 25000 ₽</option>
              )}
              {lowerPriceSort < 55000 && (
                <option value="55000">До 55000 ₽</option>
              )}
              {lowerPriceSort < 300000 && (
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
                  <th />
                </tr>
              </thead>
              <tbody>
                {rates.data.map((rate) => (
                  <TableItem
                    key={rate.id}
                    columns={[rate.rateTypeId?.name, rate.rateTypeId?.unit, rate.price]}
                  />
                ))}
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
