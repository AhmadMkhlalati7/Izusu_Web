import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

interface SectionProps {
  title: string;
  description: string;
  backgroundImg: string;
  leftBtnText: string;
  leftBtnLink: string;
  rightBtnText?: string;
  rightBtnLink?: string;
  children?: ReactNode;
}

const Section: React.FC<SectionProps> = ({
  title,
  description,
  backgroundImg,
  leftBtnText,
  leftBtnLink,
  rightBtnText,
  rightBtnLink,
  children,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex h-screen flex-col items-center justify-between bg-cover bg-center bg-blend-darken"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url(${backgroundImg})`,
      }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pt-80 text-center"
      >
        <h1 className="mb-2 text-5xl font-medium text-white">{title}</h1>
        <p className="text-lg text-white">{description}</p>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-20 flex flex-col items-center"
      >
        <div className="mb-4 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link href={leftBtnLink}>
            <Button variant="destructive" size="lg" className="w-64 rounded-sm">
              {leftBtnText}
            </Button>
          </Link>
          {rightBtnText && rightBtnLink && (
            <Link href={rightBtnLink}>
              <Button variant="secondary" size="lg" className="w-64 rounded-sm">
                {rightBtnText}
              </Button>
            </Link>
          )}
        </div>
        {children}
      </motion.div>
    </motion.section>
  );
};

export default Section;
