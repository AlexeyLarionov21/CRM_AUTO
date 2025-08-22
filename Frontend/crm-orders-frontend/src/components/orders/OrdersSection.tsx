'use client';

import { useMemo, useState } from 'react';
import { usePersistedColumns } from '@/lib/usePersistedColumns';
import OrdersTable from '@/components/orders/OrdersTable';
import ColumnFilterButton, { ALL_COLUMNS, ColumnKey } from './ColumnFilterButton';
import { Order } from '@/types/order';

type Props = {
  initialData: Order[];
};

export default function OrdersSection({ initialData }: Props) {
  // по умолчанию показываем все
  //const [visibleCols, setVisibleCols] = useState<ColumnKey[]>([...ALL_COLUMNS]);
  const [visibleCols, setVisibleCols] = usePersistedColumns();

  return (
    <section className="px-6">
      <div className="mb-6 flex items-center ">
        <h1 className="text-2xl font-semibold mr-16">Заказы</h1>

        <ColumnFilterButton
          value={visibleCols}
          onChange={setVisibleCols}
        />
      </div>

      <OrdersTable initialData={initialData} visibleColumns={visibleCols} />
    </section>
  );
}