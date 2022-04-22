import { RateType } from './RateTypes';

export interface RateState {
  rates: RateResponse | null,
  loading: boolean,
  error: string | null,
}

export type Rate = {
  price: number,
  id: string,
  updatedAt?: number,
  createdAt?: number,
  rateTypeId: RateType | null,
};

export type RateResponse = {
  fields: object,
  count: number,
  data: Rate[] | null,
};

export type RateAxiosConfig = {
  params?: RateParams,
};

export type RateParams = {
  price?:unknown,
  page?: number,
  limit?: number,
};
