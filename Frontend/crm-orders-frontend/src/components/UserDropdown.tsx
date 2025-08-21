'use client';

import { useState } from 'react';

export default function UserDropdown() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-900 text-white font-medium text-sm px-5 py-2.5 inline-flex items-center hover:bg-gray-800 rounded-lg"
        type="button">
        <img 
          src="/avatar.jpg"          
          alt="avatar"
          className="w-6 h-6 rounded-full mr-2 border-2 border-gray-600" 
        />
        Alexey Larionov
        <svg  className={`w-2.5 h-2.5 ms-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
   
      <div className={`absolute right-0 z-10 bg-gray-50 rounded-lg shadow-lg w-36 transition-all duration-200 ease-out ${
        isOpen 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        <ul className="py-2 text-sm text-gray-700">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
              Profile
            </a>
          </li>
          <li className="border-t border-gray-200">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
