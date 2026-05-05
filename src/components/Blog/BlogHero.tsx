"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import SearchBar from "./SearchBar";
import { Sparkles, TrendingUp, Globe, BookOpen, ChevronRight } from "lucide-react";

interface BlogHeroProps {
    isSearching?: boolean;
    onSearchFocusChange?: (isFocused: boolean) => void;
}

const BlogHero = ({ isSearching = false, onSearchFocusChange }: BlogHeroProps) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className={`relative flex items-center justify-center overflow-hidden transition-all duration-700 ease-in-out ${
                isSearching ? "min-h-0 pt-28 pb-10" : "min-h-[80vh] pt-32 pb-20"
            } bg-[#050505]`}
            aria-labelledby="blog-hero-title"
        >
            {/* Professional Background: Deep Gradient & Subtle Light */}
            <div className="absolute inset-0 z-0" aria-hidden="true">
                {/* Main Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(64,106,175,0.15),transparent_70%)]" />
                
                {/* Fine Professional Grid */}
                <div 
                    className="absolute inset-0 opacity-[0.05]" 
                    style={{ 
                        backgroundImage: `
                            linear-gradient(to right, var(--primary) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px'
                    }} 
                />

                {/* Subtle Bottom Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>

            <div className={`${isSearching ? "w-full px-4 md:px-10" : "container mx-auto px-4"} relative z-10`}>
                <motion.div 
                    style={{ y, opacity }}
                    className="relative z-10"
                >
                    <div className={`mx-auto text-center transition-all duration-500 ${isSearching ? "max-w-full" : "max-w-4xl"}`}>
                        <AnimatePresence mode="wait">
                            {!isSearching && (
                                <motion.div
                                    key="hero-content"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="space-y-6 mb-12"
                                >
                                    {/* Minimal Badge */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                                        <Sparkles className="w-3 h-3" />
                                        Mumbai Ghar Insights
                                    </div>

                                    {/* Authoritative Professional H1 */}
                                    <h1 id="blog-hero-title" className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
                                        Mumbai Ghar <br />
                                        <span className="text-primary italic font-medium">Intelligence & Insights</span>
                                    </h1>

                                    {/* Authoritative Description */}
                                    <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
                                        Strategic analysis, comprehensive market data, and industry-leading real estate intelligence from the desk of 
                                        <strong className="text-white ml-1">Mumbai Ghar</strong>.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Search Bar - Main Engagement */}
                        <div className={`relative transition-all duration-700 ${isSearching ? "mt-0" : "mt-8"}`}>
                            <div className={`mx-auto transition-all duration-500 ease-in-out ${isSearching ? "max-w-none" : "max-w-3xl"}`}>
                                <SearchBar onFocusChange={onSearchFocusChange} />
                            </div>
                        </div>

                        {/* Minimal Navigation Pills */}
                        <AnimatePresence>
                            {!isSearching && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="flex flex-wrap justify-center gap-3 mt-10"
                                >
                                    {[
                                        { icon: <TrendingUp className="w-4 h-4" />, label: "Market Trends" },
                                        { icon: <Globe className="w-4 h-4" />, label: "Area Guides" },
                                        { icon: <BookOpen className="w-4 h-4" />, label: "Legal Advice" },
                                        { icon: <Sparkles className="w-4 h-4" />, label: "New Projects" },
                                    ].map((item, idx) => (
                                        <motion.button
                                            key={idx}
                                            whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.05)" }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/[0.02] border border-white/5 text-zinc-400 hover:text-white transition-all duration-300 group"
                                        >
                                            <span className="text-primary group-hover:scale-110 transition-transform duration-300">
                                                {item.icon}
                                            </span>
                                            <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                                        </motion.button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogHero;
