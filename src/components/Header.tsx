"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, ShoppingBag, ShoppingCart, X } from "lucide-react";

import CartTable from "@/app/_components/cart_table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useProductStore } from "@/store/product_store";
import { Input } from "./ui/input";
import { NotificationBadge } from "./ui/notification-badge";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cart } = useProductStore();
  return (
    <>
      <header className="sticky top-0 z-50">
        <nav className="bg-white bg-opacity-90 shadow-sm backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    src="https:isuzu.sa/wp-content/uploads/2024/09/Isuzu-New-East-Saudi-Logo_192x45.svg"
                    width={200}
                    height={150}
                    alt={"logo"}
                  />
                </Link>
              </div>
              <div className="mx-6 hidden max-w-2xl flex-1 sm:flex">
                <div className="flex w-full items-center">
                  <Input
                    type="search"
                    placeholder="Search by Brand or Model"
                    className="rounded-l-full rounded-r-none"
                  />
                  <Button
                    type="submit"
                    variant={"destructive"}
                    className="rounded-l-none rounded-r-full"
                  >
                    <Search />
                  </Button>
                  <div className="absolute right-3 top-1/2"></div>
                </div>
              </div>
              <div className="hidden items-center space-x-4 md:flex">
                <ul className="flex flex-row justify-between">
                  <li>
                    <Button
                      onClick={() => setIsCartOpen(!isCartOpen)}
                      variant={"ghost"}
                    >
                      <NotificationBadge
                        label={cart.length}
                        variant="destructive"
                      >
                        <ShoppingCart className="mr-1 inline-block h-5 w-5" />
                      </NotificationBadge>
                    </Button>
                  </li>
                </ul>
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
                <ul className="flex flex-row justify-between">
                  <li>
                    <Button
                      onClick={() => setIsCartOpen(!isCartOpen)}
                      variant={"ghost"}
                    >
                      <NotificationBadge
                        label={cart.length}
                        variant="destructive"
                      >
                        <ShoppingCart className="mr-1 inline-block h-5 w-5" />
                      </NotificationBadge>
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <Sheet
            open={isCartOpen}
            onOpenChange={() => setIsCartOpen(!isCartOpen)}
          >
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="my-5 flex">
                  <p className="text-xl font-light">Shopping Cart</p>
                  <ShoppingBag className="mx-2" />
                </SheetTitle>
              </SheetHeader>
              <Separator className="mb-5"></Separator>

              <CartTable cartItems={cart} />
              <SheetFooter className="block">
                <SheetDescription className="my-2">
                  Make changes to your cart here. Click Place order when
                  you&apos;re done.
                </SheetDescription>
                <Button
                  type="submit"
                  variant={"destructive"}
                  className="mt-5 w-full"
                >
                  Place order
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
      <div className="border-b bg-white">
        <div className="container mx-auto">
          <div className="flex h-12 items-center gap-6 px-4">
            <Link href="/buy-used-car" className="text-sm font-medium">
              Used Truck
            </Link>
            <Link href="/sell-car" className="text-sm font-medium">
              New Truck
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
