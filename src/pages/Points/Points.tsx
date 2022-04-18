import React from 'react';
import { Form, Table } from 'react-bootstrap';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import TableSorting from '../../components/TableSorting/TableSorting';
import TableItem from '../../components/TableItem/TableItem';
import { Point } from '../../types/Points';

const points: Point[] = [
  {
    name: 'Торговый центр Джуниор',
    address: 'Улица Пушкина 24',
    city: 'Санкт-Петербург',
    id: 1,
  },
  {
    name: 'Академия №666',
    address: 'Проспект Сеньоров-разработчиков 67',
    city: 'Ульяновск',
    id: 2,
  },
  {
    name: 'Симбирсофтово',
    address: 'поселок Симбирсофтово',
    city: 'Нижне-Симбирсофтово',
    id: 3,
  }
];

const Points = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);

  return (
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
            {points.map((point) => (
              <TableItem
                columns={[
                  point.name,
                  point.address,
                  point.city,
                ]}
                key={point.id}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </ContentContainer>
  );
};

export default Points;
