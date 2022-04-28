import React from 'react';
import { Button, Form } from 'react-bootstrap';
import styles from './styles.module.scss';

interface IFormContainerProps {
  children: React.ReactNode,
  title: string,
}

const FormContainer = ({ children, title }: IFormContainerProps): React.ReactElement => (
  <Form className={styles['form-container']}>
    <div>
      <h3>
        {title}
      </h3>
      <div className={styles['form']}>
        {children}
      </div>
    </div>
    <div className={styles['form-btn-line']}>
      <div>
        <Button variant="primary" size="sm">
          Сохранить
        </Button>
        <Button variant="light" size="sm">
          Отменить
        </Button>
      </div>
      <Button variant="danger" size="sm">
        Удалить
      </Button>
    </div>
  </Form>
);

export default FormContainer;
