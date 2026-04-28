import React from "react";
import Link from "next/link";
import { Building2, Globe, Share2, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-white">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-bold font-heading tracking-tight text-white">
                Mumbai <span className="text-secondary">Ghar</span>
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed max-w-xs">
              Mumbai's most trusted real estate portal. We connect home buyers, renters, and investors with premium properties across the MMR region.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Globe className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Share2 className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-heading">Popular Locations</h3>
            <ul className="space-y-3">
              {["Andheri East & West", "Bandra & Khar", "Powai & Hiranandani", "Worli & Lower Parel", "Thane West", "Navi Mumbai"].map((loc) => (
                <li key={loc}>
                  <Link href={`/area-guides/${loc.toLowerCase().replace(/ /g, "-")}`} className="text-white/70 hover:text-secondary transition-colors text-sm">
                    {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-heading">Real Estate Guides</h3>
            <ul className="space-y-3">
              {["Investment Guide", "Home Loan Guide", "Stamp Duty & Reg.", "RERA Insights", "Builder Directory", "Agent Directory"].map((service) => (
                <li key={service}>
                  <Link href={`/${service.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} className="text-white/70 hover:text-secondary transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-heading">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-white/70 text-sm">Level 8, BKC Towers, G Block BKC, Bandra East, Mumbai, 400051</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-white/70 text-sm">+91 22 4567 8900</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-white/70 text-sm">hello@mumbaighar.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {currentYear} Mumbai Ghar Real Estate Services. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-secondary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-secondary">Terms & Conditions</Link>
            <Link href="/sitemap" className="hover:text-secondary">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
