"use client"

import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaLaptopCode, FaTools, FaTerminal } from 'react-icons/fa';
import { SiNodedotjs, SiReact, SiMongodb, SiExpress } from 'react-icons/si';

const expertiseData = [
    {
        id: 1,
        title: "Full Stack Development",
        stat: "MERN Specialist",
        desc: "Building seamless web applications using the MERN stack. I bridge high-performance React frontends with robust Node.js backends.",
        icon: <FaLaptopCode />,
        skills: ["MongoDB", "Express", "React", "Node.js"],
        color: "from-cyan-500 to-blue-600",
        position: "lg:col-span-2"
    },
    {
        id: 2,
        title: "Backend Systems",
        stat: "Scalable Architecture",
        desc: "Designing RESTful APIs and microservices with security and high-availability as a priority.",
        icon: <SiNodedotjs />,
        skills: ["Node.js", "JWT", "Mongoose", "API"],
        color: "from-emerald-400 to-cyan-500",
        position: "lg:col-span-1"
    },
    {
        id: 3,
        title: "Modern UI/UX",
        stat: "Pixel Perfect",
        desc: "Crafting modern, responsive interfaces using Tailwind CSS and Framer Motion for premium user experiences.",
        icon: <SiReact />,
        skills: ["Tailwind", "Motion", "Figma", "UX"],
        color: "from-purple-500 to-pink-500",
        position: "lg:col-span-1"
    },
    {
        id: 4,
        title: "Database Strategy",
        stat: "Data Integrity",
        desc: "Implementing efficient schemas and aggregation pipelines for complex data relationships.",
        icon: <SiMongodb />,
        skills: ["NoSQL", "Aggregation", "Indexing", "Atlas"],
        color: "from-orange-400 to-red-500",
        position: "lg:col-span-2"
    }
];

const ExpertiseCard = ({ item, index }) => {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring physics for smooth tilting
    const rotateXRaw = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
    const rotateYRaw = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
    const rotateX = useSpring(rotateXRaw, { damping: 20, stiffness: 150 });
    const rotateY = useSpring(rotateYRaw, { damping: 20, stiffness: 150 });

    function handleMouseMove(e) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXRelative = e.clientX - rect.left;
        const mouseYRelative = e.clientY - rect.top;

        mouseX.set(mouseXRelative / width - 0.5);
        mouseY.set(mouseYRelative / height - 0.5);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={`group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/5 bg-slate-900/40 p-8 transition-all hover:bg-slate-900/60 ${item.position}`}
        >
            {/* 3D Content Wrapper */}
            <div style={{ transform: "translateZ(50px)" }} className="flex h-full flex-col">
                
                {/* Spotlight Layer */}
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                500px circle at ${useTransform(mouseX, [-0.5, 0.5], [0, 100])}% ${useTransform(mouseY, [-0.5, 0.5], [0, 100])}%,
                                rgba(255,255,255,0.08),
                                transparent 80%
                            )
                        `,
                    }}
                />

                {/* Header */}
                <div className="relative z-10 flex items-start justify-between">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white text-3xl shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                        {item.icon}
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 font-mono text-[10px] font-black uppercase tracking-widest text-cyan-400">
                            {item.stat}
                        </span>
                    </div>
                </div>

                {/* Body */}
                <div className="relative z-10 mt-10">
                    <h3 className="text-3xl font-black tracking-tight text-white transition-colors group-hover:text-cyan-300">
                        {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-400">
                        {item.desc}
                    </p>
                </div>

                {/* Skills Container */}
                <div className="relative z-10 mt-auto pt-10">
                    <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                            <span key={skill} className="rounded-xl bg-white/5 px-4 py-2 text-xs font-bold text-slate-300 backdrop-blur-md border border-white/5 transition-all group-hover:border-white/20 group-hover:bg-white/10">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Accent Beam */}
            <div className={`absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r ${item.color} transition-all duration-700 ease-out group-hover:w-full`} />
        </motion.div>
    );
};

const Expertise = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#020617] py-32 selection:bg-cyan-500/30">
            {/* Dynamic Background Noise & Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px] animate-pulse" />
                <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzv9rqv4z/image/upload/v1683404104/noise_fkrxly.png')] opacity-[0.15] mix-blend-overlay" />
            </div>

            <div className="container relative z-10 mx-auto max-w-7xl px-6">
                {/* Heading Section */}
                <div className="mb-24 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-6 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-xl"
                    >
                        <FaTerminal className="text-cyan-400 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-300">My Stack & Skills</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl font-black tracking-tighter text-white sm:text-7xl md:text-8xl"
                    >
                        Tech <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500">Mastery.</span>
                    </motion.h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {expertiseData.map((item, index) => (
                        <ExpertiseCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;