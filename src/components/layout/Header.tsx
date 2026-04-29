"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, User, Home, Building2, Newspaper, Info } from "lucide-react";

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
    { title: "About", href: "/about", icon: Info },
    { title: "Blogs", href: "/blogs", icon: Newspaper },
    { title: "Buy", href: "/buy", icon: Building2 },
    { title: "Rent", href: "/rent", icon: Building2 },
    { title: "Sell", href: "/sell", icon: User },
    { title: "Builders", href: "/builders", icon: Building2 },
    { title: "Agents", href: "/agents", icon: User },
    { title: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showSolidHeader ? "bg-white/95 shadow-md py-5 max-[769px]:py-4" : "bg-transparent py-5 max-[769px]:py-4 text-white"
        }`}
    >
      <div className="container mx-auto max-[769px]:px-4 flex items-center justify-between">
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
          {navLinks.slice(0, 8).map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.title}
                href={link.href}
                className={`text-base font-medium transition-colors relative pb-1 group ${isActive
                    ? "text-secondary font-semibold"
                    : showSolidHeader
                      ? "text-primary hover:text-secondary"
                      : "text-white hover:text-secondary"
                  }`}
              >
                {link.title}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-secondary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/login"
            className={`text-base font-medium px-4 py-2 rounded-full transition-all duration-300 ${showSolidHeader
                ? "text-primary hover:bg-primary/10 hover:text-secondary"
                : "text-white hover:bg-white/10 hover:text-secondary"
              }`}
          >
            Sign In
          </Link>
          <Link
            href="/submit-property"
            className="bg-secondary hover:bg-secondary/90 hover:-translate-y-0.5 text-background px-6 py-2.5 rounded-full text-base font-bold transition-all duration-300 shadow-md active:scale-95"
          >
            Submit Property
          </Link>
          <Link
            href="/contact"
            className={`border-2 px-5 py-1.5 rounded-full text-base font-bold transition-all active:scale-95 ${showSolidHeader
              ? "border-primary text-primary hover:bg-primary hover:text-white"
              : "border-white text-white hover:bg-white hover:text-primary"
              }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 z-50 relative flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-primary pointer-events-none" />
          ) : (
            <Menu className={`w-6 h-6 ${showSolidHeader ? "text-primary" : "text-white"} pointer-events-none`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[60] transition-transform duration-300 ${isMenuOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"}`}>
        <div className="flex flex-col h-full bg-white text-primary">
          <div className="p-6 flex items-center justify-between border-b border-border">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <div className="p-1.5 rounded-lg bg-primary">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-heading text-primary">Mumbai Ghar</span>
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-primary/5 rounded-full transition-colors">
              <X className="w-6 h-6 text-primary" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-6 space-y-6">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`flex items-center gap-4 text-lg font-semibold transition-colors ${isActive ? "text-secondary" : "text-primary hover:text-secondary"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <link.icon className={`w-5 h-5 ${isActive ? "text-secondary" : "text-secondary/70"}`} />
                  {link.title}
                </Link>
              );
            })}
          </div>

          <div className="p-6 border-t border-border space-y-4">
            <Link
              href="/submit-property"
              className="block w-full bg-primary text-white text-center py-4 max-[769px]:py-3 rounded-xl font-bold text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Submit Property
            </Link>
            <Link
              href="/login"
              className="block w-full border-2 border-primary text-primary text-center py-4 max-[769px]:py-3 rounded-xl font-bold text-lg"
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
