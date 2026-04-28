import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, TrendingUp, Train, School, Hospital, ChevronRight } from "lucide-react";

export default function AreaGuidesPage() {
  const regions = [
    {
      title: "South Mumbai",
      description: "The historical and financial heart of Mumbai.",
      areas: ["Worli", "Bandra West", "Colaba", "Lower Parel", "Prabhadevi"]
    },
    {
      title: "Western Suburbs",
      description: "Premium residential hubs with excellent connectivity.",
      areas: ["Andheri West", "Juhu", "Goregaon", "Borivali", "Kandivali"]
    },
    {
      title: "Eastern Suburbs",
      description: "Rapidly developing residential and commercial zones.",
      areas: ["Powai", "Mulund", "Ghatkopar", "Chembur", "Kurla"]
    },
    {
      title: "MMR & Satellite Cities",
      description: "Thriving regions offering value for investment.",
      areas: ["Thane West", "Navi Mumbai", "Panvel", "Kharghar", "Vashi"]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <Image src="/images/infra.png" alt="Decor" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Mumbai Local Area Guides</h1>
            <p className="text-white/70 text-lg leading-relaxed">
              In-depth insights into Mumbai's diverse neighborhoods. Compare price trends, connectivity, schools, and lifestyle before you move.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {regions.map((region, idx) => (
              <div key={idx} className="space-y-8">
                <div className="border-l-4 border-secondary pl-6">
                  <h2 className="text-2xl font-bold text-primary">{region.title}</h2>
                  <p className="text-muted-foreground mt-1">{region.description}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {region.areas.map((area) => (
                    <Link 
                      key={area} 
                      href={`/area-guides/${area.toLowerCase().replace(/ /g, "-")}`}
                      className="group bg-muted/30 p-6 rounded-2xl hover:bg-primary transition-all border border-border border-dashed hover:border-solid hover:border-primary"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary group-hover:text-white transition-colors">{area}</span>
                        <ChevronRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insight Section */}
      <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
              <div className="bg-white rounded-[40px] overflow-hidden flex flex-col lg:flex-row items-center premium-shadow">
                  <div className="w-full lg:w-1/2 h-[400px] relative">
                      <Image src="/images/apt.png" alt="Featured" fill className="object-cover" />
                  </div>
                  <div className="w-full lg:w-1/2 p-12 space-y-6">
                      <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Editor's Pick</span>
                      <h2 className="text-3xl font-bold text-primary">Why Bandra West remains the 'Queen of Suburbs'</h2>
                      <p className="text-muted-foreground leading-relaxed">
                          Discover the unique blend of Portuguese architecture, trendy cafes, and luxury seafront residences that make Bandra the most coveted address in Mumbai.
                      </p>
                      <Link href="/area-guides/bandra-west" className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-all">
                          Read Full Guide <ChevronRight className="w-4 h-4" />
                      </Link>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}
