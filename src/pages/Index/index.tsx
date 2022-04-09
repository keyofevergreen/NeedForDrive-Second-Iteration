import React from 'react';
import Navigation from './components/Navigation/Navigation';
import styles from './styles.module.scss';

const Index = (): React.ReactElement => (
  <div className={styles['index-wrapper']}>
    <Navigation />
    <div>
      Content wrapper
    </div>
  </div>
);

export default Index;
