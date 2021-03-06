import React, { ReactElement, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import Logo from '../../../../assets/logo.component.svg';
import NavIcon1 from '../../../../assets/NavBadge-1.component.svg';
import NavIcon2 from '../../../../assets/NavBadge-2.component.svg';
import NavIcon3 from '../../../../assets/NavBadge-3.component.svg';
import NavIcon4 from '../../../../assets/NavBadge-4.component.svg';
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
    name: 'Заказы',
    href: '/',
    id: 2,
    icon: <NavIcon3 />,
  },
  {
    name: 'Статусы заказов',
    href: '/order-status',
    id: 3,
    icon: <NavIcon3 />,
  },
  {
    name: 'Список авто',
    href: '/cars',
    id: 4,
    icon: <NavIcon2 />,
  },
  {
    name: 'Пункты выдачи',
    href: '/points',
    id: 5,
    icon: <NavIcon2 />,
  },
  {
    name: 'Города',
    href: '/cities',
    id: 6,
    icon: <NavIcon2 />,
  },
  {
    name: 'Категории',
    href: '/categories',
    id: 7,
    icon: <NavIcon4 />,
  },
  {
    name: 'Тарифы',
    href: '/rates',
    id: 8,
    icon: <NavIcon4 />,
  },
  {
    name: 'Типы тарифов',
    href: '/rate-types',
    id: 9,
    icon: <NavIcon4 />,
  },
];

type TableLink = {
  url: string,
  name: string
};

const tableEditLinks: TableLink[] = [
  {
    url: 'car',
    name: 'Карточка автомобиля',
  },
  {
    url: 'order-status',
    name: 'Карточка статуса заказа',
  },
  {
    url: 'point',
    name: 'Карточка пункта выдачи',
  },
  {
    url: 'city',
    name: 'Карточка города',
  },
  {
    url: 'category',
    name: 'Карточка категории',
  },
  {
    url: 'rate',
    name: 'Карточка тарифа',
  },
  {
    url: 'rate-types',
    name: 'Карточка типа тарифа',
  },
];

interface ISidebarProps {
  className?: string;
  onLinkClick?: React.MouseEventHandler;
}

const Sidebar = ({ className, onLinkClick }: ISidebarProps): React.ReactElement => {
  const location = useLocation();
  const { pathname } = location;
  const [editLinkName, setEditLinkName] = useState<string>('');

  useEffect(() => {
    setEditLinkName('');
    tableEditLinks.forEach((link) => {
      if (pathname.includes(`/edit/${link.url}`)) {
        setEditLinkName(link.name);
      }
    });
  }, [location]);

  return (
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
        {pathname.includes('/edit/') && (
          <NavLink
            className={cx('nav-item')}
            id="edit-page"
            to="/edit"
            onClick={onLinkClick}
          >
            <NavIcon1 />
            <p>{editLinkName}</p>
          </NavLink>
        )}
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
};

export default Sidebar;
