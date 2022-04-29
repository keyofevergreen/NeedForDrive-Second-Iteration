import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CarEdit from './components/CarEdit/CarEdit';
import OrderStatusEdit from './components/OrderStatusEdit/OrderStatusEdit';
import CategoryEdit from './components/CategoryEdit/CategoryEdit';
import PointEdit from './components/PointEdit/PointEdit';
import CityEdit from './components/CityEdit/CityEdit';
import RateEdit from './components/RateEdit/RateEdit';
import RateTypesEdit from './components/RateTypesEdit/RateTypesEdit';

const Edit = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="car" element={<CarEdit />} />
      <Route path="order-status" element={<OrderStatusEdit />} />
      <Route path="category" element={<CategoryEdit />} />
      <Route path="point" element={<PointEdit />} />
      <Route path="city" element={<CityEdit />} />
      <Route path="rate" element={<RateEdit />} />
      <Route path="rate-types" element={<RateTypesEdit />} />
    </Routes>
  );
};

export default Edit;
