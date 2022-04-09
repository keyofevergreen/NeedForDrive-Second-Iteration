import React, { ReactElement } from 'react';
import classNames from 'classnames/bind';
import Logo from '../../../../assets/logo.component.svg';
import NavIcon1 from '../../../../assets/NavBadge-1.component.svg';
import NavIcon2 from '../../../../assets/NavBadge-2.component.svg';
import NavIcon3 from '../../../../assets/NavBadge-3.component.svg';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

type NavItem = {
  name: string,
  href: string,
  id: number,
  icon: ReactElement,
};

const navItems: NavItem[] = [
  {
    name: 'Карточка автомобиля',
    href: '/123',
    id: 1,
    icon: <NavIcon1 />,
  },
  {
    name: 'Список авто',
    href: '/222',
    id: 2,
    icon: <NavIcon2 />,
  },
  {
    name: 'Заказы',
    href: '/666',
    id: 3,
    icon: <NavIcon3 />,
  }
];

const Navigation = (): React.ReactElement => {
  return (
    <div className={styles['navigation']}>
      <div className={styles['navigation__logo']}>
        <Logo />
        Need for car
      </div>
      <nav className={styles['navigation__menu']}>
        <ul>
          {
            navItems.map((item) => (
              <li
                className={cx(
                  'nav-item',
                  {
                    'nav-item-selected': item.href === '/123'
                  }
                )}
                key={item.id}
              >
                {item.icon}
                <p>{item.name}</p>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
