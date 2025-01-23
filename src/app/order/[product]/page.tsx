"use client";

import { useState } from "react";
import Image from "next/image";
import { BadgeCheck, ChevronDown } from "lucide-react";

import ColorSelector from "@/components/ColorSelector";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SellForm from "./_components/SellForm";

const product = {
  name: "Model S",
  variants: [
    { name: "Rear-Wheel Drive", range: "272", speed: "140", price: 40240 },
    { name: "Long Range", range: "333", speed: "145", price: 47240 },
    { name: "Performance", range: "315", speed: "162", price: 53240 },
  ],
  colors: [
    { name: "Pearl White Multi-Coat", code: "#f2f2f2" },
    { name: "Midnight Silver Metallic", code: "#5c5e62" },
    { name: "Deep Blue Metallic", code: "#041e32" },
    { name: "Solid Black", code: "#222" },
    { name: "Red Multi-Coat", code: "#af2134" },
  ],

  image: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NMR.jpg",
  specs: {
    gvw: "5.5t",
    engine: "4JJ1-TC",
    drivingSystem: "4×2",
    transmission: "MYY5T /5speed",
    power: "34.0 / 1600",
    torque: "96(130) / 2800",
    axleCapacity: {
      front: "2900",
      rear: "5000",
    },
  },
};

export default function OrderPage() {
  // const params = useParams();
  // const product = params.product as keyof typeof products;
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [showDetails, setShowDetails] = useState(true);
  const [selectedVariant] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  // if (!product) {
  //   return <div>Product not found</div>;
  // }

  const { name, image, specs, variants, colors } = product;
  function handleButtonClick(): void {
    setOpenModal(true);
  }
  return (
    <div className="px-4 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full">
        <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Carousel className="w-full">
              <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/1 lg:basis-1/1 pl-1"
                  >
                    <div className="p-1">
                      <Image
                        src={image}
                        alt={name}
                        width={1200}
                        height={800}
                        className="mb-8 rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="relative left-0 translate-x-5" />
              <CarouselNext className="relative left-0 mx-5 translate-x-5" />
            </Carousel>
          </div>
          <div className="lg:col-span-2">
            <div>
              <h1 className="mb-10 text-4xl font-bold">{name}</h1>
            </div>
            <div className="mb-8 grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold">
                  {variants[selectedVariant].range} mi
                </h3>
                <p className="text-gray-600">Range (EPA est.)</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  {variants[selectedVariant].speed} mph
                </h3>
                <p className="text-gray-600">Top Speed</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">3.1 sec</h3>
                <p className="text-gray-600">0-60 mph</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">AWD</h3>
                <p className="text-gray-600">Dual Motor</p>
              </div>
            </div>

            <div className="">
              <h3 className="mb-6 text-lg font-bold">Paint</h3>
              <div className="mx-4">
                <ColorSelector
                  colors={colors}
                  selectedColor={selectedColor}
                  onColorChange={setSelectedColor}
                />
              </div>
            </div>
            <Button
              variant="ghost"
              className="flex items-center text-lg"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Hide Details" : "See Details"}
              <ChevronDown className="ml-2" />
            </Button>
            {showDetails && (
              <div className="mb-5 mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-md border-2 p-4 hover:border-red-500">
                  <div className="mb-4 flex items-center">
                    <Image
                      src="https://isuzu.sa/wp-content/uploads/2024/08/GVW.png"
                      alt="GVW"
                      width={50}
                      height={50}
                    />
                    <div className="ml-4">
                      <p className="font-bold">GVW</p>
                      <p>{specs.gvw}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-md border-2 p-4 hover:border-red-500">
                  <div className="mb-4 flex items-center">
                    <Image
                      src="https://isuzu.sa/wp-content/uploads/2024/08/Engine.png"
                      alt="Engine"
                      width={50}
                      height={50}
                    />
                    <div className="ml-4">
                      <p className="font-bold">Engine</p>
                      <p>{specs.engine}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-md border-2 p-4 hover:border-red-500">
                  <div className="mb-4 flex items-center">
                    <Image
                      src="https://isuzu.sa/wp-content/uploads/2024/08/Driving-System.png"
                      alt="Driving System"
                      width={50}
                      height={50}
                    />
                    <div className="ml-4">
                      <p className="font-bold">Driving system</p>
                      <p>{specs.drivingSystem}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-md border-2 p-4 hover:border-red-500">
                  <div className="mb-4 flex items-center">
                    <Image
                      src="https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-N-Series-Transmission.png"
                      alt="Transmission"
                      width={50}
                      height={50}
                    />
                    <div className="ml-4">
                      <p className="font-bold">Transmission</p>
                      <p>{specs.transmission}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-md border-2 p-4 hover:border-red-500">
                  <div className="mb-4 flex items-center">
                    <Image
                      src="https://isuzu.sa/wp-content/uploads/2024/08/Power.png"
                      alt="Power"
                      width={50}
                      height={50}
                    />
                    <div className="ml-4">
                      <p className="font-bold">Power (PS/rpm)</p>
                      <p>{specs.power}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-md border-2 p-4 hover:border-red-500">
                  <div className="mb-4 flex items-center">
                    <Image
                      src="https://isuzu.sa/wp-content/uploads/2024/08/Torque.png"
                      alt="Torque"
                      width={50}
                      height={50}
                    />
                    <div className="ml-4">
                      <p className="font-bold">Torque (kg.m/rpm)</p>
                      <p>{specs.torque}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-md border-2 p-4 hover:border-red-500">
                  <div className="mb-4 flex items-center">
                    <Image
                      src="https://isuzu.sa/wp-content/uploads/2024/08/Axle-Capacity.png"
                      alt="Axle Capacity"
                      width={50}
                      height={50}
                    />
                    <div className="ml-4">
                      <p className="font-bold">Axle capacity</p>
                      <p>Frt : {specs.axleCapacity.front}</p>
                      <p>Rr : {specs.axleCapacity.rear}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-md border-2 p-4 hover:border-red-500">
                  <Image
                    src="https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NMR-Truck-Body.png"
                    alt="Body Application"
                    width={300}
                    height={100}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="shadow-flex-button fixed bottom-0 right-0 w-full rounded-t-md bg-white py-5 pl-16 pr-5 md:right-10 md:w-auto">
          <div className="w-100 flex flex-row justify-end">
            <h6 className="text-md mr-3 mt-1">Get The best Offer Now </h6>
            <BadgeCheck className="mr-10 mt-1 text-red-500"></BadgeCheck>

            <Button variant={"destructive"} onClick={handleButtonClick}>
              Place Order Now
            </Button>
          </div>
        </div>

        <Dialog open={openModal} onOpenChange={() => setOpenModal(!openModal)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Place an Order !!</DialogTitle>

              <SellForm />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
