"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react"; // Icon from Lucide

import { Button } from "@/components/ui/button"; // ShadCN Button

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <footer className="bg-gray-800 py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="mb-6 w-full md:mb-0 md:w-1/3">
              <h3 className="mb-2 text-lg font-semibold">CarParts Ecommerce</h3>
              <p className="text-sm">
                Your one-stop shop for quality car parts.
              </p>
            </div>
            <div className="mb-6 w-full md:mb-0 md:w-1/3">
              <h3 className="mb-2 text-lg font-semibold">Quick Links</h3>
              <ul className="text-sm">
                <li>
                  <a href="/about" className="hover:text-gray-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-gray-300">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-gray-300">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="mb-2 text-lg font-semibold">Newsletter</h3>
              <p className="mb-2 text-sm">
                Subscribe to our newsletter for updates and offers.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2023 CarParts Ecommerce. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-6 right-6">
        {isVisible && (
          <Button
            onClick={scrollToTop}
            variant={"destructive"}
            className="z-100 w-9"
          >
            <ChevronUp className="h-5 w-5 font-bold" />
          </Button>
        )}
      </div>
    </>
  );
}
