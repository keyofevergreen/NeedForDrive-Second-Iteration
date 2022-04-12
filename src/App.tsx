import React, { useEffect } from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState } from './types/Auth';
import Auth from './pages/Auth/Auth';
import Index from './pages/Index';
import Order from './pages/Order/Order';
import './assets/styles/global.scss';
import { Dispatcher } from './types/store';
import { setAuth } from './store/Auth/actions';

const App: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch<Dispatcher>();

  const { token, isAuth } = useSelector<{
    auth: AuthState;
  }, AuthState>((state) => state.auth);

  useEffect(() => {
    dispatch(setAuth(!!localStorage.getItem('token')));
  }, [token]);

  return (
    isAuth ?
      (
        <Index>
          <Routes>
            <Route index element={<Order />} />
            <Route
              path="*"
              element={<Navigate to="/" />}
            />
          </Routes>
        </Index>
      ) :
      (
        <Routes>
          <Route index element={<Auth />} />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      )
  );
};

export default App;
