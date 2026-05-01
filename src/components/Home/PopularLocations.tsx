import Link from "next/link";
import { MapPin, Compass, ArrowRight } from "lucide-react";

export default function PopularLocations() {
  const locations = [
    { name: "Andheri West", properties: "1200+ Properties" },
    { name: "Bandra West", properties: "850+ Properties" },
    { name: "Powai", properties: "600+ Properties" },
    { name: "Worli", properties: "450+ Properties" },
    { name: "Thane West", properties: "1500+ Properties" },
    { name: "Kharghar", properties: "750+ Properties" },
  ];

  return (
    <section className="py-12 bg-muted/40">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-6 gap-6 border-b border-border/40 pb-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/5 text-primary tracking-wider uppercase">
              <Compass className="w-4 h-4" /> Explore Localities
            </span>
            <h2 className="text-5xl max-[426px]:text-3xl font-bold text-primary leading-tight font-heading">
              Popular Neighborhoods
            </h2>
            <p className="text-muted-foreground text-base max-w-full">
              Discover the most sought-after residential hubs and growth corridors across the Mumbai Metropolitan Region.
            </p>
          </div>
          <Link 
            href="/area-guides" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary/90 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group whitespace-nowrap cursor-pointer max-[426px]:w-full"
          >
            View All Localities 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {locations.map((loc, index) => (
            <Link 
              key={index} 
              href={`/area-guides/${loc.name.toLowerCase().replace(/ /g, "-")}`}
              className="bg-white p-6 rounded-2xl flex flex-col items-center gap-4 shadow-sm border border-border/40 hover:border-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-secondary transition-all duration-300">
                <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-primary group-hover:text-secondary transition-colors duration-300 text-lg mmax-[426px]:text-base">
                  {loc.name}
                </h3>
                <span className="inline-block mt-1 px-2.5 py-0.5 bg-muted text-[11px] text-muted-foreground group-hover:bg-secondary/10 group-hover:text-secondary rounded-full font-medium transition-all duration-300">
                  {loc.properties}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
