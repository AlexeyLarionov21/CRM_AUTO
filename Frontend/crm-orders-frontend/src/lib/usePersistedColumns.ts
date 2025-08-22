
import { useEffect, useState } from 'react';
import { ALL_COLUMNS, type ColumnKey } from '@/components/orders/ColumnFilterButton';  

const DEFAULT = ALL_COLUMNS;
const STORAGE_KEY = 'filter';

export function usePersistedColumns() {

  const [cols, setCols] = useState<ColumnKey[]>(() => {
    if (typeof window === 'undefined') return DEFAULT;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return DEFAULT;
      const parsed = JSON.parse(raw) as string[];
      
      const cleaned = DEFAULT.filter(k => parsed.includes(k));
      return cleaned.length ? cleaned as ColumnKey[] : DEFAULT;
    } catch {
      return DEFAULT;
    }
  });

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cols)); } catch {}
  }, [cols]);

  // sync between tabs
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY) return;
      try {
        const parsed = e.newValue ? (JSON.parse(e.newValue) as string[]) : [];
        const cleaned = DEFAULT.filter(k => parsed.includes(k));
        if (cleaned.length) setCols(cleaned as ColumnKey[]);
      } catch {}
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  return [cols, setCols] as const;
}
