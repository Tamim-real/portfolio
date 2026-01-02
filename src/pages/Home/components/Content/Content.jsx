import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaYoutube, FaPlay, FaArrowRight, FaListUl } from 'react-icons/fa';
import ScrollIndicator from '../../../../components/ScrollIndicator';

// Import playlist thumbnail images
import dataStructureThumb from '../../../../assets/images/content/Data Structure.png';
import cProgrammingThumb from '../../../../assets/images/content/C_programming.png';
import databaseThumb from '../../../../assets/images/content/dbms.jpg';
import machineLearningThumb from '../../../../assets/images/content/machine_learning.jpg';
import microprocessorThumb from '../../../../assets/images/content/Data Structure.png';
import statisticsThumb from '../../../../assets/images/content/bsp.png';

// Content Data
const contentData = {
    categories: ["Latest", "Programming", "Database", "AI/ML"],
    playlists: [
        {
            id: 1,
            title: "Data Structure",
            playlistId: "PL9P7ljTbmNa3_zkGBGDi0Um1KkiJeYpi5",
            thumbnail: dataStructureThumb,
            tags: ["Latest", "Programming"],
            videoCount: 9,
            description: "Complete guide to data structures including arrays, linked lists, trees, graphs and more"
        },
        {
            id: 2,
            title: "C Programming Beginners",
            playlistId: "PL9P7ljTbmNa2Zopsl-3vrWeBYs6jlqivZ",
            thumbnail: cProgrammingThumb,
            tags: ["Latest", "Programming"],
            videoCount: 10,
            description: "Learn C programming from scratch with hands-on examples and projects"
        },
        {
            id: 3,
            title: "Database Management System",
            playlistId: "PL9P7ljTbmNa3fg9upaWfPRNkEUjpLs3Cx",
            thumbnail: databaseThumb,
            tags: ["Latest", "Database"],
            videoCount: 6,
            description: "Master DBMS concepts including SQL, normalization, transactions and database design"
        },
        {
            id: 4,
            title: "Machine Learning",
            playlistId: "PL9P7ljTbmNa05Z-EBkPh3Iy13xIuL91UU",
            thumbnail: machineLearningThumb,
            tags: ["Latest", "AI/ML"],
            videoCount: 2,
            description: "Comprehensive machine learning course covering algorithms, models and practical applications"
        },
        {
            id: 5,
            title: "Microprocessor",
            playlistId: "PL9P7ljTbmNa0C79omI6YGH1eMpuD5Eusi",
            thumbnail: microprocessorThumb,
            tags: ["Programming"],
            videoCount: 7,
            description: "Understanding microprocessor architecture, assembly language and embedded systems"
        },
        {
            id: 6,
            title: "Statistics",
            playlistId: "PL9P7ljTbmNa2avvNlBsFmy_HWQYfmQMXn",
            thumbnail: statisticsThumb,
            tags: ["Latest", "AI/ML"],
            videoCount: 2,
            description: "Statistical concepts and methods for data analysis and machine learning"
        }
    ]
};

const Content = () => {
    const [activeTag, setActiveTag] = useState("Latest");

    const filteredPlaylists = contentData.playlists.filter(playlist => 
        playlist.tags.includes(activeTag)
    );

    return (
        <section id="content" className="relative py-24 overflow-hidden bg-[#020617] selection:bg-red-500/30">
            {/* Background Grid & Glow Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05]"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            <div className="container relative z-10 px-6 mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-slate-900/80 border border-slate-800/50 backdrop-blur-md">
                            <span className="relative flex w-2 h-2">
                                <span className="absolute inline-flex w-full h-full bg-red-400 rounded-full opacity-75 animate-ping"></span>
                                <span className="relative inline-flex w-2 h-2 bg-red-500 rounded-full"></span>
                            </span>
                            <span className="text-xs font-bold tracking-widest uppercase text-slate-400">YouTube Content</span>
                        </div>

                        <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-purple-600">Playlists</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-slate-400">
                            Curated video series on programming, problem solving, and career development
                        </p>

                        {/* Channel Link */}
                        <motion.a
                            href="https://youtube.com/@codewithramu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 mt-6 font-bold text-white transition-all border shadow-lg bg-gradient-to-r from-red-600 to-pink-600 rounded-xl border-red-500/30 hover:shadow-red-500/50 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaYoutube className="text-xl" />
                            View My Channel
                            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Filter Tags */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-2 mb-12 sm:gap-3"
                >
                    {contentData.categories.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setActiveTag(tag)}
                            className={`px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 border ${
                                activeTag === tag 
                                ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white border-red-500/50 shadow-lg shadow-red-500/30 scale-105' 
                                : 'bg-slate-800/50 text-slate-400 border-slate-700/50 hover:border-red-500/40 hover:text-white hover:bg-slate-800'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </motion.div>

                {/* Playlist Grid */}
                <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence>
                        {filteredPlaylists.map((playlist, index) => (
                            <motion.div
                                key={playlist.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="relative overflow-hidden transition-all duration-300 border shadow-xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 rounded-2xl border-slate-700/50 hover:border-red-500/40 hover:shadow-red-500/20 backdrop-blur-sm group"
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 group-hover:opacity-100"></div>

                                <div className="relative z-10">
                                    {/* Playlist Thumbnail */}
                                    <a
                                        href={`https://www.youtube.com/playlist?list=${playlist.playlistId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative block overflow-hidden aspect-video"
                                    >
                                        <img 
                                            src={playlist.thumbnail} 
                                            alt={playlist.title}
                                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                        />
                                        
                                        {/* Overlay */}
                                        <div className="absolute inset-0 transition-all bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent group-hover:from-slate-900/70">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="flex items-center justify-center w-20 h-20 text-white transition-all duration-300 rounded-full shadow-2xl bg-gradient-to-br from-red-600 to-pink-600 group-hover:scale-110">
                                                    <FaPlay className="ml-1.5 text-2xl" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Playlist Badge */}
                                        <div className="absolute flex items-center gap-2 px-3 py-2 text-xs font-bold text-white rounded-lg top-4 right-4 bg-black/80 backdrop-blur-sm">
                                            <FaListUl />
                                            <span>{playlist.videoCount} Videos</span>
                                        </div>
                                    </a>

                                    {/* Playlist Info */}
                                    <div className="p-6">
                                        <div className="flex flex-wrap items-center gap-2 mb-3">
                                            {playlist.tags.map((tag, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-3 py-1 text-xs font-bold tracking-wider text-red-400 uppercase border rounded-lg bg-gradient-to-r from-red-600/20 to-pink-600/20 border-red-500/30"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <a
                                            href={`https://www.youtube.com/playlist?list=${playlist.playlistId}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <h3 className="mb-2 text-xl font-bold leading-tight text-white transition-colors group-hover:text-red-400">
                                                {playlist.title}
                                            </h3>
                                        </a>
                                        <p className="text-sm text-slate-400 line-clamp-2">
                                            {playlist.description}
                                        </p>

                                        {/* Watch Playlist Button */}
                                        <a
                                            href={`https://www.youtube.com/playlist?list=${playlist.playlistId}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 mt-4 text-sm font-bold text-white transition-all border rounded-lg bg-gradient-to-r from-red-600/80 to-pink-600/80 border-red-500/30 hover:from-red-600 hover:to-pink-600 hover:scale-105"
                                        >
                                            <FaYoutube />
                                            Watch Playlist
                                            <FaArrowRight className="text-xs" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* No Playlists Message */}
                {filteredPlaylists.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-16 text-center"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-slate-800">
                            <FaYoutube className="text-3xl text-slate-600" />
                        </div>
                        <p className="text-lg text-slate-500">No playlists found for this category yet.</p>
                    </motion.div>
                )}
            </div>
            {/* <ScrollIndicator label="Latest Blogs" /> */}
        </section>
    );
};

export default Content;