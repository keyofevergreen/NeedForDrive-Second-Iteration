import { City } from './Cities';

export interface PointsState {
  points: PointResponse | null,
  loading: boolean,
  error: string | null,
}

export type Point = {
  name: string,
  address: string,
  cityId?: City | null,
  id?: number,
};

export type PointResponse = {
  fields: object,
  count: number,
  data: Point[],
};
