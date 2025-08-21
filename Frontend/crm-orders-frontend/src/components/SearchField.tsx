"use client";
import { Input } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function SearchField() {
  return (
   
   <label htmlFor="search" className="block w-full">
      <div className="
        flex items-center gap-2
        rounded-lg border border-gray-200 bg-white
        px-3 py-2 shadow-sm
        focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-0">
         <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 flex-shrink-0" aria-hidden="true" />
         <Input
          id="search"
          name="search"
          type="search"
          placeholder="Search…"
          aria-label="Search"
          className="flex-1  bg-transparent outline-none placeholder:text-gray-400 text-sm text-gray-800"
        />
      </div>
    </label>
  )
}