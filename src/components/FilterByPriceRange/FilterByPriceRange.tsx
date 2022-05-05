import React, { Dispatch, SetStateAction } from 'react';
import { ButtonGroup, Form } from 'react-bootstrap';

const lowerPriceOptions: number[] = [1000, 3000, 5000, 10000];
const higherPriceOptions: number[] = [5000, 10000, 25000, 55000, 300000];

interface IFilterByPriceRange {
  lowerPriceFilter: number,
  setLowerPriceFilter: Dispatch<SetStateAction<number>>,
  higherPriceFilter: number,
  setHigherPriceFilter: Dispatch<SetStateAction<number>>,
}

const FilterByPriceRange = (
  {
    lowerPriceFilter,
    setLowerPriceFilter,
    higherPriceFilter,
    setHigherPriceFilter
  }: IFilterByPriceRange
): React.ReactElement => {
  return (
    <ButtonGroup>
      <Form.Select
        size="sm"
        className="input-range"
        onChange={(e) => setLowerPriceFilter(Number(e.target.value))}
        value={lowerPriceFilter}
      >
        <option value="0">От 0 ₽</option>
        {lowerPriceOptions.map((lowerPrice, index) => {
          if (higherPriceFilter > lowerPrice) {
            return <option value={lowerPrice} key={index}>{`От ${lowerPrice} ₽`}</option>;
          }
          return null;
        })}
      </Form.Select>
      <Form.Select
        size="sm"
        className="input-range"
        onChange={(e) => setHigherPriceFilter(Number(e.target.value))}
        value={higherPriceFilter}
      >
        <option value="99999999">До ∞</option>
        {higherPriceOptions.map((highPrice, index) => {
          if (lowerPriceFilter < highPrice) {
            return <option value={highPrice} key={index}>{`До ${highPrice} ₽`}</option>;
          }
          return null;
        })}

      </Form.Select>
    </ButtonGroup>
  );
};

export default FilterByPriceRange;
