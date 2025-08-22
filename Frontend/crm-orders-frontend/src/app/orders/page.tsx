import StatusBadge from "@/components/StatusBadge";
import { Suspense } from 'react';
import { OrderStatus } from "@/types/order";
import Header from "@/components/Header"; 
import { getOrders } from '@/lib/db/orders';
import OrdersTable from '@/components/orders/OrdersTable';
import { MOCK_ORDERS } from "@/lib/mockOrders";
import OrdersSection from "@/components/orders/OrdersSection";

export default async function OrdersPage() {

  const data = await getOrders();

  return (
    <>
    <section>
      <Header/>
   </section>
      <Suspense fallback={<div className="h-48 animate-pulse rounded-lg bg-gray-100" />}>
        <OrdersSection initialData={MOCK_ORDERS} />
      </Suspense>
    
    </>
  );
}
