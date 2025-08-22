import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

export function Table(props: ComponentPropsWithoutRef<'table'>) {
  return <table {...props} className={clsx(
    "w-full text-left text-sm",
    "border-separate border-spacing-0", 
    props.className
  )} />;
}

export function THead(props: ComponentPropsWithoutRef<'thead'>) {
  return <thead {...props} className={clsx("sticky top-0 bg-white z-10", props.className)} />;
}

export function TH(props: ComponentPropsWithoutRef<'th'>) {
  return <th {...props} className={clsx(
    "px-4 py-3 font-medium text-gray-600 border-b border-gray-200",
    props.className
  )} />;
}

export function TR(props: ComponentPropsWithoutRef<'tr'>) {
  return <tr {...props} className={clsx("hover:bg-gray-50", props.className)} />;
}

export function TD(props: ComponentPropsWithoutRef<'td'>) {
  return <td {...props} className={clsx(
    "px-4 py-3 border-b border-gray-100 align-middle",
    props.className
  )} />;
}
