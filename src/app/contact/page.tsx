import React from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Connect With Mumbai Ghar</h1>
          <p className="text-white/60 max-w-xl mx-auto">We're here to help you navigate the Mumbai real estate market with confidence and ease.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Head Office</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg">Visit Us</h4>
                      <p className="text-muted-foreground mt-1">Level 8, BKC Towers, G Block BKC,<br />Bandra East, Mumbai, 400051</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg">Call Us</h4>
                      <p className="text-muted-foreground mt-1">Sales: +91 22 4567 8900<br />Support: +91 22 4567 8911</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg">Email Us</h4>
                      <p className="text-muted-foreground mt-1">hello@mumbaighar.com<br />partners@mumbaighar.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-muted p-8 rounded-3xl space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Clock className="w-5 h-5 text-secondary" />
                    <h4 className="font-bold">Business Hours</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                      <p className="text-muted-foreground">Mon - Sat</p>
                      <p className="text-primary font-bold">10:00 AM - 7:00 PM</p>
                      <p className="text-muted-foreground">Sunday</p>
                      <p className="text-primary font-bold">Closed (Online Support Only)</p>
                  </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-[40px] premium-shadow border border-border">
              <h3 className="text-2xl font-bold text-primary mb-8">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest pl-1">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-muted px-6 py-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest pl-1">Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-muted px-6 py-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary uppercase tracking-widest pl-1">Subject</label>
                  <select className="w-full bg-muted px-6 py-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50">
                    <option>Property Inquiry</option>
                    <option>Sell My Property</option>
                    <option>Partnership/Advertising</option>
                    <option>General Feedback</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary uppercase tracking-widest pl-1">Message</label>
                  <textarea rows={5} placeholder="Tell us how we can help you..." className="w-full bg-muted px-6 py-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"></textarea>
                </div>
                <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-xl active:scale-95">
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-muted relative flex items-center justify-center grayscale opacity-50">
          <div className="text-center space-y-4">
            <MapPin className="w-12 h-12 text-primary mx-auto" />
            <p className="font-bold text-primary uppercase tracking-[0.2em]">Map View Integration Available</p>
          </div>
      </section>
    </div>
  );
}
