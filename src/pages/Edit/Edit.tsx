import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CarsEdit from './components/CarsEdit/CarsEdit';

const Edit = (): React.ReactElement => {
  return (
    <Routes>
      <Route
        path="cars"
        element={<CarsEdit />}
      />
    </Routes>
  );
};

export default Edit;
