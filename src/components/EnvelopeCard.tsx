import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface EnvelopeCardProps {
  onComplete: () => void;
}

const Flower = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={`absolute ${className ?? ''}`}
    initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
    animate={{ scale: 1, opacity: 1, rotate: 0 }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="relative h-12 w-12 md:h-16 md:w-16">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-200 via-rose-400 to-rose-700 opacity-85 blur-[1px]" />
      <div className="absolute inset-[18%] rounded-full bg-amber-100 shadow-inner" />
      <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 rotate-12 rounded-full bg-gradient-to-b from-emerald-300 via-emerald-500 to-emerald-700 opacity-80" />
      <div className="absolute left-1/2 top-1/2 h-2 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-900/30" />
    </div>
  </motion.div>
);

const EnvelopeCard = ({ onComplete }: EnvelopeCardProps) => {
  const [step, setStep] = useState(0);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (!isOpened) return;

    const timers = [
      setTimeout(() => setStep(1), 120),
      setTimeout(() => setStep(2), 1400),
      setTimeout(() => setStep(3), 3400),
      setTimeout(() => onComplete(), 5000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [isOpened, onComplete]);

  return (
    <AnimatePresence>
      {step < 3 && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(127,29,29,0.35),_rgba(0,0,0,0.92)_60%)] backdrop-blur-xl perspective-1000"
          exit={{ opacity: 0, transition: { duration: 1.1, ease: 'easeInOut' } }}
        >
          <div className="absolute inset-0 pointer-events-none opacity-80">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_left,_rgba(255,255,255,0.09),_transparent_60%)]" />
            <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_right,_rgba(255,255,255,0.08),_transparent_60%)]" />
          </div>

          <div className="absolute left-4 top-1/2 flex -translate-y-1/2 flex-col gap-4 md:left-10 md:gap-6 pointer-events-none">
            <Flower className="-translate-x-2 md:translate-x-0" delay={0.1} />
            <Flower className="ml-3 md:ml-6" delay={0.25} />
            <Flower className="ml-1 md:ml-3" delay={0.4} />
            <Flower className="ml-5 md:ml-8" delay={0.55} />
          </div>

          <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-4 md:right-10 md:gap-6 items-end pointer-events-none">
            <Flower className="translate-x-2 md:translate-x-0" delay={0.15} />
            <Flower className="mr-3 md:mr-6" delay={0.3} />
            <Flower className="mr-1 md:mr-3" delay={0.45} />
            <Flower className="mr-5 md:mr-8" delay={0.6} />
          </div>

          <motion.div
            className="relative z-10 flex h-full w-full items-center justify-center"
            animate={{ scale: step >= 2 ? (window.innerWidth < 768 ? 1.18 : 1.35) : 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative flex items-center justify-center preserve-3d">
              <div className="absolute inset-[-44px] md:inset-[-72px] rounded-full bg-[radial-gradient(circle,rgba(255,215,130,0.12),transparent_68%)] blur-2xl" />

              <motion.div
                className={`absolute inset-0 flex items-center justify-center preserve-3d ${!isOpened ? 'cursor-pointer' : 'pointer-events-none'}`}
                onClick={() => {
                  if (!isOpened) setIsOpened(true);
                }}
              >
                <motion.div
                  className="absolute left-0 top-1/2 h-[78%] w-[50%] -translate-y-1/2 origin-right overflow-hidden rounded-l-[2rem] border-2 border-brand-gold/70 bg-[linear-gradient(145deg,#5c0000_0%,#891414_35%,#c84a4a_100%)] shadow-[12px_0_38px_rgba(0,0,0,0.45)]"
                  animate={{ rotateY: step >= 1 ? -115 : 0, x: step >= 2 ? -40 : 0 }}
                  transition={{ duration: 1.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_40%)]" />
                  <div className="absolute right-2 top-0 bottom-0 w-12 border-l border-brand-gold/25" />
                  <div className="absolute inset-y-0 right-0 flex w-10 flex-col items-center justify-between py-8">
                    <span className="rotate-90 text-[11px] tracking-[0.45em] text-brand-gold/80 md:text-xs">flower</span>
                    <span className="rotate-90 text-[11px] tracking-[0.45em] text-brand-gold/80 md:text-xs">flower</span>
                  </div>
                  <div className="absolute left-4 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3">
                    <Flower delay={0.2} />
                    <Flower delay={0.35} />
                    <Flower delay={0.5} />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute right-0 top-1/2 h-[78%] w-[50%] -translate-y-1/2 origin-left overflow-hidden rounded-r-[2rem] border-2 border-brand-gold/70 bg-[linear-gradient(215deg,#5c0000_0%,#891414_35%,#c84a4a_100%)] shadow-[-12px_0_38px_rgba(0,0,0,0.45)]"
                  animate={{ rotateY: step >= 1 ? 115 : 0, x: step >= 2 ? 40 : 0 }}
                  transition={{ duration: 1.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_40%)]" />
                  <div className="absolute left-2 top-0 bottom-0 w-12 border-r border-brand-gold/25" />
                  <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3">
                    <Flower delay={0.2} />
                    <Flower delay={0.35} />
                    <Flower delay={0.5} />
                  </div>
                </motion.div>

                <AnimatePresence>
                  {!isOpened && (
                    <motion.div
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="absolute z-40 flex flex-col items-center"
                    >
                      <motion.div
                        className="relative flex h-28 w-28 items-center justify-center rounded-full border-4 border-yellow-100/70 bg-gradient-to-br from-brand-gold via-amber-400 to-yellow-600 shadow-[0_0_35px_rgba(0,0,0,0.55)]"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="absolute inset-2 rounded-full border border-white/40" />
                        <div className="absolute inset-5 rounded-full bg-white/20" />
                        <span className="relative z-10 font-cursive text-2xl font-bold text-[#5a0000]">S & A</span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ repeat: Infinity, duration: 1.6, repeatType: 'reverse' }}
                        className="mt-8 whitespace-nowrap rounded-full border border-white/20 bg-black/45 px-5 py-2 text-[11px] uppercase tracking-[0.35em] text-brand-gold backdrop-blur-sm shadow-lg md:text-xs"
                      >
                        Tap to Open
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                className="absolute z-20 h-[390px] w-[290px] md:h-[470px] md:w-[340px]"
                animate={{
                  y: step >= 2 ? -10 : 24,
                  scale: step >= 2 ? (window.innerWidth < 768 ? 1.28 : 1.45) : 0.9,
                  rotateY: step >= 2 ? 180 : 0,
                  opacity: step >= 3 ? 0 : 1,
                }}
                transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute inset-0 rounded-[1.9rem] border border-white/70 bg-[radial-gradient(circle_at_top,_#fffdf9_0%,_#fff4ef_45%,_#f6dfd7_100%)] shadow-[0_25px_70px_rgba(0,0,0,0.35)]" />
                <div className="absolute inset-3 rounded-[1.5rem] border-[3px] border-brand-gold/55" />

                <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-6 text-center">
                  <div className="absolute inset-x-6 top-6 flex justify-between text-2xl text-brand-red/40">
                    <span>❀</span>
                    <span>❀</span>
                  </div>

                  <div className="absolute left-3 top-10 bottom-10 flex w-12 flex-col items-center justify-between opacity-80">
                    <Flower delay={0.1} />
                    <Flower delay={0.25} />
                    <Flower delay={0.4} />
                  </div>

                  <div className="absolute right-3 top-10 bottom-10 flex w-12 flex-col items-center justify-between opacity-80">
                    <Flower delay={0.15} />
                    <Flower delay={0.3} />
                    <Flower delay={0.45} />
                  </div>

                  <div className="relative z-10 flex flex-col items-center justify-center rounded-full border border-brand-gold/50 bg-white/50 px-6 py-8 shadow-inner backdrop-blur-sm">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/60 bg-brand-gold/10 font-cursive text-2xl text-brand-red">25</div>
                    <h1 className="font-cursive text-3xl leading-tight text-brand-red md:text-4xl">You're Invited</h1>
                    <div className="my-4 h-px w-20 bg-brand-gold/80" />
                    <p className="font-sans text-xs uppercase tracking-[0.28em] text-gray-700">Shikha & Ajay</p>
                    <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.3em] text-gray-500">25th Anniversary</p>
                  </div>

                  <div className="absolute inset-x-10 bottom-5 h-10 rounded-full bg-[radial-gradient(circle,_rgba(255,215,130,0.28),_transparent_70%)] blur-lg" />
                </div>
              </motion.div>
            </div>

            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              {Array.from({ length: 16 }).map((_, index) => (
                <motion.span
                  key={index}
                  className="absolute rounded-full bg-[radial-gradient(circle_at_30%_30%,_#ffd8df_0%,_#ef6b7f_45%,_#8b1b2e_100%)] shadow-[0_0_18px_rgba(255,120,140,0.28)]"
                  style={{
                    width: `${10 + (index % 4) * 3}px`,
                    height: `${14 + (index % 3) * 4}px`,
                    left: `${(index * 7) % 100}%`,
                    top: `-${(index % 6) * 8}%`,
                    opacity: 0.9,
                  }}
                  animate={{
                    y: ['0vh', '115vh'],
                    x: [0, (index % 2 === 0 ? 1 : -1) * (50 + (index % 5) * 14)],
                    rotate: [0, 180 + index * 35],
                    opacity: [0.95, 0.95, 0],
                  }}
                  transition={{
                    duration: 8 + (index % 4),
                    delay: index * 0.35,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnvelopeCard;
