import React from 'react';
import { Point } from '../../../../types/PointsAndCitiesList';

const PointItem = ({ city, name, address }: Point): React.ReactElement => {
  return (
    <tr>
      <td>{name}</td>
      <td>{address}</td>
      <td>{city}</td>
    </tr>
  );
};

export default PointItem;
