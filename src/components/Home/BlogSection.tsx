"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, User, Calendar, ArrowRight, BookOpen } from "lucide-react";

const blogs = [
    {
        id: 1,
        title: "The Rise of Luxury Living in South Mumbai's Skyline",
        category: "Luxury Real Estate",
        readTime: "5 min read",
        excerpt: "Explore how premium residential projects are redefining the architectural landscape of South Mumbai with state-of-the-art amenities and breathtaking ocean views.",
        author: "Arjun Sharma",
        date: "May 12, 2024",
        image: "/images/blogs/blog1.png",
    },
    {
        id: 2,
        title: "Navi Mumbai's Infrastructure Boom: Why to Invest Now",
        category: "Investment Guide",
        readTime: "8 min read",
        excerpt: "With the completion of Atal Setu and the upcoming international airport, Navi Mumbai has become a goldmine for real estate investors looking for high returns.",
        author: "Priya Malhotra",
        date: "May 10, 2024",
        image: "/images/blogs/blog2.png",
    },
    {
        id: 3,
        title: "Modern Interior Trends for Compact Mumbai Apartments",
        category: "Interior Design",
        readTime: "4 min read",
        excerpt: "Maximize your space with these innovative design tips specifically curated for Mumbai's urban living, combining functionality with premium aesthetics.",
        author: "Vikram Mehta",
        date: "May 08, 2024",
        image: "/images/blogs/blog3.png",
    },
];

const BlogSection = () => {
    return (
        <section className="py-12 bg-white relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] opacity-60" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] opacity-60" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 max-[426px]:items-center max-[426px]:text-center">
                    <div className="max-w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-[0.2em] mb-6 font-bold"
                        >
                            <BookOpen className="w-3.5 h-3.5" /> Mumbai Property Insights
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl max-[426px]:text-4xl font-bold text-black leading-tight"
                        >
                            Stay Updated with <span className="text-primary italic">Latest Trends</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-[426px]:w-full"
                    >
                        <Link
                            href="/blogs"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary/90 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group whitespace-nowrap cursor-pointer max-[426px]:w-full"
                        >
                            View All Blogs <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <div className="relative h-[280px] max-[426px]:h-[220px] overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Category Badge */}
                                <div className="absolute top-6 max-[426px]:top-4 left-6 max-[426px]:left-4">
                                    <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] font-bold text-primary uppercase tracking-wider shadow-sm border border-white/20">
                                        {blog.category}
                                    </span>
                                </div>

                                {/* Read Time Badge */}
                                <div className="absolute top-6 max-[426px]:top-4 right-6 max-[426px]:right-4">
                                    <span className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-semibold text-white flex items-center gap-1.5 border border-white/10">
                                        <Clock className="w-3 h-3" /> {blog.readTime}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                                    {blog.title}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-8 line-clamp-3">
                                    {blog.excerpt}
                                </p>

                                <div className="mt-auto pt-8 border-t border-border/50">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 overflow-hidden">
                                                <User className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-black leading-none mb-1">{blog.author}</span>
                                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                    <Calendar className="w-3 h-3" /> {blog.date}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Link
                                        href="/blogs"
                                        className="w-full inline-flex items-center justify-center gap-2 bg-primary/5 hover:bg-primary text-primary hover:text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 group/btn"
                                    >
                                        Read Full Story
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
