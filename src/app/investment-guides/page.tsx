import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, BarChart3, ShieldCheck, MapPin, ArrowRight } from "lucide-react";

export default function InvestmentGuidesPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <Image src="/images/hero.png" alt="Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs">For Investors</span>
            <h1 className="text-4xl md:text-7xl font-bold font-heading mt-6 mb-8">Smart Real Estate Investing in Mumbai</h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
                Unlock the potential of India's most stable real estate market. Data-driven insights on ROI, rental yields, and high-growth property corridors.
            </p>
        </div>
      </section>

      <section className="py-24">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {[
                      { title: "Rental Yield Analysis", desc: "Which Mumbai localities offer the best ROI for long-term rentals?", icon: BarChart3 },
                      { title: "Under-Construction Risks", desc: "How to evaluate builders and project timelines before investing.", icon: ShieldCheck },
                      { title: "Emerging Hotspots", desc: "Identifying the next 'Bandra' or 'Worli' in the suburban corridors.", icon: MapPin },
                  ].map((guide, idx) => (
                      <div key={idx} className="bg-muted/30 p-10 rounded-[40px] space-y-6 hover:bg-white transition-all border border-transparent hover:border-border hover:shadow-xl group">
                          <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-md group-hover:bg-primary transition-all">
                              <guide.icon className="w-8 h-8 text-primary group-hover:text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-primary">{guide.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{guide.desc}</p>
                          <Link href="#" className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest border-b border-secondary pb-1 w-fit group-hover:gap-4 transition-all">
                              Read Guide <ArrowRight className="w-4 h-4 text-secondary" />
                          </Link>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted/50 border-y border-border">
          <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="max-w-md space-y-6">
                      <h2 className="text-3xl font-bold text-primary">Mumbai Real Estate: A Decade of Growth</h2>
                      <p className="text-muted-foreground leading-relaxed">In the last 10 years, South Mumbai property values have appreciated by over 240%, while the Navi Mumbai corridor has seen a 180% growth.</p>
                      <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg">Download 2024 Market Forecast</button>
                  </div>
                  <div className="flex-1 w-full h-[300px] bg-white rounded-3xl border border-border shadow-inner flex items-center justify-center">
                        <TrendingUp className="w-24 h-24 text-secondary opacity-20" />
                        <span className="absolute text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Interactive Market Chart Placeholder</span>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}
