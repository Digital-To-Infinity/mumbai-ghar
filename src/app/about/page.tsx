import React from "react";
import Image from "next/image";
import { ShieldCheck, Target, Users, Landmark, Heart, Building2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-primary">Redefining Mumbai's Real Estate Search</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded in 2024, Mumbai Ghar is dedicated specifically to the MMR region. Our mission is to bring transparency, verification, and expert insight to every property transaction in Mumbai.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Transparency First", desc: "No hidden charges, no fake listings. We provide the complete picture including pros and cons of every locality.", icon: ShieldCheck },
              { title: "Local Expertise", desc: "We are born and raised in Mumbai. We know every gully, every upcoming metro station, and every major developer.", icon: Target },
              { title: "Community Focused", desc: "Our platform is built for Mumbaikars, helping families find their dream homes while protecting their investments.", icon: Users },
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-6 p-8 rounded-3xl border border-border hover:border-secondary transition-colors group">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto group-hover:bg-secondary group-hover:scale-110 transition-all">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Stats */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-secondary">5,000+</h3>
                    <p className="text-white/60 mt-2 text-sm font-bold uppercase tracking-widest">Verified Listings</p>
                </div>
                <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-secondary">150+</h3>
                    <p className="text-white/60 mt-2 text-sm font-bold uppercase tracking-widest">Partner Builders</p>
                </div>
                <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-secondary">42</h3>
                    <p className="text-white/60 mt-2 text-sm font-bold uppercase tracking-widest">Mumbai Localities</p>
                </div>
                <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-secondary">24/7</h3>
                    <p className="text-white/60 mt-2 text-sm font-bold uppercase tracking-widest">Advisory Support</p>
                </div>
            </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 h-[500px] relative rounded-[40px] overflow-hidden shadow-2xl">
              <Image src="/images/hero.png" alt="Vision" fill className="object-cover" />
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Empowering Homebuyers in Mumbai, Navi Mumbai & Thane</h2>
              <p className="text-muted-foreground leading-relaxed">
                Real estate in Mumbai can be overwhelming. From RERA compliance to Stamp Duty calculations, the journey is filled with complexity. At Mumbai Ghar, we simplify this by providing tools like the EMI Calculator, Area-wise Price Trends, and Builder Track Records.
              </p>
              <div className="space-y-4">
                  {[
                    "Direct verification of property documents",
                    "Quarterly market sentiment reports",
                    "Dedicated support for NRIs",
                    "Exclusive previews of new project launches"
                  ].map((list, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-primary">{list}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
