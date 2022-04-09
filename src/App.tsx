import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Index from './pages/Index';
import './assets/styles/global.scss';

const App: React.FC = (): React.ReactElement => (
  <Routes>
    <Route path="/auth" element={<Auth />} />
    <Route index element={<Index />} />
    <Route
      path="*"
      element={<Navigate to="/" />}
    />
  </Routes>
);

export default App;
