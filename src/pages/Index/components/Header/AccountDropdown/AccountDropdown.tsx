import React from 'react';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import avatar from '../../../../../assets/Avatar.png';
import styles from '../styles.module.scss';
import { Dispatcher } from '../../../../../types/store';
import { setAuth } from '../../../../../store/Auth/actions';

const AccountDropdown: React.FC = () => {
  const dispatch = useDispatch<Dispatcher>();

  const logout = (): void => {
    dispatch(setAuth(false));
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
    localStorage.removeItem('basicToken');
  };

  return (
    <Navbar bsPrefix={styles['header__account']}>
      <Container>
        <NavDropdown title={
          (
            <div>
              <img src={avatar} alt="avatar icon" />
              <span>
                Admin
              </span>
            </div>
          )
        }
        >
          <NavDropdown.Item>
            Аналитика
          </NavDropdown.Item>
          <NavDropdown.Item>
            Права доступа
          </NavDropdown.Item>
          <NavDropdown.Item>
            Настройки
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={logout}>
            Выход
          </NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
};

export default AccountDropdown;
