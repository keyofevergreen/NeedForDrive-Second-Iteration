import React from 'react';
import Navigation from './components/Navigation';
import styles from './styles.module.scss';

const Index: React.FC = ({ children }: { children: React.ReactNode }) => (
  <div>
    <Navigation />
    <div className={styles['wrapper']}>
      {children}
    </div>
  </div>
);

export default Index;
