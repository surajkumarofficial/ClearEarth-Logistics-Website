"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 transition-colors duration-500",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200"
          : "bg-transparent"
      )}
    >
      {/* Brand */}
      <div className="w-48 flex-shrink-0 flex justify-start items-center">
        <Link href="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="ClearEarth Logistics Logo" 
            className="h-11 w-auto object-contain" 
          />
        </Link>
      </div>

      {/* Links */}
      <div 
        className="hidden md:flex flex-1 justify-center space-x-6 text-sm md:text-base font-semibold tracking-widest text-slate-600"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {[
          { name: "About", id: "#about" },
          { name: "Services", id: "#services" },
          { name: "Customs", id: "#customs" },
          { name: "Transport", id: "#transport" },
          { name: "Why Us", id: "#why-us" },
          { name: "Contact", id: "#contact" }
        ].map((item, idx) => (
          <Link
            key={item.name}
            href={item.id}
            onMouseEnter={() => setHoveredIndex(idx)}
            className={cn(
              "relative px-4 py-1.5 rounded-full transition-colors duration-300 whitespace-nowrap z-10",
              hoveredIndex === idx ? "text-white" : "text-slate-600 hover:text-slate-900"
            )}
          >
            {hoveredIndex === idx && (
              <motion.span
                layoutId="hoverBackground"
                className="absolute inset-0 bg-slate-900 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              />
            )}
            {item.name}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="w-48 flex-shrink-0 flex justify-end">
        <Link 
          href="#quote" 
          className="px-5 py-2 text-sm md:text-base font-semibold tracking-wider text-white rounded-full bg-slate-900 hover:bg-slate-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,144,255,0.25)] whitespace-nowrap"
        >
          Partner With Us
        </Link>
      </div>
    </nav>
  );
}
