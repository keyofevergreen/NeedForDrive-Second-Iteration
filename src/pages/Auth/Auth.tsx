import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../store/Auth/hooks';
import { AuthForm } from '../../types/Auth';
import Logo from '../../assets/logo.component.svg';
import styles from './styles.module.scss';

const Auth = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AuthForm>();
  //eslint-disable-next-line
  const [form, setForm] = useState<AuthForm | null>(null);
  const [loading, serverError, token] = useAuth(form);

  useEffect(() => {
    if (token && !serverError) {
      localStorage.setItem('token', JSON.stringify(token));
    }
  }, [token]);

  return (
    <>
      <Helmet>
        <title>Need For Drive - Авторизация</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <div className={styles['auth-wrap']}>
        <Logo />
        <div className={styles['auth']}>
          <h1>
            Вход
          </h1>
          <Form
            className={styles['auth__form']}
            noValidate
            onSubmit={handleSubmit((data) => {
              setForm(data);
            })}
          >
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Почта</Form.Label>
              <div className="input-wrap">
                <Form.Control
                  {...register('username', {
                    required: 'Это поле не должно быть пустым'
                  })}
                  isInvalid={!!(errors.username || serverError === '401')}
                  type="email"
                  placeholder="Введите почту"
                  aria-describedby="username"
                />
                {(errors.username?.message || serverError === '401') && (
                  <Form.Text
                    className="input-message"
                    id="username"
                    muted
                  >
                    {errors.username?.message || 'Неверно указана почта или пароль'}
                  </Form.Text>
                )}
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Пароль</Form.Label>
              <div className="input-wrap">
                <Form.Control
                  {...register('password', {
                    required: 'Это поле не должно быть пустым'
                  })}
                  isInvalid={!!(errors.username || serverError === '401')}
                  type="password"
                  placeholder="Введите пароль"
                  aria-describedby="password"
                />
                {(errors.password?.message) && (
                  <Form.Text
                    className="input-message"
                    id="password"
                    muted
                  >
                    {errors.password?.message}
                  </Form.Text>
                )}
              </div>
            </Form.Group>
            <Form.Group className={styles['btn-wrap']}>
              <button
                type="button"
                className={styles['request-access-btn']}
              >
                Запросить доступ
              </button>
              <Button
                variant="primary"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Загрузка' : 'Войти'}
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Auth;
