import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { Flower } from "./Graphics";

export const MessageSection = () => {
  return (
    <section className="relative h-[100dvh] w-full snap-start flex flex-col items-center justify-center px-6 bg-gradient-to-b from-[#FAFAF8] to-[#f0eee9]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md bg-white/80 border border-[#b5a886]/20 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-[#b5a886]/10 backdrop-blur-md text-center relative overflow-hidden"
      >
        {/* Decorative background elements in card */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#d9536d] to-[#a32a45]"></div>
        <Flower className="absolute -top-10 -right-10 w-32 h-32 opacity-10 rotate-45" />
        <Flower className="absolute -bottom-10 -left-10 w-32 h-32 opacity-10 -rotate-45" />

        <div className="relative z-10">
          <h3 className="font-cursive text-5xl sm:text-6xl text-[#1a1a1a] mb-6">
            Eid Mubarak
          </h3>
          
          <p className="text-lg sm:text-xl text-[#4a4a4a] font-light leading-relaxed mb-10">
            May the divine blessings of Allah bring you hope, faith, and joy on this special day and forever. Wishing you and your family a beautiful Eid!
          </p>
          
          <div className="pt-6 border-t border-[#b5a886]/30 flex flex-col items-center">
            <span className="text-sm text-[#8a7f6b] uppercase tracking-widest mb-2">Warm Wishes From</span>
            <span className="font-sans text-xl sm:text-2xl font-medium tracking-wide flex items-center gap-2 text-[#a32a45] text-center">
              Pak Namet Kahad Restaurant <Heart className="w-5 h-5 text-[#d9536d] fill-[#d9536d] animate-pulse shrink-0" />
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
