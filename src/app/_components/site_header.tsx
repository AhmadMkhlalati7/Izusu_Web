import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 text-white">
      <div className="bg-red-500">
        <div className="container mx-auto">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-6">
              <Link href="/">
                <Image
                  src="https:isuzu.sa/wp-content/uploads/2024/09/Isuzu-New-East-Saudi-Logo_192x45.svg"
                  width={200}
                  height={150}
                  alt={"logo"}
                />
              </Link>
              <div className="flex items-center gap-2">
                <span>Dubai</span>
              </div>
            </div>
            <div className="mx-6 max-w-2xl flex-1">
              <div className="relative">
                <Input
                  placeholder="Search Sunroof"
                  className="w-full bg-white pl-4 pr-10 text-black"
                />
                <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="">
                Get App
              </Button>
              <Button variant="ghost" className="">
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
      <nav className="border-b bg-white">
        <div className="container mx-auto">
          <div className="flex h-12 items-center gap-6 px-4">
            <Link href="/buy-used-car" className="text-sm font-medium">
              Buy Used Car
            </Link>
            <Link href="/sell-car" className="text-sm font-medium">
              Sell Car
            </Link>
            <Link href="/car-loan-calculator" className="text-sm font-medium">
              Car loan calculator
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
