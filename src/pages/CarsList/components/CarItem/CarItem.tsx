import React from 'react';
import { Car } from '../../../../types/CarsList';

const CarItem = ({ name, category, colors, priceMin, priceMax, tank, number }: Car): React.ReactElement => {
  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>{colors.join(', ')}</td>
      <td>{`от ${priceMin} до ${priceMax}`}</td>
      <td>{`${tank}%`}</td>
      <td>{number}</td>
    </tr>
  );
};

export default CarItem;
