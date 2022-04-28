import { History } from 'history';
import { Action } from 'redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { ServicesInterface } from '../utils/services/services';
import { AuthState } from './Auth';
import { OrderState } from './Order';
import { CitiesState } from './Cities';
import { CarsState } from './Cars';
import { OrderStatusState } from './OrderStatus';
import { RateTypesState } from './RateTypes';
import { PointsState } from './Points';
import { CategoryState } from './Category';
import { RateState } from './Rates';
import { SearchState } from './Search';
import { ErrorHandlerState } from './Error';

export type Dispatcher = ThunkDispatch<RootState, ThunkExtras, Action>;

export interface ThunkExtras {
  services: ServicesInterface;
}

export interface StoreProps extends ThunkExtras {
  initialState?: {
    [key: string]: unknown;
  };
  history: History;
  services: ServicesInterface;
}

export interface RootState {
  auth: AuthState,
  order: OrderState,
  cars: CarsState,
  cities: CitiesState,
  points: PointsState,
  rates: RateState,
  rateTypes: RateTypesState,
  orderStatus: OrderStatusState,
  category: CategoryState,
  search: SearchState,
  errorHandler: ErrorHandlerState,
}
