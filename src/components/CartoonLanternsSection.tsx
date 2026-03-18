import { motion } from "motion/react";
import { Lantern } from "./Graphics";

export const CartoonLanternsSection = () => {
  return (
    <section className="relative h-[100dvh] w-full snap-start flex flex-col items-center justify-center px-4 sm:px-6 bg-[#1a1a2e] overflow-hidden">
      {/* Glowing background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3a1c71] via-[#1a1a2e] to-[#1a1a2e] opacity-80"></div>
      
      {/* Hanging Lanterns */}
      <div className="absolute top-0 left-0 w-full flex justify-around px-2 sm:px-10">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ y: -150 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5, delay: i * 0.15 }}
            className="relative flex flex-col items-center"
          >
            {/* String */}
            <div className="w-1 h-20 sm:h-32 bg-gradient-to-b from-yellow-500/80 to-yellow-200/50 rounded-b-full"></div>
            {/* Lantern */}
            <motion.div
              animate={{ rotate: [-4, 4, -4] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
              className="origin-top text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]"
            >
              <Lantern className="w-16 h-32 sm:w-20 sm:h-40" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="relative z-10 text-center mt-40 sm:mt-32 bg-white/10 backdrop-blur-md p-8 sm:p-12 rounded-[3rem] border-4 border-white/20 shadow-[0_0_50px_rgba(250,204,21,0.1)]"
      >
        <h2 className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 to-yellow-500 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-6" style={{ WebkitTextStroke: '1px rgba(250,204,21,0.5)' }}>
          Shine Bright
        </h2>
        <p className="text-xl sm:text-2xl text-yellow-50 font-bold max-w-md mx-auto drop-shadow-md">
          May the magic of this Eid bring endless blessings and light to your life! 🌟
        </p>
      </motion.div>
    </section>
  );
};
