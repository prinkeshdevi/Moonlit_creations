import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-4 md:px-12 bg-white border-t border-dusty-mauve/10 flex flex-col md:flex-row items-center justify-between gap-4 z-10 shadow-[0_-4px_10px_rgba(0,0,0,0.02)] relative">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-[10px] md:text-xs font-medium text-dusty-mauve text-center">
        <span>MADE WITH LOVE ❤️</span>
        <span className="opacity-30 italic font-serif text-lg hidden md:inline">
          •
        </span>
        <span>AVAILABLE PAN INDIA 🇮🇳</span>
      </div>
      <div className="text-center md:text-right">
        <p className="text-[10px] uppercase tracking-widest font-bold text-soft-gold">
          The Moonlit Creations
        </p>
        <p className="text-[9px] text-text-dark/60 tracking-tight">
          Handcrafted Luxury Gifting Hamper • India
        </p>
      </div>
    </footer>
  );
};
