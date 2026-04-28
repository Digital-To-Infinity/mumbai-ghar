import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, MapPin, Search, CheckCircle2, ChevronRight, Globe, Layers } from "lucide-react";

export default function BuildersPage() {
  const builders = [
    {
      name: "Lodha Group",
      logo: "/images/infra.png",
      experience: "40+ Years",
      projects: "150+ Projects",
      specialization: "Luxury Residential",
      areas: "Worli, South Mumbai, Thane",
      verified: true
    },
    {
      name: "Oberoi Realty",
      logo: "/images/apt.png",
      experience: "35+ Years",
      projects: "80+ Projects",
      specialization: "Premium High-rise",
      areas: "Goregaon, Mulund, Worli",
      verified: true
    },
    {
      name: "Godrej Properties",
      logo: "/images/hero.png",
      experience: "30+ Years",
      projects: "120+ Projects",
      specialization: "Green Living",
      areas: "Vikhroli, Panvel, Chembur",
      verified: true
    },
    {
      name: "Hiranandani Group",
      logo: "/images/infra.png",
      experience: "45+ Years",
      projects: "95+ Projects",
      specialization: "Integrated Townships",
      areas: "Powai, Thane, Panvel",
      verified: true
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-muted/30">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-heading mb-4">Top Builders in Mumbai</h1>
          <p className="text-white/60 max-w-2xl">Connect with Mumbai's most trusted real estate developers and explore their latest residential & commercial projects.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                    <h3 className="font-bold text-primary mb-4 uppercase text-xs tracking-widest">Search Builder</h3>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input type="text" placeholder="Builder Name..." className="w-full bg-muted pl-10 pr-4 py-2.5 rounded-xl text-sm focus:outline-none" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                    <h3 className="font-bold text-primary mb-4 uppercase text-xs tracking-widest">Major Hubs</h3>
                    <div className="space-y-2">
                        {["South Mumbai", "Thane", "Navi Mumbai", "Western Suburbs"].map(hub => (
                            <label key={hub} className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer hover:text-primary">
                                <input type="checkbox" className="w-4 h-4 accent-secondary" /> {hub}
                            </label>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Builder List */}
            <div className="flex-1 space-y-6">
                {builders.map((builder, idx) => (
                    <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 border border-border/50 premium-shadow hover:border-secondary transition-all group">
                        <div className="w-full md:w-48 h-48 bg-muted rounded-2xl overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                            <Image src={builder.logo} alt={builder.name} fill className="object-cover" />
                        </div>
                        
                        <div className="flex-1 space-y-4">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-primary">{builder.name}</h2>
                                    {builder.verified && (
                                        <div className="flex items-center gap-1 mt-1">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                                            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Verified Developer</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 border border-border rounded-lg hover:bg-muted"><Globe className="w-4 h-4" /></button>
                                    <button className="p-2 border border-border rounded-lg hover:bg-muted"><Building2 className="w-4 h-4" /></button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-4 border-y border-border/50">
                                <div>
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Experience</p>
                                    <p className="font-bold text-primary">{builder.experience}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Projects</p>
                                    <p className="font-bold text-primary">{builder.projects}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Active Areas</p>
                                    <p className="text-xs text-primary max-w-[150px] truncate">{builder.areas}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Speciality</p>
                                    <p className="text-xs text-primary">{builder.specialization}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <Link href="#" className="text-xs font-bold text-accent hover:underline flex items-center gap-1">View All Projects <ChevronRight className="w-3 h-3" /></Link>
                                <button className="bg-primary text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-all">Contact Developer</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
