import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Building2, TrendingUp, ShieldCheck, Users, ArrowRight, Home, Key, HandCoins } from "lucide-react";
import PropertyCard from "@/components/ui/PropertyCard";

export default function HomePage() {
  const featuredProperties = [
    {
      image: "/images/apt.png",
      title: "The Crest at Worli",
      location: "Worli, South Mumbai",
      price: "8.40 Cr",
      bhk: "3",
      bathrooms: "3",
      area: "2150",
      type: "Luxury Apartment",
      status: "Ready to Move",
    },
    {
      image: "/images/infra.png",
      title: "Hiranandani Zen",
      location: "Powai, Mumbai",
      price: "4.25 Cr",
      bhk: "2",
      bathrooms: "2",
      area: "1100",
      type: "Residential",
      status: "Under Construction",
    },
    {
      image: "/images/hero.png",
      title: "Runwal Gardens",
      location: "Dombivli East, MMR",
      price: "65.0 L",
      bhk: "2",
      bathrooms: "2",
      area: "750",
      type: "Modern Flat",
      status: "New Launch",
    }
  ];

  const popularLocations = [
    { name: "Andheri West", properties: "1200+ Properties" },
    { name: "Bandra West", properties: "850+ Properties" },
    { name: "Powai", properties: "600+ Properties" },
    { name: "Worli", properties: "450+ Properties" },
    { name: "Thane West", properties: "1500+ Properties" },
    { name: "South Mumbai", properties: "300+ Properties" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/hero.png" 
          alt="Mumbai Skyline" 
          fill 
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-heading">
              Find Your Perfect <span className="text-secondary">Home</span> in Mumbai
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Buy, rent, sell, and explore trusted real estate insights across Mumbai, Navi Mumbai, Thane, and the MMR region.
            </p>
            
            {/* Search Bar */}
            <div className="mt-12 bg-white p-2 md:p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-5xl mx-auto">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-2">
                <select className="bg-muted px-4 py-3 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary/50">
                  <option>Buy</option>
                  <option>Rent</option>
                </select>
                <div className="relative col-span-1 md:col-span-2">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                  <input 
                    type="text" 
                    placeholder="Search by Location (e.g. Andheri East)" 
                    className="w-full bg-muted pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                  />
                </div>
                <select className="bg-muted px-4 py-3 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary/50">
                  <option>Budget</option>
                  <option>₹50L - ₹1Cr</option>
                  <option>₹1Cr - ₹5Cr</option>
                  <option>₹5Cr+</option>
                </select>
              </div>
              <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">Handpicked for you</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-primary">Featured Mumbai Projects</h2>
            </div>
            <Link href="/buy" className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-all group">
              View All Properties <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((prop, index) => (
              <PropertyCard key={index} {...prop} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Explore Top Localities</h2>
            <p className="text-muted-foreground mt-4">Discover the most sought-after residential neighborhoods in Mumbai</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularLocations.map((loc, index) => (
              <Link 
                key={index} 
                href={`/area-guides/${loc.name.toLowerCase().replace(/ /g, "-")}`}
                className="bg-white p-6 rounded-2xl flex flex-col items-center gap-3 premium-shadow hover:bg-secondary transition-all group border border-border/50"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-primary group-hover:text-white">{loc.name}</h3>
                  <p className="text-[10px] text-muted-foreground group-hover:text-white/80">{loc.properties}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/apt.png" 
                alt="Why Choose Us" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-secondary rounded-2xl">
                      <ShieldCheck className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">100% Verified</h4>
                      <p className="text-white/70">Every listing is manually checked</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <span className="text-secondary font-bold tracking-widest uppercase text-sm">Your Trusted Partner</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-primary">Why People Choose Mumbai Ghar</h2>
                <p className="text-muted-foreground mt-6 leading-relaxed">
                  We are more than just a property portal. We are Mumbai's local real estate experts, providing you with data-driven insights and verified opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-bold text-primary">Price Trends</h4>
                  <p className="text-sm text-muted-foreground">Detailed historical data to help you make informed investment decisions.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-bold text-primary">Expert Network</h4>
                  <p className="text-sm text-muted-foreground">Access to RERA-registered builders and verified local property consultants.</p>
                </div>
              </div>

              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-xl">
                Explore More Insights <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Comprehensive Property Services</h2>
            <p className="text-white/60 mt-4">From finding a home to managing legal documentation, we cover it all.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Buy a Home", desc: "Thousands of verified new and resale properties.", icon: Home },
              { title: "Rent a Flat", desc: "Flexible rental options across all budget categories.", icon: Key },
              { title: "Sell Property", desc: "List your property and reach millions of buyers.", icon: Building2 },
              { title: "Home Loans", desc: "Get pre-approved home loans from top banks.", icon: HandCoins },
            ].map((service, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{service.desc}</p>
                <Link href="#" className="mt-6 inline-flex items-center gap-2 text-secondary font-bold text-sm">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-secondary p-8 md:p-16 rounded-[40px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Visual Decor */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight">Stay Updated on Mumbai Real Estate</h2>
              <p className="text-primary/70 mt-6 text-lg">Receive weekly insights on new launches, price trends, and legal guides directly in your inbox.</p>
            </div>

            <div className="relative z-10 w-full max-w-md bg-white p-2 rounded-2xl shadow-xl flex flex-col md:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 text-primary focus:outline-none rounded-xl"
              />
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
