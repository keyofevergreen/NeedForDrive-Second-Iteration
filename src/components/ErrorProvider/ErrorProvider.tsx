import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { useErrorHandler } from './hooks';

interface IErrorProviderProps {
  children: React.ReactNode,
}

const ErrorProvider = ({ children }: IErrorProviderProps): React.ReactElement => {
  const navigate = useNavigate();
  const errorStatus = useErrorHandler();

  if (errorStatus !== null) {
    return (
      <div className={styles['error']}>
        <span className={styles['error__status-code']}>
          {errorStatus}
        </span>
        <h3>
          Что-то пошло не так
        </h3>
        <p>
          Попробуйте перезагрузить страницу
        </p>
        <Button
          variant="primary"
          size="sm"
          onClick={() => navigate(-1)}
        >
          Назад
        </Button>
      </div>
    );
  }
  return (
    <div>
      {children}
    </div>
  );
};

export default ErrorProvider;
