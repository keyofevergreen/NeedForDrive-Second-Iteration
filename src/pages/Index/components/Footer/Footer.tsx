import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles['footer']}>
      <nav className={styles['footer__menu']}>
        <a href="https://keyofevergreen.github.io/NeedForDrive-First-Iteration/">
          Главная страница
        </a>
        <Link to="/">
          Ссылка
        </Link>
      </nav>
      <span className={styles['footer__copyright']}>
        Copyright © 2022 Simbirsoft
      </span>
    </footer>
  );
};

export default Footer;
