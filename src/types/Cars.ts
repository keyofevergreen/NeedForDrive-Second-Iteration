import { Category } from './Category';

export interface CarsState {
  cars: CarResponse | null,
  loading: boolean,
  error: string | null,
}

export type Car = {
  description: string,
  priceMin: number,
  priceMax: number,
  name: string,
  number: string,
  categoryId: Category | null,
  thumbnail: Thumbnail,
  tank: number | null,
  colors: string[],
  id: string,
  updatedAt?: number,
  createdAt?: number,
};

export type CarResponse = {
  fields: object,
  count: number,
  data: Car[],
};

export type Thumbnail = {
  path: string,
  size: number,
  originalname: string,
  mimetype: string,
};
