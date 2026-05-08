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
          <p className="font-sans text-lg text-gray-500 uppercase tracking-widest mt-6">7:00 PM Onwards</p>
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
          <h3 className="font-cursive text-4xl text-brand-red mb-4">Le OVAL Hotel & Resort</h3>
          <p className="font-sans text-xl text-gray-800 mb-6 font-light">Kuanwala, Dehradun, Uttarakhand</p>
          
          <div className="w-full rounded-lg overflow-hidden shadow-lg mb-6 border border-brand-gold/20">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5648!2d78.0993977!3d30.2438649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092f65b4fc3db5%3A0x3977bc612e593cb7!2sLe%20OVAL%20Hotel%20%26%20Resort!5e0!3m2!1sen!2sin!4v1262835789159" 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <a 
            href="https://www.google.com/maps/place/Le+OVAL+Hotel+%26+Resort/@30.2438649,78.0993977" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-brand-red text-brand-red font-sans uppercase tracking-widest text-sm hover:bg-brand-red hover:text-white transition-colors duration-300"
          >
            View on Maps
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default DetailsSection;