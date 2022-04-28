import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface IAddTableItemLink {
  to: string,
}

const AddTableItemLink = ({ to }: IAddTableItemLink): React.ReactElement => {
  return (
    <Link to={to}>
      <Button variant="outline-primary" size="sm" className={styles['table-item-link']}>
        Добавить
      </Button>
    </Link>
  );
};

export default AddTableItemLink;
