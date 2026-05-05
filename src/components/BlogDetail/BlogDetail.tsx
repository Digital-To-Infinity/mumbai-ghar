"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Share2, Bookmark, Calendar, Clock, ShieldCheck, MessageCircle, User } from "lucide-react";
import { BlogPost, blogPosts } from "./Blogdata";
import BlogSidebar from "./BlogSidebar";
import { useEffect, useState } from "react";
import BlogMainContent from "./BlogMainContent";
import BlogFAQ from "./BlogFAQ";
import CompanyPromo from "./CompanyPromo";
import BlogSchema from "./BlogSchema";

interface BlogDetailProps {
    post: BlogPost;
}

const BlogDetail = ({ post }: BlogDetailProps) => {
    const [relatedBlogs, setRelatedBlogs] = useState<BlogPost[]>([]);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const related = blogPosts
            .filter((b) => b.category === post.category && b.slug !== post.slug)
            .slice(0, 3);
        setRelatedBlogs(related);
    }, [post.slug, post.category]);

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: post.title,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
        }
    };

    return (
        <article className="relative min-h-screen bg-white selection:bg-primary/10">
            <BlogSchema post={post} />

            {/* Premium Sticky Header - Adjusted top position to sit below main navbar */}
            <header className="sticky top-[73px] max-[769px]:top-[64px] z-40 w-full bg-white/70 backdrop-blur-xl border-b border-zinc-100 px-6 py-3">
                <div className="max-w-7xl mt-2 mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/blogs"
                            className="group flex items-center gap-2 p-1 pr-4 rounded-full bg-zinc-50 hover:bg-white border border-zinc-100 hover:border-primary/20 transition-all"
                        >
                            <div className="p-2 rounded-full bg-white group-hover:bg-primary group-hover:text-white border border-zinc-100 transition-all duration-300">
                                <ArrowLeft size={16} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                                Back to Insights
                            </span>
                        </Link>
                        <div className="h-4 w-px bg-zinc-200 hidden md:block" />
                        <span className="hidden md:block text-[11px] font-bold text-muted-foreground uppercase tracking-widest truncate max-w-[300px]">
                            Currently Reading: <span className="text-foreground">{post.category}</span>
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 mr-2">
                            <button
                                onClick={handleShare}
                                className="p-2.5 rounded-2xl bg-white border border-zinc-100 hover:border-primary/20 text-zinc-600 hover:text-primary transition-all cursor-pointer shadow-sm hover:shadow-md"
                                title="Share"
                            >
                                <Share2 size={18} />
                            </button>
                            <button
                                className="p-2.5 rounded-2xl bg-white border border-zinc-100 hover:border-primary/20 text-zinc-600 hover:text-primary transition-all cursor-pointer shadow-sm hover:shadow-md"
                                title="Save"
                            >
                                <Bookmark size={18} />
                            </button>
                        </div>
                        <Link
                            href="/contact"
                            className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-primary text-white text-xs font-black uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                        >
                            Discuss <MessageCircle size={14} />
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative w-full bg-[#050505] py-26 overflow-hidden">
                {/* Background Aesthetics */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Category & Badge */}
                            <div className="flex items-center gap-3 mb-8">
                                <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.25em]">
                                    {post.category}
                                </span>
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 text-[9px] font-black uppercase tracking-widest">
                                    <ShieldCheck size={12} /> Verified Insight
                                </div>
                            </div>

                            {/* Main Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-10 leading-[1.1] tracking-tight">
                                {post.title}
                            </h1>

                            {/* Author & Meta Block */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-8 pt-8 border-t border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="relative group cursor-pointer">
                                        <div className="absolute inset-0 bg-primary/40 rounded-full blur group-hover:blur-md transition-all" />
                                        <div className="relative w-14 h-14 rounded-full border-2 border-primary/30 overflow-hidden bg-zinc-900">
                                            {post.authorImage ? (
                                                <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-primary font-black text-xl">
                                                    {post.author.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white font-black uppercase tracking-wider text-sm">{post.author}</span>
                                        <span className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest">{post.authorRole}</span>
                                    </div>
                                </div>

                                <div className="hidden sm:block w-px h-10 bg-white/10" />

                                <div className="flex items-center gap-10">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-zinc-500 text-[9px] font-black uppercase tracking-widest">Published</span>
                                        <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest">
                                            <Calendar size={14} className="text-primary" /> {post.date}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-zinc-500 text-[9px] font-black uppercase tracking-widest">Read Time</span>
                                        <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest">
                                            <Clock size={14} className="text-primary" /> {post.readTime}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Hero Image Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl opacity-20" />
                            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-[2s]"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content Layout */}
            <main className="w-full mx-auto p-12 max-[426px]:p-6 max-[321px]:p-4 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col min-[770px]:flex-row gap-12 items-start">

                    {/* Left: Table of Contents */}
                    <div className="w-full min-[770px]:w-64 shrink-0 self-stretch max-[769px]:mb-8 sticky top-[140px]">
                        <BlogSidebar content={post.content} hasFaqs={!!post.faqs} />
                    </div>

                    {/* Middle: Main Content */}
                    <div className="flex-1 min-w-0">
                        <BlogMainContent content={post.content} tags={post.tags} />
                        {post.faqs && <BlogFAQ faqs={post.faqs} />}
                    </div>

                    {/* Right: Company Promotion */}
                    <div className="hidden xl:block w-80 shrink-0 self-stretch sticky top-[140px]">
                        <CompanyPromo />
                    </div>
                </div>
            </main>

            {/* Related Posts Section */}
            {relatedBlogs.length > 0 && (
                <section className="py-24 max-[426px]:py-16 bg-zinc-50/50 border-t border-zinc-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                            <div className="max-w-2xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-1 bg-primary rounded-full" />
                                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Continue Exploring</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-4">
                                    Related <span className="text-primary italic">Expertise</span>
                                </h2>
                                <p className="text-muted-foreground font-medium text-lg opacity-70">
                                    Expand your knowledge with more curated articles from the <span className="text-foreground font-bold">{post.category}</span> sector.
                                </p>
                            </div>
                            <Link
                                href="/blogs"
                                className="group flex items-center gap-3 px-8 py-4 bg-white rounded-2xl border border-zinc-200 text-sm font-black uppercase tracking-widest hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-xl hover:shadow-primary/5"
                            >
                                All Articles <ArrowLeft className="rotate-180 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {relatedBlogs.map((relatedPost, idx) => (
                                <motion.div
                                    key={relatedPost.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-zinc-100 hover:border-primary/20 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(64,106,175,0.1)]"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-xl text-[9px] font-black text-primary uppercase tracking-widest shadow-sm">
                                                {relatedPost.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <h3 className="text-xl font-black text-foreground mb-8 line-clamp-2 leading-[1.3] group-hover:text-primary transition-colors uppercase tracking-tight">
                                            <Link href={`/blogs/${relatedPost.slug}`}>{relatedPost.title}</Link>
                                        </h3>
                                        <div className="mt-auto flex items-center justify-between pt-6 border-t border-zinc-50">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                    <User size={14} />
                                                </div>
                                                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{relatedPost.date}</span>
                                            </div>
                                            <Link
                                                href={`/blogs/${relatedPost.slug}`}
                                                className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm"
                                            >
                                                <ArrowLeft size={18} className="rotate-180" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </article>
    );
};

export default BlogDetail;
