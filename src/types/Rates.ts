import { RateType } from './RateTypes';

export interface RateState {
  rates: Rate[] | null,
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
