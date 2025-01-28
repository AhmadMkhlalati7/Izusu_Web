"use client";

import { useState } from "react";
import Link from "next/link";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { ArrowBigDown, ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CarCard } from "./_components/car_card";
import FiltersSidebar from "./_components/filters_sidebar";

const Home = () => {
  const SAMPLE_CARS = [
    {
      title: "CHEVROLET GROOVE",
      year: "2023",
      trim: "LT",
      location: "Jebel Ali, Dubai",
      specs: ["Basic"],
      price: {
        monthly: 727,
        total: 45999,
      },
      mileage: 25513,
      engineSize: "4cyl 1.5L",
      transmission: "GCC",
      imageUrl: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR.jpg",
      features: ["Cruise control", "test"],
    },
    {
      title: "CHEVROLET GROOVE",
      year: "2023",
      trim: "LT",
      location: "Jebel Ali, Dubai",
      specs: ["Basic"],
      price: {
        monthly: 727,
        total: 45999,
      },
      mileage: 25513,
      engineSize: "4cyl 1.5L",
      transmission: "GCC",
      imageUrl: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR.jpg",
      features: ["Cruise control"],
    },
    {
      title: "CHEVROLET GROOVE",
      year: "2023",
      trim: "LT",
      location: "Jebel Ali, Dubai",
      specs: ["Basic"],
      price: {
        monthly: 727,
        total: 45999,
      },
      mileage: 25513,
      engineSize: "4cyl 1.5L",
      transmission: "GCC",
      imageUrl: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR.jpg",
      features: ["Cruise control"],
    },
    {
      title: "CHEVROLET GROOVE",
      year: "2023",
      trim: "LT",
      location: "Jebel Ali, Dubai",
      specs: ["Basic"],
      price: {
        monthly: 727,
        total: 45999,
      },
      mileage: 25513,
      engineSize: "4cyl 1.5L",
      transmission: "GCC",
      imageUrl: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR.jpg",
      features: ["Cruise control"],
    },
    {
      title: "CHEVROLET GROOVE",
      year: "2023",
      trim: "LT",
      location: "Jebel Ali, Dubai",
      specs: ["Basic"],
      price: {
        monthly: 727,
        total: 45999,
      },
      mileage: 25513,
      engineSize: "4cyl 1.5L",
      transmission: "GCC",
      imageUrl: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR.jpg",
      features: ["Cruise control"],
    },
    {
      title: "CHEVROLET GROOVE",
      year: "2023",
      trim: "LT",
      location: "Jebel Ali, Dubai",
      specs: ["Basic"],
      price: {
        monthly: 727,
        total: 45999,
      },
      mileage: 25513,
      engineSize: "4cyl 1.5L",
      transmission: "GCC",
      imageUrl: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR.jpg",
      features: ["Cruise control"],
    },
    {
      title: "CHEVROLET GROOVE",
      year: "2023",
      trim: "LT",
      location: "Jebel Ali, Dubai",
      specs: ["Basic"],
      price: {
        monthly: 727,
        total: 45999,
      },
      mileage: 25513,
      engineSize: "4cyl 1.5L",
      transmission: "GCC",
      imageUrl: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR.jpg",
      features: ["Cruise control"],
    },
    {
      title: "CHEVROLET GROOVE",
      year: "2023",
      trim: "LT",
      location: "Jebel Ali, Dubai",
      specs: ["Basic"],
      price: {
        monthly: 727,
        total: 45999,
      },
      mileage: 25513,
      engineSize: "4cyl 1.5L",
      transmission: "GCC",
      imageUrl: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR.jpg",
      features: ["Cruise control"],
    },
    {
      title: "CHEVROLET GROOVE",
      year: "2023",
      trim: "LT",
      location: "Jebel Ali, Dubai",
      specs: ["Basic"],
      price: {
        monthly: 727,
        total: 45999,
      },
      mileage: 25513,
      engineSize: "4cyl 1.5L",
      transmission: "GCC",
      imageUrl: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR.jpg",
      features: ["Cruise control"],
    },
    {
      title: "CHEVROLET GROOVE",
      year: "2023",
      trim: "LT",
      location: "Jebel Ali, Dubai",
      specs: ["Basic"],
      price: {
        monthly: 727,
        total: 45999,
      },
      mileage: 25513,
      engineSize: "4cyl 1.5L",
      transmission: "GCC",
      imageUrl: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR.jpg",
      features: ["Cruise control"],
    },
    {
      title: "CHEVROLET GROOVE",
      year: "2023",
      trim: "LT",
      location: "Jebel Ali, Dubai",
      specs: ["Basic"],
      price: {
        monthly: 727,
        total: 45999,
      },
      mileage: 25513,
      engineSize: "4cyl 1.5L",
      transmission: "GCC",
      imageUrl: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR.jpg",
      features: ["Cruise control"],
    },
    {
      title: "CHEVROLET GROOVE",
      year: "2023",
      trim: "LT",
      location: "Jebel Ali, Dubai",
      specs: ["Basic"],
      price: {
        monthly: 727,
        total: 45999,
      },
      mileage: 25513,
      engineSize: "4cyl 1.5L",
      transmission: "GCC",
      imageUrl: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR.jpg",
      features: ["Cruise control"],
    },
    {
      title: "CHEVROLET GROOVE",
      year: "2023",
      trim: "LT",
      location: "Jebel Ali, Dubai",
      specs: ["Basic"],
      price: {
        monthly: 727,
        total: 45999,
      },
      mileage: 25513,
      engineSize: "4cyl 1.5L",
      transmission: "GCC",
      imageUrl: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR.jpg",
      features: ["Cruise control"],
    },
    {
      title: "CHEVROLET GROOVE",
      year: "2023",
      trim: "LT",
      location: "Jebel Ali, Dubai",
      specs: ["Basic"],
      price: {
        monthly: 727,
        total: 45999,
      },
      mileage: 25513,
      engineSize: "4cyl 1.5L",
      transmission: "GCC",
      imageUrl: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR.jpg",
      features: ["Cruise control"],
    },
    {
      title: "CHEVROLET GROOVE",
      year: "2023",
      trim: "LT",
      location: "Jebel Ali, Dubai",
      specs: ["Basic"],
      price: {
        monthly: 727,
        total: 45999,
      },
      mileage: 25513,
      engineSize: "4cyl 1.5L",
      transmission: "GCC",
      imageUrl: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR.jpg",
      features: ["Cruise control"],
    },
    // Add more sample cars as needed
  ];
  type Checked = DropdownMenuCheckboxItemProps["checked"];

  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
  const [showPanel, setShowPanel] = useState<Checked>(false);

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Sidebar */}
      <div className="col-span-12 md:col-span-3 2xl:col-span-2">
        <FiltersSidebar onFilterChange={undefined} />
      </div>

      {/* Main Content */}
      <div className="col-span-12 md:col-span-9 2xl:col-span-10">
        <div className="flex-1">
          {/* Cars Grid */}
          <div className="flex justify-between">
            <h2 className="my-2 text-lg font-medium">28 Used Cars in Dubai</h2>
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">
                    <ArrowDown />
                    sort by
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white">
                  <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}
                  >
                    Status Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showActivityBar}
                    onCheckedChange={setShowActivityBar}
                    disabled
                  >
                    Activity Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showPanel}
                    onCheckedChange={setShowPanel}
                  >
                    Panel
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4">
            {SAMPLE_CARS.map((car, index) => (
              <CarCard key={index} {...car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
