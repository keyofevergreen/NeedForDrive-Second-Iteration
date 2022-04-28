import React, { useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import TableSorting from '../../components/TableSorting/TableSorting';
import TableItem from '../../components/TableItem/TableItem';
import Spin from '../../components/Spin/Spin';
import { useRateTypes } from './hooks';

const filterOptions: string[] = [
  'Все тарифы',
  'Поминутно',
  'Суточный',
  'Недельный',
  'Недельный (Акция!)',
  'Месячный',
  '3 месяца',
  'Годовой'
];

const RateTypes = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);
  const [nameFilter, setNameFilter] = useState<string | null>('Все тарифы');
  const [page, setPage] = useState<number>(0);
  const [filters, setFilters] = useState<string | null>(nameFilter);
  const [rateTypes, loading] = useRateTypes(filters, page);

  const submitFilter = (): void => {
    setFilters(nameFilter);
  };

  const resetFilter = (): void => {
    setFilters('Все тарифы');
    setNameFilter('Все тарифы');
    setPage(0);
  };

  return (
    <>
      <Helmet>
        <title>Need For Drive - Типы тарифов</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer
        title="Типы тарифов"
        page={page}
        itemCount={rateTypes?.count}
        onSetPage={setPage}
      >
        <TableSorting
          onSubmitFilter={submitFilter}
          onResetFilter={resetFilter}
          isFiltered={filters !== 'Все тарифы'}
        >
          <Form.Select
            size="sm"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          >
            {filterOptions.map((option) => (
              <option value={option} key={option}>{option}</option>
            ))}
          </Form.Select>
        </TableSorting>
        <div className="table-container">
          {rateTypes && !loading && (
            <Table
              hover
              borderless
              responsive={isResponsive}
            >
              <thead>
                <tr>
                  <th>Название</th>
                </tr>
              </thead>
              <tbody>
                {rateTypes && rateTypes.data.map((rate) => (
                  <TableItem
                    key={rate.id}
                    columns={[rate.name, rate.unit]}
                  />
                ))}
                {rateTypes && rateTypes.data.length === 0 && (
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

export default RateTypes;
