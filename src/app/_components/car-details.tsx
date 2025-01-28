import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight, Info } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CarDetailsProps {
  car: {
    id: string;
    title: string;
    year: string;
    trim: string;
    location: string;
    price: {
      monthly: number;
      total: number;
      loanPeriod: number;
      discount?: number;
    };
    mileage: number;
    engineSize: string;
    transmission: string;
    fuelType: string;
    specs: string;
    condition: string;
    features: string[];
    images: string[];
    stock: number;
    vin: string;
    color: string;
    interiorColor: string;
    doors: number;
    bodyType: string;
  };
}

export default function CarDetails({ car }: CarDetailsProps) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/">Used Cars in UAE</Link>
          <ChevronRight className="h-4 w-4" />
          <span>
            {car.year} {car.title}
          </span>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-7">
            <Carousel
              className="sticky top-14 w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-1">
                {car.images.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/1 lg:basis-1/1 pl-1"
                  >
                    <div className="p-1">
                      <Image
                        src={item || "/placeholder.svg"}
                        alt={item}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }} // optional
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

          <div className="col-span-12 lg:col-span-5">
            <div>
              <h1 className="text-2xl font-bold text-[#1A3867]">
                {car.year} {car.title}
              </h1>
              <p className="text-[#5D6F8A]">
                {car.trim} | {car.engineSize}
              </p>
            </div>

            <Card className="my-5 overflow-hidden rounded-sm shadow-sm">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-[#1A3867]">
                      AED {car.price.total.toLocaleString()}
                    </div>
                    <div className="text-sm text-[#5D6F8A]">
                      EMI starts from AED {car.price.monthly.toLocaleString()}
                      /month
                    </div>
                  </div>
                  {car.price.discount && (
                    <Badge variant="destructive" className="px-3 py-1 text-lg">
                      AED {car.price.discount} OFF
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Check className="h-4 w-4" />
                  <span>In stock: {car.stock} available</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-[#5D6F8A]" />
                    <span>VIN: {car.vin}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-[#5D6F8A]" />
                    <span>Color: {car.color}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-[#5D6F8A]" />
                    <span>Interior: {car.interiorColor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-[#5D6F8A]" />
                    <span>Doors: {car.doors}</span>
                  </div>
                </div>

                <Button
                  variant={"destructive"}
                  className="w-full text-lg"
                  size="lg"
                >
                  Book Now
                </Button>

                <div className="text-center text-sm text-[#5D6F8A]">
                  or call us at{" "}
                  <a
                    href="tel:+97143099999"
                    className="font-semibold text-blue-600"
                  >
                    +971 4 309 9999
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="my-5 rounded-sm shadow-sm">
              <CardContent className="flex items-center gap-4 p-4">
                <Check className="h-6 w-6 text-green-600" />
                <span className="text-sm">
                  Complete RTA ownership with title copy
                </span>
              </CardContent>
            </Card>
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                      <div className="space-y-1">
                        <div className="text-sm text-[#5D6F8A]">Condition</div>
                        <div className="font-medium text-[#1A3867]">
                          {car.condition}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-[#5D6F8A]">Mileage</div>
                        <div className="font-medium text-[#1A3867]">
                          {car.mileage.toLocaleString()} km
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-[#5D6F8A]">Engine</div>
                        <div className="font-medium text-[#1A3867]">
                          {car.engineSize}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-[#5D6F8A]">
                          Transmission
                        </div>
                        <div className="font-medium text-[#1A3867]">
                          {car.transmission}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-[#5D6F8A]">Fuel Type</div>
                        <div className="font-medium text-[#1A3867]">
                          {car.fuelType}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-[#5D6F8A]">Body Type</div>
                        <div className="font-medium text-[#1A3867]">
                          {car.bodyType}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-[#5D6F8A]">
                          Regional Specs
                        </div>
                        <div className="font-medium text-[#1A3867]">
                          {car.specs}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                      {car.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-blue-600" />
                          <span className="text-sm text-[#1A3867]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
