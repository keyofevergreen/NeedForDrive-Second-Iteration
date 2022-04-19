export interface OrderStatusState {
  orderStatus: OrderStatus[] | null,
  loading: boolean,
  error: string | null,
}

export type OrderStatus = {
  name: string,
  id: string,
};
