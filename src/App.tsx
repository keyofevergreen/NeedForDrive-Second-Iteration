import React, { useEffect } from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from './store/Auth/actions';
import { AuthState } from './types/Auth';
import { Dispatcher } from './types/store';
import Auth from './pages/Auth/Auth';
import Index from './pages/Index';
import Order from './pages/Order/Order';
import Cars from './pages/Cars/Cars';
import Points from './pages/Points/Points';
import Cities from './pages/Cities/Cities';
import Categories from './pages/Categories/Categories';
import OrderStatus from './pages/OrderStatus/OrderStatus';
import Rates from './pages/Rates/Rates';
import RateTypes from './pages/RateTypes/RateTypes';
import './assets/styles/global.scss';

const App: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch<Dispatcher>();

  const { token, isAuth } = useSelector<{
    auth: AuthState;
  }, AuthState>((state) => state.auth);

  useEffect(() => {
    dispatch(setAuth(!!localStorage.getItem('token')));
  }, [token]);

  if (isAuth) {
    return (
      <Index>
        <Routes>
          <Route index element={<Order />} />
          <Route path="cars" element={<Cars />} />
          <Route path="order-status" element={<OrderStatus />} />
          <Route path="categories" element={<Categories />} />
          <Route path="points" element={<Points />} />
          <Route path="cities" element={<Cities />} />
          <Route path="rates" element={<Rates />} />
          <Route path="rate-types" element={<RateTypes />} />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </Index>
    );
  }
  if (!isAuth) {
    return <Auth />;
  }
};

export default App;
