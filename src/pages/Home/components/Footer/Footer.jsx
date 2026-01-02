import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaHeart, FaCode, FaRocket, FaGlobe } from 'react-icons/fa';
import { HiMail, HiLocationMarker, HiPhone, HiArrowUp } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const yBg = useTransform(smoothProgress, [0, 1], ["-30%", "0%"]);
  const opacityBg = useTransform(smoothProgress, [0, 0.4, 1], [0.2, 0.6, 1]);
  const scaleGlow = useTransform(smoothProgress, [0, 1], [0.8, 1.2]);

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse parallax for interactive glow
  useAnimationFrame((t) => {
    const rect = footerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = (mouseX.get() - rect.left - rect.width / 2) / 30;
      const y = (mouseY.get() - rect.top - rect.height / 2) / 30;
      footerRef.current.style.setProperty('--mouse-x', `${x}px`);
      footerRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
  });

  const handleMouseMove = (e) => {
    if (footerRef.current) {
      const rect = footerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/Tamim-real', gradient: 'from-gray-600 to-black' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/tamim-islaam/', gradient: 'from-blue-600 to-cyan-600' },
    { name: 'Email', icon: FaEnvelope, url: 'mailto:tamimislam2653@gmail.com', gradient: 'from-purple-600 to-pink-600' },
    { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/remembering.Tamim/', gradient: 'from-blue-700 to-indigo-700' },
  ];

  const navLinks = ['Home', 'Projects', 'About', 'Contact'];

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-black border-t border-white/5"
      style={{
        background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(120, 119, 198, 0.1) 0%, transparent 50%), #000'
      }}
    >
      {/* Dynamic Radial Glow Follows Mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-50"
        style={{
          background: 'radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(120, 80, 255, 0.15), transparent 70%)',
        }}
      />

      {/* Floating Orbs with Parallax */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: yBg, opacity: opacityBg }}>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-600/30 to-transparent rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      </motion.div>

      {/* Scroll Progress Bar - Futuristic */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        style={{ scaleX: smoothProgress, transformOrigin: "left" }}
      >
        <motion.div
          className="absolute right-0 w-32 h-px bg-primary blur-md"
          style={{ scaleX: scaleGlow }}
        />
      </motion.div>

      <motion.div className="relative z-10 px-6 py-24 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Hero Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="flex items-center gap-6">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000" />
                <div className="relative p-5 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl">
                  <FaCode className="text-4xl text-white drop-shadow-2xl" />
                </div>
              </motion.div>

              <div>
                <motion.h3
                  className="text-5xl font-black tracking-tighter bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%"] }}
                  transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                >
                  TAMIM ISLAM
                </motion.h3>
                <p className="text-primary font-bold tracking-wider uppercase text-sm mt-1">
                  Full Stack Visionary
                </p>
              </div>
            </div>

            <p className="text-xl leading-relaxed text-gray-300 max-w-lg">
              Architecting <span className="text-white font-bold">scalable</span>,{' '}
              <span className="text-white font-bold">performant</span>, and{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">visually stunning</span>{' '}
              digital experiences with modern tech.
            </p>

            {/* Social Icons with 3D Hover */}
            <div className="flex gap-5">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -15, rotateY: 180, scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group"
                  >
                    <div className={`absolute -inset-2 bg-gradient-to-r ${social.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition duration-500`} />
                    <div className="relative p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl">
                      <Icon className="text-2xl text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-8"
          >
            <h4 className="text-xl font-bold text-white flex items-center gap-4">
              <span className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
              Navigate
            </h4>
            <ul className="space-y-5">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="group flex items-center gap-3 text-lg text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <motion.span
                      className="w-0 h-px bg-primary group-hover:w-8 transition-all duration-500"
                    />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Card - Premium Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="relative p-10 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl backdrop-blur-2xl shadow-2xl overflow-hidden">
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl" />
              
              <h4 className="relative z-10 text-2xl font-bold text-white mb-10">Let's Build Together</h4>
              
              <div className="relative z-10 space-y-8">
                <motion.a
                  href="mailto:tamimislam2653@gmail.com"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 group"
                >
                  <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/30 border border-primary/20 transition-all">
                    <HiMail className="text-2xl text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Email</p>
                    <p className="text-white font-medium">tamimislam2653@gmail.com</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5"
                >
                  <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20">
                    <HiLocationMarker className="text-2xl text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Based In</p>
                    <p className="text-white font-medium">Dhaka, Bangladesh</p>
                  </div>
                </motion.div>

                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4 text-green-400 font-bold">
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                    </span>
                    <span className="text-lg">Open for collaborations & freelance</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar - Minimal & Elegant */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-sm"
        >
          <p>© {currentYear} <span className="text-white font-semibold">Tamim Islam</span>. Crafted from the future.</p>
          <div className="flex items-center gap-3 font-medium">
            <span>Made with</span>
            <motion.div whileHover={{ scale: 1.4, rotate: 20 }}>
              <FaHeart className="text-red-500" />
            </motion.div>
            <span>&</span>
            <motion.div whileHover={{ rotate: 360 }}>
              <FaRocket className="text-primary" />
            </motion.div>
            <span>in</span>
            <FaGlobe className="text-cyan-400 animate-spin-slow" />
            <span>Bangladesh</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Ultra-Premium Scroll to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-10 right-10 z-50 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-2xl scale-150 opacity-60 group-hover:opacity-90 transition duration-700" />
            <div className="relative w-16 h-16 bg-black/80 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center shadow-2xl">
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <HiArrowUp className="text-2xl text-white" />
              </motion.div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(30px) rotate(-5deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .animate-float { animation: float 20s infinite ease-in-out; }
        .animate-float-reverse { animation: float-reverse 25s infinite ease-in-out; }
        .animate-pulse-slow { animation: pulse-slow 10s infinite ease-in-out; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
      `}</style>
    </footer>
  );
};

export default Footer;