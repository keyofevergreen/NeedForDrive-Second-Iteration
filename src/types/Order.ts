import { OrderStatus } from './OrderStatus';
import { City } from './Cities';
import { Point } from './Points';
import { Car } from './Cars';
import { Rate } from './Rates';

export interface OrderState {
  orders: OrderResponse | null,
  loading: boolean,
  error: number | null,
}

export type Order = {
  updatedAt?: number,
  createdAt?: number,
  orderStatusId: OrderStatus | null,
  cityId: City | null,
  pointId: Point | null,
  carId: Car,
  dateFrom: number,
  dateTo: number,
  price: number,
  color: string,
  rateId: Rate,
  isFullTank: boolean,
  isNeedChildChair: boolean,
  isRightWheel: boolean,
  id: string,
};

export type OrderResponse = {
  fields: object,
  count: number,
  data: Order[] | null,
};

export type OrderAxiosConfig = {
  params?: OrderParams,
};

export type OrderParams = {
  page?: number,
  limit?: number,
  tank?: string,
  cityId?: string,
  date?: string | number,
  isFullTank?: boolean,
  isNeedChildChair?: boolean,
  isRightWheel?: boolean,
  orderStatusId?: string | null,
};

export type OrderSort = {
  cityId?: string,
  date?: string | number,
  isFullTank?: boolean,
  isNeedChildChair?: boolean,
  isRightWheel?: boolean,
  orderStatusId?: string | null,
};
