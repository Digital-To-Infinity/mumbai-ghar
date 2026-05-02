import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TOCItem {
    id: string;
    text: string;
    level: number;
    parentId?: string;
}

interface BlogSidebarProps {
    content: string;
    hasFaqs?: boolean;
}

const BlogSidebar = ({ content, hasFaqs }: BlogSidebarProps) => {
    const [items, setItems] = useState<TOCItem[]>([]);
    const [activeId, setActiveId] = useState<string>("");
    const observerRef = useRef<IntersectionObserver | null>(null);
    const entriesRef = useRef<Map<string, IntersectionObserverEntry>>(new Map());

    useEffect(() => {
        const headerRegex = /<h([23456])\b[^>]*>(.*?)<\/h\1>/gi;
        const matches = Array.from(content.matchAll(headerRegex));
        const lastParents: Record<number, string> = {};

        const tocItems = matches.map((match) => {
            const level = parseInt(match[1]);
            const text = match[2].replace(/<\/?[^>]+(>|$)/g, "");
            const id = text.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
            lastParents[level] = id;
            const parentId = lastParents[level - 1];
            return { id, text, level, parentId };
        });

        // Add FAQ to TOC if it exists
        if (hasFaqs) {
            tocItems.push({
                id: "faq",
                text: "Frequently Asked Questions",
                level: 2
            });
        }

        setItems(tocItems);


        const setupObserver = () => {
            if (observerRef.current) observerRef.current.disconnect();

            observerRef.current = new IntersectionObserver(
                (entries) => {
                    // Update our tracked entries
                    entries.forEach((entry) => {
                        entriesRef.current.set(entry.target.id, entry);
                    });

                    const threshold = 81;

                    const active = [...tocItems].reverse().find(item => {
                        const entry = entriesRef.current.get(item.id);
                        if (entry) {
                            // Check if the top of the header is at or above the navbar bottom
                            return entry.boundingClientRect.top <= threshold;
                        }
                        return false;
                    });

                    if (active) {
                        setActiveId(active.id);
                    }
                },
                {
                    // Precise margins to track headers as they enter the 'active' area (below navbar)
                    rootMargin: "-80px 0px -70% 0px",
                    threshold: [0, 1]
                }
            );

            tocItems.forEach((item) => {
                const element = document.getElementById(item.id);
                if (element) {
                    observerRef.current?.observe(element);
                }
            });
        };

        const timeoutId = setTimeout(setupObserver, 500);

        return () => {
            clearTimeout(timeoutId);
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, [content]);

    // Determine which items should be visible
    const getVisibleItems = () => {
        const activeItem = items.find(i => i.id === activeId);

        // Build an array of ancestor IDs for the currently active item
        const activeAncestors: string[] = [];
        let curr = activeItem;
        while (curr?.parentId) {
            activeAncestors.push(curr.parentId);
            curr = items.find(i => i.id === curr?.parentId);
        }

        return items.filter(item => {
            // 1. H2 is always visible
            if (item.level === 2) return true;
            if (activeId === item.parentId) return true;
            if (activeItem?.parentId === item.parentId) return true;
            if (activeAncestors.includes(item.parentId || "")) return true;

            // 3. The item itself is active
            if (activeId === item.id) return true;

            return false;
        });
    };

    const visibleItems = getVisibleItems();

    return (
        <div className="w-full h-fit min-[770px]:sticky min-[770px]:top-32">
            {/* Desktop Version: Same as before */}
            <aside className="hidden min-[770px]:block w-60">
                <div className="space-y-6">
                    <h3 className="text-[14px] font-black uppercase tracking-[0.2em] !text-brand-primary-hover mb-4">
                        Table of Contents
                    </h3>
                    <nav className="flex flex-col border-l border-neutral-100">
                        <AnimatePresence mode="popLayout" initial={false}>
                            {items.map((item) => {
                                const isVisible = visibleItems.some(v => v.id === item.id);
                                if (!isVisible) return null;
                                return (
                                    <motion.a
                                        key={`desktop-${item.id}`}
                                        href={`#${item.id}`}
                                        layout
                                        initial={{ opacity: 0, height: 0, x: -10 }}
                                        animate={{ opacity: 1, height: "auto", x: 0 }}
                                        exit={{ opacity: 0, height: 0, x: -10 }}
                                        transition={{ duration: 0.3 }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.getElementById(item.id);
                                            if (element) {
                                                const offset = 160; 
                                                const elementPosition = element.getBoundingClientRect().top;
                                                const offsetPosition = elementPosition + window.pageYOffset - offset;
                                                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                                            }
                                        }}
                                        className={`
                                            group flex items-start gap-3 py-2.5 -ml-px border-l-2 transition-all duration-300 overflow-hidden
                                            ${item.level === 2 ? "pl-4" : ""}
                                            ${item.level === 3 ? "pl-8 text-[13px]" : ""}
                                            ${item.level === 4 ? "pl-12 text-[12px]" : ""}
                                            ${activeId === item.id
                                                ? "border-brand-primary text-brand-heading font-black bg-brand-primary/5 rounded-r-lg"
                                                : "border-transparent text-brand-paragraph hover:text-brand-heading hover:bg-neutral-50 rounded-r-lg"}
                                        `}
                                    >
                                        <span className="leading-tight">{item.text}</span>
                                    </motion.a>
                                );
                            })}
                        </AnimatePresence>
                    </nav>
                </div>
            </aside>

            {/* Mobile Version: Premium Interactive Design */}
            <aside className="block min-[770px]:hidden w-full">
                <div className="bg-neutral-900 rounded-[2.5rem] p-8 max-[426px]:p-6 shadow-2xl shadow-black/20 overflow-hidden relative group">
                    {/* Animated Background Accents */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-[50px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-primary/5 blur-[40px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 flex items-center justify-center text-brand-primary border border-brand-primary/20">
                                    <HelpCircle size={22} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-white uppercase tracking-tight leading-none">
                                        Quick <span className="text-brand-primary">Navigation</span>
                                    </h3>
                                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1.5">Guide to this article</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {items.map((item, idx) => (
                                <motion.a
                                    key={`mobile-${item.id}`}
                                    href={`#${item.id}`}
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const element = document.getElementById(item.id);
                                        if (element) {
                                            const offset = 140;
                                            const elementPosition = element.getBoundingClientRect().top;
                                            const offsetPosition = elementPosition + window.pageYOffset - offset;
                                            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                                        }
                                    }}
                                    className={`
                                        relative group/item flex items-center gap-5 p-4 rounded-2xl transition-all duration-300
                                        ${activeId === item.id 
                                            ? "bg-brand-primary text-white shadow-xl shadow-brand-primary/20" 
                                            : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/5"}
                                        ${item.level > 2 ? "ml-8 max-[376px]:ml-6 opacity-80" : ""}
                                    `}
                                >
                                    <span className={`text-xs font-black font-mono shrink-0 ${activeId === item.id ? "text-white/60" : "text-brand-primary/40"}`}>
                                        {(idx + 1).toString().padStart(2, '0')}
                                    </span>
                                    <span className="text-sm font-bold truncate leading-none">{item.text}</span>
                                    
                                    {activeId === item.id && (
                                        <motion.div 
                                            layoutId="activeIndicator"
                                            className="ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse"
                                        />
                                    )}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};


import { HelpCircle } from "lucide-react";

export default BlogSidebar;
