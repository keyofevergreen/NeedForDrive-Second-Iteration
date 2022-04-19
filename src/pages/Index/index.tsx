import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './styles.module.scss';
import { useCities } from '../../store/Cities/hooks';
import { useOrderStatus } from '../../store/OrderStatus/hooks';
import { useRateTypes } from '../../store/RateTypes/hooks';
import { usePoints } from '../../store/Points/hooks';
import { useRates } from '../../store/Rates/hooks';

const Index: React.FC = ({ children }) => {
  const [citiesLoading, citiesError] = useCities();
  const [orderStatusLoading, orderStatusError] = useOrderStatus();
  const [ratesLoading, ratesError] = useRates();
  const [rateTypesLoading, rateTypesError] = useRateTypes();
  const [pointsLoading, pointsError] = usePoints();

  return (
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
};

export default Index;
