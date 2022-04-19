import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import TableSorting from '../../components/TableSorting/TableSorting';
import TableItem from '../../components/TableItem/TableItem';
import { PointsState } from '../../types/Points';

const Points = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);

  const { points, error, loading } = useSelector<{
    points: PointsState;
  }, PointsState>((state) => state.points);

  return (
    <>
      <Helmet>
        <title>Need For Drive - Пункты выдачи</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Пункты выдачи">
        <TableSorting>
          <Form.Select size="sm">
            <option>Все города</option>
            <option>Санкт-Петербург</option>
            <option>Ульяновск</option>
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
                <th>Пункт выдачи</th>
                <th>Адрес</th>
                <th>Город</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {points && points.data.map((point) => (
                <TableItem
                  columns={[
                    point.name,
                    point.address,
                    point.cityId?.name || 'Не указан',
                  ]}
                  key={point.id}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </ContentContainer>
    </>
  );
};

export default Points;
