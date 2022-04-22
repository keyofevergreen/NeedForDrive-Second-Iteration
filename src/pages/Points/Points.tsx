import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import TableSorting from '../../components/TableSorting/TableSorting';
import TableItem from '../../components/TableItem/TableItem';
import Spin from '../../components/Spin/Spin';
import { usePoints } from './hooks';
import { CitiesState } from '../../types/Cities';

const Points = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);
  const { cities } = useSelector<{
    cities: CitiesState;
  }, CitiesState>((state) => state.cities);
  const [page, setPage] = useState<number>(0);
  const [citySort, setCitySort] = useState<string | null>('Все города');
  const [sorts, setSorts] = useState<string | null>('Все города');
  const [points, loading, error] = usePoints(sorts, page);

  const submitSort = (): void => {
    setSorts(citySort);
    setPage(0);
  };

  const resetSort = (): void => {
    setSorts(null);
    setCitySort('Все города');
    setPage(0);
  };

  return (
    <>
      <Helmet>
        <title>Need For Drive - Пункты выдачи</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer
        title="Пункты выдачи"
        page={page}
        itemCount={points?.count}
        onSetPage={setPage}
      >
        <TableSorting
          onSubmitSort={submitSort}
          onResetSort={resetSort}
          isSorted={sorts && sorts !== 'Все города'}
        >
          <Form.Select
            size="sm"
            value={citySort}
            onChange={(e) => setCitySort(e.target.value)}
          >
            <option value="Все города">Все города</option>
            {cities && cities.map((city) => (
              <option key={city.id} value={city.id}>{city.name}</option>
            ))}
          </Form.Select>
        </TableSorting>
        <div className="table-container">
          {points && !loading && !error && (
            <Table
              hover
              borderless
              responsive={isResponsive}
            >
              <thead>
                <tr>
                  <th>Пункт выдачи</th>
                  <th>Адрес</th>
                  <th>Город</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {points.data.map((point) => (
                  <TableItem
                    columns={[
                      point.name,
                      point.address,
                      point.cityId?.name || 'Не указан',
                    ]}
                    key={point.id}
                  />
                ))}
                {points.data.length === 0 && (
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

export default Points;
