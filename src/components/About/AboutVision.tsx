import React from "react";
import Image from "next/image";

const visionPoints = [
  "Direct verification of property documents",
  "Quarterly market sentiment reports",
  "Dedicated support for NRIs",
  "Exclusive previews of new project launches",
];

export const AboutVision = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 h-[500px] relative rounded-[40px] overflow-hidden shadow-2xl">
            <Image
              src="/images/hero.png"
              alt="Vision"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              Empowering Homebuyers in Mumbai, Navi Mumbai & Thane
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Real estate in Mumbai can be overwhelming. From RERA compliance to
              Stamp Duty calculations, the journey is filled with complexity. At
              Mumbai Ghar, we simplify this by providing tools like the EMI
              Calculator, Area-wise Price Trends, and Builder Track Records.
            </p>
            <div className="space-y-4">
              {visionPoints.map((list, i) => (
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
  );
};
