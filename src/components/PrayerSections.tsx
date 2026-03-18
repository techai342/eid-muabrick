import { motion } from "motion/react";
import { Flower } from "./Graphics";

export const PrayerSectionArabicUrdu = () => {
  return (
    <section className="relative h-[100dvh] w-full snap-start flex flex-col items-center justify-center px-4 sm:px-6 bg-gradient-to-b from-[#f0eee9] to-[#FAFAF8]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-3xl bg-white/80 border border-[#b5a886]/20 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-[#b5a886]/10 backdrop-blur-md text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#d9536d] to-[#a32a45]"></div>
        <Flower className="absolute -top-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 opacity-10 rotate-45" />
        <Flower className="absolute -bottom-10 -left-10 w-24 h-24 sm:w-32 sm:h-32 opacity-10 -rotate-45" />

        <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
          <div dir="rtl" className="text-xl sm:text-2xl md:text-3xl text-[#1a1a1a] leading-[1.8] sm:leading-[1.9] font-medium">
            اللَّهُمَّ فِي هَذَا الْعِيدِ الْمُبَارَكِ، أَنْزِلْ رَحْمَتَكَ عَلَى مُؤَسَّسَتِنَا وَجَمِيعِ الْعَامِلِينَ فِيهَا. اللَّهُمَّ وَفِّقْنَا لِاتِّخَاذِ الْقَرَارَاتِ السَّدِيدَةِ، وَارْزُقْنَا الثَّبَاتَ فِي مُوَاجَهَةِ التَّحَدِّيَاتِ، وَامْنَحْنَا الْقُوَّةَ لِلنَّجَاحِ بِكُلِّ أَمَانَةٍ وَإِخْلَاصٍ. نَسْأَلُكَ أَنْ يَكُونَ هَذَا الْعِيدُ بَشِيرَ خَيْرٍ وَفَلَاحٍ لِشَرِكَتِنَا وَجَمِيعِ طَاقَمِنَا. آمِينَ.
          </div>
          
          <div className="w-16 h-px bg-[#b5a886]/30 mx-auto"></div>

          <div dir="rtl" className="text-lg sm:text-xl md:text-2xl text-[#4a4a4a] leading-[1.8] sm:leading-[1.9] font-light">
            یا اللہ! عید کے اس مبارک موقع پر ہمارے ادارے اور اس سے وابستہ تمام لوگوں پر اپنی رحمتیں نازل فرما۔ ہمیں درست فیصلے کرنے کی توفیق دے، مشکلات میں ثابت قدمی عطا فرما، اور ہمیں دیانتداری کے ساتھ ترقی کی منازل طے کرنے کی ہمت دے۔ اللہ کرے کہ یہ عید ہمارے پورے عملے اور کمپنی کے لیے خوشحالی اور کامیابی کا پیغام لائے۔ آمین۔
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export const PrayerSectionEnglish = () => {
  return (
    <section className="relative h-[100dvh] w-full snap-start flex flex-col items-center justify-center px-4 sm:px-6 bg-gradient-to-b from-[#FAFAF8] to-[#f0eee9]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-3xl bg-white/80 border border-[#b5a886]/20 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-[#b5a886]/10 backdrop-blur-md text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#d9536d] to-[#a32a45]"></div>
        <Flower className="absolute -top-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 opacity-10 rotate-45" />
        <Flower className="absolute -bottom-10 -left-10 w-24 h-24 sm:w-32 sm:h-32 opacity-10 -rotate-45" />

        <div className="relative z-10">
          <p className="text-lg sm:text-xl md:text-2xl text-[#4a4a4a] font-light leading-relaxed sm:leading-loose">
            "Ya Allah, on this blessed day of Eid, we ask for Your guidance and blessings for our company and its employees. Grant us the wisdom to make right decisions, the strength to overcome challenges, and the integrity to serve our clients and community with excellence. May this Eid bring prosperity to every member of our organization."
          </p>
        </div>
      </motion.div>
    </section>
  );
};
