import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Moon, Flower, Lantern, Stars } from "./Graphics";

export const HeroSection = ({ isVisible }: { isVisible?: boolean }) => {
  return (
    <section className="relative h-[100dvh] w-full snap-start flex flex-col items-center justify-center px-4">
      <div className="relative w-[90%] max-w-[350px] md:max-w-[500px] aspect-[4/5] flex items-center justify-center">
        
        {/* Moon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -15 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute top-0 left-0 w-[80%] h-[80%]"
        >
          <Moon className="w-full h-full drop-shadow-md" />
        </motion.div>

        {/* Text */}
        <div className="absolute top-[20%] right-[5%] flex flex-col items-center z-20">
          <motion.h1 
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-[#1a1a1a] flex flex-col items-center"
            style={{ fontFamily: "'Alex Brush', cursive" }}
          >
            <span className="text-6xl sm:text-7xl md:text-9xl ml-[-10px] sm:ml-[-20px]">Eid</span>
            <span className="text-6xl sm:text-7xl md:text-9xl mt-[-10px] md:mt-[-20px]">Mubarak</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.5, type: "spring" }}
            className="mt-4 sm:mt-6 bg-gradient-to-r from-[#d9536d] to-[#a32a45] text-white px-6 sm:px-8 py-2 rounded-full text-lg sm:text-xl md:text-2xl tracking-[0.3em] font-light shadow-xl shadow-pink-900/20"
          >
            2026
          </motion.div>
        </div>

        {/* Flower */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -90 }}
          animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -90 }}
          transition={{ duration: 1.2, delay: 1.2, type: "spring", bounce: 0.5 }}
          className="absolute bottom-[20%] left-[5%] w-[40%] z-30"
        >
          <Flower className="w-full h-full drop-shadow-2xl" />
        </motion.div>

        {/* Lanterns */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-[-10%] left-[30%] w-[10%] sm:w-[8%] text-[#b5a886]"
        >
          <motion.div animate={{ rotate: [-3, 3, -3] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} style={{ transformOrigin: "top center" }}>
            <Lantern className="w-full h-auto" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 1, delay: 2.0 }}
          className="absolute bottom-[-20%] left-[50%] w-[12%] sm:w-[10%] text-[#b5a886]"
        >
          <motion.div animate={{ rotate: [4, -4, 4] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} style={{ transformOrigin: "top center" }}>
            <Lantern className="w-full h-auto" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="absolute bottom-[-5%] left-[70%] w-[9%] sm:w-[7%] text-[#b5a886]"
        >
          <motion.div animate={{ rotate: [-2, 2, -2] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }} style={{ transformOrigin: "top center" }}>
            <Lantern className="w-full h-auto" />
          </motion.div>
        </motion.div>

        {/* Stars */}
        <Stars />
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center text-[#8a7f6b]"
      >
        <span className="text-xs sm:text-sm font-light tracking-widest uppercase mb-2">Scroll for message</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};
