"use client";
import React, { useState } from "react";
import { Mail, Bell, CheckCircle, ShieldCheck, TrendingUp, Sparkles, Send, Building2, Users, Star, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const benefits = [
    { icon: TrendingUp, text: "Weekly Market Trends" },
    { icon: Sparkles, text: "Exclusive Early Access" },
    { icon: ShieldCheck, text: "Legal & RERA Guides" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-primary via-primary to-indigo-900 rounded-[4rem] max-[426px]:rounded-[2rem] p-12 max-[426px]:p-6 overflow-hidden"
        >
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 z-0">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-secondary/30 rounded-full blur-[120px]"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                x: [0, -40, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px]"
            />
          </div>

          {/* Floating Decorative Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 hidden xl:block text-white/20"
          >
            <Building2 size={120} strokeWidth={1} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-50 left-130 hidden xl:block text-white/20"
          >
            <Star size={100} strokeWidth={1} />
          </motion.div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center mb-16">
            {/* Left Column: Info */}
            <div className="text-left">
              <h2 className="text-7xl max-[426px]:text-5xl max-[376px]:text-4xl font-black text-white mb-6 leading-[1.05] tracking-tight">
                Don't Miss the <br /> 
                <span className="text-white text-6xl max-[426px]:text-4xl">Next Big Launch</span>
              </h2>
              
              <p className="text-white/80 text-xl max-[426px]:text-lg max-[376px]:text-base mb-12 max-w-lg leading-relaxed font-medium">
                We track every new project, price drop, and RERA update in Mumbai so you don't have to. Get the edge in your property search.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm group hover:bg-white/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white shadow-lg">
                      <benefit.icon className="w-5 h-5" />
                    </div>
                    <span className="text-white font-semibold text-sm">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <AnimatePresence mode="wait">
                {!isSubscribed ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    className="bg-white p-14 max-[426px]:p-7 rounded-[3rem] relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-50 h-50 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="mb-10 text-center lg:text-left">
                      <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-8 mx-auto lg:mx-0">
                        <Mail className="w-10 h-10 text-primary animate-pulse" />
                      </div>
                      <h3 className="text-3xl font-black text-slate-900 mb-3">Get VIP Access</h3>
                      <p className="text-slate-500 text-lg max-[426px]:text-base">Enter your email for the weekly report.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="relative">
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="yourname@email.com" 
                          className="w-full bg-slate-50 border-2 border-slate-100 rounded-3xl px-8 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary/30 focus:bg-white transition-all text-lg font-medium"
                        />
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-primary text-white hover:bg-secondary font-black py-4 rounded-3xl transition-all duration-500 flex items-center justify-center gap-4 text-lg group cursor-pointer"
                      >
                        YES, SEND IT!
                        <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                      </button>
                    </form>
                    <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between opacity-60">
                      <p className="text-xs font-bold text-muted-foreground flex items-center gap-2 uppercase tracking-widest">
                        <ShieldCheck className="w-4 h-4" /> Secure & Private
                      </p>
                      <div className="flex gap-1 text-secondary">
                        {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={12} fill="currentColor" />)}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    className="bg-emerald-500 p-16 rounded-[3rem] text-center flex flex-col items-center justify-center min-h-[500px]"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-10 shadow-2xl"
                    >
                      <CheckCircle className="w-12 h-12 text-emerald-500" />
                    </motion.div>
                    <h3 className="text-4xl font-black text-white mb-6 tracking-tight">You're an Insider!</h3>
                    <p className="text-white/90 text-xl font-medium">
                      Success! We've sent a welcome gift to your inbox. Get ready to master the market.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Action Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-8 max-w-full mx-auto relative z-30"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full max-[426px]:rounded-[2rem] p-4 md:p-6 flex flex-col lg:flex-row items-center justify-between gap-8 hover:bg-white/20 transition-all duration-300 group/bar">
              <div className="flex items-center gap-6 px-6">
                <div className="hidden sm:flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/10">
                    <Building2 size={16} className="text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center border-2 border-white/10">
                    <Mail size={16} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-black text-lg max-[426px]:text-3xl max-[376px]:text-2xl text-center">Have a specific requirement?</h4>
                  <p className="text-white/60 text-sm font-medium text-center mt-4">Get personalized assistance from our team.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto px-4">
                <Link
                  href="/submit-property"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-primary rounded-full font-black hover:bg-secondary hover:text-white hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Submit Property
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-secondary text-white rounded-full font-black hover:bg-white hover:text-primary hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Contact Support
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
