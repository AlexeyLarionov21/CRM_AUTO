'use client';

import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoFunnelOutline  } from "react-icons/io5";

export type ColumnKey =
  | 'preview'
  | 'status'
  | 'vin'
  | 'makeModel'
  | 'color'
  | 'year'
  | 'score'
  | 'mileage'
  | 'price'
  | 'orderDate'
  | 'eta';

export const ALL_COLUMNS: ColumnKey[] = ['preview','status','vin','makeModel','color','year','score','mileage','price','orderDate','eta',];

export const COLUMN_LABELS: Record<ColumnKey, string> = {
  preview: 'Превью',
  status: 'Статус',
  vin: 'Кузов',
  makeModel: 'Марка / Модель',
  color: 'Цвет',
  year: 'Год',
  score: 'Балл',
  mileage: 'Пробег',
  price: 'Цена',
  orderDate: 'Дата заказа',
  eta: 'Прибытие',
};

type Props = {
  value: ColumnKey[];                       
  onChange: (next: ColumnKey[]) => void;    
  className?: string;
};



export default function ColumnFilterButton({ value, onChange, className }: Props) {

  

  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number; minWidth: number }>({ top: 0, left: 0, minWidth: 256 });
  const menuId = useId();

  const measure = () => {
    const r = btnRef.current?.getBoundingClientRect();
    if (r) setPos({ top: r.bottom + 8, left: r.left, minWidth: Math.max(256, r.width) });
  };

  useLayoutEffect(() => { if (open) measure(); }, [open]);

  useEffect(() => {
    if (!open) return;
  
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      
      if (btnRef.current?.contains(target)) return;
      if (menuRef.current?.contains(target)) return;
      setOpen(false);
    };
  
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
  
    document.addEventListener('mousedown', onPointerDown, true);
    document.addEventListener('touchstart', onPointerDown, true);
    document.addEventListener('keydown', onEsc);
  
    return () => {
      document.removeEventListener('mousedown', onPointerDown, true);
      document.removeEventListener('touchstart', onPointerDown, true);
      document.removeEventListener('keydown', onEsc);
    };
  }, [open]);

  

  const toggle = (key: ColumnKey) => {
    const next = value.includes(key) ? value.filter(k => k !== key) : [...value, key];
    if (next.length === 0) return; 
    onChange(next);
  };

  
  
  return (
    <div className="relative" >
      <button
        ref={btnRef}
        onClick={() => {
          if (open) { setOpen(false); return; }
          measure();         // ← вычисляем позицию
          setOpen(true);     // ← открываем
        }}
        type="button"
        className="inline-flex items-stretch gap-2 rounded-lg bg-gray-900 px-3 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
      >
        <span className="inline-flex items-center gap-2">
          <IoFunnelOutline size={16} />
          Фильтр
        </span>

        <span aria-hidden className="mx-1 w-px self-stretch bg-white/30" />

        <svg  className={`w-2.5 h-2.5 ms-1 self-center transition-transform duration-200 ${open ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      {typeof document !== 'undefined' && createPortal(
        <>
           <div
              ref={menuRef}
              id={menuId}
              role="menu"
              aria-hidden={!open}
              className={`fixed z-[70] max-h-[70vh] min-w-[15rem] overflow-y-auto rounded-lg bg-white p-2 shadow-lg transition-opacity duration-200 ${open ? 'opacity-100 ease-out' : 'opacity-0 ease-in pointer-events-none'}`}
              style={{ top: pos.top, left: pos.left, minWidth: pos.minWidth }}
            >
            <ul className="-mx-2 divide-y divide-gray-200">
              {ALL_COLUMNS.map(k => (
                <li key={k}>
                  <label className="flex w-full cursor-pointer select-none items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-rose-500"
                      checked={value.includes(k)}
                      onChange={() => toggle(k)}
                      role="menuitemcheckbox"
                      aria-checked={value.includes(k)}
                    />
                    <span>{COLUMN_LABELS[k]}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </>,
        document.body
      )}
    </div>
  );
}


