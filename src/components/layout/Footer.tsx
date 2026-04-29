import Link from "next/link";
import { Building2, Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "@/components/ui/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 max-[426px]:pt-8 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-white">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-heading tracking-tight leading-none">
                  Mumbai Ghar
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white font-bold mt-1">
                  Real Estate Excellence
                </span>
              </div>
            </Link>
            
            <p className="text-white/60 leading-relaxed text-sm">
              Mumbai's most trusted real estate portal. We connect home buyers, renters, and investors with premium, verified properties across the MMR region.
            </p>

            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: "#", hoverClass: "hover:bg-[#1877F2] hover:border-[#1877F2]" },
                { icon: Twitter, href: "#", hoverClass: "hover:bg-[#1DA1F2] hover:border-[#1DA1F2]" },
                { icon: Instagram, href: "#", hoverClass: "hover:bg-[#E4405F] hover:border-[#E4405F]" },
                { icon: Linkedin, href: "#", hoverClass: "hover:bg-[#0A66C2] hover:border-[#0A66C2]" },
                { icon: Youtube, href: "#", hoverClass: "hover:bg-[#FF0000] hover:border-[#FF0000]" },
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white transition-all duration-300 group ${social.hoverClass}`}
                >
                  <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold font-heading relative w-fit">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-white rounded-full" />
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Buy Properties", href: "/buy" },
                { name: "Rent Flat/House", href: "/rent" },
                { name: "Sell Property", href: "/submit-property" },
                { name: "Popular Locations", href: "/area-guides" },
                { name: "Builder Directory", href: "/builders" },
                { name: "Investment Guides", href: "/investment-guides" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-all flex items-center gap-2 text-sm group">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Localities */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold font-heading relative w-fit">
              Top Localities
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-white rounded-full" />
            </h3>
            <ul className="space-y-4">
              {[
                "Andheri West", 
                "Bandra & Khar", 
                "Powai & Hiranandani", 
                "Worli & South Mumbai", 
                "Thane West", 
                "Navi Mumbai"
              ].map((loc) => (
                <li key={loc}>
                  <Link href={`/area-guides/${loc.toLowerCase().replace(/ /g, "-")}`} className="text-white/70 hover:text-white transition-all flex items-center gap-2 text-sm group">
                    <MapPin className="w-3.5 h-3.5 text-white opacity-50 group-hover:opacity-100 transition-all" />
                    {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold font-heading relative w-fit">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-white rounded-full" />
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/20 group-hover:border-white/30 transition-all">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white transition-colors">
                  Level 8, BKC Towers, G Block BKC, Bandra East, Mumbai 400051
                </p>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/20 group-hover:border-white/30 transition-all">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <p className="text-white/60 text-sm group-hover:text-white transition-colors">+91 22 4567 8900</p>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/20 group-hover:border-white/30 transition-all">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <p className="text-white/60 text-sm group-hover:text-white transition-colors">hello@mumbaighar.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 order-2 lg:order-1 text-center md:text-left">
            <p className="text-white/70 text-sm">
              © {currentYear} Mumbai Ghar Real Estate Services Pvt. Ltd.
              <span className="text-white/50"> | </span>
              <span>Crafted By <a target="_blank" href="https://digitaltoinfinity.com/" className="text-white/70 hover:text-white hover:underline">Digital To Infinity</a></span>
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-white/70 hover:text-white hover:underline text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-white/70 hover:text-white hover:underline text-sm transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="text-white/70 hover:text-white hover:underline text-sm transition-colors">Sitemap</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4 order-1 lg:order-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span className="text-[10px] font-bold tracking-widest text-white/70">RERA REGISTERED</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
