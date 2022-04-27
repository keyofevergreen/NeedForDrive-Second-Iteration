import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './styles.module.scss';

interface ITableSortingProps {
  children: React.ReactNode,
  onSubmitFilter?: React.MouseEventHandler,
  onResetFilter?: React.MouseEventHandler,
  isFiltered?: boolean,
}

const TableSorting = ({ children, onSubmitFilter, onResetFilter, isFiltered }: ITableSortingProps): React.ReactElement => {
  return (
    <div className={styles['table-header']}>
      <div className={styles['table-header__sort']}>
        {children}
      </div>
      <div className={styles['table-header__buttons']}>
        {isFiltered && (
          <Button
            variant="danger"
            size="sm"
            type="button"
            onClick={onResetFilter}
          >
            Сбросить
          </Button>
        )}
        <Button
          variant="primary"
          size="sm"
          type="button"
          onClick={onSubmitFilter}
        >
          Применить
        </Button>
      </div>
    </div>
  );
};

export default TableSorting;
