import React from 'react';
import { Button, Form } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface IFormContainerProps {
  children: React.ReactNode,
  title: string,
  className?: string,
  onCreate?: React.MouseEventHandler,
  onDelete?: React.MouseEventHandler,
  isFormCompleted?: boolean,
}

const FormContainer = ({ children, title, className, onCreate, onDelete, isFormCompleted }: IFormContainerProps): React.ReactElement => (
  <Form className={cx('form-container', className)}>
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
        <Button variant="primary" size="sm" disabled={!isFormCompleted} onClick={onCreate}>
          Сохранить
        </Button>
        <Button variant="light" size="sm">
          Отменить
        </Button>
      </div>
      {onDelete && (
        <Button variant="danger" size="sm">
          Удалить
        </Button>
      )}
    </div>
  </Form>
);

export default FormContainer;
