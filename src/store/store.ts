import { configureStore, Store } from '@reduxjs/toolkit';
import { isDevelopment } from '../utils/environments';
import { RootState, StoreProps } from '../types/store';
import authReducer from './Auth/reducer';

const createStore = ({
  services,
  initialState,
  history,
}: StoreProps): Store<RootState> => (
  configureStore({
    reducer: {
      auth: authReducer,
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
