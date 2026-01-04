"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import {
  FiArrowUpRight,
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  /* Cinematic parallax */
  const rawY = useTransform(scrollYProgress, [0, 1], [-180, 0]);
  const y = useSpring(rawY, { stiffness: 60, damping: 20 });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.6, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 0]);

  /* Magnetic CTA logic */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Calculates distance from center to create the "magnetic" pull effect
    mx.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    my.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <footer
      ref={ref}
      className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden flex flex-col justify-between"
    >
      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.035] pointer-events-none" />

      {/* Animated gradient mesh background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-600/20 blur-[160px]"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 80, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-600/20 blur-[160px]"
        />
      </motion.div>

      {/* Top section content */}
      <div className="container mx-auto px-6 md:px-12 pt-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div style={{ y, rotate }}>
            <p className="font-mono text-xs tracking-[0.5em] text-blue-500 mb-8">
              // AVAILABLE 2026
            </p>

            <h2 className="text-[clamp(3rem,10vw,11rem)] leading-[0.85] font-black uppercase tracking-tight italic">
              Create <br />
              <span className="stroke-text text-transparent hover:text-white transition-all duration-700">
                Impact
              </span>
            </h2>
          </motion.div>

          {/* Directory Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-14 font-mono text-[11px] tracking-widest text-white/40">
            <div>
              <p className="text-blue-500 mb-4">CONTACT</p>
              <a href="mailto:tamimislam2653@gmail.com" className="block hover:text-white transition-colors">
                Email
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Telegram
              </a>
            </div>

            <div>
              <p className="text-blue-500 mb-4">NAVIGATION</p>
              <a href="#" className="block hover:text-white transition-colors">
                Projects
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                About
              </a>
            </div>

            <div className="col-span-2 pt-10 border-t border-white/10">
              <p className="text-blue-500 mb-2">LOCATION</p>
              <p className="text-white">Dhaka, Bangladesh — 23.8103° N</p>
            </div>
          </div>
        </div>
      </div>

      {/* Magnetic Inquiry CTA */}
      <div className="relative h-[45vh] flex items-center justify-center border-y border-white/5 mt-24">
        <motion.a
          href="mailto:tamimislam2653@gmail.com"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: mx, y: my }}
          className="relative z-10 flex items-center gap-6 text-4xl md:text-7xl font-light group"
        >
          Work with me
          <span className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
            <FiArrowUpRight className="text-3xl md:text-4xl" />
          </span>
        </motion.a>

        {/* Huge background watermark text */}
        <span className="absolute text-[26vw] font-black opacity-[0.025] uppercase pointer-events-none">
          Inquiry
        </span>
      </div>

      {/* Footer Bottom Bar */}
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-8 text-[10px] tracking-[0.35em] font-bold text-white/30">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            SYSTEM ONLINE
          </span>
          <span>© 2026 Tamim Islam</span>
        </div>

        <div className="flex gap-6 text-xl text-white/25">
          {[FiGithub, FiLinkedin, FiInstagram, FiMail].map((Icon, i) => (
            <motion.a
              key={i}
              whileHover={{ y: -6, color: "#3b82f6" }}
              href="#"
              className="transition-colors"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Global CSS for the outline text effect */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.35);
        }
      `}</style>
    </footer>
  );
};

export default Footer;