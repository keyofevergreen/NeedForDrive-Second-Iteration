import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './styles.module.scss';

interface ITableSortingProps {
  children: React.ReactNode,
  onSubmitSort?: React.MouseEventHandler,
  onResetSort?: React.MouseEventHandler,
  isSorted?: boolean,
}

const TableSorting = ({ children, onSubmitSort, onResetSort, isSorted }: ITableSortingProps): React.ReactElement => {
  return (
    <div className={styles['table-header']}>
      <div className={styles['table-header__sort']}>
        {children}
      </div>
      <div className={styles['table-header__buttons']}>
        {isSorted && (
          <Button
            variant="danger"
            size="sm"
            type="button"
            onClick={onResetSort}
          >
            Сбросить
          </Button>
        )}
        <Button
          variant="primary"
          size="sm"
          type="button"
          onClick={onSubmitSort}
        >
          Применить
        </Button>
      </div>
    </div>
  );
};

export default TableSorting;
