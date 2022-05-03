import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CarEdit from './components/CarEdit/CarEdit';
import OrderStatusEdit from './components/OrderStatusEdit/OrderStatusEdit';
import CategoryEdit from './components/CategoryEdit/CategoryEdit';
import PointEdit from './components/PointEdit/PointEdit';
import CityEdit from './components/CityEdit/CityEdit';
import RateEdit from './components/RateEdit/RateEdit';
import RateTypesEdit from './components/RateTypesEdit/RateTypesEdit';
import EditRouter from './components/EditRouter/EditRouter';
import styles from './styles.module.scss';

const Edit = (): React.ReactElement => {
  return (
    <div className={styles['edit-route']}>
      <Routes>
        <Route path="car" element={<EditRouter />}>
          <Route index element={<CarEdit />} />
          <Route path=":carId" element={<CarEdit />} />
        </Route>
        <Route path="order-status" element={<EditRouter />}>
          <Route index element={<OrderStatusEdit />} />
          <Route path=":orderStatusId" element={<OrderStatusEdit />} />
        </Route>
        <Route path="category" element={<EditRouter />}>
          <Route index element={<CategoryEdit />} />
          <Route path=":categoryId" element={<CategoryEdit />} />
        </Route>
        <Route path="point" element={<EditRouter />}>
          <Route index element={<PointEdit />} />
          <Route path=":pointId" element={<PointEdit />} />
        </Route>
        <Route path="city" element={<EditRouter />}>
          <Route index element={<CityEdit />} />
          <Route path=":cityId" element={<CityEdit />} />
        </Route>
        <Route path="rate" element={<EditRouter />}>
          <Route index element={<RateEdit />} />
          <Route path=":rateId" element={<RateEdit />} />
        </Route>
        <Route path="rate-type" element={<EditRouter />}>
          <Route index element={<RateTypesEdit />} />
          <Route path=":rateTypeId" element={<RateTypesEdit />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Edit;
