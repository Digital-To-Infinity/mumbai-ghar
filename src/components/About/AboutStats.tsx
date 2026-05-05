import React from "react";

const stats = [
  { label: "Verified Listings", value: "5,000+" },
  { label: "Partner Builders", value: "150+" },
  { label: "Mumbai Localities", value: "42" },
  { label: "Advisory Support", value: "24/7" },
];

export const AboutStats = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-4xl md:text-5xl font-bold text-secondary">
                {stat.value}
              </h3>
              <p className="text-white/60 mt-2 text-sm font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
