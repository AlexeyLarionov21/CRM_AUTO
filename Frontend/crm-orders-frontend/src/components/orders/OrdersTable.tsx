'use client';

import { useState } from 'react';
import { Order } from '@/types/order';
import StatusBadge from './StatusBadge';
import RowActions from './RowActions';
import { ColumnKey } from './ColumnFilterButton';

type Props = {
  initialData: Order[];
  visibleColumns: ColumnKey[];
}

export default function OrdersTable({ initialData, visibleColumns }: Props) {
  const [rows, setRows] = useState<Order[]>(initialData);

  const colOn = (key: ColumnKey) => visibleColumns.includes(key);

  return (
    <div className="rounded-xl border-1 border-gray-200 bg-white overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-separate border-spacing-0">
          <thead className="sticky top-0 bg-white z-10">
            <tr className='bg-gray-100'>
              <th className="table-head">ID</th>
              {colOn('preview') && <th className="table-head">Превью</th>}
              {colOn('status') && <th className="table-head">Статус</th>}
              {colOn('vin') && <th className="table-head">Кузов</th>}
              {colOn('makeModel') && <th className="table-head">Марка / Модель</th>}
              {colOn('color') && <th className="table-head">Цвет</th>}
              {colOn('year') && <th className="table-head">Год</th>}
              {colOn('score') && <th className="table-head">Балл</th>}
              {colOn('mileage') && <th className="table-head">Пробег</th>}
              {colOn('price') && <th className="table-head">Цена</th>}
              {colOn('orderDate') && <th className="table-head">Дата заказа</th>}
              {colOn('eta') && <th className="table-head">Прибытие</th>}
              <th className="table-head">Действия</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((rowElement) => (
              <tr key={rowElement.id} className="hover:bg-gray-50">
                <td className="td-base font-medium text-gray-700">{rowElement.id}</td>
                {colOn('preview') && <td className="td-base text-gray-600">{rowElement.preview}</td>}
                {colOn('status') && (<td className="td-base">
                  <StatusBadge status={rowElement.status} />
                </td>)}
                {colOn('vin') && <td className="td-base text-gray-600">{rowElement.vin}</td>}
                {colOn('makeModel') && <td className="td-base text-gray-700">{rowElement.makeModel}</td>}
                {colOn('color') && <td className="td-base text-gray-700">{rowElement.color}</td>}
                {colOn('year') && <td className="td-base">{rowElement.year}</td>}
                {colOn('score') && <td className="td-base">{rowElement.score}</td>}
                {colOn('mileage') && <td className="td-base">{rowElement.mileage}</td>}
                {colOn('price') && <td className="td-base">{rowElement.priceJPY.toLocaleString('ja-JP')} ¥</td>}
                {colOn('orderDate') && <td className="td-base">{rowElement.orderDate}</td>}
                {colOn('eta') && <td className="td-base">{rowElement.eta}</td>}
                <td className="td-base">
                  <RowActions
                    onEdit={() => {/* открыть модал/маршрут */}}
                    onDelete={() => {/* confirm + fetch DELETE */}}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}