"use client";

import { notFound, useParams } from "next/navigation";

import CarDetails from "../(site)/_components/car-details";

// This would typically come from an API or database
const SAMPLE_CARS = {
  "1": {
    id: "1",
    title: "CHEVROLET GROOVE",
    year: "2023",
    trim: "LT",
    location: "Jebel Ali, Dubai",
    price: {
      monthly: 727,
      total: 45999,
    },
    mileage: 25513,
    engineSize: "4cyl 1.5L",
    transmission: "Automatic",
    vin: "true",
    color: "Automatic",
    specs: "GCC",
    features: [
      "Cruise Control",
      "Parking Sensors",
      "Bluetooth",
      "USB Port",
      "Air Conditioning",
    ],
    images: [
      "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR.jpg",
      "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-F-Series-Completed-Truck.jpg",
    ],
    condition: "Excellent",
    serviceHistory: [
      {
        date: "2024-01-15",
        mileage: 25000,
        service: "Regular Maintenance",
      },
    ],
  },
};

export default function CarDetailsPage() {
  const params = useParams<{ id: string }>();
  console.log(params.id);

  const car = SAMPLE_CARS[params.id];
  console.log(car);
  if (!car) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <CarDetails car={car} />
    </div>
  );
}
