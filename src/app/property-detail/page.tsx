import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  BedDouble, Bath, Square, MapPin, CheckCircle2, ChevronRight, 
  Share2, Heart, ShieldCheck, User, Phone, Mail, MessageSquare,
  CarFront, ArrowUpFromLine, Layers, Info,
  TrendingUp
} from "lucide-react";

export default function PropertyDetailPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-muted/50 py-4 border-b border-border">
        <div className="container mx-auto px-4 flex items-center gap-2 text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest">
          <Link href="/">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/buy">Buy</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary truncate">The Crest at Worli</span>
        </div>
      </div>

      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Title & Actions */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> VERIFIED BY MUMBAI GHAR
                </span>
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded">RERA: P51900001234</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-primary font-heading">The Crest at Worli</h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Annie Besant Road, Worli, South Mumbai, 400018
              </p>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button className="flex-1 md:flex-none p-3 border border-border rounded-xl hover:bg-muted transition-colors flex items-center justify-center gap-2 font-bold text-sm">
                <Share2 className="w-4 h-4" /> Share
              </button>
              <button className="flex-1 md:flex-none p-3 border border-border rounded-xl hover:bg-muted transition-colors flex items-center justify-center gap-2 font-bold text-sm">
                <Heart className="w-4 h-4" /> Save
              </button>
              <div className="hidden lg:flex flex-col items-end">
                <span className="text-xs text-muted-foreground font-bold">Starting Price</span>
                <span className="text-3xl font-bold text-primary">₹8.40 Cr</span>
                <span className="text-[10px] text-accent font-bold uppercase tracking-widest mt-1">Market Best Deal</span>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <div className="md:col-span-2 relative">
              <Image src="/images/apt.png" alt="Main View" fill className="object-cover" />
            </div>
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
              <div className="relative flex-1 min-w-[200px] md:min-w-0 h-full md:h-1/2">
                <Image src="/images/hero.png" alt="View 2" fill className="object-cover" />
              </div>
              <div className="relative flex-1 min-w-[200px] md:min-w-0 h-full md:h-1/2">
                <Image src="/images/infra.png" alt="View 3" fill className="object-cover" />
              </div>
            </div>
            <div className="hidden md:block relative h-full">
              <Image src="/images/apt.png" alt="View 4" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/20 transition-all">
                <span className="text-white font-bold text-lg">+12 Photos</span>
              </div>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-muted/30 rounded-3xl border border-border">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Configuration</span>
                  <div className="flex items-center gap-2">
                    <BedDouble className="w-5 h-5 text-secondary" />
                    <span className="font-bold text-primary">3 BHK</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Carpet Area</span>
                  <div className="flex items-center gap-2">
                    <Square className="w-5 h-5 text-secondary" />
                    <span className="font-bold text-primary">2150 Sq.Ft</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Bathrooms</span>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-secondary" />
                    <span className="font-bold text-primary">3 Units</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Parking</span>
                  <div className="flex items-center gap-2">
                    <CarFront className="w-5 h-5 text-secondary" />
                    <span className="font-bold text-primary">2 Open</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary">Property Description</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Experience luxury living at its finest in this exquisite 3 BHK apartment located in the heart of Worli. This east-facing vastu-compliant home offers breathtaking views of the Mumbai skyline and partial sea views.
                  </p>
                  <p>
                    The project, developed by India's top developer, features world-class amenities including a temperature-controlled swimming pool, a 15,000 sq.ft. clubhouse, and 5-tier security.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  {["Vastu Compliant", "Sea View", "Clubhouse", "Gymnasium", "Security", "Power Backup"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-muted rounded-full text-xs font-bold text-primary">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Specific Details Table */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary">Project Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {[
                    { label: "Project Name", value: "The Crest" },
                    { label: "Developer", value: "Premium Realty Group" },
                    { label: "Possession Status", value: "Ready to Move" },
                    { label: "Total Floors", value: "52 Floors" },
                    { label: "Floor Range", value: "Middle (25th)" },
                    { label: "Construction Status", value: "OC Received" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <span className="text-sm font-bold text-primary">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar - Contact Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <div className="bg-white p-8 rounded-[32px] premium-shadow border border-border space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center overflow-hidden">
                        <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Rajesh Malhotra</h4>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">RERA Registered Agent</p>
                      <div className="flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-3 h-3 text-accent" />
                        <span className="text-[10px] text-accent font-bold">Verified Consultant</span>
                      </div>
                    </div>
                  </div>

                  <form className="space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full bg-muted px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" />
                    <input type="email" placeholder="Email Address" className="w-full bg-muted px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" />
                    <input type="tel" placeholder="Mobile Number" className="w-full bg-muted px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" />
                    <textarea placeholder="I'm interested in this property..." rows={3} className="w-full bg-muted px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"></textarea>
                    
                    <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg">
                      Contact Agent
                    </button>
                    <div className="grid grid-cols-2 gap-3">
                        <button type="button" className="p-3 border border-border rounded-xl flex items-center justify-center gap-2 text-xs font-bold hover:bg-muted transition-colors">
                            <Phone className="w-4 h-4 text-secondary" /> Call
                        </button>
                        <button type="button" className="p-3 border border-border rounded-xl flex items-center justify-center gap-2 text-xs font-bold hover:bg-muted transition-colors">
                            <MessageSquare className="w-4 h-4 text-green-500" /> WhatsApp
                        </button>
                    </div>
                  </form>

                  <p className="text-[10px] text-center text-muted-foreground">By submitting you agree to our Terms and Privacy Policy.</p>
                </div>

                {/* Investment Insight */}
                <div className="bg-accent/5 border border-accent/20 p-6 rounded-3xl space-y-4">
                    <div className="flex items-center gap-2 text-accent">
                        <TrendingUp className="w-5 h-5" />
                        <h4 className="font-bold text-sm">Price Insight</h4>
                    </div>
                    <p className="text-xs text-primary/70 leading-relaxed">Average price in Worli has grown by <span className="text-accent font-bold">12.5%</span> in the last 12 months.</p>
                    <Link href="#" className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-1 hover:translate-x-1 transition-transform">View Full Report <ChevronRight className="w-3 h-3" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
