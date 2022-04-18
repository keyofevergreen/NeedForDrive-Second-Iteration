import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './styles.module.scss';

const TableSorting: React.FC = ({ children }) => {
  return (
    <div className={styles['table-header']}>
      <div className={styles['table-header__sort']}>
        {children}
      </div>
      <div className={styles['table-header__buttons']}>
        <Button
          variant="danger"
          size="sm"
          type="button"
        >
          Сбросить
        </Button>
        <Button
          variant="primary"
          size="sm"
          type="button"
        >
          Применить
        </Button>
      </div>
    </div>
  );
};

export default TableSorting;
