"use client";

import { useState } from "react";
import { FilterIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button"; // ShadCN Button

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox"; // ShadCN Checkbox
import { Slider } from "@/components/ui/slider"; // ShadCN Slider

export default function FiltersSidebar({ onFilterChange }) {
  const [selectedMakes, setSelectedMakes] = useState([]);
  const [priceRange, setPriceRange] = useState([10000, 50000]);
  const [fuelTypes, setFuelTypes] = useState([]);

  const carMakes = ["Toyota", "Honda", "Ford", "BMW"];
  const fuelOptions = ["Petrol", "Diesel", "Electric", "Hybrid"];

  const toggleMake = (make) => {
    setSelectedMakes((prev) =>
      prev.includes(make) ? prev.filter((m) => m !== make) : [...prev, make],
    );
  };

  const toggleFuelType = (fuel) => {
    setFuelTypes((prev) =>
      prev.includes(fuel) ? prev.filter((f) => f !== fuel) : [...prev, fuel],
    );
  };

  const handleApplyFilters = () => {
    onFilterChange({
      makes: selectedMakes,
      priceRange,
      fuelTypes,
    });
  };

  return (
    <Card className="sticky top-20 w-full rounded-lg bg-white p-4">
      <h2 className="mb-4 flex justify-between text-lg font-semibold">
        Filter Cars
        <FilterIcon size={20} />
      </h2>
      <Accordion
        type="single"
        collapsible
        className="space-y-4"
        defaultValue="makes"
      >
        {/* Car Makes Filter */}
        <AccordionItem value="makes">
          <AccordionTrigger>Car Makes</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {carMakes.map((make) => (
                <div key={make} className="flex items-center space-x-2">
                  <Checkbox
                    id={make}
                    checked={selectedMakes.includes(make)}
                    onCheckedChange={() => toggleMake(make)}
                  />
                  <label htmlFor={make} className="text-sm">
                    {make}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Range Filter */}
        <AccordionItem value="price-range">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p className="text-sm">
                Range: ${priceRange[0]} - ${priceRange[1]}
              </p>
              <Slider
                value={priceRange}
                onValueChange={(value) => setPriceRange(value)}
                min={5000}
                max={100000}
                step={5000}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Fuel Type Filter */}
        <AccordionItem value="fuel-type">
          <AccordionTrigger>Fuel Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {fuelOptions.map((fuel) => (
                <div key={fuel} className="flex items-center space-x-2">
                  <Checkbox
                    id={fuel}
                    checked={fuelTypes.includes(fuel)}
                    onCheckedChange={() => toggleFuelType(fuel)}
                  />
                  <label htmlFor={fuel} className="text-sm">
                    {fuel}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Apply Filters Button */}
      <Button
        onClick={handleApplyFilters}
        variant={"destructive"}
        className="mt-6 w-full rounded-sm"
      >
        <FilterIcon />
        Apply Filters
      </Button>
    </Card>
  );
}
