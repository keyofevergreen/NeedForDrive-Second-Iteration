import React from 'react';
import SettingButton from '../../../../components/SettingButton/SettingButton';

interface ICarProps {
  name: string,
  category: string,
  colors: string[] | null,
  priceMin: number,
  priceMax: number,
  tank: number | null,
  number: string,
}

const CarItem = ({ name, category, colors, priceMin, priceMax, tank, number }: ICarProps): React.ReactElement => {
  const categoryString = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <tr>
      <td className="capitalize">{name}</td>
      <td>{category ? categoryString : 'Не указана'}</td>
      <td className="capitalize" style={{ maxWidth: '200px' }}>{colors.join(', ')}</td>
      <td>
        <div>
          {`от ${priceMin}`}
        </div>
        <div>
          {`до ${priceMax}`}
        </div>
      </td>
      <td>{tank ? `${tank}%` : 'Неизвестно'}</td>
      <td className="uppercase">{number}</td>
      <td>
        <SettingButton />
      </td>
    </tr>
  );
};

export default CarItem;
