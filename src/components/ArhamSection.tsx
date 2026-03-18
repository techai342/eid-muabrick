import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { Stars, Flower } from "./Graphics";

export const ArhamSection = () => {
  return (
    <section className="relative h-[100dvh] w-full snap-start flex flex-col items-center justify-center px-4 sm:px-6 bg-gradient-to-b from-[#f0eee9] to-[#FAFAF8] overflow-hidden">
      <Stars />
      <Flower className="absolute top-10 right-10 w-24 h-24 opacity-10 rotate-12" />
      <Flower className="absolute bottom-10 left-10 w-32 h-32 opacity-10 -rotate-45" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex flex-col items-center z-10 w-full max-w-md sm:max-w-lg"
      >
        {/* Image Container with beautiful styling */}
        <div className="relative w-full aspect-square rounded-[2.5rem] p-3 sm:p-4 bg-white/60 backdrop-blur-md shadow-2xl shadow-[#b5a886]/40 border border-[#b5a886]/30 mb-8 sm:mb-10 group">
          {/* Glowing backdrop */}
          <div className="absolute inset-0 rounded-[2.5rem] shadow-[0_0_50px_rgba(181,168,134,0.4)] -z-10 group-hover:shadow-[0_0_70px_rgba(181,168,134,0.6)] transition-shadow duration-500"></div>
          
          <div className="w-full h-full rounded-[2rem] overflow-hidden relative border-4 border-white">
            <img 
              src="https://i.ibb.co/MDRwXnfT/image.webp" 
              alt="Eid Mubarak from Muhammad Arham" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            {/* Subtle overlay gradient for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Text Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="text-center bg-white px-8 sm:px-12 py-5 sm:py-6 rounded-full border border-[#b5a886]/30 shadow-xl shadow-[#b5a886]/20 relative"
        >
          {/* Decorative small stars around the text box */}
          <div className="absolute -top-3 -left-3 text-[#b5a886] animate-pulse">✨</div>
          <div className="absolute -bottom-3 -right-3 text-[#b5a886] animate-pulse delay-300">✨</div>

          <span className="block text-xs sm:text-sm text-[#8a7f6b] uppercase tracking-[0.2em] mb-2 font-medium">
            Special Wishes From
          </span>
          <span className="font-sans text-2xl sm:text-3xl font-bold tracking-wide flex items-center justify-center gap-3 text-[#1a1a1a]">
            Muhammad Arham 
            <Heart className="w-6 h-6 text-[#d9536d] fill-[#d9536d] animate-pulse shrink-0 drop-shadow-md" />
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};
