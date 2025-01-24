import type { ReactNode } from "react";
import Link from "next/link";

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
    <div className="bg-blend-darken">
      <section
        className="flex h-screen flex-col items-center justify-between bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url(${backgroundImg})`,
        }}
      >
        <div className="pt-80 text-center">
          <h1 className="my-2 text-5xl font-medium text-white">{title}</h1>
          <p className="text-lg text-white">{description}</p>
        </div>
        <div className="mb-20 flex flex-col items-center">
          <div className="mb-4 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link href={leftBtnLink}>
              <Button variant="default" size="lg" className="w-64 rounded-sm">
                {leftBtnText}
              </Button>
            </Link>
            {rightBtnText && rightBtnLink && (
              <Link href={rightBtnLink}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-64 rounded-sm"
                >
                  {rightBtnText}
                </Button>
              </Link>
            )}
          </div>
          {children}
        </div>
      </section>
    </div>
  );
};

export default Section;
