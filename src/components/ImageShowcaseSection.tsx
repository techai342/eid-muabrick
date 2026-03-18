import { motion } from "motion/react";
import { Stars, Flower } from "./Graphics";

export const ImageShowcaseSection = () => {
  return (
    <section className="relative h-[100dvh] w-full snap-start flex flex-col items-center justify-center px-4 sm:px-6 bg-gradient-to-b from-[#f0eee9] to-[#FAFAF8] overflow-hidden">
      {/* Background Elements */}
      <Stars />
      <Flower className="absolute top-10 left-10 w-32 h-32 opacity-5 -rotate-45" />
      <Flower className="absolute bottom-10 right-10 w-40 h-40 opacity-5 rotate-90" />

      <div className="relative w-full max-w-[360px] sm:max-w-[500px] md:max-w-[800px] h-[65vh] md:h-[75vh] flex items-center justify-center mt-8">
        
        {/* Image 1 (Back/Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -50, y: -20, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2, ease: "easeOut", type: "spring", bounce: 0.5 }}
          className="absolute top-[5%] md:top-[10%] left-[2%] md:left-[10%] w-[60%] md:w-[45%] aspect-[3/4] rounded-[2.5rem] p-3 sm:p-4 bg-white shadow-[0_20px_0_0_rgba(181,168,134,0.3)] border-8 border-white z-10 hover:z-30 hover:rotate-0 hover:scale-105 transition-all duration-500"
        >
          <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
            <img 
              src="https://i.ibb.co/5gKtcFY9/image.webp" 
              alt="Eid Mubarak 1" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Image 2 (Front/Right) */}
        <motion.div 
          initial={{ opacity: 0, x: 50, y: 50, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: 5 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut", type: "spring", bounce: 0.5 }}
          className="absolute bottom-[5%] md:bottom-[10%] right-[2%] md:right-[10%] w-[65%] md:w-[50%] aspect-[3/4] rounded-[2.5rem] p-3 sm:p-4 bg-white shadow-[0_20px_0_0_rgba(217,83,109,0.3)] border-8 border-white z-20 hover:z-30 hover:rotate-0 hover:scale-105 transition-all duration-500"
        >
          <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
            <img 
              src="https://i.ibb.co/r2CQF2GS/image.webp" 
              alt="Eid Mubarak 2" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
