import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Square, MapPin, CheckCircle2 } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  bhk: string;
  bathrooms: string;
  area: string;
  type: string;
  status: string;
  isVerified?: boolean;
}

export default function PropertyCard({
  image,
  title,
  location,
  price,
  bhk,
  bathrooms,
  area,
  type,
  status,
  isVerified = true,
}: PropertyCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden premium-shadow transition-all duration-300 hover:-translate-y-2 border border-border/50">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {isVerified && (
            <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
              <CheckCircle2 className="w-3 h-3" /> VERIFIED
            </span>
          )}
          <span className="bg-primary/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
            {status}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/90 backdrop-blur-md text-primary text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
            {type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-primary truncate hover:text-accent transition-colors">
            <Link href="/property-detail">{title}</Link>
          </h3>
          <div className="flex items-center gap-1 mt-1 text-muted-foreground text-sm">
            <MapPin className="w-3.5 h-3.5" />
            <span className="truncate">{location}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 py-3 border-y border-border/50">
          <div className="flex flex-col items-center gap-1">
            <BedDouble className="w-4 h-4 text-secondary" />
            <span className="text-[10px] font-medium text-muted-foreground uppercase">{bhk} BHK</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Bath className="w-4 h-4 text-secondary" />
            <span className="text-[10px] font-medium text-muted-foreground uppercase">{bathrooms} Baths</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Square className="w-4 h-4 text-secondary" />
            <span className="text-[10px] font-medium text-muted-foreground uppercase">{area} Sq.Ft</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Price</span>
            <span className="text-xl font-bold text-primary">₹{price}</span>
          </div>
          <button className="bg-primary text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-primary/90 transition-all active:scale-95">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
