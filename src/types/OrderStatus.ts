export interface OrderStatusState {
  orderStatus: OrderStatus[] | null,
  loading: boolean,
  error: number | null,
}

export type OrderStatus = {
  name: string,
  id: string,
};
