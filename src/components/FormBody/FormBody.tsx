import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Button } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Spin from '../Spin/Spin';

const cx = classNames.bind(styles);

interface IFormContainerProps extends React.HTMLProps<HTMLFormElement> {
  children: React.ReactNode,
  title: string,
  className?: string,
  onDelete?: React.MouseEventHandler,
  isCreateTable?: boolean,
  isSubmitting?: boolean,
  isLoading?: boolean,
}

const FormBody = ({ children, title, className, onDelete, isCreateTable, isSubmitting, isLoading }: IFormContainerProps): React.ReactElement => {
  const navigate = useNavigate();
  return (
    <div
      className={cx('form-container', className)}
    >
      {!isLoading && (
        <>
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
              <Button variant="primary" size="sm" type="submit" disabled={isSubmitting}>
                {isCreateTable && (!isSubmitting ? 'Создать' : 'Создаем...')}
                {!isCreateTable && (!isSubmitting ? 'Сохранить' : 'Сохраняем...')}
              </Button>
              <Button variant="light" size="sm" onClick={() => navigate(-1)}>
                Отменить
              </Button>
            </div>
            {!isCreateTable && (
              <Button
                variant="danger"
                size="sm"
                disabled={isSubmitting}
                onClick={onDelete}
              >
                Удалить
              </Button>
            )}
          </div>
        </>
      )}
      {isLoading && (
        <Spin />
      )}
    </div>
  );
};

export default FormBody;
