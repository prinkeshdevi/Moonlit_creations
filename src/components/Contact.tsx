import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, Phone, Mail, MapPin, X, Share2, Copy } from "lucide-react";
import QRCode from "react-qr-code";

export const Contact = () => {
  const [showShareModal, setShowShareModal] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://themoonlitcreations.com';

  const handleShareClick = () => {
    setShowShareModal(true);
  };

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'The Moonlit Creations',
        text: 'Check out this Digital Business Card',
        url: shareUrl,
      });
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Link copied to clipboard!');
  };

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:The Moonlit Creations
ORG:The Moonlit Creations
TITLE:Handcrafted Luxury Gifting Hampers
TEL;TYPE=CELL:+919022306452
URL:https://www.instagram.com/the.moonlit_creations/
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'The_Moonlit_Creations.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="pt-24 pb-32 px-4 bg-gradient-to-br from-soft-beige/50 to-warm-cream relative z-10">
      <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-daisy-yellow/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-lavender-pink/20 rounded-full blur-2xl"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="w-8 h-px bg-dusty-mauve"></span>
            <h2 className="text-xs uppercase tracking-widest text-dusty-mauve font-bold">
              Digital Visiting Card
            </h2>
            <span className="w-8 h-px bg-dusty-mauve"></span>
          </div>

          <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-soft-gold p-1 shadow-md bg-white flex items-center justify-center overflow-hidden">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="The Moonlit Creations Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h3 className="text-4xl font-playfair mb-2 text-text-dark">
            The Moonlit Creations
          </h3>
          <p className="text-sm font-nunito text-text-dark/80 mb-6 max-w-2xl mx-auto uppercase tracking-widest">
            Handcrafted Luxury Gifting Hampers
          </p>

          <p className="font-poppins text-sage-green font-medium mb-8 flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5" /> Pan India 🇮🇳
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-semibold text-olive-green mb-8">
            <motion.a
              href="https://www.instagram.com/the.moonlit_creations/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-white px-4 py-3 rounded-full shadow-sm border border-dusty-mauve/10 hover:bg-white/80 transition-colors"
            >
              <Instagram className="w-8 h-8 text-pink-600" />
              Instagram
            </motion.a>

            <motion.a
              href="https://wa.me/919022306452?text=Hey%2C%20I%20would%20Like%20To%20Create%20A%20Hamper"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-white px-4 py-3 rounded-full shadow-sm border border-dusty-mauve/10 hover:bg-white/80 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#25D366]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
              WhatsApp
            </motion.a>

            <motion.a
              href="tel:+919022306452"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-white px-4 py-3 rounded-full shadow-sm border border-dusty-mauve/10 hover:bg-white/80 transition-colors"
            >
              <span className="w-6 h-6 flex items-center justify-center bg-gray-50 rounded-full shadow-sm text-lg">
                📞
              </span>{" "}
              Call Now
            </motion.a>

            <motion.a
              href="upi://pay?pa=poonams1986@okhdfcbank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-white px-4 py-3 rounded-full shadow-sm border border-dusty-mauve/10 hover:bg-white/80 transition-colors"
            >
              <span className="w-6 h-6 flex items-center justify-center bg-gray-50 rounded-full shadow-sm text-lg">
                💳
              </span>{" "}
              Pay Now
            </motion.a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              onClick={handleSaveContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-lavender-pink text-white rounded-full shadow-md hover:bg-dusty-mauve flex items-center justify-center gap-2 text-sm uppercase tracking-wider font-medium transition-colors w-full sm:w-auto"
            >
              📱 Save Contact
            </motion.button>
            <motion.button
              onClick={handleShareClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-lavender-pink text-lavender-pink rounded-full hover:bg-lavender-pink/5 flex items-center justify-center gap-2 text-sm uppercase tracking-wider font-medium transition-colors w-full sm:w-auto"
            >
              📤 Share Card
            </motion.button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showShareModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-text-dark bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-playfair font-semibold text-text-dark mb-2">Share Card</h3>
                <p className="text-sm font-nunito text-text-dark/70">Scan this QR code to view the digital visiting card on another device.</p>
              </div>

              <div className="flex justify-center mb-8 p-4 bg-white rounded-2xl shadow-inner border border-gray-100">
                <QRCode value={shareUrl} size={200} fgColor="#4B4B4B" bgColor="#ffffff" />
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleNativeShare}
                  className="w-full flex items-center justify-center gap-2 bg-lavender-pink text-white py-3 rounded-xl font-medium sm:hidden hover:bg-dusty-mauve transition-colors"
                >
                  <Share2 className="w-4 h-4" /> Share via App
                </button>
                <button
                  onClick={handleCopyLink}
                  className="w-full flex items-center justify-center gap-2 border border-gray-200 text-text-dark py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  <Copy className="w-4 h-4" /> Copy Link
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
