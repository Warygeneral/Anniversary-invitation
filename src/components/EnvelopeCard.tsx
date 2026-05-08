import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type EnvelopeCardProps = {
  onComplete: () => void;
};

const EnvelopeCard: React.FC<EnvelopeCardProps> = ({ onComplete }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isGone, setIsGone] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    setTimeout(() => {
      setIsGone(true);
      onComplete();
    }, 4000); 
  };

  // Complex Floral Corner Filigree
  const CornerFloral = ({ className }: { className?: string }) => (
    <svg className={`absolute w-48 h-48 opacity-40 ${className}`} viewBox="0 0 100 100" fill="none">
      <path d="M10 90 Q10 10 90 10 M20 80 Q20 20 80 20 M30 70 Q30 30 70 30" stroke="#fbbf24" strokeWidth="0.5" />
      <circle cx="90" cy="10" r="2" fill="#fbbf24" />
      <path d="M10 90 C 10 40, 40 10, 90 10 C 60 10, 10 30, 10 90" fill="url(#goldGradient)" opacity="0.3" />
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
    </svg>
  );

  // Repeating Damask Background for the Gates
  const DamaskPattern = () => (
    <div className="absolute inset-0 opacity-[0.12] pointer-events-none" 
      style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c-5 0-9 4-9 9 0 4 3 7 7 8v10h-6c-4 0-7 3-7 7s3 7 7 7h12c4 0 7-3 7-7s-3-7-7-7h-6V22c4-1 7-4 7-8 0-5-4-9-9-9zm0 2c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7z' fill='%23fbbf24' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '120px 120px'
      }} 
    />
  );

  return (
    <AnimatePresence>
      {!isGone && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0a0101]"
          style={{ perspective: '1400px' }}
          exit={{ opacity: 0, transition: { duration: 1.5 } }}
        >
          {/* 1. CONSTANT PETALS (Starts immediately, always running) */}
          <div className="absolute inset-0 pointer-events-none z-[60] overflow-hidden">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-5 bg-gradient-to-br from-pink-200 via-rose-400 to-red-500 opacity-70"
                style={{
                  borderRadius: '100% 0% 100% 0%',
                  left: `${(i * 3.3) % 100}%`,
                  top: `-${20 + (i % 10) * 10}%`,
                  filter: 'blur(0.4px)'
                }}
                animate={{
                  top: '110%',
                  left: [`${(i * 3.3) % 100}%`, `${((i * 3.3) % 100) + (i % 2 === 0 ? 10 : -10)}%`],
                  rotate: [0, 360, 720],
                }}
                transition={{
                  duration: 6 + (i % 6),
                  delay: (i % 15) * 0.4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          {/* 2. REVEAL GLOW & TEXT */}
          <motion.div 
            className="absolute z-0 text-center px-6 pointer-events-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isOpened ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 1.8 }}
          >
            <h1 className="font-serif text-6xl md:text-9xl font-black leading-[1.1] tracking-tight">
              <span 
                className="bg-gradient-to-b from-[#fff7ed] via-[#ff2222] to-[#d97706] bg-clip-text text-transparent"
                style={{
                    filter: `drop-shadow(0 0 15px rgba(255,255,255,0.4)) 
                             drop-shadow(0 0 30px rgba(255,50,50,0.6))`
                }}
              >
                You are
                <br />
                Invited
              </span>
            </h1>
            <motion.div 
              className="h-1 bg-gradient-to-r from-transparent via-[#fbbf24] to-transparent mx-auto mt-10 shadow-[0_0_20px_#fbbf24]"
              initial={{ width: 0 }}
              animate={isOpened ? { width: '80%' } : {}}
              transition={{ delay: 2, duration: 1.5 }}
            />
          </motion.div>

          {/* 3. LEFT GATE */}
          <motion.div
            className="absolute left-0 h-screen w-1/2 origin-left bg-gradient-to-br from-[#5a0505] via-[#831111] to-[#3a0202] border-r border-[#fbbf24]/30 z-20 shadow-[30px_0_80px_rgba(0,0,0,0.9)]"
            animate={isOpened ? { rotateY: -110, x: '-5%', filter: 'brightness(0.6)' } : { rotateY: 0 }}
            transition={{ duration: 2.8, ease: [0.45, 0.05, 0.55, 0.95] }}
          >
            <DamaskPattern />
            <CornerFloral className="top-0 left-0" />
            <CornerFloral className="bottom-0 left-0 rotate-[-90deg]" />
            {/* Inner Border */}
            <div className="absolute inset-8 border border-[#fbbf24]/10 rounded-sm pointer-events-none" />
          </motion.div>

          {/* 4. RIGHT GATE */}
          <motion.div
            className="absolute right-0 h-screen w-1/2 origin-right bg-gradient-to-bl from-[#5a0505] via-[#831111] to-[#3a0202] border-l border-[#fbbf24]/30 z-30 shadow-[-30px_0_80px_rgba(0,0,0,0.9)]"
            animate={isOpened ? { rotateY: 110, x: '5%', filter: 'brightness(0.6)' } : { rotateY: 0 }}
            transition={{ duration: 2.8, ease: [0.45, 0.05, 0.55, 0.95] }}
          >
            <DamaskPattern />
            <CornerFloral className="top-0 right-0 rotate-90" />
            <CornerFloral className="bottom-0 right-0 rotate-180" />
            <div className="absolute inset-8 border border-[#fbbf24]/10 rounded-sm pointer-events-none" />

            {/* THE SEAL */}
            <motion.div 
              className="absolute top-1/2 -left-14 -translate-y-1/2 cursor-pointer z-[70]"
              whileHover={!isOpened ? { scale: 1.1 } : {}}
              onClick={handleOpen}
            >
              <div className="relative group">
                {!isOpened && (
                  <motion.div 
                    className="absolute -inset-8 bg-yellow-500/20 blur-3xl rounded-full"
                    animate={{ opacity: [0, 0.5, 0], scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  />
                )}
                
                {/* Physical Seal Style */}
                <div className="h-28 w-28 rounded-full bg-gradient-to-tr from-[#92400e] via-[#fbbf24] to-[#fde68a] p-1 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
                    <div className="h-full w-full rounded-full bg-[#7c2d12] flex flex-col items-center justify-center border-2 border-[#fbbf24]/40">
                        <span className="font-serif text-3xl font-bold text-[#fbbf24] drop-shadow-md">S & A</span>
                        <div className="w-10 h-[1px] bg-[#fbbf24]/40 my-1" />
                        <span className="text-[10px] tracking-widest uppercase font-bold text-yellow-100/80">25 Years</span>
                    </div>
                </div>

                {!isOpened && (
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-white/30"
                    animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnvelopeCard;