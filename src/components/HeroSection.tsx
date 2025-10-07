import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WaveIcon from './WaveIcon';
import { HERO_IMAGES } from '@/lib/constants';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
  images?: string[];
  height?: string;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  showCTA = true, 
  images = HERO_IMAGES,
  height = "100vh"
}: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  const kenBurnsVariants = [
    { scale: 1, x: 0, y: 0 },
    { scale: 1.1, x: -20, y: -10 },
    { scale: 1.05, x: 10, y: -5 },
  ];

  return (
    <section className={`relative overflow-hidden`} style={{ height }}>
      {/* Background Images with Ken Burns Effect */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            ...kenBurnsVariants[currentImageIndex % kenBurnsVariants.length]
          }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 1 },
            scale: { duration: 7, ease: "easeInOut" },
            x: { duration: 7, ease: "easeInOut" },
            y: { duration: 7, ease: "easeInOut" }
          }}
        >
          <img
            src={images[currentImageIndex]}
            alt="Sea View Haven"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/5 to-transparent" />

      {/* Solid Dark Overlay */}
      <div className="absolute inset-0 bg-black/0" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
          {/* Headline Animation */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-wider uppercase"
            style={{ fontFamily: 'Playfair Display', wordBreak: 'normal', overflowWrap: 'normal' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/*
              Animate by word instead of by letter so words stay intact
              and won't break mid-word across lines.
            */}
            {title.split(' ').map((word, index, arr) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.12
                }}
                className="inline-block mr-2"
              >
                {word}
                {index < arr.length - 1 ? '\u00A0' : ''}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-[#F9F9F9] mb-8 tracking-wide"
            style={{ fontFamily: 'Inter', letterSpacing: '0.05em' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          {showCTA && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#012E40] transition-all duration-300 px-8 py-3 rounded-2xl"
              >
                Explore Your Stay
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C9A86A] to-[#E2C58D] hover:from-[#E2C58D] hover:to-[#C9A86A] text-white px-8 py-3 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A86A]/25 relative overflow-hidden group"
              >
                <span className="relative z-10">Book Now</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                />
              </Button>
            </motion.div>
          )}

          {/* Wave Icon */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <WaveIcon className="w-8 h-8" />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.9 }}
          >
            <motion.div
              className="text-[#C9A86A] text-sm mb-2 tracking-wide"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Scroll ↓
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 text-[#C9A86A]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
