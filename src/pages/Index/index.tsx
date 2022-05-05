import React from 'react';
import ErrorProvider from '../../components/ErrorProvider/ErrorProvider';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './styles.module.scss';
import Alert from '../../components/Alert/Alert';

const Index: React.FC = ({ children }) => {
  return (
    <div className={styles['index-wrapper']}>
      <Sidebar className={styles['index__nav-xxl']} />
      <div className={styles['index']}>
        <Header />
        <main className={styles['index__content']}>
          <Alert />
          <ErrorProvider>
            {children}
          </ErrorProvider>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
