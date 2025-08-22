import { Order } from '@/types/order';

export async function getOrders(): Promise<Order[]> {
  // ...select * from orders order by created_at desc
  return [];
}