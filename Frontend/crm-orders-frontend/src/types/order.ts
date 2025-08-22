export enum OrderStatus {
  New = "New",
  InTransit = "In transit",
  Delivered = "Delivered",
  Completed = "Done",
  Cancelled = "Cancelled",
}

export interface Order {
  id: string;              // "ORD-1001"
  preview: string;         
  vin: string;      // "E12-1234567"
  makeModel: string; // "Nissan Note"
  color: string;       
  year: number;            // 2018
  score: number;           // 4 | 3.5 ...
  mileage: number;
  priceJPY: number;        // 680000
  orderDate: string;       // "2025-03-20"
  eta: string;             // "2025-05-10"
  status: OrderStatus;     // 'in_transit' | ...
}