import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Filter, SlidersHorizontal, ChevronDown } from "lucide-react";
import PropertyCard from "@/components/ui/PropertyCard";

export default function BuyPage() {
  const properties = [
    {
      image: "/images/apt.png",
      title: "The Crest at Worli",
      location: "Worli, South Mumbai",
      price: "8.40 Cr",
      bhk: "3",
      bathrooms: "3",
      area: "2150",
      type: "Luxury Apartment",
      status: "Ready to Move",
    },
    {
      image: "/images/infra.png",
      title: "Hiranandani Zen",
      location: "Powai, Mumbai",
      price: "4.25 Cr",
      bhk: "2",
      bathrooms: "2",
      area: "1100",
      type: "Residential",
      status: "Under Construction",
    },
    {
      image: "/images/hero.png",
      title: "Runwal Gardens",
      location: "Dombivli East, MMR",
      price: "65.0 L",
      bhk: "2",
      bathrooms: "2",
      area: "750",
      type: "Modern Flat",
      status: "New Launch",
    },
    {
      image: "/images/apt.png",
      title: "Oberoi Realty Enigma",
      location: "Mulund West, Mumbai",
      price: "3.75 Cr",
      bhk: "3",
      bathrooms: "3",
      area: "1500",
      type: "Apartment",
      status: "Ready to Move",
    },
    {
      image: "/images/infra.png",
      title: "Kalpataru Radiance",
      location: "Goregaon West, Mumbai",
      price: "2.90 Cr",
      bhk: "2",
      bathrooms: "2",
      area: "980",
      type: "Residential",
      status: "Ready to Move",
    },
    {
      image: "/images/hero.png",
      title: "Piramal Aranya",
      location: "Byculla, South Mumbai",
      price: "15.0 Cr",
      bhk: "4",
      bathrooms: "5",
      area: "4200",
      type: "Super Luxury",
      status: "Near Completion",
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-muted/30">
      {/* Search & Filter Header */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold font-heading mb-8">Buy Property in Mumbai</h1>
          
          <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 w-full relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
              <input 
                type="text" 
                placeholder="Region, Locality or Project Name" 
                className="w-full bg-muted pl-10 pr-4 py-3 rounded-xl text-sm text-primary focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {["Budget", "Property Type", "BHK", "Possession"].map((filter) => (
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
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-72 space-y-8">
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-primary flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4" /> Filters
                  </h3>
                  <button className="text-[10px] text-accent font-bold uppercase tracking-wider">Clear All</button>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-primary uppercase tracking-tighter">Locality</h4>
                  <div className="space-y-2">
                    {["South Mumbai", "Western Suburbs", "Central Mumbai", "Thane", "Navi Mumbai"].map((loc) => (
                      <label key={loc} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-secondary" /> {loc}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-border">
                  <h4 className="text-sm font-bold text-primary uppercase tracking-tighter">Budget Range</h4>
                  <div className="space-y-2">
                    {["Under 50L", "50L - 1Cr", "1Cr - 3Cr", "3Cr - 10Cr", "Above 10Cr"].map((price) => (
                      <label key={price} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary cursor-pointer">
                        <input type="radio" name="price" className="w-4 h-4 accent-secondary" /> {price}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Advertisement / CTA */}
              <div className="bg-secondary rounded-2xl p-6 text-primary shadow-lg space-y-4">
                <h4 className="font-bold">Need expert help?</h4>
                <p className="text-xs leading-relaxed opacity-80">Our property consultants can help you find the best deals in Mumbai.</p>
                <button className="w-full bg-primary text-white py-3 rounded-xl font-bold text-xs">
                  Talk to an Expert
                </button>
              </div>
            </aside>

            {/* Property Grid */}
            <div className="flex-1 space-y-8">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="text-primary font-bold">1,248</span> Properties in Mumbai
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Sort By:</span>
                  <select className="bg-transparent text-xs font-bold text-primary focus:outline-none cursor-pointer">
                    <option>Newest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                {properties.map((prop, index) => (
                  <PropertyCard key={index} {...prop} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 pt-12">
                <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">1</button>
                <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">2</button>
                <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">3</button>
                <span className="px-2">...</span>
                <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">42</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
