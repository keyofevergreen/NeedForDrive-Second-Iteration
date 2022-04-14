import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './styles.module.scss';

const Index: React.FC = ({ children }) => (
  <div className={styles['index-wrapper']}>
    <Sidebar className={styles['index__nav-xxl']} />
    <div className={styles['index']}>
      <Header />
      <main className={styles['index__content']}>
        {children}
      </main>
      <Footer />
    </div>
  </div>
);

export default Index;
