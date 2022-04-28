import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useAuth } from './hooks';
import { AuthForm } from '../../types/Auth';
import Logo from '../../assets/logo.component.svg';
import styles from './styles.module.scss';

const Auth = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AuthForm>();
  const [form, setForm] = useState<AuthForm | null>(null);
  const [loading, serverError] = useAuth(form);

  return (
    <>
      <Helmet>
        <title>Need For Drive - Авторизация</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <div className={styles['auth-wrap']}>
        <div className={styles['logo']}>
          <Logo />
          Need for car
        </div>
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
                  isInvalid={!!(errors.username || serverError)}
                  type="email"
                  placeholder="Введите почту"
                  aria-describedby="username"
                  disabled={loading}
                />
                {(errors.username?.message || serverError) && (
                  <Form.Text
                    id="username"
                    bsPrefix="input-message"
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
                  isInvalid={!!(errors.password || serverError)}
                  type="password"
                  placeholder="Введите пароль"
                  aria-describedby="password"
                  disabled={loading}
                />
                {(errors.password?.message) && (
                  <Form.Text
                    id="password"
                    bsPrefix="input-message"
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
