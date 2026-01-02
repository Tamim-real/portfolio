import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FooterScrollTopIcon from '../../../../components/ui/FooterScrollTopIcon';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaHeart, FaCode, FaRocket, FaFacebook } from 'react-icons/fa';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: FaGithub, 
      url: 'https://github.com/Tamim-real',
      color: 'hover:text-gray-400'
    },
    { 
      name: 'LinkedIn', 
      icon: FaLinkedin, 
      url: 'https://www.linkedin.com/in/tamim-islaam/',
      color: 'hover:text-blue-400'
    },
    // { 
    //   name: 'YouTube', 
    //   icon: FaYoutube, 
    //   url: 'https://youtube.com/@codewithramuu',
    //   color: 'hover:text-red-500'
    // },
    { 
      name: 'Email', 
      icon: FaEnvelope, 
      url: 'mailto:tamimislam@gmail.com',
      color: 'hover:text-primary'
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/remembering.Tamim/",
      color: "hover:text-blue-600"
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    // { name: 'Expertise', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    // { name: 'Blog', href: '#blog' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Scroll-to-top button state
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="relative overflow-hidden border-t bg-dark border-darkLight">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 rounded-full left-1/4 w-96 h-96 bg-primary/20 filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 rounded-full right-1/4 w-96 h-96 bg-secondary/20 filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <motion.div 
        className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary">
                <FaCode className="text-xl text-white" />
              </div>
              <h3 className="text-3xl font-extrabold text-white">TAMIM ISLAM</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              MERN Stack Developer focused on designing and deploying scalable, performant, and user-centric web applications.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FaRocket className="text-primary" />
              <span>Building the future, one line at a time</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-primary group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <HiMail className="text-lg text-primary" />
                <a href="mailto:ahramu584@gmail.com" className="transition-colors hover:text-primary">
                  tamimislam2653@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <HiLocationMarker className="text-lg text-primary" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <HiPhone className="text-lg text-primary" />
                <span>Open to work</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
            <p className="mb-4 text-sm text-gray-400">
              Let's build something amazing together!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-darkLight rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 mt-8 border-t border-darkLight"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="flex items-center gap-2 text-sm text-gray-400">
              © {currentYear} Tamim Islam. Made with
              <FaHeart className="text-red-500 animate-pulse" />
              and
              <FaCode className="text-primary" />
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 transition-colors hover:text-primary">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 transition-colors hover:text-primary">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>

        {/* Scroll to Top Button - only show when scrolled down */}
        {showScroll && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed z-50 flex items-center justify-center w-16 h-16 p-0 transition-all duration-300 bg-transparent rounded-full shadow-lg bottom-8 right-8 hover:shadow-primary/50 group"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.5 }}
            aria-label="Scroll to top"
          >
            <FooterScrollTopIcon />
          </motion.button>
        )}
      </motion.div>
    </footer>
  );
};

export default Footer;
