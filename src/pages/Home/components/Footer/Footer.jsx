"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiInstagram, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);

  // Social Link Data
  const socials = [
    { icon: FiGithub, href: "https://github.com/Tamim-real" },
    { icon: FiLinkedin, href: "https://linkedin.com/in/tamim-islaam" },
    { icon: FiInstagram, href: "#" },
    { icon: FiMail, href: "mailto:tamimislam2653@gmail.com" },
  ];

  // Navigation Links - Now targeting IDs
  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Home", href: "#home" }, // Ensure your top section has id="home"
  ];

  return (
    <footer 
      ref={container} 
      className="relative min-h-screen bg-[#0a0a0a] text-[#e5e5e5] overflow-hidden flex flex-col justify-between pt-20"
    >
      {/* 1. BACKGROUND NOISE */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* 2. LIQUID ACCENT */}
      <motion.div 
        style={{ opacity }}
        className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-gradient-to-bl from-blue-600/20 via-purple-600/10 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
          
          {/* LEFT: MASSIVE TYPOGRAPHY */}
          <motion.div style={{ y, rotate }} className="max-w-4xl">
            <p className="text-blue-500 font-mono text-sm tracking-[0.5em] uppercase mb-8">
              // Available for 2026
            </p>
            <h2 className="text-[clamp(3rem,10vw,12rem)] leading-[0.85] font-black tracking-tighter uppercase italic">
              Create <br /> 
              <span className="text-transparent stroke-text hover:text-white transition-all duration-700 cursor-default">
                Impact
              </span>
            </h2>
          </motion.div>

          {/* RIGHT: WORKING DATA GRID */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-12 font-mono text-xs uppercase tracking-widest text-white/40">
            <div className="space-y-4">
              <p className="text-blue-500">Contact</p>
              <a href="mailto:tamimislam2653@gmail.com" className="block text-white hover:text-blue-500 transition-colors">Email Me</a>
              <a href="https://t.me/yourusername" target="_blank" rel="noreferrer" className="block text-white hover:text-blue-500 transition-colors">Telegram</a>
            </div>

            <div className="space-y-4">
              <p className="text-blue-500">Navigation</p>
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="block text-white hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="col-span-2 pt-8 border-t border-white/10">
              <p className="text-blue-500 mb-4">Location</p>
              <p className="text-white">Dhaka, Bangladesh — 23.8103° N</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CENTERPIECE: MAGNETIC LINK */}
      <div className="relative h-[40vh] flex items-center justify-center mt-20 border-y border-white/5 group">
         <motion.a 
            href="mailto:tamimislam2653@gmail.com"
            className="relative z-20 text-4xl md:text-7xl font-light tracking-tight flex items-center gap-6 group-hover:italic transition-all duration-500"
            whileHover={{ scale: 1.05 }}
         >
            Work with me
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <FiArrowUpRight className="text-2xl md:text-4xl" />
            </div>
         </motion.a>
         
         <span className="absolute text-[25vw] font-black opacity-[0.02] select-none pointer-events-none uppercase">
            Inquiry
         </span>
      </div>

      {/* 4. FOOTER BOTTOM */}
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Available for Q1 2026
          </div>
          <p>© 2026 Tamim Islam</p>
        </div>

        <div className="flex gap-6">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5, color: '#3b82f6' }}
              className="text-xl text-white/20 transition-colors"
            >
              <social.icon />
            </motion.a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </footer>
  );
};

export default Footer;