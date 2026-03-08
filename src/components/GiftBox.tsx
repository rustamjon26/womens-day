import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Gift, Sparkles, Heart, Flower2 } from "lucide-react";

const messages = [
  "Siz bu kunning eng go‘zal qahramonisiz 💐",
  "Hayotingiz doimo sevgi va baxtga to‘lsin 🎁",
  "Siz eng yaxshi tilaklarga loyiqsiz 💖",
  "8-Mart muborak bo‘lsin, aziz qizlar 🌷",
  "Sizning tabassumingiz dunyoni yoritadi ✨",
  "Qalbingiz bahordek hamisha yosh bo‘lsin ☀️",
  "Siz bor joyda bayram bor, aziz ayol! 🌹",
];

const GiftBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }

    setIsOpen(true);
    setCurrentMessage(messages[Math.floor(Math.random() * messages.length)]);

    // Confetti effect
    const end = Date.now() + 1 * 1000;
    const colors = ["#E11D48", "#FB7185", "#FBBF24", "#FFFFFF"];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-primary font-bold">
          Kutilmagan Sovg‘a
        </h2>

        <div
          className="relative h-64 sm:h-80 flex flex-col items-center justify-center cursor-pointer group"
          onClick={handleOpen}
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="closed"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180, opacity: 0 }}
                whileHover={{ scale: 1.1, y: -10 }}
                transition={{ type: "spring", damping: 12, stiffness: 200 }}
                className="relative z-20"
              >
                <div className="p-8 sm:p-10 bg-gradient-to-br from-primary via-primary to-secondary rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(225,29,72,0.3)] animate-float border-2 border-white/20">
                  <Gift className="w-20 h-20 sm:w-28 sm:h-28 text-white drop-shadow-lg" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6"
                >
                  <Sparkles className="w-10 h-10 sm:w-14 sm:h-14 text-secondary filter drop-shadow(0_0_10px_rgba(251,191,36,0.5))" />
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ opacity: 0, scale: 0.5, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 40 }}
                transition={{ type: "spring", damping: 15, stiffness: 150 }}
                className="glass rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 max-w-sm sm:max-w-md shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] relative z-10 overflow-hidden border border-white/60 bg-gradient-to-br from-white/95 to-primary/5 mx-4"
              >
                <div className="absolute top-0 left-0 w-full h-2 sm:h-3 bg-gradient-to-r from-primary via-secondary to-primary" />

                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", damping: 10, delay: 0.2 }}
                  className="mb-6 sm:mb-8 flex justify-center"
                >
                  <div className="p-4 sm:p-5 bg-primary/10 rounded-full">
                    <Flower2 className="w-12 h-12 sm:w-16 sm:h-16 text-primary animate-pulse" />
                  </div>
                </motion.div>

                <h3 className="text-2xl sm:text-3xl font-serif mb-4 sm:mb-6 text-primary font-bold">
                  Siz uchun sovg‘a!
                </h3>
                <p className="text-lg sm:text-xl italic text-muted-foreground leading-relaxed font-medium">
                  "{currentMessage}"
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="mt-8 sm:mt-10 px-6 sm:px-8 py-3 bg-white border border-primary/20 text-primary rounded-full text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 mx-auto group"
                >
                  Qayta ochish{" "}
                  <Heart className="w-4 h-4 group-hover:fill-primary transition-colors" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="mt-10 sm:mt-12 text-muted-foreground font-bold tracking-wide uppercase text-[10px] sm:text-sm"
          >
            {!isOpen
              ? "Sovg‘ani ochish uchun bosing"
              : "Siz har kuni e’zozga loyiqsiz"}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default GiftBox;
