import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import './assets/styles/global.scss';

const App: React.FC = (): React.ReactElement => (
  <Routes>
    <Route index element={<Auth />} />
    <Route
      path="*"
      element={<Navigate to="/" />}
    />
  </Routes>
);

export default App;
