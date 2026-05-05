"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    TrendingUp,
    BookOpen,
    MapPin,
    BarChart3,
    Wallet,
    Filter,
    Hash,
    LayoutGrid,
    ChevronRight,
    ChevronLeft
} from "lucide-react";
import { blogPosts } from "../BlogDetail/Blogdata";

interface BlogFiltersProps {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

// Icon mapper for dynamic categories
const getCategoryIcon = (name: string) => {
    const icons: Record<string, React.ReactNode> = {
        "All": <LayoutGrid size={18} />,
        "Market Trends": <BarChart3 size={18} />,
        "Neighborhood Guides": <BookOpen size={18} />,
        "Investment Tips": <Wallet size={18} />,
        "Lifestyle": <MapPin size={18} />,
        "Trending": <TrendingUp size={18} />,
    };
    return icons[name] || <Hash size={18} />;
};

export default function BlogFilters({ activeCategory, setActiveCategory }: BlogFiltersProps) {
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);
    const [categories, setCategories] = useState<string[]>([]);
    const [counts, setCounts] = useState<Record<string, number>>({});
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Calculate counts and unique categories from blogPosts
        const newCounts: Record<string, number> = {
            All: blogPosts.length
        };

        const uniqueCategories = new Set<string>(["All"]);
        blogPosts.forEach(post => {
            uniqueCategories.add(post.category);
            newCounts[post.category] = (newCounts[post.category] || 0) + 1;
        });

        setCategories(Array.from(uniqueCategories));
        setCounts(newCounts);
    }, []);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftArrow(scrollLeft > 10);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleCategoryChange = useCallback((category: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (category === "All") {
            params.delete("category");
        } else {
            params.set("category", category);
        }

        setActiveCategory(category);
        router.push(`?${params.toString()}`, { scroll: false });
    }, [router, searchParams, setActiveCategory]);

    return (
        <section className="relative py-20 max-[426px]:py-10 overflow-hidden" aria-label="Blog Filters">
            {/* Professional Background Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center gap-12">

                    {/* Minimalist Header */}
                    <div className="text-center space-y-6 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 shadow-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Curation Engine</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
                            Browse by <span className="text-primary italic">Category</span>
                        </h2>
                        <p className="text-muted-foreground font-medium text-sm md:text-base opacity-70">
                            Discover specialized insights tailored to your real estate journey in Navi Mumbai and beyond.
                        </p>
                    </div>

                    {/* Advanced Category Dock */}
                    <div className="relative w-full max-w-5xl group/container">
                        {/* Scroll Arrows (Mobile/Tablet focus) */}
                        <AnimatePresence>
                            {showLeftArrow && (
                                <motion.button
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    onClick={() => scroll('left')}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-2 rounded-full bg-white shadow-xl border border-zinc-100 hidden md:flex items-center justify-center text-zinc-400 hover:text-primary transition-colors"
                                >
                                    <ChevronLeft size={20} />
                                </motion.button>
                            )}
                            {showRightArrow && (
                                <motion.button
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    onClick={() => scroll('right')}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-2 rounded-full bg-white shadow-xl border border-zinc-100 hidden md:flex items-center justify-center text-zinc-400 hover:text-primary transition-colors"
                                >
                                    <ChevronRight size={20} />
                                </motion.button>
                            )}
                        </AnimatePresence>

                        {/* The Dock Container */}
                        <div
                            ref={scrollContainerRef}
                            onScroll={handleScroll}
                            className="flex items-center gap-3 p-3 bg-white/40 backdrop-blur-2xl rounded-[2.5rem] border border-zinc-200/50 overflow-x-auto no-scrollbar scroll-smooth"
                        >
                            {categories.map((catName) => {
                                const isActive = activeCategory === catName;
                                const count = counts[catName] || 0;
                                const icon = getCategoryIcon(catName);

                                return (
                                    <motion.button
                                        key={catName}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.96 }}
                                        onClick={() => handleCategoryChange(catName)}
                                        onMouseEnter={() => setHoveredTab(catName)}
                                        onMouseLeave={() => setHoveredTab(null)}
                                        className={`relative flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-[2rem] transition-all duration-500 group outline-none cursor-pointer overflow-hidden ${isActive ? "text-white" : "text-zinc-600 hover:text-zinc-900"
                                            }`}
                                    >
                                        {/* Background Fill (Active) */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeCategoryPill"
                                                className="absolute inset-0 bg-primary z-0"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}

                                        {/* Background Fill (Hover) */}
                                        <AnimatePresence>
                                            {hoveredTab === catName && !isActive && (
                                                <motion.div
                                                    layoutId="hoverCategoryPill"
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    className="absolute inset-0 bg-white/80 shadow-sm z-0"
                                                    transition={{ duration: 0.2 }}
                                                />
                                            )}
                                        </AnimatePresence>

                                        {/* Content */}
                                        <span className="relative z-10 flex items-center gap-3">
                                            <div className={`p-2 rounded-xl transition-all duration-300 ${isActive ? "bg-white/20 text-white" : "bg-zinc-100 text-zinc-500 group-hover:bg-primary/10 group-hover:text-primary"
                                                }`}>
                                                {icon}
                                            </div>
                                            <div className="flex flex-col items-start leading-tight">
                                                <span className="text-sm font-bold uppercase tracking-wider">{catName}</span>
                                                <span className={`text-[9px] font-black uppercase tracking-tighter transition-colors ${isActive ? "text-white/60" : "text-primary/70"
                                                    }`}>
                                                    {count} Articles
                                                </span>
                                            </div>
                                        </span>

                                        {/* Active Dot */}
                                        {isActive && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="absolute top-2 right-4 w-1 h-1 bg-white rounded-full"
                                            />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Results Indicator / Clear Action */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-zinc-50 border border-zinc-200/50 text-[11px] font-bold text-zinc-400 uppercase tracking-[0.1em]">
                                <Filter size={12} className="text-primary" />
                                <span>Showing {counts[activeCategory] || 0} Results for</span>
                                <span className="text-foreground">{activeCategory}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
