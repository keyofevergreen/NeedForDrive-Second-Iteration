import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import NotiIcon from '../../../../assets/Notifications.component.svg';
import styles from './styles.module.scss';
import AccountDropdown from './AccountDropdown/AccountDropdown';

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
      <AccountDropdown />
    </div>
  );
};

export default Header;
