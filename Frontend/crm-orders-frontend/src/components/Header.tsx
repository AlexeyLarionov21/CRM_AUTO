"use client";

import SearchField from "@/components/SearchField";
import UserDropdown from "@/components/UserDropdown";

export default function Header() {
  return (
    <header className="bg-transparent text-gray-800 items-center flex justify-between border-b border-gray-200 mb-8 pb-6">
      <div className="flex items-center gap-10 min-w-0">
        <h1 className="text-xl font-semibold whitespace-nowrap">CRM Orders</h1>
        <div className="flex-none w-[28rem] ml-10">
          <SearchField/>
        </div>
      </div>
      <UserDropdown/>
    </header>
  );
}