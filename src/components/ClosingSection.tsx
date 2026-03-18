import { motion } from "motion/react";
import { Stars } from "./Graphics";

export const ClosingSection = () => {
  return (
    <section className="relative h-[100dvh] w-full snap-start flex flex-col items-center justify-center px-4 sm:px-6 bg-[#e2e8f0] overflow-hidden">
      <Stars />

      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px] rounded-full bg-[#cbd5e1] flex items-center justify-center z-10"
        style={{
          boxShadow: "0 0 80px 20px rgba(255, 215, 0, 0.15), inset 0 0 30px rgba(255,255,255,0.8)",
          border: "2px solid rgba(255,255,255,0.6)"
        }}
      >
        {/* SVG Floral Crescent */}
        <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full drop-shadow-2xl pointer-events-none z-0">
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF7D6" />
              <stop offset="50%" stopColor="#E8C872" />
              <stop offset="100%" stopColor="#AA7C11" />
            </linearGradient>
            <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8bbd0" />
              <stop offset="50%" stopColor="#ec407a" />
              <stop offset="100%" stopColor="#ad1457" />
            </linearGradient>
            <linearGradient id="darkRoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f48fb1" />
              <stop offset="100%" stopColor="#880e4f" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Base Crescent */}
          <path d="M 200 20 C 80 20, 20 100, 20 200 C 20 300, 80 380, 200 380 C 120 350, 70 280, 70 200 C 70 120, 120 50, 200 20 Z" fill="url(#goldGrad)" opacity="0.6" />

          {/* Gold Leaves */}
          <g fill="url(#goldGrad)">
            {/* Top */}
            <path d="M 160 50 Q 200 20 230 40 Q 190 60 160 50" />
            <path d="M 140 70 Q 180 30 210 60 Q 170 80 140 70" />
            {/* Upper Mid */}
            <path d="M 90 110 Q 130 70 160 90 Q 120 120 90 110" />
            <path d="M 70 140 Q 110 100 140 120 Q 100 150 70 140" />
            {/* Lower Mid */}
            <path d="M 70 260 Q 110 300 140 280 Q 100 250 70 260" />
            <path d="M 90 290 Q 130 330 160 310 Q 120 280 90 290" />
            {/* Bottom */}
            <path d="M 140 330 Q 180 370 210 340 Q 170 320 140 330" />
            <path d="M 160 350 Q 200 380 230 360 Q 190 340 160 350" />
          </g>

          {/* Roses */}
          <g>
            {/* Top Rose */}
            <circle cx="150" cy="70" r="22" fill="url(#roseGrad)" />
            <circle cx="147" cy="67" r="14" fill="url(#darkRoseGrad)" />
            <path d="M 135 65 Q 150 50 165 65 Q 150 80 135 65" fill="#fff" opacity="0.3" />

            {/* Upper Mid Rose */}
            <circle cx="90" cy="130" r="28" fill="url(#roseGrad)" />
            <circle cx="86" cy="126" r="18" fill="url(#darkRoseGrad)" />
            <path d="M 70 120 Q 90 100 110 120 Q 90 140 70 120" fill="#fff" opacity="0.3" />

            {/* Center Large Gold/Bronze Rose */}
            <circle cx="60" cy="200" r="35" fill="url(#goldGrad)" />
            <circle cx="55" cy="195" r="22" fill="#AA7C11" opacity="0.6" />
            <path d="M 35 190 Q 60 165 85 190 Q 60 215 35 190" fill="#FFF7D6" opacity="0.5" />

            {/* Lower Mid Rose */}
            <circle cx="90" cy="270" r="30" fill="url(#roseGrad)" />
            <circle cx="85" cy="265" r="20" fill="url(#darkRoseGrad)" />
            <path d="M 70 260 Q 90 240 110 260 Q 90 280 70 260" fill="#fff" opacity="0.3" />

            {/* Bottom Rose */}
            <circle cx="150" cy="330" r="24" fill="url(#roseGrad)" />
            <circle cx="146" cy="326" r="15" fill="url(#darkRoseGrad)" />
            <path d="M 135 320 Q 150 305 165 320 Q 150 335 135 320" fill="#fff" opacity="0.3" />
            
            {/* Extra small roses */}
            <circle cx="120" cy="100" r="12" fill="url(#darkRoseGrad)" />
            <circle cx="120" cy="300" r="14" fill="url(#darkRoseGrad)" />
            <circle cx="60" cy="160" r="10" fill="url(#roseGrad)" />
            <circle cx="60" cy="240" r="12" fill="url(#roseGrad)" />
          </g>

          {/* Hearts */}
          <g fill="#d9536d">
            <path d="M 180 90 A 8 8 0 0 1 196 90 A 8 8 0 0 1 196 106 L 188 114 L 180 106 A 8 8 0 0 1 180 90 Z" transform="rotate(15 188 102)" />
            <path d="M 100 170 A 6 6 0 0 1 112 170 A 6 6 0 0 1 112 182 L 106 188 L 100 182 A 6 6 0 0 1 100 170 Z" transform="rotate(-20 106 179)" />
            <path d="M 100 220 A 7 7 0 0 1 114 220 A 7 7 0 0 1 114 234 L 107 241 L 100 234 A 7 7 0 0 1 100 220 Z" transform="rotate(25 107 230)" />
            <path d="M 180 300 A 8 8 0 0 1 196 300 A 8 8 0 0 1 196 316 L 188 324 L 180 316 A 8 8 0 0 1 180 300 Z" transform="rotate(-15 188 312)" />
          </g>

          {/* Glowing Dots */}
          <g fill="#fff" filter="url(#glow)">
            <circle cx="130" cy="40" r="3" />
            <circle cx="200" cy="70" r="2.5" />
            <circle cx="80" cy="100" r="3" />
            <circle cx="40" cy="150" r="2" />
            <circle cx="30" cy="250" r="3" />
            <circle cx="70" cy="310" r="2.5" />
            <circle cx="140" cy="360" r="3" />
            <circle cx="210" cy="330" r="2" />
          </g>
        </svg>

        {/* Gold Text */}
        <div className="relative z-10 flex flex-col items-center justify-center pl-12 sm:pl-16 mt-2 sm:mt-4" style={{ filter: "drop-shadow(2px 4px 4px rgba(0,0,0,0.25))" }}>
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold leading-none" 
            style={{
              fontFamily: "'Alex Brush', cursive",
              background: "linear-gradient(180deg, #FFF7D6 0%, #E8C872 40%, #AA7C11 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Eid
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold leading-none -mt-2 sm:-mt-4" 
            style={{
              fontFamily: "'Alex Brush', cursive",
              background: "linear-gradient(180deg, #FFF7D6 0%, #E8C872 40%, #AA7C11 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Mubarak
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-4 text-center" 
            style={{
              fontFamily: "'Alex Brush', cursive",
              background: "linear-gradient(180deg, #FFF7D6 0%, #E8C872 40%, #AA7C11 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            from Horam and family
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};
