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
    }, 3500); 
  };

  // NEW: Ornate Floral Frame for the inner text
  const FloralFrame = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isOpened ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: 1.5, duration: 2 }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <svg className="w-[90%] h-[80%] max-w-2xl opacity-60" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="floralGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
        </defs>
        {/* Top-Left Corner Vine */}
        <path d="M40 80 C 40 40, 80 40, 100 20 M40 80 C 20 60, 60 20, 100 20" stroke="url(#floralGold)" strokeWidth="1" />
        <circle cx="100" cy="20" r="2" fill="url(#floralGold)" />
        {/* Bottom-Right Corner Vine */}
        <path d="M360 220 C 360 260, 320 260, 300 280 M360 220 C 380 240, 340 280, 300 280" stroke="url(#floralGold)" strokeWidth="1" />
        <circle cx="300" cy="280" r="2" fill="url(#floralGold)" />
        {/* Decorative accents */}
        <path d="M200 40 Q 200 10 230 10 M200 40 Q 200 10 170 10" stroke="url(#floralGold)" strokeWidth="0.5" />
        <path d="M200 260 Q 200 290 230 290 M200 260 Q 200 290 170 290" stroke="url(#floralGold)" strokeWidth="0.5" />
      </svg>
    </motion.div>
  );

  const CornerFloral = ({ className }: { className?: string }) => (
    <svg className={`absolute w-48 h-48 opacity-40 ${className}`} viewBox="0 0 100 100" fill="none">
      <path d="M10 90 Q10 10 90 10 M20 80 Q20 20 80 20 M30 70 Q30 30 70 30" stroke="#fbbf24" strokeWidth="0.5" />
      <circle cx="90" cy="10" r="2" fill="#fbbf24" />
      <path d="M10 90 C 10 40, 40 10, 90 10 C 60 10, 10 30, 10 90" fill="url(#goldGradientInner)" opacity="0.3" />
      <defs>
        <linearGradient id="goldGradientInner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
    </svg>
  );

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
          {/* 1. CONSTANT RAINING PETALS */}
          <div className="absolute inset-0 pointer-events-none z-[60] overflow-hidden">
            {Array.from({ length: 35 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-4 bg-gradient-to-br from-pink-200 via-rose-400 to-red-500 opacity-60"
                style={{
                  borderRadius: '100% 0% 100% 0%',
                  left: `${(i * 3) % 100}%`,
                  top: `-${Math.random() * 20}%`,
                }}
                animate={{
                  top: '110%',
                  left: [`${(i * 3) % 100}%`, `${((i * 3) % 100) + (i % 2 === 0 ? 15 : -15)}%`],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 7 + Math.random() * 5,
                  delay: Math.random() * 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          {/* 2. REVEAL SECTION WITH FLORAL DECOR */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <FloralFrame />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isOpened ? { opacity: 1, scale: 2.5 } : {}}
              transition={{ delay: 1, duration: 4 }}
              className="absolute w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px]"
            />
            
            <motion.div 
              className="relative z-10 text-center px-6"
              initial={{ opacity: 0 }}
              animate={isOpened ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              {/* Ornate Top Flourish */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isOpened ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.8, duration: 1 }}
                className="mb-2"
              >
                <span className="text-[#fbbf24] text-2xl">❦</span>
              </motion.div>

              <h1 className="font-serif text-5xl md:text-8xl font-black leading-tight">
                <motion.span 
                  className="inline-block bg-gradient-to-b from-white via-yellow-100 to-amber-400 bg-clip-text text-transparent"
                  initial={{ y: 30, opacity: 0 }}
                  animate={isOpened ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 1.2, duration: 1 }}
                >
                  You are
                </motion.span>
                <br />
                <motion.span 
                  className="inline-block bg-gradient-to-b from-[#fff7ed] via-[#ff4444] to-[#d97706] bg-clip-text text-transparent italic"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(255,50,50,0.4))' }}
                  initial={{ y: 30, opacity: 0 }}
                  animate={isOpened ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 1.6, duration: 0.5}}
                >
                  Invited
                </motion.span>
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isOpened ? { opacity: 1 } : {}}
                transition={{ delay: 2.5, duration: 1.5 }}
                className="mt-8 flex flex-col items-center gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#fbbf24]" />
                  <span className="text-[#fbbf24] uppercase tracking-[0.4em] text-xs font-bold">
                    To Celebrate Love
                  </span>
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#fbbf24]" />
                </div>
                {/* Small bottom floral icon */}
                <div className="text-[#fbbf24]/60 text-xl mt-2 rotate-180">❦</div>
              </motion.div>
            </motion.div>
          </div>

          {/* 3. LEFT GATE */}
          <motion.div
            className="absolute left-0 h-screen w-1/2 origin-left bg-gradient-to-br from-[#4c0505] via-[#731111] to-[#2a0202] border-r border-[#fbbf24]/30 z-20 shadow-[30px_0_80px_rgba(0,0,0,0.8)]"
            animate={isOpened ? { rotateY: -115, x: '-10%', filter: 'brightness(0.5)' } : { rotateY: 0 }}
            transition={{ duration: 3, ease: [0.4, 0, 0.2, 1] }}
          >
            <DamaskPattern />
            <CornerFloral className="top-0 left-0" />
            <CornerFloral className="bottom-0 left-0 rotate-[-90deg]" />
          </motion.div>

          {/* 4. RIGHT GATE */}
          <motion.div
            className="absolute right-0 h-screen w-1/2 origin-right bg-gradient-to-bl from-[#4c0505] via-[#731111] to-[#2a0202] border-l border-[#fbbf24]/30 z-30 shadow-[-30px_0_80px_rgba(0,0,0,0.8)]"
            animate={isOpened ? { rotateY: 115, x: '10%', filter: 'brightness(0.5)' } : { rotateY: 0 }}
            transition={{ duration: 3, ease: [0.4, 0, 0.2, 1] }}
          >
            <DamaskPattern />
            <CornerFloral className="top-0 right-0 rotate-90" />
            <CornerFloral className="bottom-0 right-0 rotate-180" />

            {/* THE WAX SEAL */}
            <motion.div 
              className="absolute top-1/2 -left-14 -translate-y-1/2 cursor-pointer z-[70]"
              whileHover={!isOpened ? { scale: 1.05 } : {}}
              onClick={handleOpen}
            >
              <div className="relative group">
                {!isOpened && (
                  <>
                    <motion.div 
                      className="absolute -inset-10 bg-yellow-500/20 blur-3xl rounded-full"
                      animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 4 }}
                    />
                    <motion.div 
                      className="absolute inset-0 rounded-full border border-white/20"
                      animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                      transition={{ repeat: Infinity, duration: 2.5 }}
                    />
                  </>
                )}
                
                <div className="h-28 w-28 rounded-full bg-gradient-to-tr from-[#78350f] via-[#fbbf24] to-[#fef3c7] p-[2px] shadow-2xl">
                  <div className="h-full w-full rounded-full bg-[#450a0a] flex flex-col items-center justify-center border border-[#fbbf24]/30">
                    <span className="font-serif text-2xl font-bold text-[#fbbf24]">S & A</span>
                    <div className="w-8 h-[1px] bg-[#fbbf24]/30 my-1" />
                    <span className="text-[8px] tracking-[0.2em] uppercase font-bold text-yellow-200/70">25 Years</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnvelopeCard;