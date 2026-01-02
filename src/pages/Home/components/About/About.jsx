import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { FaGraduationCap, FaCode, FaStar, FaRocket, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { HiSparkles, HiAcademicCap } from 'react-icons/hi';

const aboutData = {
    education: [
        {
            degree: "B.A in English",
            institution: "Govt Bangla College",
            year: "2017 - 2022",
            result: "2nd Class",
            desc: "Bridging the gap between linguistics and logic. My background in English literature enhances my ability to write clean, well-documented, and expressive code.",
            color: "from-cyan-500 to-blue-600"
        }
    ],
    training: [
        {
            title: "Full-Stack Web Development",
            institution: "Programming Hero",
            year: "Jul 2025 – Dec 2025",
            duration: "6 Months",
            desc: "Immersive training in the MERN stack. Developed 12+ production-grade projects focusing on performance, security, and scalable architecture.",
            status: "completed",
            certified: true,
            color: "from-indigo-500 to-purple-600"
        }
    ]
};

// --- Magnetic / Tilt Card Component ---
const TiltCard = ({ children }) => {
    const x = useSpring(0, { stiffness: 150, damping: 20 });
    const y = useSpring(0, { stiffness: 150, damping: 20 });

    const handleMouse = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = (mouseX / width - 0.5) * 10;
        const yPct = (mouseY / height - 0.5) * -10;
        x.set(xPct);
        y.set(yPct);
    };

    const handleLeave = () => { x.set(0); y.set(0); };

    return (
        <motion.div
            onMouseMove={handleMouse}
            onMouseLeave={handleLeave}
            style={{ rotateX: y, rotateY: x, transformStyle: "preserve-3d" }}
            className="relative"
        >
            {children}
        </motion.div>
    );
};

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <section ref={containerRef} id="about" className="relative py-24 md:py-40 overflow-hidden bg-[#020617] text-white">
            {/* Background Grids & Orbs */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.1]" 
                    style={{ backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
                />
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" 
                />
            </div>

            <div className="container relative z-10 px-6 mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                    
                    {/* Left Column: Sticky Header */}
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-32">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-black tracking-[0.2em] uppercase border rounded-full border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                            >
                                <HiSparkles className="animate-pulse" /> My Journey
                            </motion.div>
                            
                            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9]">
                                Growth & <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
                                    Knowledge
                                </span>
                            </h2>
                            
                            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                                A unique blend of linguistic expertise and technical precision. I don't just build websites; I craft experiences with a focus on clean logic and human-centric design.
                            </p>

                            <div className="mt-10 flex gap-6">
                                <div className="text-center">
                                    <h4 className="text-3xl font-black text-white">5+</h4>
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Projects</p>
                                </div>
                                <div className="w-px h-12 bg-slate-800" />
                                <div className="text-center">
                                    <h4 className="text-3xl font-black text-white">1k+</h4>
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Coding Hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Dynamic Timeline */}
                    <div className="lg:col-span-7 relative">
                        {/* The Filling Timeline Bar */}
                        <motion.div 
                            style={{ scaleY }}
                            className="absolute left-[31px] md:left-[39px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent origin-top z-0"
                        />

                        <div className="space-y-16">
                            {[...aboutData.education, ...aboutData.training].map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="relative pl-16 md:pl-24 group"
                                >
                                    {/* Circle Marker */}
                                    <div className="absolute left-0 top-2 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center z-10">
                                        <div className="w-4 h-4 rounded-full bg-[#020617] border-2 border-cyan-500 group-hover:scale-125 transition-transform" />
                                        <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    <TiltCard>
                                        <div className="p-8 md:p-10 rounded-[2rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-white/10 transition-all duration-500 shadow-2xl overflow-hidden relative">
                                            {/* Top Decorative bar */}
                                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-50`} />

                                            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                                                <div>
                                                    <span className="text-cyan-400 text-xs font-black tracking-widest uppercase">{item.year}</span>
                                                    <h3 className="text-2xl md:text-3xl font-bold text-white mt-1 group-hover:text-cyan-400 transition-colors">
                                                        {item.degree || item.title}
                                                    </h3>
                                                </div>
                                                {item.certified && (
                                                    <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20 text-xs font-black uppercase tracking-tighter">
                                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                                        Certified
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-3 text-slate-300 font-semibold mb-6">
                                                <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} text-white`}>
                                                    {item.degree ? <HiAcademicCap size={20}/> : <FaRocket size={20}/>}
                                                </div>
                                                {item.institution}
                                            </div>

                                            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                                {item.desc}
                                            </p>

                                            {item.result && (
                                                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm font-bold">
                                                    <FaStar className="text-yellow-500" /> {item.result}
                                                </div>
                                            )}
                                        </div>
                                    </TiltCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;