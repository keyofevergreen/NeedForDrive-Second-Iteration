import React from 'react';
import { Form, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import CarItem from './components/CarItem/CarItem';
import useResize from '../../hooks/useResize';
import TableSorting from '../../components/TableSorting/TableSorting';
import { useCars } from '../../store/Cars/hooks';

const Cars = (): React.ReactElement => {
  const [cars, carsLoading, carsError] = useCars();
  const isResponsive = useResize(1, 1024);

  return (
    <>
      <Helmet>
        <title>Need For Drive - Список авто</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Список авто">
        <TableSorting>
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
        </TableSorting>
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
              {cars && cars.data.map((car) => (
                <CarItem
                  key={car.id}
                  name={car.name}
                  category={car.categoryId.name}
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
    </>
  );
};

export default Cars;
