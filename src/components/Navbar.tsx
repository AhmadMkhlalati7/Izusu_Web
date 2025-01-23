"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "N-series", href: "/#N-series" },
    { name: "F-series", href: "/#F-series" },
    { name: "Parts", href: "/#Parts" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="https://isuzu.sa/wp-content/uploads/2024/09/Isuzu-New-East-Saudi-Logo_192x45.svg"
                width={200}
                height={150}
                alt={"logo"}
              />
            </Link>
          </div>
          <div className="hidden items-center space-x-4 md:flex">
            {navItems.map((item: { name: string; href: string }) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden items-center space-x-4 md:flex">
            <Link href="/book">
              <Button variant="destructive" size="sm">
                Book an appointment <Calendar />
              </Button>
            </Link>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/book">
              <Button variant="destructive" size="sm">
                Book an appointment <Calendar />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
