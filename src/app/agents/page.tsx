import React from "react";
import Image from "next/image";
import Link from "next/link";
import { User, MapPin, Search, CheckCircle2, Star, Phone, MessageSquare, Briefcase } from "lucide-react";

export default function AgentsPage() {
  const agents = [
    {
      name: "Amit Sharma",
      firm: "Sharma Reality Experts",
      experience: "12+ Years",
      location: "Andheri West, Juhu",
      speciality: "Resale & Luxury",
      rating: 4.9,
      reviews: 124,
      verified: true
    },
    {
      name: "Sanjay Gupta",
      firm: "Gupta Estates",
      experience: "8+ Years",
      location: "Bandra, Khar, Santacruz",
      speciality: "Commercial & Plots",
      rating: 4.8,
      reviews: 86,
      verified: true
    },
    {
      name: "Priya Varma",
      firm: "Urban Nest Advisors",
      experience: "5+ Years",
      location: "Powai, Hiranandani",
      speciality: "Rentals & Sublets",
      rating: 4.7,
      reviews: 52,
      verified: true
    },
    {
      name: "Vikram Malhotra",
      firm: "Malhotra & Co.",
      experience: "15+ Years",
      location: "Worli, South Mumbai",
      speciality: "New Project Sales",
      rating: 5.0,
      reviews: 210,
      verified: true
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-muted/30">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-heading mb-4">Verified Property Consultants</h1>
          <p className="text-white/60 max-w-2xl">Partner with local experts who understand every neighborhood in Mumbai. All agents are verified and RERA registered.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agents.map((agent, idx) => (
              <div key={idx} className="bg-white rounded-[32px] overflow-hidden border border-border/50 premium-shadow group transition-all hover:-translate-y-2">
                <div className="p-8 text-center space-y-4">
                  {/* Profile Pic */}
                  <div className="relative w-24 h-24 mx-auto">
                    <div className="w-full h-full bg-muted rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                        <User className="w-12 h-12 text-primary/20" />
                    </div>
                    {agent.verified && (
                        <div className="absolute bottom-0 right-0 p-1.5 bg-accent rounded-full border-2 border-white shadow-md">
                            <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-primary">{agent.name}</h3>
                    <p className="text-xs font-medium text-muted-foreground">{agent.firm}</p>
                  </div>

                  <div className="flex items-center justify-center gap-1">
                    {[1, 2, 3, 4, 5].map(s => (
                        <Star key={s} className={`w-3 h-3 ${s <= Math.floor(agent.rating) ? "text-secondary fill-secondary" : "text-border"}`} />
                    ))}
                    <span className="text-[10px] font-bold text-primary ml-1">{agent.rating} ({agent.reviews} Reviews)</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-dashed border-border">
                    <div className="space-y-1">
                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Exp</p>
                        <p className="text-xs font-bold text-primary">{agent.experience}</p>
                    </div>
                    <div className="space-y-1 text-center">
                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Cases</p>
                        <p className="text-xs font-bold text-primary">{agent.reviews}</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <div className="flex items-center gap-2 text-primary">
                        <MapPin className="w-3.5 h-3.5 text-secondary" />
                        <span className="text-xs font-medium">{agent.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                        <Briefcase className="w-3.5 h-3.5 text-secondary" />
                        <span className="text-xs font-medium">{agent.speciality}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 bg-muted p-3 rounded-xl hover:bg-secondary transition-colors group/btn">
                        <Phone className="w-4 h-4 text-primary mx-auto" />
                    </button>
                    <button className="flex-1 bg-muted p-3 rounded-xl hover:bg-green-500 transition-colors group/btn">
                        <MessageSquare className="w-4 h-4 text-primary group-hover/btn:text-white mx-auto" />
                    </button>
                    <Link href="#" className="flex-[2] bg-primary text-white text-xs font-bold py-3 rounded-xl flex items-center justify-center hover:bg-primary/90">
                        Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 bg-secondary rounded-[40px] p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold text-primary">Are you a Real Estate Professional?</h2>
              <p className="text-primary/70 max-w-xl mx-auto">Get verified and list your services on Mumbai's most trusted real estate portal. Reach thousands of active property seekers.</p>
              <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition-transform">Register as Agent</button>
          </div>
        </div>
      </section>
    </div>
  );
}
