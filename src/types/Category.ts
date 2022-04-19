export interface CategoryState {
  category: Category[] | null,
  loading: boolean,
  error: string | null,
}

export type Category = {
  name: string,
  description: string,
  id: number,
  updatedAt?: number,
  createdAt?: number,
};