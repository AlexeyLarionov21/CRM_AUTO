"use client";

import StatusBadge from "@/components/StatusBadge";
import { OrderStatus } from "@/types/order";
import Header from "@/components/Header"; 

type Order = {
  id: string;
  preview: string;        
  vin: string;            
  brand: string;
  model: string;
  year: number;
  grade: number;          
  price: number;          
  orderedAt: string;     
  eta?: string;           
  status: OrderStatus;
};

const MOCK_ORDERS: Order[] = [
  {
    id: "ORD-1001",
    preview: "Белый, 45 000 км",
    vin: "E12-1234567",
    brand: "Nissan",
    model: "Note",
    year: 2018,
    grade: 4.0,
    price: 680000,
    orderedAt: "2025-03-20",
    eta: "2025-05-10",  
    status: OrderStatus.InTransit,
  },  
  {
    id: "ORD-1002",
    preview: "Серебристый, 62 000 км",
    vin: "ZGE20-7654321",
    brand: "Toyota",
    model: "Wish",
    year: 2014,
    grade: 3.5,
    price: 540000,
    orderedAt: "2025-03-12",
    eta: "2025-04-30",
    status: OrderStatus.New,
  },
  {
    id: "ORD-1003",
    preview: "Гибрид, 80 000 км",
    vin: "NHW20-9988776",
    brand: "Toyota",
    model: "Prius",
    year: 2012,
    grade: 4.0,
    price: 510000,
    orderedAt: "2025-02-05",
    eta: "2025-03-25",
    status: OrderStatus.Delivered,
  },
];

export default function OrdersPage() {
  const handleAddOrder = () => {
    alert("Здесь будет форма добавления нового заказа");
  };

  const handleEditOrder = (id: string) => {
    alert(`Редактировать ${id}`);
  };

  const handleStatusChange = (id: string) => {
    alert(`Быстрая смена статуса ${id}`);
  };

  const handleDeleteOrder = (id: string) => {
    confirm(`Удалить ${id}?`);
  };

  return (
    <>
    <section>
      <Header/>
    </section>
        
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Заказы</h1>
        <button
          className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
          // TODO: откроем модалку формы создания заказа
          onClick={handleAddOrder}
        >
          + Новый заказ
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl bg-white shadow">
        <table className="min-w-full text-sm">
          <thead className="border-b bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Превью</th>
              <th className="px-4 py-3">Кузов</th>
              <th className="px-4 py-3">Марка / Модель</th> 
              <th className="px-4 py-3">Год</th>
              <th className="px-4 py-3">Балл</th>
              <th className="px-4 py-3">Цена</th>
              <th className="px-4 py-3">Дата заказа</th>
              <th className="px-4 py-3">ETA</th>
              <th className="px-4 py-3">Статус</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {MOCK_ORDERS.map((o) => (
              <tr key={o.id} className="border-b last:border-0">
                <td className="px-4 py-3 font-medium">{o.id}</td>
                <td className="px-4 py-3 text-gray-600">{o.preview}</td>
                <td className="px-4 py-3">{o.vin}</td>
                <td className="px-4 py-3">
                  {o.brand} {o.model}
                </td>
                <td className="px-4 py-3">{o.year}</td>
                <td className="px-4 py-3">{o.grade}</td>
                <td className="px-4 py-3">{o.price.toLocaleString("ru-RU")} ¥</td>
                <td className="px-4 py-3">{o.orderedAt}</td>
                <td className="px-4 py-3">{o.eta ?? "—"}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={o.status} />
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button
                      className="rounded-lg border px-3 py-1 hover:bg-gray-50"
                      onClick={() => handleEditOrder(o.id)}
                    >
                      Редактировать
                    </button>
                    <button
                      className="rounded-lg border px-3 py-1 hover:bg-gray-50"
                      onClick={() => handleStatusChange(o.id)}
                    >
                      Статус
                    </button>
                    <button
                      className="rounded-lg border px-3 py-1 hover:bg-gray-50"
                      onClick={() => handleDeleteOrder(o.id)}
                    >
                      Удалить
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    </>
  );
}
