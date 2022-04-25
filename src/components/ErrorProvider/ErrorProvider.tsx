import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

interface IErrorProviderProps {
  errorStatus: (number | null)[],
  children: React.ReactNode,
}

const ErrorProvider = ({ errorStatus, children }: IErrorProviderProps): React.ReactElement => {
  const navigate = useNavigate();
  const [error, setError] = useState<number | null>(null);

  useEffect(() => {
    const errors = errorStatus.filter((err) => err !== null);

    if (errors.length > 0) {
      setError(errors[0]);
    }
  }, [errorStatus]);

  if (error) {
    return (
      <div className={styles['error']}>
        <h1 className={styles['error__status-code']}>
          {error}
        </h1>
        <h2>
          Что-то пошло не так
        </h2>
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
  return children;
};

export default ErrorProvider;
