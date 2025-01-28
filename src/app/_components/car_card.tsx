import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, ShoppingCartIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IncrementorInput } from "@/components/ui/IncrementorInput";
import { Separator } from "@/components/ui/separator";

interface CarCardProps {
  title: string;
  year: string;
  trim: string;
  location: string;
  specs: string[];
  price: {
    monthly: number;
    total: number;
  };
  mileage: number;
  engineSize: string;
  transmission: string;
  imageUrl: string;
  features: string[];
}

export function CarCard({
  title,
  year,
  trim,
  location,
  specs,
  price,
  mileage,
  engineSize,
  transmission,
  imageUrl,
  features,
}: CarCardProps) {
  return (
    <Link href={`/1`}>
      <Card className="relative overflow-hidden hover:border-red-500">
        <div className="relative aspect-[4/3]">
          <Badge
            variant={"destructive"}
            className="absolute left-0 top-0 rounded-none rounded-br-lg"
          >
            {location}
          </Badge>
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-4">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">
                {year} | {trim}
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span>{mileage} km</span>
              <span>{engineSize}</span>
              <span>{transmission}</span>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-sm">EMI {price.monthly}/mo for 5 yrs</div>
                <div className="font-semibold">AED {price.total}</div>
              </div>
              <div className="text-sm text-green-600">
                Auto Loan Zero Downpayment
              </div>
            </div>
            <div className="flex gap-2">
              {features.map((feature) => (
                <Badge key={feature} variant="secondary">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-red-50">
            <div className="flex justify-between">
              <Button
                size="icon"
                variant="ghost"
                className="text-red-500 hover:bg-red-50 hover:text-red-700"
              >
                <ShoppingCart className="h-4 w-4" fill="white" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-red-500 hover:bg-red-50 hover:text-red-700"
              >
                <Heart className="h-4 w-4" fill="white" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
