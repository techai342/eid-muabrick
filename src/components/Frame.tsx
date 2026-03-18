import { motion, AnimatePresence } from "motion/react";

export const Frame = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div 
          initial={{ y: 0 }}
          exit={{ y: "-100vh", opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.83, 0, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAFAF8] overflow-hidden"
        >
          {/* Outer Border */}
          <div className="absolute inset-3 sm:inset-5 border-[6px] border-[#9ba4b5] rounded-xl pointer-events-none" />
          
          {/* Top Arch SVG (Envelope Flap) */}
          <div className="absolute top-3 sm:top-5 left-3 sm:left-5 right-3 sm:right-5 h-56 sm:h-72 pointer-events-none">
            <svg viewBox="0 0 1000 400" preserveAspectRatio="none" className="w-full h-full drop-shadow-xl">
               {/* Arch Background */}
               <path 
                 d="M 0 0 L 1000 0 L 1000 120 C 900 120, 850 180, 750 180 C 650 180, 600 280, 500 280 C 400 280, 350 180, 250 180 C 150 180, 100 120, 0 120 Z" 
                 fill="#fce4ec" 
                 stroke="#9ba4b5" 
                 strokeWidth="8" 
               />
               
               {/* Decorative Leaves */}
               <path d="M 80 60 Q 130 30 180 70 Q 130 90 80 60" fill="#81c784" opacity="0.8"/>
               <path d="M 920 60 Q 870 30 820 70 Q 870 90 920 60" fill="#81c784" opacity="0.8"/>
               <path d="M 280 50 Q 330 20 380 60 Q 330 80 280 50" fill="#81c784" opacity="0.8"/>
               <path d="M 720 50 Q 670 20 620 60 Q 670 80 720 50" fill="#81c784" opacity="0.8"/>

               {/* Decorative Flowers (Tulip-like) */}
               <path d="M 130 90 C 110 50, 150 50, 130 90" fill="#ec407a" />
               <path d="M 870 90 C 850 50, 890 50, 870 90" fill="#ec407a" />
               <path d="M 230 140 C 210 100, 250 100, 230 140" fill="#ec407a" />
               <path d="M 770 140 C 750 100, 790 100, 770 140" fill="#ec407a" />
               <path d="M 430 70 C 410 30, 450 30, 430 70" fill="#ec407a" />
               <path d="M 570 70 C 550 30, 590 30, 570 70" fill="#ec407a" />

               {/* Center Moon */}
               <path d="M 500 150 A 35 35 0 1 1 465 185 A 30 30 0 1 0 500 150 Z" fill="#ffd54f" />

               {/* Hanging lines */}
               <line x1="280" y1="180" x2="280" y2="250" stroke="#9ba4b5" strokeWidth="3" />
               <line x1="720" y1="180" x2="720" y2="250" stroke="#9ba4b5" strokeWidth="3" />
               <line x1="380" y1="230" x2="380" y2="290" stroke="#9ba4b5" strokeWidth="2" />
               <line x1="620" y1="230" x2="620" y2="290" stroke="#9ba4b5" strokeWidth="2" />
               <line x1="500" y1="280" x2="500" y2="330" stroke="#9ba4b5" strokeWidth="2" />
               
               {/* Hanging Lanterns */}
               <path d="M 260 250 L 300 250 L 290 300 L 270 300 Z" fill="#b39ddb" />
               <path d="M 680 250 L 720 250 L 710 300 L 690 300 Z" fill="#b39ddb" />
               
               {/* Small Ornaments */}
               <path d="M 370 290 L 390 290 L 385 320 L 375 320 Z" fill="#f48fb1" />
               <path d="M 610 290 L 630 290 L 625 320 L 615 320 Z" fill="#f48fb1" />
               <path d="M 490 330 L 510 330 L 505 360 L 495 360 Z" fill="#9ba4b5" />
               
               {/* Dots */}
               <circle cx="330" cy="120" r="6" fill="#9ba4b5" />
               <circle cx="670" cy="120" r="6" fill="#9ba4b5" />
               <circle cx="500" cy="60" r="8" fill="#b39ddb" />
               <circle cx="200" cy="160" r="5" fill="#f48fb1" />
               <circle cx="800" cy="160" r="5" fill="#f48fb1" />
            </svg>
          </div>

          {/* Envelope Bottom/Side Flaps (Visual) */}
          <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5 top-3 sm:top-5 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="w-full h-full opacity-40">
              {/* Left Flap */}
              <path d="M 0 0 L 500 500 L 0 1000 Z" fill="#e0e0e0" stroke="#9ba4b5" strokeWidth="2" />
              {/* Right Flap */}
              <path d="M 1000 0 L 500 500 L 1000 1000 Z" fill="#e0e0e0" stroke="#9ba4b5" strokeWidth="2" />
              {/* Bottom Flap */}
              <path d="M 0 1000 L 500 500 L 1000 1000 Z" fill="#eeeeee" stroke="#9ba4b5" strokeWidth="4" />
            </svg>
          </div>

          {/* Wax Seal */}
          <motion.div 
            className="relative z-10 flex flex-col items-center mt-20"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[#d9536d] to-[#a32a45] rounded-full flex items-center justify-center text-white shadow-2xl shadow-pink-900/40 border-[4px] border-[#FAFAF8]">
              <div className="w-10 h-10 border-2 border-white/30 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-white/30 rounded-full" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
