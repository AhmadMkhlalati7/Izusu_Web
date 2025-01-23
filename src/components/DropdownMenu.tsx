"use client"

import { useState } from "react"
import Link from "next/link"

interface DropdownMenuProps {
  title: string
  items: Array<{ name: string; href: string }>
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="py-2 px-4 hover:bg-gray-100 rounded transition-colors duration-300">{title}</button>
      {isOpen && (
        <div className="absolute left-0 w-64 bg-white shadow-lg rounded-md py-2 mt-2 z-50">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropdownMenu

