import { City } from './Cities';

export interface PointsState {
  points: PointResponse | null,
  loading: boolean,
  error: number | null,
  pointById: Point | null,
  pointByIdLoading: boolean,
  pointByIdError: number | null,
}

export type Point = {
  name: string,
  address: string,
  cityId?: City | null,
  id: string,
};

export type PointResponse = {
  fields: object,
  count: number,
  data: Point[],
};

export type PointsAxiosConfig = {
  params?: PointsParams,
};

export type PointsParams = {
  tank?:string,
  page?: number,
  limit?: number,
};
