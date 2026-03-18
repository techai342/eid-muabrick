import { motion } from "motion/react";

export const Moon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="mandala-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M20 0 C25 10 35 15 40 20 C35 25 25 30 20 40 C15 30 5 25 0 20 C5 15 15 10 20 0 Z" fill="none" stroke="#b5a886" strokeWidth="0.5" opacity="0.5"/>
        <circle cx="20" cy="20" r="12" fill="none" stroke="#b5a886" strokeWidth="0.5" opacity="0.5"/>
        <circle cx="20" cy="20" r="6" fill="none" stroke="#b5a886" strokeWidth="0.5" opacity="0.5"/>
        <circle cx="20" cy="20" r="1.5" fill="#b5a886" opacity="0.5"/>
      </pattern>
      <mask id="crescent-mask">
        <path d="M100 10 A90 90 0 1 1 10 100 A70 70 0 1 0 100 10 Z" fill="white" />
      </mask>
    </defs>
    <path d="M100 10 A90 90 0 1 1 10 100 A70 70 0 1 0 100 10 Z" fill="#f8f5f0" />
    <rect x="0" y="0" width="200" height="200" fill="url(#mandala-pattern)" mask="url(#crescent-mask)" />
    <path d="M100 10 A90 90 0 1 1 10 100 A70 70 0 1 0 100 10 Z" fill="none" stroke="#b5a886" strokeWidth="1" />
  </svg>
);

export const Flower = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="petal-grad" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#f09eb0" />
        <stop offset="40%" stopColor="#d9536d" />
        <stop offset="80%" stopColor="#a32a45" />
        <stop offset="100%" stopColor="#7a1c31" />
      </radialGradient>
      <filter id="watercolor" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="4" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
    <g filter="url(#watercolor)">
      <g fill="url(#petal-grad)" stroke="#8a273a" strokeWidth="0.5">
        <path d="M60 60 C 35 -5, 85 -5, 60 60" transform="rotate(0 60 60)" />
        <path d="M60 60 C 35 -5, 85 -5, 60 60" transform="rotate(72 60 60)" />
        <path d="M60 60 C 35 -5, 85 -5, 60 60" transform="rotate(144 60 60)" />
        <path d="M60 60 C 35 -5, 85 -5, 60 60" transform="rotate(216 60 60)" />
        <path d="M60 60 C 35 -5, 85 -5, 60 60" transform="rotate(288 60 60)" />
      </g>
    </g>
    <circle cx="60" cy="60" r="7" fill="#e6b9c3" />
    <g fill="#fff" opacity="0.8">
      <circle cx="58" cy="58" r="1.5" />
      <circle cx="62" cy="59" r="1" />
      <circle cx="60" cy="62" r="1.2" />
      <circle cx="57" cy="61" r="1" />
      <circle cx="63" cy="57" r="1.3" />
      <circle cx="60" cy="57" r="0.8" />
    </g>
  </svg>
);

export const Lantern = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="0" x2="20" y2="20" stroke="currentColor" strokeWidth="0.5" />
    <path d="M20 16 L21 19 L24 19 L21.5 21 L22.5 24 L20 22 L17.5 24 L18.5 21 L16 19 L19 19 Z" fill="currentColor" />
    <path d="M16 26 C16 22, 24 22, 24 26 L26 30 L14 30 Z" fill="currentColor" opacity="0.6" />
    <rect x="12" y="30" width="16" height="2" rx="1" fill="currentColor" />
    <path d="M14 32 L26 32 L24 55 L16 55 Z" fill="none" stroke="currentColor" strokeWidth="1" />
    <path d="M17 32 L18 55 M23 32 L22 55" stroke="currentColor" strokeWidth="0.5" />
    <path d="M14 43.5 L26 43.5" stroke="currentColor" strokeWidth="0.5" />
    <rect x="13" y="55" width="14" height="2" rx="1" fill="currentColor" />
    <path d="M15 57 L25 57 L22 62 L18 62 Z" fill="currentColor" opacity="0.6" />
    <line x1="20" y1="62" x2="20" y2="75" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="20" cy="76" r="1.5" fill="currentColor" />
  </svg>
);

export const Star = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
  </svg>
);

export const Stars = () => {
  const starPositions = [
    { top: "10%", left: "40%", size: "w-6", delay: 0 },
    { top: "20%", left: "80%", size: "w-4", delay: 0.5 },
    { top: "40%", left: "30%", size: "w-5", delay: 1 },
    { top: "50%", left: "90%", size: "w-8", delay: 1.5 },
    { top: "60%", left: "20%", size: "w-4", delay: 0.2 },
    { top: "70%", left: "60%", size: "w-5", delay: 0.8 },
    { top: "80%", left: "85%", size: "w-6", delay: 1.2 },
    { top: "90%", left: "45%", size: "w-4", delay: 0.6 },
    { top: "30%", left: "10%", size: "w-7", delay: 1.8 },
  ];

  return (
    <>
      {starPositions.map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos.size} text-[#b5a886] z-0`}
          style={{ top: pos.top, left: pos.left }}
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          animate={{ opacity: [0, 0.8, 0.2, 0.8], scale: [0, 1, 0.8, 1], rotate: 0 }}
          transition={{ 
            opacity: { duration: 4, repeat: Infinity, delay: pos.delay, ease: "easeInOut" },
            scale: { duration: 4, repeat: Infinity, delay: pos.delay, ease: "easeInOut" },
            rotate: { duration: 2, delay: pos.delay, ease: "easeOut" }
          }}
        >
          <Star className="w-full h-full" />
        </motion.div>
      ))}
    </>
  );
};
