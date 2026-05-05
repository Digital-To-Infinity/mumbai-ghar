import React from "react";
import { ChevronRight, Home, Users, MapPin } from "lucide-react";

export const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] right-[10%] w-24 h-24 border border-primary/10 rounded-full animate-bounce [animation-duration:8s]" />
        <div className="absolute bottom-[20%] left-[15%] w-16 h-16 border border-secondary/20 rounded-full animate-bounce [animation-duration:5s]" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Breadcrumb / Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm group hover:bg-primary/10 transition-all cursor-default">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">About Mumbai Ghar</span>
            <ChevronRight className="w-3 h-3 text-primary group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-7xl font-bold font-heading text-primary leading-[1.1] tracking-tight">
            Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Mumbai's</span> <br /> 
            Real Estate <span className="relative inline-block">
              Search
              <span className="absolute bottom-2 left-0 w-full h-3 bg-secondary/10 -z-10" />
            </span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            Founded in 2024, Mumbai Ghar is dedicated specifically to the MMR region. Our mission is to bring transparency, verification, and expert insight to every property transaction in Mumbai.
          </p>

          {/* Interactive Feature Mini-Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10">
            {[
              { icon: Home, label: "Verified Listings", value: "5000+" },
              { icon: Users, label: "Happy Families", value: "1200+" },
              { icon: MapPin, label: "Localities Covered", value: "42+" },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group p-4 rounded-2xl border border-border bg-white/50 backdrop-blur-md hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{item.label}</p>
                    <p className="text-xl font-extrabold text-primary">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};
