"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  Cog6ToothIcon,
  ClipboardDocumentListIcon,
  MagnifyingGlassIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";


  const NavItem = ({
    href,
    icon: Icon,
    label,
  }: {
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
  }) => {
    const pathname = usePathname();
    const active = pathname === href || pathname.startsWith(href + "/");

    return (
      <Link
        href={href}
        className={[
          "flex items-center gap-3 rounded-md px-2 py-2 text-sm",
          active  
          ? "bg-white text-gray-900 shadow-sm ring-1 ring-gray-200"
          : "text-gray-700 hover:bg-white hover:text-gray-900",].join(" ")}
        aria-current={active ? "page" : undefined}>
        <Icon className="w-5 h-5" />
        <span>{label}</span>
      </Link>
    );
  };

  export default function Sidebar() {
    return (
      <aside className="w-64 bg-gray-100 sticky top-0 h-screen">
      <div className="h-14 flex items-center px-4">
        <div className="text-sm font-semibold text-gray-900">CRM Orders</div>
      </div>
  
        {/* Навигация */}
        <div className="px-3 py-2 space-y-6">
          <div className="space-y-1">
            <NavItem href="/orders" icon={ClipboardDocumentListIcon} label="Заказы" />
            <NavItem href="/settings" icon={Cog6ToothIcon} label="Настройки" />
          </div>
        </div>
      </aside>
    );
  }