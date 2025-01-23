"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gray-200"></div>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`mb-24 flex items-center text-start`}
        >
          <div className={`w-1/2 pr-16`}>
            <div className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={800}
                height={600}
                className="h-auto w-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60">
                <div className="text-center">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-2 text-3xl font-bold text-white"
                  >
                    {item.year}
                  </motion.h3>
                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl font-semibold text-white"
                  >
                    {item.title}
                  </motion.h4>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`w-1/2 pl-16`}
          >
            <p className="text-lg text-gray-600">{item.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
