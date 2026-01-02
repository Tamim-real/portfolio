import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaTimes, FaYoutube, FaInfoCircle, FaLightbulb, FaRocket, FaCheckCircle, FaCode, FaCog, FaDatabase, FaShieldAlt, FaChartLine, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BiTimeFive, BiCodeBlock } from 'react-icons/bi';
import { HiSparkles } from 'react-icons/hi';
import ScrollIndicator from '../../../../components/ScrollIndicator';


import Plantify from '../../../../assets/images/project/Plantify.png';
import Plantify_2 from '../../../../assets/images/project/Plantify-2.png';
import Plantify_3 from '../../../../assets/images/project/Plantify-3.png';





import Fudex from '../../../../assets/images/project/Fudex.png';
import Fudex_2 from '../../../../assets/images/project/Fudex-2.png';
import Fudex_3 from '../../../../assets/images/project/Fudex-3.png';
import Fudex_4 from '../../../../assets/images/project/Fudex-4.png';


import Artverse_thum from '../../../../assets/images/project/Artverse.png';
import Artverse_2 from '../../../../assets/images/project/Artverse-2.png';
import Artverse_3 from '../../../../assets/images/project/Artverse-3.png';


// Project Data
const projectData = [


    {
        "id": 1,
        "title": "Fudex",
        "category": "Food Delivery Application",
        "description": "Fudex is a full-stack food delivery app connecting food lovers with professional chefs, offering seamless ordering for users and real-time kitchen management for chefs.",
        "fullDescription": "Fudex is a comprehensive full-stack food delivery application designed to bridge the gap between food lovers and professional chefs. The platform offers a seamless experience for users to order food and for chefs to manage their kitchen pipeline in real-time",
        "features": [
            "⚡ Real-time Order Dashboard: Dynamic status updates (Placed, Accepted, Delivered) for chefs to manage their workflow.",
            "🛡️ Secure Authentication: Integrated Google and Email/Password login powered by Firebase.",
            "🧑‍💻 Role-Based Access: Personalized dashboards for Admins (User management), Chefs (Order management), and Customers.",
            "💳 Payment Tracking: Instant visibility of payment status (Paid/Unpaid) for every incoming order.",
            "🔍 Advanced User Management: Admin capability to monitor users, search by credentials, and flag fraudulent accounts."
        ]
        ,
        "challenges": "Managing multiple user roles seamlessly, providing personalized dashboards for Admins, Chefs, and Customers without compromising performance.",
        "tech": ["React.js", "Tailwind", "Node.js", "MongoDB", "Vercel"],
        "techStack": {
            "frontend": ["React.js", "Tailwind", "Vite/React-App"],
            "backend": ["Node.js", "Express", "MongoDB", "RestAPI"],
            "tools": ["Git", "VS Code", "Vercel"]
        },
        "duration": "17 Days",
        "team": "Individual Project",
        "learnings": [
            "Mastered real-time order management for food delivery apps",
            "Learned to implement secure authentication with Email/Password using Firebase",
            "Improved UI/UX for multi-role dashboards (Admin, Chef, Customer)",
            "Implemented efficient state management for handling large order datasets",
            "Gained experience in optimizing API calls for seamless food ordering experience",
            "Enhanced skills in creating responsive and interactive order tables and payment tracking",
            "Experience in deploying full-stack React apps with Firebase and backend integration"
        ]
        ,
        "futureFeatures": [
            "Admin dashboard for data management",
            "Overall statistic and analytics of results"
        ],
        "youtubeVideo": "",
        "links": {
            "github": "https://github.com/Tamim-real/Fudex",
            "live": "https://fudex.netlify.app/"
        },
        "images": [Fudex, Fudex_2, Fudex_3, Fudex_4],
        "featured": true
    },

    {
        "id": 2,
        "title": "Artverse — Full-Stack MERN Marketplace",
        "category": "Marketplace",
        "description": "Artverse is a full-stack MERN marketplace for discovering, buying, and selling artworks with a modern, responsive UI.",
        "fullDescription": "Artverse is a full-stack MERN marketplace for discovering, uploading, buying and selling artworks. Features include user authentication, dynamic categories, likes system, wishlist, secure backend API, and a modern responsive UI built with React & Tailwind.",
        "features": [
            "Secure login & signup using Firebase Authentication.",
            "Track total uploads.",
            "Shopping cart with session management",
            "Update or delete artworks anytime.",
            "See all your uploaded artworks",
            "Add/remove artworks seamlessly.",
            "Product search and filtering",
            "Responsive design with Tailwind",
            "Preference saved in localStorage."
        ],
        "challenges": "Designing a smooth artwork discovery experience with search & category filters, managing image-heavy uploads efficiently, implementing real-time favorites handling, and maintaining seamless UI transitions with animations while ensuring secure authentication and theme persistence.",
        "tech": ["Django MVT", "Tailwind", "SQLite", "ORM"],
        "techStack": {
            "frontend": ["React", "Tailwind", "JavaScript"],
            "backend": ["Node.js", "Express", "MongoDB"],
            "tools": ["Git", "Thunder Client"]
        },
        "duration": "1.5 months",
        "team": "Solo Project",
        "learnings": [
            "Built full-stack applications using the MERN stack (MongoDB, Express, React, Node.js)",
            "Designed RESTful APIs for artwork management and user interactions",
            "Implemented Firebase Authentication with email/password and Google sign-in",
            "Managed user-specific data like favorites, wishlist, and personal galleries",
            "Handled image uploads and optimized performance with lazy loading",
            "Implemented search and category-based filtering for artworks",
            "Built dynamic UI components with React and Tailwind CSS",
            "Enhanced UX with smooth animations using Framer Motion and React Awesome Reveal",
            "Implemented dark & light theme toggle with persistent state using localStorage",
            "Worked with MongoDB schemas and relationships for artworks and users",
            "Improved application security and data validation on the backend"
        ]
        ,
        "futureFeatures": [
            "Multiple payment gateways (bKash, Nagad, card, etc.)",
            "One-click checkout",
            "Personalized dashboard for users",
            "Push notifications for offers or order updates",
            "Chatbot integration",
        ],
        "youtubeVideo": "",
        "links": {
            "github": "https://github.com/Tamim-real/Artverse",
            "live": "https://artversetech.netlify.app/"
        },
        "images": [Artverse_thum, Artverse_2, Artverse_3],
        "featured": false
    },

    {
        "id": 3,
        "title": "Plantify",
        "category": "Plant Store",
        "description": "Plantify is a modern, responsive, and user-friendly website for plant enthusiasts.It allows users to explore, search, and purchase a wide variety of plants online with smooth navigation and interactive UI.",
        "fullDescription": "Plantify is a modern, responsive, and user-friendly website for plant enthusiasts.It allows users to explore, search, and purchase a wide variety of plants online with smooth navigation and interactive UI.",
        "features": [
            " Purchase plants online with ease",
            "Secure user authentication and login",
            "Explore a wide variety of plants by category",
            "Get expert suggestions and recommendations",
            "JWT-based authentication and authorization",
            "Access plant-related tips and guides",
            "Post and share content in the community section",
           
        ],
        "challenges": "Handling large JSON Data, implementing secure Log in system, and designing layout with responsiveness.",
        "tech": ["Firebase", "React.js", "Tailwind"],
        "techStack": {
            "frontend": ["React.js", "React Router", "Tailwind"],
            "tools": ["Git", "VS Code", "Netlify"]
        },
        "duration": "7 Days",
        "team": "Individual Project",
        "learnings": [
            "Learned secure login system with firebase",
            "Designed modern card",
            "Built dummy community section like social media",
        ],
        "futureFeatures": [
            "Implemented PGW",
            "Advanced UI",
            
        ],
        "youtubeVideo": "",
        "links": {
            "github": "https://github.com/Tamim-real/plantify",
            "live": "https://plantifytech.netlify.app/"
        },
        "images": [Plantify, Plantify_2, Plantify_3],
        "featured": false
    },

    



];

// Modal Component
const ProjectModal = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = project.images || [project.image];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-6xl overflow-hidden border shadow-2xl max-h-[92vh] overflow-y-auto bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl border-slate-700/50 shadow-cyan-500/10"
                onClick={(e) => e.stopPropagation()}
                style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#475569 #0f172a'
                }}
            >
                {/* Close Button */}
                <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute z-50 p-3 transition-all duration-300 border rounded-full shadow-lg top-6 right-6 bg-slate-800/90 backdrop-blur-md border-slate-700/50 hover:bg-red-500 hover:border-red-400 text-slate-300 hover:text-white hover:shadow-red-500/50"
                >
                    <FaTimes size={18} />
                </motion.button>

                {/* Header Image Slider */}
                <div className="relative overflow-hidden h-72 md:h-80 lg:h-96">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            src={images[currentImageIndex]}
                            alt={`${project.title} - ${currentImageIndex + 1}`}
                            className="absolute inset-0 object-cover w-full h-full"
                        />
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={goToPrevious}
                                className="absolute z-40 p-2 transition-all transform -translate-y-1/2 border rounded-full left-4 top-1/2 bg-slate-900/70 backdrop-blur-md border-slate-700/50 hover:bg-slate-800 text-slate-300 hover:text-white hover:scale-110"
                            >
                                <FaChevronLeft size={16} />
                            </button>
                            <button
                                onClick={goToNext}
                                className="absolute z-40 p-2 transition-all transform -translate-y-1/2 border rounded-full right-4 top-1/2 bg-slate-900/70 backdrop-blur-md border-slate-700/50 hover:bg-slate-800 text-slate-300 hover:text-white hover:scale-110"
                            >
                                <FaChevronRight size={16} />
                            </button>
                        </>
                    )}

                    {/* Dots Indicator */}
                    {images.length > 1 && (
                        <div className="absolute z-40 flex gap-2 transform -translate-x-1/2 bottom-4 left-1/2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex
                                        ? 'bg-cyan-400 w-6'
                                        : 'bg-slate-500 hover:bg-slate-400'
                                        }`}
                                />
                            ))}
                        </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
                    {project.featured && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="absolute flex items-center gap-2 px-5 py-2.5 text-xs font-black tracking-wider rounded-full shadow-2xl top-6 left-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-slate-900 border-2 border-white/20"
                        >
                            <FaStar className="animate-pulse" /> LATEST PROJECT
                        </motion.div>
                    )}
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                    {/* Title & Category */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-10"
                    >
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1 text-[10px] md:px-4 md:py-1.5 md:text-xs font-black tracking-widest uppercase border rounded-full text-cyan-400 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/40 shadow-lg shadow-cyan-500/20">
                                <div className="relative flex w-1.5 h-1.5 md:w-2 md:h-2">
                                    <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-cyan-400"></span>
                                    <span className="relative inline-flex w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-500"></span>
                                </div>
                                {project.category}
                            </span>
                            <div className="flex items-center gap-2">
                                {project.duration && (
                                    <span className="flex items-center gap-1.5 px-3 py-1 text-[10px] md:text-xs font-bold border rounded-full text-blue-400 bg-blue-500/10 border-blue-500/30 backdrop-blur-sm md:px-4 md:py-1.5 md:gap-2">
                                        <BiTimeFive size={12} className="md:w-3.5 md:h-3.5" /> {project.duration}
                                    </span>
                                )}
                                {project.team && (
                                    <span className="flex items-center gap-1.5 px-3 py-1 text-[10px] md:text-xs font-bold border rounded-full text-purple-400 bg-purple-500/10 border-purple-500/30 backdrop-blur-sm md:px-4 md:py-1.5 md:gap-2">
                                        <FaCode size={10} className="md:w-3 md:h-3" /> {project.team}
                                    </span>
                                )}
                            </div>
                        </div>
                        <h2 className="mb-6 text-3xl font-black tracking-tight text-transparent md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                            {project.title}
                        </h2>
                    </motion.div>

                    {/* YouTube Video */}
                    {project.youtubeVideo && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-12"
                        >
                            <div className="flex items-center gap-2 mb-4 md:gap-3 md:mb-5">
                                <div className="p-2 rounded-lg shadow-lg bg-gradient-to-br from-red-500 to-pink-600 shadow-red-500/30">
                                    <FaYoutube className="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white md:text-xl lg:text-2xl">Project Walkthrough</h3>
                            </div>
                            <div className="relative overflow-hidden border shadow-2xl aspect-video rounded-2xl border-slate-700/50 shadow-cyan-500/10">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={project.youtubeVideo}
                                    title={`${project.title} Demo`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    )}

                    {/* Full Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-12"
                    >
                        <h3 className="flex items-center gap-2 pb-3 mb-5 text-lg font-black text-white border-b md:gap-4 md:pb-4 md:mb-6 md:text-2xl lg:text-3xl border-slate-700/50">
                            <div className="p-2 shadow-lg md:p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-500/30">
                                <FaInfoCircle className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                            </div>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Project Overview</span>
                        </h3>
                        <p className="text-base leading-relaxed md:text-lg text-slate-300">
                            {project.fullDescription}
                        </p>
                    </motion.div>

                    {/* Key Features */}
                    {project.features && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mb-12"
                        >
                            <h3 className="flex items-center gap-2 pb-3 mb-5 text-lg font-black text-white border-b md:gap-4 md:pb-4 md:mb-6 md:text-2xl lg:text-3xl border-slate-700/50">
                                <div className="p-2 shadow-lg md:p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-green-500/30">
                                    <FaCheckCircle className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                                </div>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Core Features</span>
                            </h3>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {project.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + index * 0.05 }}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="flex items-start gap-4 p-5 transition-all duration-300 border shadow-lg rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-800/30 border-slate-700/50 hover:border-green-500/40 hover:shadow-green-500/10 backdrop-blur-sm group"
                                    >
                                        <div className="flex-shrink-0 p-2 transition-transform duration-300 rounded-lg bg-green-500/10 group-hover:scale-110">
                                            <FaCheckCircle className="text-green-400" size={18} />
                                        </div>
                                        <span className="text-slate-300 group-hover:text-white">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Challenges & Learnings */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2"
                    >
                        {/* Challenges */}
                        {project.challenges && (
                            <div className="p-6 transition-all duration-300 border shadow-xl md:p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-800/30 border-slate-700/50 hover:border-red-500/40 hover:shadow-red-500/10 backdrop-blur-sm">
                                <h3 className="flex items-center gap-2 mb-4 text-lg font-black text-white md:gap-3 md:mb-5 md:text-xl lg:text-2xl">
                                    <div className="p-2 rounded-xl shadow-lg md:p-2.5 bg-gradient-to-br from-red-500 to-orange-600 shadow-red-500/30">
                                        <FaShieldAlt className="w-4 h-4 md:w-5 md:h-5" />
                                    </div>
                                    Technical Challenges
                                </h3>
                                <p className="leading-relaxed text-slate-300">
                                    {project.challenges}
                                </p>
                            </div>
                        )}
                        {/* Learnings */}
                        {project.learnings && (
                            <div className="p-6 transition-all duration-300 border shadow-xl md:p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-800/30 border-slate-700/50 hover:border-yellow-500/40 hover:shadow-yellow-500/10 backdrop-blur-sm">
                                <h3 className="flex items-center gap-2 mb-4 text-lg font-black text-white md:gap-3 md:mb-5 md:text-xl lg:text-2xl">
                                    <div className="p-2 rounded-xl shadow-lg md:p-2.5 bg-gradient-to-br from-yellow-500 to-amber-600 shadow-yellow-500/30">
                                        <FaLightbulb className="w-4 h-4 md:w-5 md:h-5" />
                                    </div>
                                    What I Learned
                                </h3>
                                <ul className="space-y-3">
                                    {project.learnings.map((learning, index) => (
                                        <li key={index} className="flex items-start gap-3 transition-transform duration-200 hover:translate-x-2">
                                            <div className="flex-shrink-0 p-1 mt-0.5 rounded bg-yellow-500/10">
                                                <HiSparkles className="text-yellow-400" size={16} />
                                            </div>
                                            <span className="text-sm text-slate-300">{learning}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>

                    {/* Future Features */}
                    {project.futureFeatures && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mb-12"
                        >
                            <h3 className="flex items-center gap-2 pb-3 mb-5 text-lg font-black text-white border-b md:gap-4 md:pb-4 md:mb-6 md:text-2xl lg:text-3xl border-slate-700/50">
                                <div className="p-2 shadow-lg md:p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-indigo-500/30">
                                    <FaRocket className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                                </div>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Future Enhancements</span>
                            </h3>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {project.futureFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.7 + index * 0.05 }}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="flex items-start gap-4 p-5 transition-all duration-300 border shadow-lg rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-800/30 border-slate-700/50 hover:border-indigo-500/40 hover:shadow-indigo-500/10 backdrop-blur-sm group"
                                    >
                                        <div className="flex-shrink-0 p-2 transition-transform duration-300 rounded-lg bg-indigo-500/10 group-hover:scale-110">
                                            <FaRocket className="text-indigo-400" size={16} />
                                        </div>
                                        <span className="text-slate-300 group-hover:text-white">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Tech Stack */}
                    {project.techStack && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="mb-12"
                        >
                            <h3 className="flex items-center gap-2 pb-3 mb-5 text-lg font-black text-white border-b md:gap-4 md:pb-4 md:mb-6 md:text-2xl lg:text-3xl border-slate-700/50">
                                <div className="p-2 shadow-lg md:p-3 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-purple-500/30">
                                    <BiCodeBlock className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                                </div>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Technology Stack</span>
                            </h3>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                {/* Frontend */}
                                {project.techStack.frontend && (
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="p-6 transition-all duration-300 border shadow-xl rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 border-slate-700/50 hover:border-blue-500/40 hover:shadow-blue-500/20 backdrop-blur-sm"
                                    >
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className="p-2 rounded-lg bg-blue-500/10">
                                                <FaCode className="text-blue-400" size={20} />
                                            </div>
                                            <h4 className="text-lg font-black text-white">Frontend</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.frontend.map((tech, i) => (
                                                <span key={i} className="px-3 py-1.5 text-xs font-bold rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500/20 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                                {/* Backend */}
                                {project.techStack.backend && (
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="p-6 transition-all duration-300 border shadow-xl rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 border-slate-700/50 hover:border-green-500/40 hover:shadow-green-500/20 backdrop-blur-sm"
                                    >
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className="p-2 rounded-lg bg-green-500/10">
                                                <FaDatabase className="text-green-400" size={20} />
                                            </div>
                                            <h4 className="text-lg font-black text-white">Backend</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.backend.map((tech, i) => (
                                                <span key={i} className="px-3 py-1.5 text-xs font-bold rounded-lg bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                                {/* Libraries/Tools */}
                                {(project.techStack.libraries || project.techStack.tools) && (
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="p-6 transition-all duration-300 border shadow-xl rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 border-slate-700/50 hover:border-amber-500/40 hover:shadow-amber-500/20 backdrop-blur-sm"
                                    >
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className="p-2 rounded-lg bg-amber-500/10">
                                                <FaCog className="text-amber-400" size={20} />
                                            </div>
                                            <h4 className="text-lg font-black text-white">Tools & Libraries</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {[...(project.techStack.libraries || []), ...(project.techStack.tools || [])].map((tech, i) => (
                                                <span key={i} className="px-3 py-1.5 text-xs font-bold rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-4 pt-8 border-t border-slate-700/50"
                    >
                        <motion.a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 px-8 py-4 text-sm font-bold transition-all border shadow-lg rounded-xl bg-slate-800/80 backdrop-blur-sm text-slate-200 border-slate-700 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-cyan-500/20"
                        >
                            <FaGithub size={22} /> View Source Code
                        </motion.a>
                        {project.links.live && project.links.live !== "#" && (
                            <motion.a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 px-8 py-4 text-sm font-bold text-white transition-all shadow-2xl rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-cyan-500/30 hover:shadow-cyan-500/50"
                            >
                                <FaExternalLinkAlt size={20} /> Visit Live Site
                            </motion.a>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="relative py-24 overflow-hidden bg-[#020617] selection:bg-cyan-500/30">

            {/* Background Grid & Glow Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05]"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            {/* Header */}
            <div className="container relative z-10 px-6 mx-auto mb-20 text-center max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-slate-900/80 border border-slate-800/50 backdrop-blur-md">
                        <span className="relative flex w-2 h-2">
                            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-cyan-400"></span>
                            <span className="relative inline-flex w-2 h-2 rounded-full bg-cyan-500"></span>
                        </span>
                        <span className="text-[10px] font-bold tracking-widest uppercase  sm:text-xs text-slate-400">Case Studies</span>
                    </div>

                    <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">Projects</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg leading-relaxed text-slate-400">
                        From real-world client deliverables to complex full-stack applications, here's a showcase of my technical journey.
                    </p>
                </motion.div>
            </div>

            <div className="container relative z-10 px-6 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {projectData
                        .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
                        .map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${project.featured
                                    ? 'md:col-span-2 md:flex md:items-stretch'
                                    : ''
                                    }`}
                            >
                                {/* Card Background */}
                                <div className="absolute inset-0 transition-colors border bg-slate-900/40 backdrop-blur-md border-slate-800/50 group-hover:bg-slate-800/60 group-hover:border-slate-600/50"></div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-2xl group-hover:opacity-100 -z-10"></div>

                                {/* Image Section */}
                                <div className={`relative overflow-hidden ${project.featured ? 'md:w-1/2 h-48 sm:h-56 md:h-auto' : 'h-40 sm:h-48 md:h-56 w-full'}`}>
                                    <div className="absolute inset-0 z-10 transition-colors bg-slate-900/30 group-hover:bg-slate-900/10"></div>
                                    <img
                                        src={project.images ? project.images[0] : project.image}
                                        alt={project.title}
                                        className="relative object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-110"
                                    />

                                    {/* Client Badge */}
                                    {project.featured && (
                                        <div className="absolute z-20 flex items-center gap-2 px-4 py-2 text-xs font-black tracking-wider rounded-full shadow-xl top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 backdrop-blur-md">
                                            <FaStar className="animate-pulse" /> LATEST PROJECT
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className={`relative z-10 p-4 sm:p-6 md:p-8 flex flex-col ${project.featured ? 'md:w-1/2' : ''}`}>

                                    {/* Category Tag */}
                                    <div className="mb-4">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] lg:text-xs font-bold tracking-widest uppercase border rounded-full text-cyan-400 bg-cyan-500/10 border-cyan-500/30">
                                            <div className="relative flex w-2 h-2">
                                                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-cyan-400"></span>
                                                <span className="relative inline-flex w-2 h-2 rounded-full bg-cyan-500"></span>
                                            </div>
                                            <span>{project.category}</span>
                                        </div>
                                    </div>

                                    <h3 className="mb-3 text-base font-bold text-white transition-colors sm:text-lg md:text-xl lg:text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500">
                                        {project.title}
                                    </h3>

                                    <p className="flex-grow mb-4 text-xs leading-relaxed sm:text-sm md:text-base text-slate-400 group-hover:text-slate-300">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Pills */}
                                    <div className="grid grid-cols-3 gap-1.5 pb-4 mb-4 border-b sm:pb-5 sm:mb-5 md:pb-6 md:mb-6 md:grid-cols-3 md:gap-2 lg:grid-cols-5 place-items-center border-slate-700/50">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="w-full px-2 py-1 text-[10px] md:px-3 md:py-1.5 md:text-xs font-semibold text-center transition-colors border rounded-lg bg-slate-800/80 text-slate-300 border-slate-700/50 group-hover:border-slate-600 group-hover:bg-slate-800"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2 sm:gap-3">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="flex items-center justify-center gap-2 px-3 py-2.5 sm:px-5 text-sm font-bold transition-all rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
                                        >
                                            <FaInfoCircle size={16} /> <span>View Details</span>
                                        </button>
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-3 py-2.5 sm:px-5 text-sm font-bold transition-all border rounded-lg bg-slate-800/80 text-slate-200 border-slate-700 hover:border-cyan-500 hover:text-cyan-400 hover:bg-slate-800"
                                        >
                                            <FaGithub size={18} /> <span className="hidden sm:inline">Code</span>
                                        </a>
                                        {project.links.live && project.links.live !== "#" && (
                                            <a
                                                href={project.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 px-3 py-2.5 sm:px-5 text-sm font-bold transition-all border rounded-lg bg-slate-800/80 text-slate-200 border-slate-700 hover:border-green-500 hover:text-green-400 hover:bg-slate-800"
                                            >
                                                <FaExternalLinkAlt size={16} /> <span className="hidden sm:inline">Live</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                </div>

                {/* GitHub More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href="https://github.com/Tamim-real"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold transition-all border rounded-full group bg-slate-900/50 backdrop-blur-md border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500 hover:bg-slate-800"
                    >
                        <FaGithub size={20} className="transition-transform group-hover:scale-110" />
                        View More on GitHub
                        <FaExternalLinkAlt size={14} className="transition-transform group-hover:translate-x-1" />
                    </a>
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence mode="wait">
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
            <ScrollIndicator label="About Me" />
        </section>
    );
};

export default Projects;