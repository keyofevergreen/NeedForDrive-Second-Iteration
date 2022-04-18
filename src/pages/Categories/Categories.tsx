import React from 'react';
import { Form, Table } from 'react-bootstrap';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import TableSorting from '../../components/TableSorting/TableSorting';
import TableItem from '../../components/TableItem/TableItem';
import { Category } from '../../types/Category';

const categories: Category[] = [
  {
    name: 'Эконом',
    description: 'Экономные машины',
  },
  {
    name: 'Эконом+',
    description: 'Комфортные машины среднего класса',
  }
];

const Categories = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);

  return (
    <ContentContainer title="Категории">
      <TableSorting>
        <Form.Select size="sm">
          <option>Все категории</option>
          <option>Эконом</option>
          <option>Эконом+</option>
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
              <th>Категория</th>
              <th>Описание</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <TableItem
                key={category.id}
                columns={[category.name, category.description]}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </ContentContainer>
  );
};

export default Categories;
