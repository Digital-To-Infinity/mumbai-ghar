import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, ChevronDown, SlidersHorizontal } from "lucide-react";
import PropertyCard from "@/components/ui/PropertyCard";

export default function RentPage() {
  const properties = [
    {
      image: "/images/apt.png",
      title: "Luxury 2BHK in Crescent Bay",
      location: "Parel, South Mumbai",
      price: "1.25 L / mo",
      bhk: "2",
      bathrooms: "2",
      area: "1250",
      type: "Apartment",
      status: "Available",
    },
    {
      image: "/images/infra.png",
      title: "Hiranandani Gardens Gardenia",
      location: "Powai, Mumbai",
      price: "85 K / mo",
      bhk: "2",
      bathrooms: "2",
      area: "1100",
      type: "Residential",
      status: "Available",
    },
    {
      image: "/images/hero.png",
      title: "Oberoi Splendor",
      location: "Andheri East, Mumbai",
      price: "95 K / mo",
      bhk: "2",
      bathrooms: "2",
      area: "1050",
      type: "Modern Flat",
      status: "Available",
    },
    {
      image: "/images/apt.png",
      title: "Lodha Venezia",
      location: "Lalbaug, Mumbai",
      price: "1.50 L / mo",
      bhk: "3",
      bathrooms: "3",
      area: "1600",
      type: "Apartment",
      status: "Ready to Move",
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-muted/30">
      {/* Search & Filter Header */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold font-heading mb-8">Rent Property in Mumbai</h1>
          
          <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 w-full relative text-primary">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
              <input 
                type="text" 
                placeholder="Locality or Building" 
                className="w-full bg-muted pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {["Budget", "BHK", "Furnishing"].map((filter) => (
                <button key={filter} className="flex-1 lg:flex-none flex items-center justify-between gap-3 px-4 py-3 bg-muted rounded-xl text-primary text-xs font-bold whitespace-nowrap">
                  {filter} <ChevronDown className="w-4 h-4 text-secondary" />
                </button>
              ))}
              <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-secondary text-primary px-6 py-3 rounded-xl font-bold hover:bg-secondary/90 transition-all">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="hidden lg:block w-72 space-y-8">
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm space-y-6">
                <h3 className="font-bold text-primary flex items-center gap-2 uppercase text-xs tracking-widest"><SlidersHorizontal className="w-4 h-4" /> Filters</h3>
                <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-muted-foreground uppercase">Furnishing</h4>
                    {["Fully Furnished", "Semi-Furnished", "Unfurnished"].map(f => (
                        <label key={f} className="flex items-center gap-2 text-sm text-primary cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 accent-secondary" /> {f}
                        </label>
                    ))}
                </div>
              </div>
            </aside>

            {/* Grid */}
            <div className="flex-1 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {properties.map((prop, index) => (
                  <PropertyCard key={index} {...prop} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
