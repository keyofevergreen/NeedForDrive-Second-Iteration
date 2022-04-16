import React from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { Car } from '../../types/CarsList';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import CarItem from './components/CarItem/CarItem';
import useResize from '../../hooks/useResize';

const cars: Car[] = [
  {
    name: 'Ford Focus',
    category: 'Спорт',
    colors: ['Белый', 'Синий', 'Черный'],
    priceMin: 3000,
    priceMax: 12000,
    tank: 100,
    number: 'RUS215ER',
    id: 1,
  },
  {
    name: 'Ford Mustang',
    category: 'Спорт',
    colors: ['Белый', 'Желтый', 'Зеленый'],
    priceMin: 8000,
    priceMax: 43000,
    tank: 80,
    number: 'RUS777UR',
    id: 2,
  }
];

const Cars = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);

  return (
    <ContentContainer title="Автопарк">
      <div className="entity-header">
        <div className="entity-header__options">
          <Form.Select size="sm">
            <option>Все машины</option>
            <option>Ford</option>
            <option>Porsche</option>
          </Form.Select>
          <Form.Select size="sm">
            <option>Все категории</option>
            <option>Эконом</option>
            <option>Эконом+</option>
            <option>Спорт</option>
          </Form.Select>
          <Form.Select size="sm">
            <option>Любой запас топлива</option>
            <option>Заправленные</option>
            <option>Незаправленные</option>
          </Form.Select>
          <Form.Select size="sm">
            <option>Любой цвет</option>
            <option>Красные</option>
            <option>Синие</option>
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
              <th>Модель</th>
              <th>Категория</th>
              <th>Цвета</th>
              <th>Стоимость аренды, ₽</th>
              <th>Топливо</th>
              <th>Номер</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <CarItem
                key={car.id}
                name={car.name}
                category={car.category}
                colors={car.colors}
                priceMin={car.priceMin}
                priceMax={car.priceMax}
                tank={car.tank}
                number={car.number}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </ContentContainer>
  );
};

export default Cars;
