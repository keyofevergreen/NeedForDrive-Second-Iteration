export type UploadedEntityState = {
  uploadedEntity: any | null,
  uploadedEntityLoading: boolean,
  uploadedEntityError: number | null,
  successAlertMessage: string | null,
};

export interface CarForm {
  name: string,
  categoryId: string,
  colors: string[],
  thumbnail: FileList | null,
  description: string,
  number: string,
  priceMin: string,
  priceMax: string,
  tank: string | number,
}

export type OrderStatusForm = {
  name: string,
};

export type PointForm = {
  name: string,
  cityId: string,
  address: string,
};

export type CityForm = {
  name: string,
};

export type RateForm = {
  price: string,
  rateTypeId: string,
};

export type CategoryForm = {
  name: string,
  description: string,
};

export type RateTypeForm = {
  unit: string,
  name: string,
};
