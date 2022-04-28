import React, { Dispatch, SetStateAction } from 'react';
import { Form } from 'react-bootstrap';
import { Category } from '../../../../types/Category';
import FilterByPriceRange from '../../../../components/FilterByPriceRange/FilterByPriceRange';
import { Filter, Option } from '../../../../types/Filter';

const tankFilterOptions: Option[] = [
  {
    id: '100',
    name: '100%'
  },
  {
    id: '80',
    name: '80% и выше'
  },
  {
    id: '50',
    name: '50% и выше'
  }
];

interface ICarFilters {
  categories: Category[],
  categoriesFilter: string,
  setCategoriesFilter: Dispatch<SetStateAction<string>>,
  categoriesLoading: boolean,
  tankFilter: string,
  setTankFilter: Dispatch<SetStateAction<string>>,
  lowerPriceFilter: number,
  setLowerPriceFilter: Dispatch<SetStateAction<number>>,
  higherPriceFilter: number,
  setHigherPriceFilter: Dispatch<SetStateAction<number>>
}

const CarFilters = (
  {
    categories,
    categoriesFilter,
    setCategoriesFilter,
    categoriesLoading,
    tankFilter,
    setTankFilter,
    lowerPriceFilter,
    setLowerPriceFilter,
    higherPriceFilter,
    setHigherPriceFilter
  }: ICarFilters
): React.ReactElement => {
  const filters: Filter[] = [
    {
      id: 1,
      value: categoriesFilter,
      defaultValue: 'Все категории',
      onChange: setCategoriesFilter,
      disabled: categoriesLoading,
      options: categories,
    },
    {
      id: 2,
      value: tankFilter,
      defaultValue: 'Любой запас топлива',
      onChange: setTankFilter,
      options: tankFilterOptions,
    },
  ];

  return (
    <>
      {filters.map((filter) => (
        <Form.Select
          key={filter.id}
          size="sm"
          value={filter.value}
          onChange={(e) => filter.onChange(e.target.value)}
          disabled={filter.disabled}
        >
          <option value={filter.defaultValue}>
            {filter.defaultValue}
          </option>
          {filter.options && filter.options.map((option) => (
            <option
              value={option.id}
              key={option.id}
            >
              {option.name}
            </option>
          ))}
        </Form.Select>
      ))}
      <FilterByPriceRange
        lowerPriceFilter={lowerPriceFilter}
        setLowerPriceFilter={setLowerPriceFilter}
        higherPriceFilter={higherPriceFilter}
        setHigherPriceFilter={setHigherPriceFilter}
      />
    </>
  );
};

export default CarFilters;
