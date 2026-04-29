import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, User, Share2, ArrowRight, ChevronRight, TrendingUp, Newspaper } from "lucide-react";

export default function BlogsPage() {
  const blogs = [
    {
      title: "MTHL Impact: Property Prices in Panvel and Ulwe surge by 15%",
      category: "Market Trends",
      date: "Oct 24, 2023",
      image: "/images/infra.png",
      excerpt: "The completion of Atal Setu has transformed connectivity between Mumbai and Navi Mumbai, leading to a massive spike in residential demand."
    },
    {
      title: "Upcoming Metro Line 3: Best areas to invest before 2025",
      category: "Investment Guide",
      date: "Oct 22, 2023",
      image: "/images/hero.png",
      excerpt: "Phase 1 of Metro 3 is nearing completion. We analyze which South Mumbai localities will see the highest rental appreciation."
    },
    {
      title: "New CSR Policy for Mumbai Builders: What homebuyers need to know",
      category: "Legal & Policy",
      date: "Oct 20, 2023",
      image: "/images/apt.png",
      excerpt: "Maharera introduces new guidelines for project transparency and environmental sustainability in MMR region."
    },
    {
        title: "Coastal Road Project: Worli to Marine Drive in 10 minutes",
        category: "Infrastructure",
        date: "Oct 18, 2023",
        image: "/images/hero.png",
        excerpt: "The partial opening of the Mumbai Coastal Road has significantly reduced travel time for commuters in South Mumbai."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-muted py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs">Mumbai Real Estate Blogs</span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mt-4 text-primary leading-tight">Latest Property Blogs & Infrastructure Updates</h1>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main News List */}
            <div className="lg:col-span-2 space-y-12">
              {blogs.map((item, idx) => (
                <article key={idx} className="group flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-64 h-48 relative rounded-3xl overflow-hidden shrink-0 shadow-lg">
                    <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-bold text-primary uppercase">{item.category}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.date}</span>
                      <span className="flex items-center gap-1"><User className="w-3 h-3" /> Staff Writer</span>
                    </div>
                    <h2 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors leading-snug">
                      <Link href="#">{item.title}</Link>
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{item.excerpt}</p>
                    <Link href="#" className="inline-flex items-center gap-2 text-primary font-bold text-xs group/link">
                      Read More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-12">
                {/* Popular Topics */}
                <div className="bg-muted p-8 rounded-[32px] space-y-6">
                    <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-secondary" /> Hot Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {["MTHL", "Coastal Road", "Navi Mumbai Airport", "Metro 3", "Stamp Duty", "RERA Updates", "Luxury Real Estate"].map(tag => (
                            <Link key={tag} href="#" className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-primary hover:bg-secondary hover:text-primary transition-all">
                                #{tag}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Newsletter Box */}
                <div className="bg-primary p-8 rounded-[32px] text-white space-y-6 relative overflow-hidden">
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                    <Newspaper className="w-10 h-10 text-secondary" />
                    <h3 className="text-xl font-bold">Weekly Roundup</h3>
                    <p className="text-white/60 text-sm leading-relaxed">Join 15,000+ Mumbai property investors receiving our curated weekly market report.</p>
                    <div className="space-y-3">
                        <input type="email" placeholder="Your Email" className="w-full bg-white/10 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-secondary/50 placeholder:text-white/30" />
                        <button className="w-full bg-secondary text-primary font-bold py-3 rounded-xl text-sm hover:scale-[1.02] transition-transform">Get Blogs First</button>
                    </div>
                </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
