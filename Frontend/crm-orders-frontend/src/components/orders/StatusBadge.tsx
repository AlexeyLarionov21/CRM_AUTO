'use client';

import { OrderStatus } from '@/types/order';
import clsx from 'clsx';

const statusClasses: Record<OrderStatus, string> = {
  [OrderStatus.New]:       'bg-blue-500 text-white',
  [OrderStatus.InTransit]: 'bg-amber-500 text-white',
  [OrderStatus.Delivered]: 'bg-green-600 text-white',
  [OrderStatus.Completed]: 'bg-purple-600 text-white',
  [OrderStatus.Cancelled]: 'bg-rose-600 text-white',
};

export default function StatusBadge({ status }: { status: OrderStatus }) {
  return (
    <span className={clsx('inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium', statusClasses[status])}>
      {labelFromStatus(status)}
    </span>
  );
}

function labelFromStatus(s: OrderStatus): string {
  switch (s) {
    case OrderStatus.New:        return 'Новый';
    case OrderStatus.InTransit:  return 'В пути';
    case OrderStatus.Delivered:  return 'Доставлен';
    case OrderStatus.Completed:  return 'Завершен';
    case OrderStatus.Cancelled:  return 'Отменен';
  }
}
