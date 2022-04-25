import React, { useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import TableSorting from '../../components/TableSorting/TableSorting';
import TableItem from '../../components/TableItem/TableItem';
import Spin from '../../components/Spin/Spin';
import { useRateTypes } from './hooks';
import ErrorProvider from '../../components/ErrorProvider/ErrorProvider';

const RateTypes = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);
  const [nameSort, setNameSort] = useState<string | null>('Все тарифы');
  const [page, setPage] = useState<number>(0);
  const [sorts, setSorts] = useState<string | null>(nameSort);
  const [rateTypes, loading, rateTypesError] = useRateTypes(sorts, page);

  const submitSort = (): void => {
    setSorts(nameSort);
  };

  const resetSort = (): void => {
    setSorts('Все тарифы');
    setNameSort('Все тарифы');
    setPage(0);
  };

  return (
    <>
      <Helmet>
        <title>Need For Drive - Типы тарифов</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ErrorProvider errorStatus={[rateTypesError]}>
        <ContentContainer
          title="Типы тарифов"
          page={page}
          itemCount={rateTypes?.count}
          onSetPage={setPage}
        >
          <TableSorting
            onSubmitSort={submitSort}
            onResetSort={resetSort}
            isSorted={sorts !== 'Все тарифы'}
          >
            <Form.Select
              size="sm"
              value={nameSort}
              onChange={(e) => setNameSort(e.target.value)}
            >
              <option value="Все тарифы">Все тарифы</option>
              <option value="Поминутно">Поминутно</option>
              <option value="Суточный">Суточный</option>
              <option value="Недельный">Недельный</option>
              <option value="Недельный (Акция!)">Недельный (Акция!)</option>
              <option value="Месячный">Месячный</option>
              <option value="3 месяца">3 Месяца</option>
              <option value="Годовой">Годовой</option>
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
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {rateTypes && rateTypes.data.map((rate) => (
                    <TableItem
                      key={rate.id}
                      columns={[rate.name, rate.unit]}
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
      </ErrorProvider>
    </>
  );
};

export default RateTypes;
