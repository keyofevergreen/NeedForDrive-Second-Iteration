import React from 'react';
import classNames from 'classnames';
import SettingButton from '../../../../components/SettingButton/SettingButton';
import { Category } from '../../../../types/Category';

interface ICarProps {
  name: string,
  category: Category,
  colors: string[] | null,
  priceMin: number,
  priceMax: number,
  tank: number | null,
  number: string,
}

const CarItem = ({ name, category, colors, priceMin, priceMax, tank, number }: ICarProps): React.ReactElement => {
  const categoryString = category.name.charAt(0).toUpperCase() + category.name.slice(1);

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
      <td
        className={classNames(number ? 'uppercase' : '')}
      >
        {number ? `${number}` : 'Не указан'}
      </td>
      <td>
        <SettingButton />
      </td>
    </tr>
  );
};

export default CarItem;
