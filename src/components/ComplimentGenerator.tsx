import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

const compliments = [
  "Siz bahordek nafis va go‘zalsiz 🌸",
  "Tabassumingiz atrofga nur ulashadi ✨",
  "Siz mehr va go‘zallik timsolisiz 💖",
  "Siz bor joyda kayfiyat ham chiroyli bo‘ladi 🌷",
  "Siz ilhom baxsh etuvchi insonsiz 🌹",
  "Sizning qalbingiz bahordek iliq ☀️",
  "Sizning borligingiz dunyoni go‘zal qiladi ✨",
  "Siz har qanday guldan-da nafosatlisiz 🌺",
  "Sizning mehringiz beqiyosdir 💞",
  "Siz hayotning eng shirin tuhfasisiz 🍭",
  "Sizning samimiyligingiz mo‘jizadek gap 🦄",
  "Siz har doim eng yaxshi tilaklarga loyiqsiz 💝",
];

const ComplimentGenerator: React.FC = () => {
  const [currentCompliment, setCurrentCompliment] = useState(compliments[0]);
  const [count, setCount] = useState(0);

  const generateNew = () => {
    let next;
    do {
      next = compliments[Math.floor(Math.random() * compliments.length)];
    } while (next === currentCompliment);

    setCurrentCompliment(next);
    setCount((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-16 relative overflow-hidden group border border-white/40 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] bg-gradient-to-br from-white/80 to-secondary/5"
      >
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
          <Sparkles className="w-24 h-24 sm:w-32 sm:h-32 text-primary" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-8 sm:mb-12 text-primary font-bold px-2">
          Iliq So‘zlar Ummoni
        </h2>

        <div className="min-h-[120px] sm:min-h-[160px] flex items-center justify-center mb-8 sm:mb-10 px-2 sm:px-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentCompliment}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-lg sm:text-2xl md:text-3xl font-medium leading-relaxed italic text-foreground/80 drop-shadow-sm"
            >
              "{currentCompliment}"
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.button
          onClick={generateNew}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-primary text-white rounded-full font-bold text-base sm:text-lg overflow-hidden transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 active:brightness-90 mx-auto"
        >
          <span className="relative z-10 flex items-center gap-3">
            Yangi kompliment{" "}
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-border-beam opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 sm:mt-10 text-xs sm:text-sm text-muted-foreground font-bold flex items-center justify-center gap-3"
        >
          <div className="p-1.5 sm:p-2 bg-primary/10 rounded-full">
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary fill-primary animate-pulse" />
          </div>
          Bugun {count} ta iliq tilak ochildi
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ComplimentGenerator;
