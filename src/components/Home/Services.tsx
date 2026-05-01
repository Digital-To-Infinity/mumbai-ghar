"use client";
import { Home, Key, Building2, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Services() {
  const services = [
    { 
      title: "Buy a Home", 
      desc: "Discover your dream home with thousands of verified new and resale property listings in Mumbai's prime locations.", 
      icon: Home,
      features: ["Verified Listings", "Market Insights", "Free Site Visits"],
      color: "from-blue-400 to-indigo-500"
    },
    { 
      title: "Rent a Flat", 
      desc: "Find the perfect rental space with flexible options across all budget categories, from cozy studios to luxury penthouses.", 
      icon: Key,
      features: ["Zero Brokerage", "Instant Paperwork", "Quick Move-in"],
      color: "from-purple-400 to-pink-500"
    },
    { 
      title: "Sell Property", 
      desc: "List your property with us and get maximum exposure to millions of potential buyers with professional marketing support.", 
      icon: Building2,
      features: ["Best Market Price", "Professional Photos", "Verified Buyers"],
      color: "from-emerald-400 to-teal-500"
    },
    { 
      title: "Legal & Verification", 
      desc: "Get expert assistance for hassle-free property registration, legal documentation, RERA compliance, and title verification.", 
      icon: ShieldCheck,
      features: ["RERA Expert", "Title Search", "Safe Documentation"],
      color: "from-amber-400 to-orange-500"
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-12 relative overflow-hidden bg-primary/5">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest mb-6 font-semibold"
          >
            <Zap className="w-3 h-3 fill-primary" /> Premium Services
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight"
          >
            Comprehensive Property Solutions <span className="text-primary italic">Simplified</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            From finding your dream space to navigating complex legalities, we provide a 
            seamless end-to-end ecosystem for all your real estate needs in Mumbai.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-transparent rounded-[2.5rem] -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="bg-primary p-8 xl:p-10 rounded-[2.5rem] border border-white/10 h-full flex flex-col transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(64,106,175,0.4)]">
                
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl bg-white/10 p-[1px] mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 transition-colors">{service.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-white text-sm font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
