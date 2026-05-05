import { motion } from "framer-motion";
import { Home, Phone, ArrowRight, Award, Users, ShieldCheck } from "lucide-react";

interface CompanyPromoProps { }

const CompanyPromo = ({ }: CompanyPromoProps) => {

    return (
        <div className="w-full h-fit xl:sticky xl:top-32">
            <aside className="w-72">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 rounded-[2rem] bg-[#050505] border border-brand-muted/20 relative overflow-hidden group"
                >
                    {/* Background Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-brand-primary/10 transition-colors duration-500" />

                    {/* Company Logo/Name */}
                    <div className="relative mb-8 flex flex-col items-center text-center">
                        <div className="relative group/logo">
                            {/* Outer Glow */}
                            <div className="absolute inset-0 bg-primary/40 rounded-3xl blur-xl group-hover/logo:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                            
                            <div className="relative w-16 h-16 mb-4 rounded-[1.5rem] bg-gradient-to-br from-primary via-primary to-blue-700 flex items-center justify-center p-4 shadow-xl shadow-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                                {/* Inner Gloss Effect */}
                                <div className="absolute inset-1 rounded-[1.1rem] border border-white/20 pointer-events-none" />
                                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-[1.1rem] pointer-events-none" />
                                
                                <Home className="w-full h-full text-white drop-shadow-md" />
                            </div>
                        </div>
                        <h4 className="text-xl font-black text-white uppercase tracking-tight relative pb-3">
                            New <span className="text-primary">Mumbai</span>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(64,106,175,0.5)]" />
                        </h4>
                    </div>

                    <div className="space-y-6 relative">
                        <div className="text-center">
                            <p className="text-sm font-black text-primary uppercase tracking-[0.1em] mb-2">Exclusive Offer</p>
                            <h5 className="text-lg font-bold text-white leading-snug">
                                Visit New Mumbai
                            </h5>
                        </div>

                        <p className="text-base text-muted-foreground text-center">
                            Explore an elite collection of <span className="text-white font-bold">1 to 6 BHK</span> residences crafted for the modern visionary in Navi Mumbai.
                        </p>

                        <div className="pt-4 space-y-3">
                            <button className="w-full py-4 px-6 rounded-2xl bg-primary text-white font-black text-sm uppercase tracking-widest hover:bg-brand-primary-hover transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2 group/btn cursor-pointer">
                                Book Site Visit
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-x-1 transition-transform" />
                            </button>

                            <button className="w-full py-4 px-6 rounded-2xl bg-neutral-50 text-brand-heading font-black text-sm uppercase tracking-widest hover:bg-neutral-100 transition-all flex items-center justify-center gap-2 cursor-pointer">
                                <Phone className="w-4 h-4" />
                                Enquire Now
                            </button>
                        </div>
                    </div>

                    {/* Trust Badge Section */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.3
                                }
                            }
                        }}
                        className="mt-10 pt-8 border-t border-neutral-100"
                    >
                        <div className="grid grid-cols-3 gap-2">
                            {[
                                {
                                    icon: Award,
                                    value: "15+",
                                    label: "Years Exp.",
                                    color: "text-amber-600 bg-amber-50",
                                    border: "border-amber-100"
                                },
                                {
                                    icon: Users,
                                    value: "5k+",
                                    label: "Families",
                                    color: "text-blue-600 bg-blue-50",
                                    border: "border-blue-100"
                                },
                                {
                                    icon: ShieldCheck,
                                    value: "RERA",
                                    label: "Project",
                                    color: "text-emerald-600 bg-emerald-50",
                                    border: "border-emerald-100"
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.8 },
                                        visible: { opacity: 1, scale: 1 }
                                    }}
                                    whileHover={{ y: -4, scale: 1.05 }}
                                    className="flex flex-col items-center text-center group/badge cursor-default"
                                >
                                    <div className={`w-12 h-12 rounded-2xl ${item.color} border ${item.border} flex items-center justify-center mb-3 transition-all duration-300 group-hover/badge:shadow-lg group-hover/badge:shadow-current/10`}>
                                        <item.icon size={20} strokeWidth={2.5} />
                                    </div>
                                    <span className="block text-[13px] font-black text-white uppercase leading-none">
                                        {item.value}
                                    </span>
                                    <span className="block text-[8px] font-black text-muted-foreground uppercase mt-1.5 tracking-wide leading-none whitespace-nowrap">
                                        {item.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </aside>
        </div>
    );
};

export default CompanyPromo;
