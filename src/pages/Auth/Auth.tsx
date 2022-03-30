import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Form } from 'react-bootstrap';
import Logo from '../../assets/logo.component.svg';
import styles from './styles.module.scss';

const Auth = (): React.ReactElement => (
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
        <Form className={styles['auth__form']}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Почта</Form.Label>
            <Form.Control type="email" placeholder="Введите почту" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="Введите пароль" />
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
            >
              Войти
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  </>
);

export default Auth;
