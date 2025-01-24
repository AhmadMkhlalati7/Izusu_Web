"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Timeline from "../../components/Timeline";

const timelineItems = [
  {
    year: "1916",
    title: "",
    description: "Foundation",
    image:
      "https://isuzu-intl.com/wp-content/uploads/2024/06/Isuzu-Foundation.jpg",
  },
  {
    year: "1922",
    title: "",
    description: "A9, the first Isuzu's passenger car",
    image:
      "https://isuzu.sa/wp-content/uploads/2024/08/1922-A9-Isuzu-First-Passenger-Car.jpg",
  },
  {
    year: "1924 ",
    title: "",
    description: " CP, the first Isuzu's truck",
    image:
      "http://isuzu.sa/wp-content/uploads/2024/08/1924-CP-First-Isuzu-Truck.jpg",
  },
  {
    year: "2020",
    title: "Gigafactory Berlin",
    description:
      "New East started construction on Gigafactory Berlin-Brandenburg, its first European factory, designed to be the most advanced high-volume electric vehicle production plant in the world.",
    image:
      "https://isuzu.sa/wp-content/uploads/2024/08/1946-ISUZU-TX80-5t-payload-truck.jpg",
  },
];

export default function AboutPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div>
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-h-full w-auto min-w-full max-w-none"
        >
          <source
            src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/About-Us-Join-Mobile-Global.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="mb-4 text-6xl font-bold">About New East</h1>
          <p className="mx-auto max-w-3xl text-xl">
            New East&apos;s mission is to accelerate the world&apos;s transition
            to sustainable energy.
          </p>
        </motion.div>
      </section>

      <section ref={ref} className="mx-auto max-w-7xl px-4 py-24">
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-4xl font-bold"
        >
          Our Journey
        </motion.h2>
        <Timeline items={timelineItems} />
      </section>

      <section className="bg-gray-100 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center text-4xl font-bold"
          >
            Our Impact
          </motion.h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              "Sustainable Transportation",
              "Renewable Energy",
              "Innovation",
            ].map((title, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
                <p className="text-gray-600">
                  {index === 0 &&
                    "New East's electric vehicles have prevented millions of tons of CO2 from entering the atmosphere, promoting cleaner air and reducing dependence on fossil fuels."}
                  {index === 1 &&
                    "Our solar and energy storage products enable homeowners, businesses, and utilities to manage renewable energy generation, storage, and consumption."}
                  {index === 2 &&
                    "New East's advancements in electric powertrain, battery technology, and autonomous driving are pushing the entire automotive industry towards a sustainable future."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-4xl font-bold"
          >
            Join Us in Shaping the Future
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-12 max-w-3xl text-xl"
          >
            At New East, we&apos;re not just creating electric vehicles and
            energy solutions. We&apos;re working to build a sustainable future
            for our planet. Join us on this exciting journey.
          </motion.p>
          <motion.a
            href="/careers"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-block rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-blue-700"
          >
            Explore Careers
          </motion.a>
        </div>
      </section>
    </div>
  );
}
