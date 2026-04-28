"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, Phone, User, Home, Building2, MapPin, Newspaper, Info } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolidHeader = !isHomePage || isScrolled;

  const navLinks = [
    { title: "Home", href: "/", icon: Home },
    { title: "Buy", href: "/buy", icon: Building2 },
    { title: "Rent", href: "/rent", icon: Building2 },
    { title: "Sell", href: "/sell", icon: User },
    { title: "Area Guides", href: "/area-guides", icon: MapPin },
    { title: "Builders", href: "/builders", icon: Building2 },
    { title: "Agents", href: "/agents", icon: User },
    { title: "News", href: "/news", icon: Newspaper },
    { title: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidHeader ? "bg-white/95 backdrop-blur-md shadow-md py-4" : "bg-transparent py-4 text-white"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className={`p-1.5 rounded-lg ${showSolidHeader ? "bg-primary" : "bg-white"}`}>
            <Building2 className={`w-6 h-6 ${showSolidHeader ? "text-white" : "text-primary"}`} />
          </div>
          <span className={`text-xl font-bold font-heading tracking-tight ${showSolidHeader ? "text-primary" : "text-white"}`}>
            Mumbai <span className="text-secondary">Ghar</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 8).map((link) => (
            <Link 
              key={link.title} 
              href={link.href}
              className={`text-sm font-medium hover:text-secondary transition-colors ${
                showSolidHeader ? "text-primary" : "text-white"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login" className={`text-sm font-medium ${showSolidHeader ? "text-primary" : "text-white"}`}>
            Sign In
          </Link>
          <Link 
            href="/submit-property" 
            className="bg-secondary hover:bg-secondary/90 text-primary px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg active:scale-95"
          >
            Submit Property
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={`w-6 h-6 ${showSolidHeader ? "text-primary" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${showSolidHeader ? "text-primary" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full bg-white text-primary">
          <div className="p-6 flex items-center justify-between border-b border-border">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <div className="p-1.5 rounded-lg bg-primary">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-heading text-primary">Mumbai Ghar</span>
            </Link>
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="w-8 h-8 pointer-events-auto" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto py-6 px-6 space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.title} 
                href={link.href}
                className="flex items-center gap-4 text-lg font-semibold hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <link.icon className="w-5 h-5 text-secondary" />
                {link.title}
              </Link>
            ))}
          </div>

          <div className="p-6 border-t border-border space-y-4">
            <Link 
              href="/submit-property" 
              className="block w-full bg-primary text-white text-center py-4 rounded-xl font-bold text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Submit Property
            </Link>
            <Link 
              href="/login" 
              className="block w-full border-2 border-primary text-primary text-center py-4 rounded-xl font-bold text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
