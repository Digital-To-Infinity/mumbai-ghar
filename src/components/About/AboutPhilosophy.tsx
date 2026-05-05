import React from "react";
import { ShieldCheck, Target, Users } from "lucide-react";

const philosophyItems = [
  {
    title: "Transparency First",
    desc: "No hidden charges, no fake listings. We provide the complete picture including pros and cons of every locality.",
    icon: ShieldCheck,
  },
  {
    title: "Local Expertise",
    desc: "We are born and raised in Mumbai. We know every gully, every upcoming metro station, and every major developer.",
    icon: Target,
  },
  {
    title: "Community Focused",
    desc: "Our platform is built for Mumbaikars, helping families find their dream homes while protecting their investments.",
    icon: Users,
  },
];

export const AboutPhilosophy = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {philosophyItems.map((item, idx) => (
            <div
              key={idx}
              className="text-center space-y-6 p-8 rounded-3xl border border-border hover:border-secondary transition-colors group"
            >
              <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto group-hover:bg-secondary group-hover:scale-110 transition-all">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
