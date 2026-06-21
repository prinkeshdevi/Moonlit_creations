import { motion } from "motion/react";
import { Gift, Gem, HeartHandshake, Package, Briefcase, Palette, Star, Sparkles, MapPin, Smile } from "lucide-react";

const services = [
  { icon: Gift, title: "Customized Hampers" },
  { icon: Gem, title: "Wedding Packing" },
  { icon: Package, title: "Luxury Platters" },
  { icon: HeartHandshake, title: "Return Gifts" },
  { icon: Briefcase, title: "Corporate Gifting" },
  { icon: Palette, title: "Handmade Art" },
];

const highlights = [
  { icon: Sparkles, title: "Fully Customized" },
  { icon: HeartHandshake, title: "Handcrafted with Care" },
  { icon: Star, title: "Premium Presentation" },
  { icon: MapPin, title: "Pan India Delivery" },
  { icon: Smile, title: "Personalized Experiences" },
];

export const Services = () => {
  return (
    <section id="services-section" className="pt-24 pb-32 px-4 bg-warm-cream relative overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-0 left-[-10%] w-[30rem] h-[30rem] bg-soft-beige/60 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[25rem] h-[25rem] bg-lavender-pink/5 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col gap-24">
        
        {/* === SECTION 1: Services & Highlights === */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 flex flex-col items-center"
          >
            <span className="text-soft-gold mb-4 block"><Star size={24} strokeWidth={1} /></span>
            <h2 className="text-4xl md:text-5xl font-playfair font-medium text-text-dark mb-4 tracking-tight">
              Crafted For Every Celebration
            </h2>
            <p className="text-lg text-olive-green font-cormorant italic max-w-md mx-auto leading-relaxed px-4">
              Thoughtfully curated gifting experiences designed for life's special moments.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                  className="bg-white/40 hover:bg-white/60 transition-colors duration-500 rounded-2xl p-6 text-center border border-soft-gold/20 flex flex-col items-center justify-center gap-4 group"
                >
                  <Icon strokeWidth={1} className="w-8 h-8 text-dusty-mauve group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-sm font-poppins text-text-dark tracking-wide">
                    {service.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>

          {/* Highlights */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 px-4 bg-white/30 backdrop-blur-sm rounded-3xl py-8 border border-white/50"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon size={14} className="text-sage-green" />
                  <span className="text-xs font-medium tracking-widest uppercase text-text-dark/80">
                    {highlight.title}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>



      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-3 z-30 group cursor-pointer"
        onClick={() => {
          const nextSection = document.getElementById('contact-section');
          if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
          else window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        }}
      >
        <motion.span 
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-extrabold bg-gradient-to-r from-lavender-pink via-dusty-mauve to-lavender-pink bg-clip-text text-transparent drop-shadow-sm"
        >
          Scroll to explore
        </motion.span>
        
        <div className="relative flex items-center justify-center mt-1">
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-lavender-pink rounded-full blur-[2px]"
          />
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white p-3 rounded-full shadow-[0_0_20px_rgba(238,187,204,0.6)] border border-lavender-pink/40 relative z-10 group-hover:bg-lavender-pink/10 transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-dusty-mauve" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

