import React from 'react';
import { Form, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import TableItem from '../../components/TableItem/TableItem';
import TableSorting from '../../components/TableSorting/TableSorting';
import { CitiesState } from '../../types/Cities';

const Cities = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);

  const { cities, error, loading } = useSelector<{
    cities: CitiesState;
  }, CitiesState>((state) => state.cities);

  return (
    <>
      <Helmet>
        <title>Need For Drive - Города</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Города">
        <TableSorting>
          <Form.Select size="sm">
            <option>Все города</option>
            <option>Санкт-Петербург</option>
            <option>Москва</option>
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
                <th>Название статуса</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cities && cities.map((city) => (
                <TableItem
                  key={city.id}
                  columns={[city.name]}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </ContentContainer>
    </>
  );
};

export default Cities;
