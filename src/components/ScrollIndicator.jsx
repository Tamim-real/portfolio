import { motion } from 'framer-motion';

const ScrollIndicator = ({ label = "Scroll Down" }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ delay: 0.5 }}
      className="absolute -translate-x-1/2 cursor-pointer -bottom-8 left-1/2 group z-20"
    >
      <div className="flex flex-col items-center gap-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 group-hover:text-cyan-400 transition-colors">
          {label}
        </span>
        <div className="relative w-px h-12 overflow-hidden bg-gradient-to-b from-slate-700 to-transparent">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
