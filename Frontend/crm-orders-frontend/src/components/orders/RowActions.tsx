'use client';

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

export default function RowActions({ onEdit,  onDelete }: Props) {
  const btn = "rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50";
  return (
    <div className="flex gap-2">
      <button onClick={onEdit} className={btn}>Редактировать</button>
      <button onClick={onDelete} className={btn + " border-rose-300 hover:bg-rose-50"}>Удалить</button>
    </div>
  );
}