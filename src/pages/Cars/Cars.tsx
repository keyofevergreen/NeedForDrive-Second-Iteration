import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useCars } from './hooks';
import { useCategory } from '../Categories/hooks';
import { CarSort } from '../../types/Cars';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import CarItem from './components/CarItem/CarItem';
import Spin from '../../components/Spin/Spin';
import TableSorting from '../../components/TableSorting/TableSorting';
import CarFilters from './components/CarFilters/CarFilters';

const Cars = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);

  const [categories, categoriesLoading] = useCategory();
  const [categoryFilter, setCategoryFilter] = useState<string>('Все категории');
  const [tankFilter, setTankFilter] = useState<string>('Любой запас топлива');
  const [lowerPriceFilter, setLowerPriceFilter] = useState<number | null>(0);
  const [higherPriceFilter, setHigherPriceFilter] = useState<number | null>(999999);
  const [page, setPage] = useState<number>(0);
  const [filters, setFilters] = useState<CarSort>({
    categoryId: 'Все категории',
    tank: 'Любой запас топлива',
    lowerPrice: 0,
    higherPrice: 999999,
  });
  const [cars, carsLoading, carsError] = useCars(filters, page);

  const submitFilter = (): void => {
    setFilters({
      categoryId: categoryFilter,
      tank: tankFilter,
      lowerPrice: lowerPriceFilter,
      higherPrice: higherPriceFilter,
    });
    setPage(0);
  };

  const resetFilter = (): void => {
    setFilters({
      categoryId: 'Все категории',
      tank: 'Любой запас топлива',
      lowerPrice: 0,
      higherPrice: 999999,
    });
    setLowerPriceFilter(0);
    setHigherPriceFilter(999999);
    setCategoryFilter('Все категории');
    setTankFilter('Любой запас топлива');
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
          onSubmitFilter={submitFilter}
          onResetFilter={resetFilter}
          isFiltered={
            filters.categoryId !== 'Все категории' ||
            filters.tank !== 'Любой запас топлива' ||
            filters.lowerPrice !== 0 ||
            filters.higherPrice !== 999999
          }
        >
          <CarFilters
            categories={categories}
            categoriesFilter={categoryFilter}
            setCategoriesFilter={setCategoryFilter}
            categoriesLoading={categoriesLoading}
            tankFilter={tankFilter}
            setTankFilter={setTankFilter}
            lowerPriceFilter={lowerPriceFilter}
            setLowerPriceFilter={setLowerPriceFilter}
            higherPriceFilter={higherPriceFilter}
            setHigherPriceFilter={setHigherPriceFilter}
          />
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
                </tr>
              </thead>
              <tbody>
                {cars.data.map((car) => (
                  <CarItem
                    key={car.id}
                    name={car.name}
                    category={car.categoryId}
                    colors={car.colors}
                    priceMin={car.priceMin}
                    priceMax={car.priceMax}
                    tank={car.tank}
                    number={car.number}
                  />
                ))}
                {cars.data.length === 0 && (
                  <tr>
                    <td>
                      По вашему запросу ничего не найдено
                    </td>
                  </tr>
                )}
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
