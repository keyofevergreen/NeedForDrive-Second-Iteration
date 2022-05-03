import React from 'react';
import { Link } from 'react-router-dom';
import SettingButton from '../SettingButton/SettingButton';

interface ITableItem {
  columns: (string | number)[],
  id?: string,
  editPageLink?: string,
}

const TableItem = ({ columns, id, editPageLink }: ITableItem): React.ReactElement => {
  return (
    <tr>
      {columns.map(((columnData, index) => (
        <td key={`${columnData}-${index}`}>
          {columnData}
        </td>
      )))}
      <td>
        <Link to={`/edit/${editPageLink}/${id}`}>
          <SettingButton />
        </Link>
      </td>
    </tr>
  );
};

export default TableItem;
