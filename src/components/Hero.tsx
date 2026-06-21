import { motion } from "motion/react";
import {
  Gift,
  Heart,
  User,
  Instagram,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-20 border-b border-dusty-mauve/10 bg-white/40 backdrop-blur-sm z-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full border-2 border-soft-gold p-1.5 shadow-xl bg-white flex items-center justify-center overflow-hidden"
      >
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
          <img
            src="/logo.png"
            alt="The Moonlit Creations Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center max-w-3xl"
      >
        <h2 className="text-soft-gold uppercase tracking-[0.3em] font-semibold text-xs mb-6">
          Crafting Culture, Gifting Elegance
        </h2>
        <p className="max-w-xl text-olive-green italic text-lg leading-relaxed font-cormorant mx-auto mb-16">
          Curating beautiful hampers, platters, wedding packaging and
          personalized gifts that turn every occasion into a cherished memory.
        </p>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 flex flex-col items-center justify-center gap-2 text-lavender-pink drop-shadow-sm"
      >
        <span className="text-xs uppercase tracking-[0.25em] font-bold">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/80 p-2.5 rounded-full shadow-md border border-lavender-pink/30 mt-1"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};
