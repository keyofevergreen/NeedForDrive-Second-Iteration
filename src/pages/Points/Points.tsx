import React, { useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { usePoints } from './hooks';
import { useCities } from '../Cities/hooks';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import TableFilter from '../../components/TableFilter/TableFilter';
import TableItem from '../../components/TableItem/TableItem';
import Spin from '../../components/Spin/Spin';
import AddTableItemLink from '../../components/AddTableItemLink/AddTableItemLink';

const Points = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);
  const [cities, citiesLoading] = useCities();
  const [page, setPage] = useState<number>(0);
  const [cityFilter, setCityFilter] = useState<string | null>('Все города');
  const [filters, setFilters] = useState<string | null>('Все города');
  const [points, pointsLoading] = usePoints(filters, page);

  const submitFilter = (): void => {
    setFilters(cityFilter);
    setPage(0);
  };

  const resetFilter = (): void => {
    setFilters(null);
    setCityFilter('Все города');
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
        <TableFilter
          onSubmitFilter={submitFilter}
          onResetFilter={resetFilter}
          isFiltered={filters && filters !== 'Все города'}
        >
          <Form.Select
            size="sm"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            disabled={citiesLoading}
          >
            <option value="Все города">Все города</option>
            {cities && cities.map((city) => (
              <option key={city.id} value={city.id}>{city.name}</option>
            ))}
          </Form.Select>
        </TableFilter>
        <div className="table-container">
          <AddTableItemLink to="/edit/point" />
          {points && !pointsLoading && (
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
                    id={point.id}
                    editPageLink="point"
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
          {pointsLoading && (
            <Spin />
          )}
        </div>
      </ContentContainer>
    </>
  );
};

export default Points;
