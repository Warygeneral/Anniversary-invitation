import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface EnvelopeCardProps {
  onComplete: () => void;
}

const EnvelopeCard = ({ onComplete }: EnvelopeCardProps) => {
  const [step, setStep] = useState(0); 
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (!isOpened) return;
    
    // Animation sequence
    const timers = [
      setTimeout(() => setStep(1), 100),  // 1: Gates open
      setTimeout(() => setStep(2), 1200), // 2: Card floats forward and flips
      setTimeout(() => setStep(3), 4000), // 3: Start fading out the overlay
      setTimeout(() => onComplete(), 5200),
    ];

    return () => timers.forEach(clearTimeout);
  }, [isOpened, onComplete]);

  return (
    <AnimatePresence>
      {step < 3 && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl perspective-1000 overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
        >
          <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[480px] flex items-center justify-center preserve-3d">
            
            {/* The Card Inside */}
            <motion.div
              className="\bsolute w-[300px] h-[400px] md:w-[350px] md:h-[480px] rounded shadow-2xl preserve-3d flex items-center justify-center pointer-events-none \\"
              animate={{
                scale: step >= 2 ? (window.innerWidth < 768 ? 1.3 : 1.5) : 0.8,
                rotateY: step >= 2 ? 180 : 0,
                z: step >= 2 ? 100 : -100 // bring forward slightly
              }}
              transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* CARD FRONT */}
              <div className="absolute inset-0 backface-hidden bg-brand-off-white flex flex-col items-center justify-center p-6 text-center border-4 border-double border-brand-gold/60 rounded">
                 <div className="w-10 h-10 mb-4 border border-brand-gold rounded-full flex items-center justify-center text-brand-gold font-cursive">25</div>
                 <h1 className="font-cursive text-3xl text-brand-red mb-2 whitespace-nowrap">You're Invited</h1>
                 <div className="w-16 h-px bg-brand-gold mb-4 mx-auto"></div>
                 <p className="font-sans text-xs text-gray-600 uppercase tracking-widest">Shikha & Ajay</p>
                 <p className="font-sans text-[10px] text-gray-400 mt-2">25th Anniversary</p>
              </div>

              {/* CARD BACK (Revealed when it flips) */}
              <div className="absolute inset-0 backface-hidden bg-brand-off-white rotate-y-180 rounded shadow-[0_0_40px_rgba(0,0,0,0.3)] overflow-hidden flex items-center justify-center border-[8px] border-white">
                 <div className="relative w-full h-full flex flex-col items-center justify-center bg-black">
                    <img 
                      src="/WhatsApp Image 2026-05-08 at 12.16.33 AM.jpeg" 
                      alt="Anniversary Design" 
                      className="absolute inset-0 w-full h-full object-contain z-0" 
                    />
                 </div>
              </div>
            </motion.div>

            {/* THE GATES */}
            <div 
              className="\bsolute inset-0 flex items-center justify-center preserve-3d z-30 \\"
              onClick={() => { if (!isOpened) setIsOpened(true); }}
            >
              {/* Left Gate */}
              <motion.div
                className="absolute left-0 top-0 w-1/2 h-full origin-left bg-gradient-to-r from-[#5a0000] to-[#8b0000] border-r-2 border-brand-gold shadow-[10px_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden rounded-l-md"
                animate={{ rotateY: step >= 1 ? -120 : 0 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              >
                 <div className="absolute right-0 top-0 h-full w-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffd700 1px, transparent 1px)', backgroundSize: '15px 15px'}}></div>
                 <h2 className="font-cursive text-brand-gold text-4xl -rotate-90 opacity-60">Shikha</h2>
              </motion.div>

              {/* Right Gate */}
              <motion.div
                className="absolute right-0 top-0 w-1/2 h-full origin-right bg-gradient-to-l from-[#5a0000] to-[#8b0000] border-l-2 border-brand-gold shadow-[-10px_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden rounded-r-md"
                animate={{ rotateY: step >= 1 ? 120 : 0 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              >
                 <div className="absolute left-0 top-0 h-full w-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffd700 1px, transparent 1px)', backgroundSize: '15px 15px'}}></div>
                 <h2 className="font-cursive text-brand-gold text-4xl rotate-90 opacity-60">Ajay</h2>
              </motion.div>

              {/* Central Seal & Call to Action (Disappears on opening) */}
              <AnimatePresence>
                {!isOpened && (
                  <motion.div 
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="absolute z-40 flex flex-col items-center pointer-events-none"
                  >
                    <motion.div 
                      className="w-24 h-24 bg-gradient-to-br from-brand-gold to-yellow-600 rounded-full shadow-[0_5px_25px_rgba(0,0,0,0.8)] flex items-center justify-center border-4 border-yellow-200/60"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-20 h-20 rounded-full border-2 border-yellow-200/50 flex flex-col items-center justify-center">
                        <span className="text-[#5a0000] font-cursive font-bold text-lg leading-tight">S & A</span>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 20 }}
                      transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                      className="mt-8 px-6 py-2 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full text-brand-gold text-xs font-sans tracking-[0.2em] uppercase drop-shadow-md shadow-lg whitespace-nowrap"
                    >
                      Tap to Open
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnvelopeCard;
