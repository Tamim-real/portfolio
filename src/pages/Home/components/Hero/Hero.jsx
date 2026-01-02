"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaDownload, FaArrowRight, FaCode, FaPlay } from "react-icons/fa"
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiJavascript } from "react-icons/si"
import { HiSparkles, HiLightningBolt } from "react-icons/hi"

const heroData = {
  name: "Tamim Islam",
  role: "MERN Stack Developer",
  experience_badge: "Based in Bangladesh",
  description: "“Building scalable, performant full-stack applications with modern technologies.”",
  buttons: {
    primary: { text: "Explore Projects", link: "#projects" },
    secondary: { text: "Download CV (Soon)", link: "/resume.pdf" },
  },
  socials: {
    github: "https://github.com/Tamim-real",
    linkedin: "https://www.linkedin.com/in/tamim-islaam/",
    email: "mailto:tamimislam2653@gmail.com",
    youtube: "https://youtube.com/@codewithramuu",
  },
}

const useTypingEffect = (text, speed = 60) => {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1))
        i++
      } else {
        setIsComplete(true)
        clearInterval(timer)
      }
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed])

  return { displayedText, isComplete }
}

const TechOrb = ({ icon: Icon, color, delay, size = "lg" }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, perspective: 1000 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8, type: "spring" }}
      whileHover={{ scale: 1.2, z: 50 }}
      className="absolute"
    >
      <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${color} shadow-2xl backdrop-blur-xl border border-white/20`}>
        <Icon className={`${size === "lg" ? "w-10 h-10" : "w-8 h-8"} text-white drop-shadow-lg`} />
        <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm" />
      </div>
    </motion.div>
  )
}

const ParticleBackground = () => {
  const particles = Array.from({ length: 30 })
  return (
    <>
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, Math.random() * 1000 - 500],
            y: [0, Math.random() * -800],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: "100%",
          }}
        />
      ))}
    </>
  )
}

const Hero = () => {
  const { displayedText, isComplete } = useTypingEffect("Server running on http://localhost:5000 ✓", 50)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <section
      className="relative w-full min-h-screen flex items-center bg-[#020617] overflow-hidden pt-20 lg:pt-0"
      onMouseMove={handleMouseMove}
    >
      <ParticleBackground />

      {/* Radial Gradient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-cyan-500/20 via-purple-600/10 to-transparent blur-3xl"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-cyan-900/20 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 py-12 mx-auto max-w-7xl lg:px-12">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 backdrop-blur-xl shadow-2xl">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50"
                />
                <span className="text-sm font-bold tracking-widest uppercase text-cyan-300">{heroData.experience_badge}</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]"
            >
              <span className="bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                {heroData.name.split(" ")[0]}
              </span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{ backgroundSize: "200%" }}
              >
                {heroData.name.split(" ")[1]}
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 mb-6 text-2xl font-bold text-slate-200"
            >
              <HiLightningBolt className="text-yellow-400 animate-pulse" />
              <span>{heroData.role}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-lg mb-10 text-lg leading-relaxed text-slate-400"
            >
              {heroData.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-12 lg:justify-start"
            >
              <a
                href={heroData.buttons.primary.link}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-bold text-white shadow-2xl transition-all hover:shadow-cyan-500/50"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {heroData.buttons.primary.text}
                  <FaArrowRight className="transition-transform group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0" />
              </a>

              <a
                href={heroData.buttons.secondary.link}
                className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/50 px-8 py-4 font-bold text-white backdrop-blur-xl transition-all hover:border-slate-600"
              >
                <FaDownload />
                {heroData.buttons.secondary.text}
              </a>
            </motion.div>

            <div className="flex items-center gap-6">
              <span className="text-sm font-bold uppercase tracking-wider text-slate-500">Connect</span>
              <div className="flex gap-4">
                {Object.entries(heroData.socials).map(([key, url], i) => (
                  <motion.a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800/50 backdrop-blur-md border border-slate-700 text-slate-300 transition-all hover:border-cyan-500 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
                  >
                    {key === "github" && <FaGithub className="text-xl" />}
                    {key === "linkedin" && <FaLinkedin className="text-xl" />}
                    {key === "email" && <FaEnvelope className="text-xl" />}
                    {key === "youtube" && <FaYoutube className="text-xl" />}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: 3D Terminal + Orbiting Tech */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center"
          >

            {/* Ambient MERN Orbs (SUBTLE) */}
            <TechOrb
              icon={SiMongodb}
              color="from-green-500 to-emerald-600"
              delay={0.6}
              className="-top-14 -left-16 opacity-40 scale-90"
            />
            <TechOrb
              icon={SiReact}
              color="from-cyan-500 to-blue-600"
              delay={0.9}
              className="-top-16 right-10 opacity-40 scale-90"
            />
            <TechOrb
              icon={SiNodedotjs}
              color="from-green-600 to-lime-700"
              delay={1.2}
              className="bottom-10 -right-14 opacity-40 scale-90"
            />

            {/* TERMINAL */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative w-full max-w-lg rounded-[26px] bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-purple-600/10 p-[1px] shadow-[0_30px_90px_rgba(6,182,212,0.25)]"
            >
              <div className="relative rounded-[24px] bg-black/90 backdrop-blur-xl border border-white/10 overflow-hidden">

                {/* Top Bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/5">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                  </div>

                  <span className="text-[11px] font-mono text-slate-400">
                    tamim@mern-server
                  </span>

                  <span className="text-[10px] font-mono text-cyan-400">
                    PROD
                  </span>
                </div>

                {/* Terminal Body */}
                <div className="p-6 font-mono text-[13px] leading-relaxed text-slate-300 space-y-3">

                  <div className="flex gap-2">
                    <span className="text-green-400">$</span>
                    <span className="text-slate-400">npm run dev</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-cyan-400">
                      {displayedText}
                      {!isComplete && (
                        <span className="ml-1 inline-block h-4 w-[6px] bg-cyan-400 animate-[blink_1s_infinite]" />
                      )}
                    </span>
                  </div>

                  <div className="pt-2 space-y-1">
                    <div className="flex gap-2">
                      <span className="text-yellow-400">&gt;</span>
                      <span className="text-purple-400">MongoDB connected</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-yellow-400">&gt;</span>
                      <span className="text-green-400">Express server listening</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-yellow-400">&gt;</span>
                      <span className="text-cyan-400">React app hydrated</span>
                    </div>
                  </div>

                  {/* Status Pills */}
                  <div className="mt-5 flex flex-wrap gap-2 text-[11px]">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400">
                      API: Online
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-green-400">
                      DB: Connected
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400">
                      ENV: Production
                    </span>
                  </div>

                  {/* Subtle Bottom Glow */}
                  <div className="relative mt-5 h-[1.5px] overflow-hidden bg-white/10 rounded-full">
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .bg-gradient-conic {
          background: conic-gradient(from 0deg, #06b6d4, #8b5cf6, #06b6d4);
        }
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  )
}

export default Hero