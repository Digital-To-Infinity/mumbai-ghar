import Image from "next/image";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-12 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[650px] max-[426px]:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/apt.png"
              alt="Why Choose Us"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8 max-[426px]:p-4">
              <div className="text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 max-[426px]:p-2 bg-secondary rounded-2xl">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl max-[426px]:text-xl font-bold">100% Verified</h4>
                    <p className="text-white max-[426px]:text-sm">Every listing is manually checked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary tracking-wider uppercase">
                🛡️ Your Trusted Partner
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 text-black leading-tight font-heading">
                Why People Choose <span className="italic font-bold text-secondary border-b-3 border-secondary">Mumbai Ghar</span>
              </h2>
              <p className="text-muted-foreground mt-6 text-base md:text-lg leading-relaxed">
                We are far more than just a standard property portal. <span className="italic font-bold text-secondary border-b-2 border-secondary/50 pb-0.5">Mumbai Ghar</span> stands as the city's premier data-driven real estate authority. We empower home buyers with real-time analytics and fully transparent local market knowledge.
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground text-base leading-relaxed border-l-2 border-secondary/30 pl-6">
              <p>
                Our team closely monitors <strong className="text-primary font-bold">Price Trends</strong> across major development pockets in the MMR. We break down complex historical pricing data and predictive analytics, ensuring that you don't just buy a house, but secure a sound financial investment for the future.
              </p>

              <p>
                By tapping into our robust <strong className="text-primary font-bold">Expert Network</strong>, you instantly connect with RERA-authorized legal consultants, builders, and seasoned advisory teams. Skip the middlemen and experience true, uncompromised transparency at every stage.
              </p>
            </div>

            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl duration-300 hover:-translate-y-0.5 cursor-pointer">
              Explore More Insights <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
