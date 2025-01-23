"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { BadgeCheck, ShoppingBag } from "lucide-react";

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
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SellForm from "./_components/SellForm";

const products = {
  NPR: {
    title: "NPR",
    name: "NPR",
    description:
      "High stability, engine power and torque and payload are the trademark of the wide cab Isuzu NPR trucks. ISUZU NPR’s wide cab, front and rear track and wide frame all come together to provide high vehicle stability well suited to operation on or off paved roads and with high volume rear body. The mighty 4HK1/4JJ1 engine combines excellent fuel economy with high output and torque to make light work of heavy loads. Power steering makes long periods behind the wheel less tiring, improving driver productivity and maintaining alertness.",
    image: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR.jpg",
    specs: {
      gvw: "6.5t - 7.5t",
      engine: "4JJ1-TC , 4HK1-TCN",
      drivingSystem: "4×2",
      transmission: "MYY6S /6speed (4HK1) , MYY5T /5speed (4JJ1)",
      power: "34.0 / 1600(4JJ1) ,41.0 / 1500 (4HK1)",
      torque: "96(130)/2800 (4JJ1) , 110(150)/2600 (4HK1)",
      axleCapacity: {
        front: "3100 / Rr : 5000 (4JJ1)",
        rear: "3100 / Rr : 6600 (4HK1)",
      },

      img: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR-Truck-Body-Application.png",
    },
    array_img: null,
  },
  NMR: {
    title: "King of Narrow body",
    name: "NMR",
    description:
      "The Isuzu NMR is re-known for its reliability and rugged durability that assures years of dependable service even under extreme load, road and weather conditions. The 4JJ1-TC engine delivers exceptional power and torque throughout the rpm range thanks to highly reliable overhead camshaft design and direct injection. These additionally provide superior performance, fuel economy, low emissions and minimized noise and vibration. Tough and reliable chassis and suspension with engine power to spare make the NMR the No.1 choice in 3-ton trucks.",
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

      img: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NMR-Truck-Body.png",
    },
    array_img: null,
  },
  NQR: {
    title: "The Very Best Carrying Capacity",
    name: "NQR",
    description:
      "The legendary ISUZU attention to detail is evident in every facet of the NQR design. The rear axle is designed to handle high loads, while mounting rear bodies is simple due to its constant-width frame. The long-span leaf springs are built to handle the roughest roads for a superb ride. The 4HK1 engine provides plenty of power and low emissions while large diameter brake Drums ensure performance. The NQR is the truck for you when you need to tackle big jobs at great value.",
    image: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NMR.jpg",
    specs: {
      gvw: "8.5 – 9.5 t",
      engine: "4HK1-TCN",
      drivingSystem: "4×2",
      transmission: "MYY6S /6speed",
      power: "41.0/1500",
      torque: "150/2600",
      axleCapacity: {
        front: "3100",
        rear: "6600",
      },

      img: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR-Truck-Body-Application.png",
    },
    array_img: null,
  },
  "NPR-Crewcab": {
    description:
      "Designed with functional beauty and customization to fulfill any job. With wide range of selections, you can choose the best model for your business.",
    title: "Perfect for every Application",
    name: "NPR Crewcab",
    image: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR.jpg",
    specs: {
      gvw: "6.5t",
      engine: "4HK1-TCN",
      drivingSystem: "4×2",
      transmission: "MYY6S /6speed (4HK1)",
      power: "34.0 / 1600",
      torque: " 130/2800 ",
      axleCapacity: {
        front: "3100 ",
        rear: "5000 ",
      },
      img: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-NPR-Truck-Body-Application.png",
    },
    array_img: null,
  },
  "completed-trucks": {
    description:
      "Isuzu’s legendary chassis comes equipped with a constant width and wide tread on the rear axle and long span leaf springs most suited to truck body installation. A complete cab makes body installation to individual tastes even simpler. A variety of high-quality truck bodies can be sourced from Japan, United Arab Emirates, South Africa and India with an option of knocked down body kits to be conveniently assembled at your local",
    title: "Everything You need",
    name: "completed trucks",
    image:
      "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-N-Series-Truck-with-Body.jpg",
    specs: null,
    array_img: [
      {
        img: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-N-Series-Van-Refrigerator-4x2-Truck.jpg",
        title: "Van Refrigerator 4×2",
      },
      {
        img: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-N-Series-Refuse-4x2-Truck.jpg",
        title: "Refuse Truck 4×2",
      },
      {
        img: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-N-Series-Crane-Cargo-4x2-Truck.jpg",
        title: "Crane, Cargo 4×2",
      },
      {
        img: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-N-Series-Cargo-4x2-Truck.jpg",
        title: "Cargo Truck 4×2",
      },
      {
        img: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-N-Series-Tanker-4x2-Truck.jpg",
        title: "Tanker 4×2",
      },
      {
        img: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-N-Series-Wrecker-Winch-4x2-Truck.jpg",
        title: "Wrecker Winch 4×2",
      },
      {
        img: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-N-Series-Cesspit-Emptier-4x2-Truck.jpg",
        title: "Cesspit Emptier 4×2",
      },
      {
        img: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-N-Series-Power-Tailgate-4x2-Truck.jpg",
        title: "Power Tailgate 4×2",
      },
      {
        img: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-N-Series-Aerial-Platform-4x2-Truck.jpg",
        title: "Aerial Platform 4×2",
      },
      {
        img: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-N-Series-Dump-4x2-Truck.jpg",
        title: "Dump 4×2",
      },
      {
        img: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-N-Series-Dump-4x2-Truck_2.jpg",
        title: "Dump 4×2",
      },
      {
        img: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-N-Series-Road-Sweeper-4x2-Truck.jpg",
        title: "Road-Sweeper 4×2",
      },
    ],
  },
  FRR: {
    name: "FRR",
    title: "Built to last",
    description:
      "The FRR is built to represents a major progression for Isuzu’s entry-level medium-duty model. The strong performance of the new 6HK1-TCN engine enhances fuel efficiency and overall vehicle performance. Drivers will appreciate the FRR’s comfort and ease of operation, especially with the MZZ6W transmission.",
    image: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-FRR-Truck-1.jpg",
    specs: {
      gvw: "11.0 t",
      engine: "4HK1-TCC - 6HK1-TCN",
      drivingSystem: "4×2",
      transmission: "MYY6S /6speed",
      power: "52.0/1600",
      torque: "190/2600",
      axleCapacity: {
        front: "3600",
        rear: "7700",
      },

      img: "https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-Body.png",
    },
    array_img: null,
  },
};

export default function OrderPage() {
  const params = useParams();
  const product = params.product as keyof typeof products;
  const [openModal, setOpenModal] = useState<boolean>(false);

  if (!products[product]) {
    return <div>Product not found</div>;
  }

  const { title, name, image, specs, description, array_img } =
    products[product];
  function handleButtonClick(): void {
    setOpenModal(true);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 pt-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full">
        <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Carousel
              className="sticky top-14 w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/1 lg:basis-1/1 pl-1"
                  >
                    <div className="p-1">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={title}
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
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="mb-10 text-4xl font-bold">{title}</h1>
              <p className="text-sm">{description}</p>
            </motion.div>

            {specs && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-5 mt-8 grid grid-cols-1 gap-8 md:grid-cols-2"
              >
                <motion.div
                  className="rounded-md border-2 p-4 hover:border-red-500"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="mb-4 flex items-center">
                    <Image
                      src="https://isuzu.sa/wp-content/uploads/2024/08/GVW.png"
                      alt="GVW"
                      width={50}
                      height={50}
                    />
                    <div className="ml-4">
                      <p className="text-xs font-bold">GVW</p>
                      <p className="text-sm">{specs.gvw}</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="rounded-md border-2 p-4 hover:border-red-500"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="mb-4 flex items-center">
                    <Image
                      src="https://isuzu.sa/wp-content/uploads/2024/08/Engine.png"
                      alt="Engine"
                      width={50}
                      height={50}
                    />
                    <div className="ml-4">
                      <p className="text-xs font-bold">Engine</p>
                      <p className="text-sm">{specs.engine}</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="rounded-md border-2 p-4 hover:border-red-500"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="mb-4 flex items-center">
                    <Image
                      src="https://isuzu.sa/wp-content/uploads/2024/08/Driving-System.png"
                      alt="Driving System"
                      width={50}
                      height={50}
                    />
                    <div className="ml-4">
                      <p className="text-xs font-bold">Driving system</p>
                      <p className="text-sm">{specs.drivingSystem}</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="rounded-md border-2 p-4 hover:border-red-500"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="mb-4 flex items-center">
                    <Image
                      src="https://isuzu.sa/wp-content/uploads/2024/08/Isuzu-N-Series-Transmission.png"
                      alt="Transmission"
                      width={50}
                      height={50}
                    />
                    <div className="ml-4">
                      <p className="text-xs font-bold">Transmission</p>
                      <p className="text-sm">{specs.transmission}</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="rounded-md border-2 p-4 hover:border-red-500"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="mb-4 flex items-center">
                    <Image
                      src="https://isuzu.sa/wp-content/uploads/2024/08/Power.png"
                      alt="Power"
                      width={50}
                      height={50}
                    />
                    <div className="ml-4">
                      <p className="text-xs font-bold">Power (PS/rpm)</p>
                      <p className="text-sm">{specs.power}</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="rounded-md border-2 p-4 hover:border-red-500"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="mb-4 flex items-center">
                    <Image
                      src="https://isuzu.sa/wp-content/uploads/2024/08/Torque.png"
                      alt="Torque"
                      width={50}
                      height={50}
                    />
                    <div className="ml-4">
                      <p className="text-xs font-bold">Torque (kg.m/rpm)</p>
                      <p className="text-sm">{specs.torque}</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="rounded-md border-2 p-4 hover:border-red-500"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="mb-4 flex items-center">
                    <Image
                      src="https://isuzu.sa/wp-content/uploads/2024/08/Axle-Capacity.png"
                      alt="Axle Capacity"
                      width={50}
                      height={50}
                    />
                    <div className="ml-4">
                      <p className="text-xs font-bold">Axle capacity</p>
                      <p className="text-sm">
                        Frt : {specs.axleCapacity.front}
                      </p>
                      <p className="text-sm">Rr : {specs.axleCapacity.rear}</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="rounded-md border-2 p-4 hover:border-red-500"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <Image
                    src={specs.img || "/placeholder.svg"}
                    alt="Body Application"
                    width={300}
                    height={100}
                  />
                </motion.div>
              </motion.div>
            )}

            {array_img && (
              <div className="mb-5 mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                {array_img.map((items: { img: string; title: string }, i) => {
                  return (
                    <motion.div
                      key={i}
                      className="rounded-md border-2 p-4 hover:border-red-500"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="mb-4 flex items-center">
                        <Image
                          src={items.img || "/placeholder.svg"}
                          alt="GVW"
                          width={100}
                          height={50}
                        />
                        <div className="ml-4">
                          <p className="text-sm">{items.title}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="shadow-flex-button fixed bottom-0 right-0 w-full rounded-t-md bg-white py-3 pl-16 pr-5 md:right-10 md:w-auto"
        >
          <div className="w-100 flex flex-row justify-end">
            <div>
              <h6 className="text-md flex font-bold">
                {name}{" "}
                <BadgeCheck
                  width={20}
                  className="mx-2 text-red-500"
                ></BadgeCheck>
              </h6>
              <p className="text-md mr-3 mt-1 text-sm">
                Get the best offer now
              </p>
            </div>

            <motion.div whileTap={{ scale: 0.95 }}>
              <Button variant={"destructive"} onClick={handleButtonClick}>
                <ShoppingBag /> Place order now
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <Dialog open={openModal} onOpenChange={() => setOpenModal(!openModal)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex">
                <ShoppingBag className="mx-2" />
                <span>Place an Order !!</span>
              </DialogTitle>
              <DialogDescription>
                We will contact you as soon as possible
              </DialogDescription>
              <SellForm />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  );
}
