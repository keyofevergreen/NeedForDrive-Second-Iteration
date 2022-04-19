export interface RateTypesState {
  rateTypes: RateTypeResponse | null,
  loading: boolean,
  error: string | null,
}

export type RateType = {
  unit: string,
  name: string,
  id: string,
};

export type RateTypeResponse = {
  fields: object,
  count: number,
  data: RateType[],
};