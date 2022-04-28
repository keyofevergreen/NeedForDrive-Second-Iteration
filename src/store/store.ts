import { configureStore, Store } from '@reduxjs/toolkit';
import { isDevelopment } from '../utils/environments';
import { RootState, StoreProps } from '../types/store';
import authReducer from './Auth/reducer';
import orderReducer from './Order/reducer';
import citiesReducer from './Cities/reducer';
import carsReducer from './Cars/reducer';
import orderStatusReducer from './OrderStatus/reducer';
import rateTypesReducer from './RateTypes/reducer';
import pointsReducer from './Points/reducer';
import categoryReducer from './Category/reducer';
import rateReducer from './Rates/reducer';
import searchReducer from './Search/reducer';
import errorHandlerReducer from './ErrorProvider/reducer';

const createStore = ({
  services,
  initialState,
  history,
}: StoreProps): Store<RootState> => (
  configureStore({
    reducer: {
      auth: authReducer,
      order: orderReducer,
      cars: carsReducer,
      cities: citiesReducer,
      points: pointsReducer,
      rates: rateReducer,
      rateTypes: rateTypesReducer,
      orderStatus: orderStatusReducer,
      category: categoryReducer,
      search: searchReducer,
      errorHandler: errorHandlerReducer,
    },
    devTools: isDevelopment(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      immutableCheck: true,
      serializableCheck: false,
      thunk: {
        extraArgument: {
          history,
          services,
        },
      },
    }),
    preloadedState: initialState || {},
  })
);

export default createStore;
