"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQ } from "./Blogdata";

interface BlogFAQProps {
    faqs: FAQ[];
}

const BlogFAQ = ({ faqs }: BlogFAQProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);


    if (!faqs || faqs.length === 0) return null;

    return (
        <section id="faq" className="mt-20 pt-4 scroll-mt-[160px]">

            <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <HelpCircle size={20} />
                </div>
                <h3 className="text-2xl font-black text-brand-heading uppercase tracking-tight">
                    Frequently Asked <span className="text-brand-primary">Questions</span>
                </h3>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => {
                    const isOpen = activeIndex === index;
                    return (
                        <motion.div
                            key={index}
                            initial={false}
                            className={`group border rounded-[2rem] overflow-hidden transition-all duration-500 ${
                                isOpen 
                                ? "border-brand-primary bg-brand-primary/[0.02] shadow-xl shadow-brand-primary/5" 
                                : "border-neutral-100 bg-white hover:border-neutral-200"
                            }`}
                        >
                            <button
                                onClick={() => setActiveIndex(isOpen ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left cursor-pointer outline-none"
                            >
                                <span className={`text-lg font-bold transition-colors duration-300 ${
                                    isOpen ? "text-brand-primary" : "text-brand-heading"
                                }`}>
                                    {faq.question}
                                </span>
                                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                                    isOpen ? "bg-brand-primary text-brand-paragraph rotate-180" : "bg-neutral-50 text-brand-paragraph group-hover:bg-neutral-100"
                                }`}>
                                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <div className="px-6 pb-6 text-brand-paragraph leading-relaxed font-medium">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default BlogFAQ;
