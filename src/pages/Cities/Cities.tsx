import React from 'react';
import { Form, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import TableItem from '../../components/TableItem/TableItem';
import TableSorting from '../../components/TableSorting/TableSorting';

const citiesList: string[] = [
  'Санкт-Петербург',
  'Ульяновск',
  'Мурманск',
  'Самара'
];

const Cities = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);

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
            <option>Все статусы</option>
            <option>Новые</option>
            <option>Подтвержденные</option>
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
              {citiesList.map((city) => (
                <TableItem
                  key={city}
                  columns={[city]}
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
