import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20 text-center">
      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="z-10 bg-white/80 backdrop-blur-sm p-8 md:p-12 lg:p-20 rounded-xl shadow-2xl border border-brand-gold/30 max-w-4xl w-full"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-8"
        >
          <span className="font-sans text-brand-gold uppercase tracking-[0.3em] text-sm md:text-base font-semibold">Join us to celebrate</span>
        </motion.div>
        
        <h1 className="font-cursive text-5xl md:text-7xl lg:text-8xl text-brand-red mb-6 leading-tight">
          Shikha & Ajay
        </h1>
        
        <p className="font-cursive text-2xl md:text-3xl text-gray-700 italic mb-8">
          Celebrating 25 Years of Happily Ever After
        </p>

        <div className="flex items-center justify-center gap-4 py-8">
          <div className="h-px bg-brand-gold/50 flex-1 max-w-[100px]"></div>
          <span className="font-sans text-brand-red text-xl whitespace-nowrap px-4 font-light">We are so excited</span>
          <div className="h-px bg-brand-gold/50 flex-1 max-w-[100px]"></div>
        </div>

        <motion.p 
          className="font-sans text-gray-600 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-4"
        >
          To share this beautiful milestone with our closest friends and family. It feels like just yesterday, yet a lifetime of beautiful memories have been made.
        </motion.p>
      </motion.div>

      {/* --- Scroll Down Indicator --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-brand-gold text-[10px] uppercase tracking-widest font-semibold [writing-mode:vertical-lr]">
          Scroll
        </span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-brand-gold/50 rounded-full flex justify-center p-1 backdrop-blur-[2px]"
        >
          <div className="w-1 h-2 bg-brand-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;