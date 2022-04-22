import React, { useState } from 'react';
import { ButtonGroup, Form, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useCars } from './hooks';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import CarItem from './components/CarItem/CarItem';
import Spin from '../../components/Spin/Spin';
import TableSorting from '../../components/TableSorting/TableSorting';
import { useCategory } from '../Categories/hooks';
import { CarSort } from '../../types/Cars';

const Cars = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);

  const [categories, categoriesLoading] = useCategory();
  const [categorySort, setCategorySort] = useState<string>('Все категории');
  const [tankSort, setTankSort] = useState<string>('Любой запас топлива');
  const [lowerPriceSort, setLowerPriceSort] = useState<number | null>(0);
  const [higherPriceSort, setHigherPriceSort] = useState<number | null>(999999);
  const [page, setPage] = useState<number>(0);
  const [sorts, setSorts] = useState<CarSort>({
    categoryId: 'Все категории',
    tank: 'Любой запас топлива',
    lowerPrice: 0,
    higherPrice: 999999,
  });
  const [cars, carsLoading, carsError] = useCars(sorts, page);

  const submitSort = (): void => {
    setSorts({
      categoryId: categorySort,
      tank: tankSort,
      lowerPrice: lowerPriceSort,
      higherPrice: higherPriceSort,
    });
    setPage(0);
  };

  const resetSort = (): void => {
    setSorts({
      categoryId: 'Все категории',
      tank: 'Любой запас топлива',
      lowerPrice: 0,
      higherPrice: 999999,
    });
    setLowerPriceSort(0);
    setHigherPriceSort(999999);
    setCategorySort('Все категории');
    setTankSort('Любой запас топлива');
    setPage(0);
  };

  return (
    <>
      <Helmet>
        <title>Need For Drive - Список авто</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer
        title="Список авто"
        page={page}
        itemCount={cars?.count}
        onSetPage={setPage}
      >
        <TableSorting
          onSubmitSort={submitSort}
          onResetSort={resetSort}
          isSorted={sorts.categoryId !== 'Все категории' || sorts.tank !== 'Любой запас топлива'}
        >
          <Form.Select
            size="sm"
            value={categorySort}
            onChange={(e) => setCategorySort(e.target.value)}
            disabled={categoriesLoading}
          >
            <option value="Все категории">
              Все категории
            </option>
            {categories && categories.map((category) => (
              <option
                value={category.id}
                key={category.id}
              >
                {category.name}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            size="sm"
            value={tankSort}
            onChange={(e) => setTankSort(e.target.value)}
          >
            <option value="Любой запас топлива">Любой запас топлива</option>
            <option value="100">100%</option>
            <option value="80">80% и выше</option>
            <option value="50">50% и выше</option>
          </Form.Select>
          <ButtonGroup>
            <Form.Select
              size="sm"
              className="range-select"
              onChange={(e) => setLowerPriceSort(Number(e.target.value))}
              value={lowerPriceSort}
            >
              <option value="0">От 0 ₽</option>
              {higherPriceSort > 1000 && (
                <option value="1000">От 1000 ₽</option>
              )}
              {higherPriceSort > 3000 && (
                <option value="3000">От 3000 ₽</option>
              )}
              {higherPriceSort > 5000 && (
                <option value="5000">От 5000 ₽</option>
              )}
              {higherPriceSort > 10000 && (
                <option value="10000">От 10000 ₽</option>
              )}
            </Form.Select>
            <Form.Select
              size="sm"
              className="range-select"
              onChange={(e) => setHigherPriceSort(Number(e.target.value))}
              value={higherPriceSort}
            >
              <option value="99999999">До ∞</option>
              {lowerPriceSort < 5000 && (
                <option value="5000">До 5000 ₽</option>
              )}
              {lowerPriceSort < 10000 && (
                <option value="10000">До 10000 ₽</option>
              )}
              {lowerPriceSort < 25000 && (
                <option value="25000">До 25000 ₽</option>
              )}
              {lowerPriceSort < 55000 && (
                <option value="55000">До 55000 ₽</option>
              )}
              {lowerPriceSort < 300000 && (
                <option value="300000">До 300000 ₽</option>
              )}
            </Form.Select>
          </ButtonGroup>
        </TableSorting>
        <div className="table-container">
          {cars && !carsLoading && !carsError && (
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
                {cars.data.map((car) => (
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
          )}
          {carsLoading && (
            <Spin />
          )}
        </div>
      </ContentContainer>
    </>
  );
};

export default Cars;
