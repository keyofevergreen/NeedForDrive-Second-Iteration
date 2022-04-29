import React from 'react';
import { Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useCities, useSearchSortedCities } from './hooks';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import TableItem from '../../components/TableItem/TableItem';
import Spin from '../../components/Spin/Spin';
import AddTableItemLink from '../../components/AddTableItemLink/AddTableItemLink';

const Cities = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);
  const [cities, citiesLoading] = useCities();
  const sortedCities = useSearchSortedCities(cities);

  return (
    <>
      <Helmet>
        <title>Need For Drive - Города</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Города">
        <div className="table-container">
          <AddTableItemLink to="/edit/city" />
          {cities && !citiesLoading && (
            <Table
              hover
              borderless
              responsive={isResponsive}
            >
              <thead>
                <tr>
                  <th>Название города</th>
                </tr>
              </thead>
              <tbody>
                {sortedCities.map((city) => (
                  <TableItem
                    key={city.id}
                    columns={[city.name]}
                  />
                ))}
                {sortedCities.length === 0 && (
                  <tr>
                    <td>
                      По вашему запросу ничего не найдено
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          )}
          {citiesLoading && (
            <Spin />
          )}
        </div>
      </ContentContainer>
    </>
  );
};

export default Cities;
