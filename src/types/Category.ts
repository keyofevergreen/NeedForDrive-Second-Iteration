export interface CategoryState {
  category: Category[] | null,
  loading: boolean,
  error: number | null,
  categoryById: Category | null,
  categoryByIdLoading: boolean,
  categoryByIdError: number | null,
}

export type Category = {
  name: string,
  description?: string,
  id: string,
  updatedAt?: number,
  createdAt?: number,
};
