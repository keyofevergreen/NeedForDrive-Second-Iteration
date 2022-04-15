import React, { useEffect } from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from './store/Auth/actions';
import { AuthState } from './types/Auth';
import { Dispatcher } from './types/store';
import Auth from './pages/Auth/Auth';
import Index from './pages/Index';
import Order from './pages/Order/Order';
import CarsList from './pages/CarsList/CarsList';
import './assets/styles/global.scss';
import PointsAndCitiesList from './pages/PointsAndCitiesList/PointsAndCitiesList';

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
          <Route path="cars" element={<CarsList />} />
          <Route path="city" element={<PointsAndCitiesList />} />
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
