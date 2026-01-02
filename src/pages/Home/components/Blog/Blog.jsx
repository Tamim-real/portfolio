import React, { useState } from 'react';
import blogData from './blogData.json';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock, FaCalendarAlt } from 'react-icons/fa';
import ScrollIndicator from '../../../../components/ScrollIndicator';

const Blog = () => {
    const [showMore, setShowMore] = useState(false);
    
    const featuredBlogs = blogData.filter(blog => blog.featured);
    const nonFeaturedBlogs = blogData.filter(blog => !blog.featured);
    const sidebarBlogs = showMore ? nonFeaturedBlogs : nonFeaturedBlogs.slice(0, 3);
    const hasMore = nonFeaturedBlogs.length > 3 && !showMore;
    
    return (
        <section className="relative py-24 bg-slate-900">
            
            <div className="container px-6 mx-auto max-w-7xl">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase border rounded-full text-cyan-400 border-cyan-400/30 bg-cyan-400/10">
                        Thoughts & Insights
                    </span>
                    <h2 className="mt-4 mb-4 text-4xl font-bold text-white md:text-5xl">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Writing</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-400">
                        I document my learning journey and share technical deep dives on Backend Engineering and Algorithms.
                    </p>
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    
                    {/* Left: Featured Blogs */}
                    <div className="space-y-8 lg:col-span-2">
                        <h3 className="mb-6 text-2xl font-bold text-white">Featured Articles</h3>
                        <div className="grid grid-cols-1 gap-8">
                            {featuredBlogs.map((blog, index) => (
                        <motion.article
                            key={blog.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col overflow-hidden transition-all duration-300 border group bg-slate-800 rounded-2xl border-slate-700 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10"
                        >
                            {/* Image Wrapper */}
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-110"
                                />
                                <div className="absolute px-3 py-1 text-xs font-bold text-white border rounded top-4 left-4 bg-slate-900/90 backdrop-blur-sm border-slate-700">
                                    {blog.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow p-6">
                                {/* Meta Data */}
                                <div className="flex items-center gap-4 mb-3 text-xs text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <FaCalendarAlt /> {blog.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaClock /> {blog.readTime}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-purple-400 line-clamp-2">
                                    {blog.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="flex-grow mb-6 text-sm leading-relaxed text-slate-400 line-clamp-3">
                                    {blog.excerpt}
                                </p>

                                {/* Read More Link */}
                                <a 
                                    href={blog.link} 
                                    className="inline-flex items-center gap-2 text-sm font-bold text-purple-400 transition-transform duration-300 hover:translate-x-2"
                                >
                                    Read Article <FaArrowRight />
                                </a>
                            </div>
                        </motion.article>
                            ))}
                        </div>
                    </div>

                    {/* Right: Recent Posts Sidebar */}
                    <div className="space-y-6 lg:col-span-1">
                        <h3 className="mb-6 text-2xl font-bold text-white">Recent Posts</h3>
                        <div className="space-y-4">
                            {sidebarBlogs.map((blog, index) => (
                                <motion.article
                                    key={blog.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4 p-4 transition-all duration-300 border group bg-slate-800 rounded-xl border-slate-700 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
                                >
                                    {/* Thumbnail */}
                                    <div className="relative flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg">
                                        <img 
                                            src={blog.image} 
                                            alt={blog.title} 
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-1 min-w-0">
                                        <span className="px-2 py-0.5 text-[9px] font-bold text-purple-400 border rounded w-fit border-purple-400/30 bg-purple-400/10 mb-2">
                                            {blog.category}
                                        </span>
                                        <h4 className="mb-2 text-sm font-bold leading-tight text-white transition-colors line-clamp-2 group-hover:text-purple-400">
                                            {blog.title}
                                        </h4>
                                        <div className="flex items-center gap-2 mt-auto text-[10px] text-slate-500">
                                            <FaCalendarAlt className="w-3 h-3" />
                                            <span>{blog.date}</span>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>

                        {/* Load More Button */}
                        {hasMore && (
                            <button 
                                onClick={() => setShowMore(true)}
                                className="w-full px-6 py-3 text-sm transition-all border rounded-lg border-slate-700 text-slate-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/10"
                            >
                                Load More Posts
                            </button>
                        )}
                    </div>

                </div>

            </div>
            
        </section>
    );
};

export default Blog;