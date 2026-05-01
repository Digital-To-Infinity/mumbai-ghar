"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MapPin, Search, ChevronDown } from "lucide-react";

export default function Hero() {
  const [type, setType] = useState("Buy");
  const [budget, setBudget] = useState("Budget");
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [openTypeUp, setOpenTypeUp] = useState(false);
  const [openBudgetUp, setOpenBudgetUp] = useState(false);

  const typeRef = useRef<HTMLDivElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);

  const typeOptions = ["Buy", "Rent"];
  const budgetOptions = ["Budget", "₹50L - ₹1Cr", "₹1Cr - ₹5Cr", "₹5Cr+"];

  const handleTypeClick = () => {
    if (!isTypeOpen && typeRef.current) {
      const rect = typeRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      setOpenTypeUp(spaceBelow < 200);
    }
    setIsTypeOpen(!isTypeOpen);
    setIsBudgetOpen(false);
  };

  const handleBudgetClick = () => {
    if (!isBudgetOpen && budgetRef.current) {
      const rect = budgetRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      setOpenBudgetUp(spaceBelow < 200);
    }
    setIsBudgetOpen(!isBudgetOpen);
    setIsTypeOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (typeRef.current && !typeRef.current.contains(event.target as Node)) {
        setIsTypeOpen(false);
      }
      if (budgetRef.current && !budgetRef.current.contains(event.target as Node)) {
        setIsBudgetOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Mumbai Skyline"
        fill
        className="object-cover brightness-[0.4]"
        priority
      />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-heading">
            Find Your Perfect <span className="text-secondary">Home</span> in Mumbai
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Buy, rent, sell, and explore trusted real estate insights across Mumbai, Navi Mumbai, Thane, and the MMR region.
          </p>

          {/* Search Bar */}
          <div className="mt-12 bg-white p-2 md:p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-5xl mx-auto relative z-20">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-2">

              {/* Custom Dropdown for Type */}
              <div className="relative" ref={typeRef}>
                <button
                  onClick={handleTypeClick}
                  className="w-full bg-muted px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between cursor-pointer hover:bg-muted/80 transition-all focus:outline-none focus:ring-2 focus:ring-secondary/50 text-primary"
                >
                  <span>{type}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isTypeOpen ? "rotate-180" : ""}`} />
                </button>

                {isTypeOpen && (
                  <div className={`absolute ${openTypeUp ? "bottom-full mb-2" : "top-full mt-2"} left-0 w-full bg-white rounded-xl shadow-xl border border-border/50 overflow-hidden z-30 animate-in fade-in duration-200`}>
                    {typeOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setType(option);
                          setIsTypeOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all flex items-center justify-between cursor-pointer ${type === option ? "bg-primary text-white" : "text-primary"}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Input */}
              <div className="relative col-span-1 md:col-span-2">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                <input
                  type="text"
                  placeholder="Search by Location (e.g. Andheri East)"
                  className="w-full bg-muted pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 text-primary placeholder:text-muted-foreground/60"
                />
              </div>

              {/* Custom Dropdown for Budget */}
              <div className="relative" ref={budgetRef}>
                <button
                  onClick={handleBudgetClick}
                  className="w-full bg-muted px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between cursor-pointer hover:bg-muted/80 transition-all focus:outline-none focus:ring-2 focus:ring-secondary/50 text-primary"
                >
                  <span>{budget}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isBudgetOpen ? "rotate-180" : ""}`} />
                </button>

                {isBudgetOpen && (
                  <div className={`absolute ${openBudgetUp ? "bottom-full mb-2" : "top-full mt-2"} left-0 w-full bg-white rounded-xl shadow-xl border border-border/50 overflow-hidden z-30 animate-in fade-in duration-200`}>
                    {budgetOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setBudget(option);
                          setIsBudgetOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all flex items-center justify-between cursor-pointer ${budget === option ? "bg-primary text-white" : "text-primary"}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

            </div>

            <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all cursor-pointer">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

