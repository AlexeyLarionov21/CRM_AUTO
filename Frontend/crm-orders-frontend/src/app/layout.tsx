import "./globals.css";
import { headers } from 'next/headers';
import type { Metadata } from "next";
import Sidebar from "../components/Sidebar"; 
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "CRM Orders",
  description: "CRM для управления заказами авто из Японии",
};

export default function RootLayout({
  children, }: {children: React.ReactNode;}) {
   

  return (
    <html lang="ru">
      <body className="h-screen bg-gray-100">
        <div className="flex h-full">
          <Sidebar />

          <div className="flex-1 p-2 bg-gray-100">
          <div className="min-h-full  bg-white rounded-2xl shadow-sm border-1 border-gray-200">
              <main className="overflow-y-auto p-6">{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

