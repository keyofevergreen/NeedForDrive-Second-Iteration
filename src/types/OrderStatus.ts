export interface OrderStatusState {
  orderStatus: OrderStatus[] | null,
  loading: boolean,
  error: number | null,
  submitStatusId: string | null,
  cancelStatusId: string | null,
  orderStatusById: OrderStatus | null,
  orderStatusByIdLoading: boolean,
  orderStatusByIdError: number | null,
}

export type OrderStatus = {
  name: string,
  id: string,
};
