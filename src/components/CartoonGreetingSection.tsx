import { motion } from "motion/react";
import { Stars } from "./Graphics";

export const CartoonGreetingSection = () => {
  return (
    <section className="relative h-[100dvh] w-full snap-start flex flex-col items-center justify-center px-4 sm:px-6 bg-gradient-to-b from-[#FAFAF8] to-[#ffe6ea] overflow-hidden">
      <Stars />
      
      {/* Floating Cartoon Clouds */}
      <motion.div 
        animate={{ x: [-20, 20, -20], y: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[5%] sm:left-[15%] w-32 sm:w-48 h-12 sm:h-16 bg-white rounded-full opacity-90 shadow-lg"
      >
        <div className="absolute -top-6 left-6 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute -top-8 right-8 w-20 h-20 bg-white rounded-full"></div>
      </motion.div>
      
      <motion.div 
        animate={{ x: [20, -20, 20], y: [5, -5, 5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] right-[5%] sm:right-[15%] w-40 sm:w-56 h-16 sm:h-20 bg-white rounded-full opacity-90 shadow-lg"
      >
        <div className="absolute -top-8 left-8 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute -top-10 right-10 w-24 h-24 bg-white rounded-full"></div>
      </motion.div>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.6, duration: 1 }}
        className="relative z-10 w-full max-w-sm sm:max-w-md bg-white rounded-[3rem] border-[8px] border-white shadow-[0_15px_40px_rgba(217,83,109,0.2),_0_20px_0_0_rgba(217,83,109,0.15)] p-8 sm:p-10 text-center"
      >
        <motion.div 
          animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-16 left-1/2 -translate-x-1/2 text-7xl sm:text-8xl drop-shadow-2xl"
        >
          🌙
        </motion.div>
        
        <h2 className="text-4xl sm:text-5xl font-black text-[#d9536d] mt-6 mb-4 tracking-tight drop-shadow-sm">
          Eid Fun!
        </h2>
        
        <p className="text-lg sm:text-xl text-[#4a4a4a] font-bold mb-8 leading-relaxed">
          Wishing you a day full of laughter, sweet treats, and magical cartoon moments! ✨
        </p>
        
        <div className="flex justify-center gap-4 sm:gap-6">
          {['🍬', '🎁', '🎈'].map((emoji, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -15, scale: 1.1, rotate: i % 2 === 0 ? 15 : -15 }}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f8f5f0] rounded-2xl border-4 border-white shadow-[0_8px_0_0_rgba(181,168,134,0.3)] flex items-center justify-center text-3xl sm:text-4xl cursor-pointer transition-all hover:bg-white hover:shadow-[0_12px_0_0_rgba(217,83,109,0.3)]"
            >
              {emoji}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
