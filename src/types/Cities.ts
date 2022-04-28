export interface CitiesState {
  cities: City[] | null,
  loading: boolean,
  error: number | null,
}

export type City = {
  name: string,
  updatedAt?: number,
  createdAt?: number,
  id?: string,
};
