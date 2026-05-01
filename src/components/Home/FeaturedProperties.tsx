import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PropertyCard from "@/components/ui/PropertyCard";

export default function FeaturedProperties() {
  const featuredProperties = [
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
    }
  ];

  return (
    <section className="py-12 max-[769px]:py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-6 gap-6 border-b border-muted pb-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary tracking-wider uppercase">
              Handpicked for you
            </span>
            <h2 className="text-5xl max-[426px]:text-4xl font-bold text-primary mt-2 leading-tight font-heading">
              Featured Mumbai Projects
            </h2>
            <p className="text-base text-muted-foreground max-w-full">
              Explore top-rated residential spaces offering modern architecture, verified documentation, and premium lifestyles.
            </p>
          </div>
          <Link 
            href="/buy" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary/90 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group whitespace-nowrap cursor-pointer max-[426px]:w-full"
          >
            View All Properties 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((prop, index) => (
            <PropertyCard key={index} {...prop} />
          ))}
        </div>
      </div>
    </section>
  );
}
