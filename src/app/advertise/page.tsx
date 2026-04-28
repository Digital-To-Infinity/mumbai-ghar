import React from "react";
import { Megaphone, Users, Target, MousePointer2, CheckCircle2 } from "lucide-react";

export default function AdvertisePage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="bg-secondary p-12 md:p-24 m-4 md:m-8 rounded-[40px] text-primary space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-4xl space-y-6 relative z-10">
            <h1 className="text-4xl md:text-7xl font-bold font-heading leading-tight">Grow Your Real Estate Brand With Mumbai Ghar</h1>
            <p className="text-xl md:text-2xl text-primary/70 max-w-2xl leading-relaxed">
                Connect with thousands of high-intent property seekers in the Mumbai Metropolitan Region.
            </p>
            <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-transform">Download Media Kit</button>
        </div>
      </section>

      <section className="py-24">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                  {[
                      { label: "Monthly Visitors", value: "250K+", icon: Users },
                      { label: "Lead Conversion", value: "12%", icon: MousePointer2 },
                      { label: "MMR Focus", value: "100%", icon: Target },
                      { label: "Active Listings", value: "15K+", icon: Megaphone },
                  ].map((stat, idx) => (
                      <div key={idx} className="space-y-4">
                          <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto">
                              <stat.icon className="w-8 h-8 text-primary" />
                          </div>
                          <div>
                              <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
                              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-16 space-y-4">
                  <h2 className="text-3xl md:text-5xl font-bold text-primary">Advertising Solutions</h2>
                  <p className="text-muted-foreground">Tailored packages for builders, agents, and furniture brands.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                      { 
                        title: "Featured Builder", 
                        price: "Starting ₹25,000", 
                        features: ["Premium Profile", "3 Featured Projects", "Direct Leads Dashboard", "Priority in Search"] 
                      },
                      { 
                        title: "Pro Agent", 
                        price: "Starting ₹5,000", 
                        features: ["Verified Badge", "Area Specialization", "Lead SMS Alerts", "Review Management"] 
                      },
                      { 
                        title: "Banner Ads", 
                        price: "Starting ₹10,000", 
                        features: ["High CTR Banners", "Locality Targeting", "Detailed Analytics", "Creative Support"] 
                      }
                  ].map((plan, idx) => (
                      <div key={idx} className="bg-white p-10 rounded-[40px] border border-border shadow-sm flex flex-col hover:border-accent transition-all group">
                          <h3 className="text-xl font-bold text-primary mb-2">{plan.title}</h3>
                          <p className="text-accent font-bold text-lg mb-8">{plan.price}</p>
                          <ul className="space-y-4 flex-1">
                              {plan.features.map(f => (
                                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> {f}
                                  </li>
                              ))}
                          </ul>
                          <button className="mt-10 w-full py-4 border-2 border-primary text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-all">Get Started</button>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
}
