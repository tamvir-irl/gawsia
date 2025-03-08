import { useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-left uppercase"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Dropdown Button */}
      <div className="inline-flex w-full justify-center gap-x-1.5 hover:underline hover:underline-offset-4 uppercase cursor-pointer">
        {title}
        <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-700" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="duration-200 absolute right-0 z-10 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
        >
          <div className="py-1">
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
