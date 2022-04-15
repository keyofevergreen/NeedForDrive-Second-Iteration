import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
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
    href: '/fuck',
    id: 1,
    icon: <NavIcon1 />,
  },
  {
    name: 'Заказы',
    href: '/',
    id: 3,
    icon: <NavIcon3 />,
  },
  {
    name: 'Список авто',
    href: '/cars',
    id: 2,
    icon: <NavIcon2 />,
  },
  {
    name: 'Города и пункты выдачи',
    href: '/city',
    id: 2,
    icon: <NavIcon2 />,
  },
];

interface ISidebarProps {
  className?: string;
  onLinkClick?: React.MouseEventHandler;
}

const Sidebar = ({ className, onLinkClick }: ISidebarProps): React.ReactElement => (
  <div
    className={cx(
      'navigation',
      className,
    )}
  >
    <div className={styles['navigation__logo']}>
      <Logo />
      Need for car
    </div>
    <nav className={styles['navigation__menu']}>
      {navItems.map((item) => (
        <NavLink
          className={cx('nav-item')}
          key={item.id}
          to={item.href}
          onClick={onLinkClick}
        >
          {item.icon}
          <p>{item.name}</p>
        </NavLink>
      ))}
    </nav>
  </div>
);

export default Sidebar;
