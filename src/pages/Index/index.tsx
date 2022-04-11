import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './styles.module.scss';

const Index = (): React.ReactElement => (
  <div className={styles['index-wrapper']}>
    <Navigation className={styles['index__nav-xxl']} />
    <div className={styles['index']}>
      <Header />
      <main className={styles['index__content']}>
        Кто прочетает тот лох
      </main>
      <Footer />
    </div>
  </div>
);

export default Index;
