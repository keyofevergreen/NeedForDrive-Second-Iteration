import React from 'react';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import NotiIcon from '../../../../assets/Notifications.component.svg';
import avatar from '../../../../assets/Avatar.png';
import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles['header']}>
      <BurgerMenu className={styles['header__menu-btn']} />
      <div className={styles['header__search']}>
        <input
          type="text"
          placeholder="Поиск..."
        />
      </div>
      <button
        type="button"
        className={styles['header__notifications-btn']}
      >
        <div>
          <NotiIcon />
        </div>
      </button>
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
            <NavDropdown.Item>
              Выход
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
