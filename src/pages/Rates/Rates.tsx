import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useRates } from './hooks';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import TableSorting from '../../components/TableSorting/TableSorting';
import TableItem from '../../components/TableItem/TableItem';
import FilterByPriceRange from '../../components/FilterByPriceRange/FilterByPriceRange';
import Spin from '../../components/Spin/Spin';

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
          <FilterByPriceRange
            lowerPriceFilter={lowerPriceFilter}
            setLowerPriceFilter={setLowerPriceFilter}
            higherPriceFilter={higherPriceFilter}
            setHigherPriceFilter={setHigherPriceFilter}
          />
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
