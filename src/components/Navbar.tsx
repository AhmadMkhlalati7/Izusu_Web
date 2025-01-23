"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Vehicles",
      items: [
        { name: "Model S", href: "/order/model-s" },
        { name: "Model 3", href: "/order/model-3" },
        { name: "Model X", href: "/order/model-x" },
        { name: "Model Y", href: "/order/model-y" },
      ],
    },
    {
      name: "Energy",
      items: [
        { name: "Solar Panels", href: "/order/solar-panels" },
        { name: "Solar Roof", href: "/order/solar-roof" },
        { name: "Powerwall", href: "/powerwall" },
      ],
    },
    { name: "Charging", href: "/charging" },
    { name: "Discover", href: "/discover" },
    { name: "Shop", href: "/shop" },
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
            {navItems.map((item) =>
              item.items ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center"
                    >
                      {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.items.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link href={subItem.href}>{subItem.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>
          <div className="hidden items-center space-x-4 md:flex">
            <Button variant="ghost" size="sm">
              Account
            </Button>
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
            {navItems.map((item) =>
              item.items ? (
                <div key={item.name} className="space-y-1">
                  <div className="px-3 py-2 text-sm font-medium text-gray-700">
                    {item.name}
                  </div>
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block rounded-md px-3 py-2 pl-6 text-sm font-medium text-gray-500 hover:text-gray-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ),
            )}
            <Link
              href="/account"
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
