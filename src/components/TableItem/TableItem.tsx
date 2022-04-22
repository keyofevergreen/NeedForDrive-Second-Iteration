import React from 'react';
import SettingButton from '../SettingButton/SettingButton';

interface ITableItem {
  columns: (string | number)[],
}

const TableItem = ({ columns }: ITableItem): React.ReactElement => {
  return (
    <tr>
      {columns.map(((columnData, index) => (
        <td key={`${columnData}-${index}`}>
          {columnData}
        </td>
      )))}
      <td>
        <SettingButton />
      </td>
    </tr>
  );
};

export default TableItem;
