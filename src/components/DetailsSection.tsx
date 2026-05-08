import { motion } from 'framer-motion';

const DetailsSection = () => {
  return (
    <section className="relative py-24 bg-white/50 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        
        {/* Date and Time */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center md:items-end text-center md:text-right border-b md:border-b-0 md:border-r border-brand-gold/30 pb-12 md:pb-0 md:pr-24"
        >
          <span className="font-sans text-brand-gold uppercase tracking-[0.2em] text-sm font-semibold mb-6 block">When</span>
          <h3 className="font-cursive text-4xl md:text-5xl text-brand-red mb-4">Wednesday</h3>
          <p className="font-sans text-2xl text-gray-800 mb-2 font-light">May 13th, 2026</p>
          <p className="font-sans text-lg text-gray-500 uppercase tracking-widest mt-6">6:00 PM Onwards</p>
        </motion.div>

        {/* Venue */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center md:items-start text-center md:text-left pt-0 md:pl-0"
        >
          <span className="font-sans text-brand-gold uppercase tracking-[0.2em] text-sm font-semibold mb-6 block">Where</span>
          <h3 className="font-cursive text-4xl text-brand-red mb-4">The Grand Hotel</h3>
          <p className="font-sans text-xl text-gray-800 mb-2 font-light">Crystal Ballroom</p>
          <p className="font-sans text-md text-gray-600 mt-2">123 Anniversary Lane</p>
          <p className="font-sans text-md text-gray-600">Celebration City, NY 10001</p>

          <a 
            href="#" 
            className="mt-8 inline-block px-8 py-3 border border-brand-red text-brand-red font-sans uppercase tracking-widest text-sm hover:bg-brand-red hover:text-white transition-colors duration-300"
          >
            View Map
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default DetailsSection;