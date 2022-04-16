import React from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
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
      <div className="entity-header">
        <div className="entity-header__options">
          <Form.Select size="sm">
            <option>Все категории</option>
            <option>Эконом</option>
            <option>Эконом+</option>
          </Form.Select>
        </div>
        <div className="entity-header__buttons">
          <Button
            variant="danger"
            size="sm"
            type="button"
          >
            Сбросить
          </Button>
          <Button
            variant="primary"
            size="sm"
            type="button"
          >
            Применить
          </Button>
        </div>
      </div>
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
