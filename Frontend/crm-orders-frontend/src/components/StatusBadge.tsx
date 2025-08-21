"use client";

import type { OrderStatus } from "@/types/order";

export default function StatusBadge({ status }: { status: OrderStatus }) {
  const map: Record<OrderStatus, string> = {
    "Новый":      "bg-blue-100 text-blue-700",
    "В пути":     "bg-amber-100 text-amber-700",
    "Доставлен":  "bg-green-100 text-green-700",
    "Завершен":   "bg-slate-100 text-slate-700",
    "Отменен":    "bg-red-100 text-red-700",
  };

  return (
    <span className={`px-2 py-1 rounded-md text-xs font-medium ${map[status]}`}>
      {status}
    </span>
  );
}
