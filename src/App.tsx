/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { MessageSection } from "./components/MessageSection";
import { ArhamSection } from "./components/ArhamSection";
import { CartoonGreetingSection } from "./components/CartoonGreetingSection";
import { CartoonLanternsSection } from "./components/CartoonLanternsSection";
import { Frame } from "./components/Frame";
import { PrayerSectionArabicUrdu, PrayerSectionEnglish } from "./components/PrayerSections";
import { ImageShowcaseSection } from "./components/ImageShowcaseSection";
import { ClosingSection } from "./components/ClosingSection";

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Auto open envelope after 1.5 seconds
    const timer = setTimeout(() => {
      setIsEnvelopeOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="h-[100dvh] w-full bg-[#FAFAF8] overflow-y-auto snap-y snap-mandatory no-scrollbar font-sans text-[#1a1a1a] relative">
      <Frame isOpen={isEnvelopeOpen} />
      <HeroSection isVisible={isEnvelopeOpen} />
      <MessageSection />
      <ArhamSection />
      <CartoonGreetingSection />
      <ImageShowcaseSection />
      <CartoonLanternsSection />
      <PrayerSectionArabicUrdu />
      <PrayerSectionEnglish />
      <ClosingSection />
    </div>
  );
}
