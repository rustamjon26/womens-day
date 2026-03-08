import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  ArrowUp,
  Flower2,
  Instagram,
  Facebook,
  Share2,
} from "lucide-react";

const FinalSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-t from-primary/10 to-transparent pt-24 pb-12 px-4 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-white/20 backdrop-blur-3xl z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="inline-flex p-4 sm:p-6 rounded-full bg-primary/10 text-primary mb-6 sm:mb-10 shadow-2xl animate-float">
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 fill-primary" />
          </div>

          <h2 className="text-3xl sm:text-6xl md:text-8xl font-serif mb-6 sm:mb-10 text-primary drop-shadow-lg px-2">
            8-Mart muborak bo‘lsin!
          </h2>

          <p className="text-lg sm:text-xl md:text-3xl italic text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-10 sm:mb-16 px-4">
            "Har doim yuzingizdan tabassum arimasin, qalbingizda baxt va ishonch
            bo‘lsin. Sizlar doimo e’tibor, hurmat va eng go‘zal tilaklarga
            loyiqsiz."
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <button
              onClick={() =>
                document
                  .getElementById("greeting")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-primary text-white rounded-full font-bold text-lg sm:text-xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 group"
            >
              Yana tabrik ko‘rish{" "}
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
            <button
              onClick={scrollToTop}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white glass border border-primary/20 text-primary rounded-full font-bold text-lg sm:text-xl hover:bg-primary/5 transition-all flex items-center justify-center gap-3 group"
            >
              Boshiga qaytish{" "}
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="border-t border-primary/10 pt-12 sm:pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3 sm:gap-4 text-primary group">
            <div className="p-2 bg-primary/5 rounded-xl group-hover:rotate-12 transition-transform">
              <Flower2 className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <span className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
              8-Mart Delight
            </span>
          </div>

          <p className="text-muted-foreground font-bold text-center max-w-md leading-relaxed text-sm sm:text-base px-4">
            Bahor, go‘zallik va cheksiz mehr bayrami barchangizga muborak
            bo‘lsin 🌷
          </p>

          <div className="flex items-center gap-4 sm:gap-6">
            <motion.a
              whileHover={{ y: -5 }}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors shadow-sm"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors shadow-sm"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.button
              whileHover={{ y: -5 }}
              className="p-3 sm:p-4 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors shadow-sm"
            >
              <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 text-center text-[10px] sm:text-sm font-bold text-muted-foreground/50 tracking-widest uppercase px-4">
          © {new Date().getFullYear()} Women's Day Celebration. Mehr bilan
          yaratilgan.
        </div>
      </div>
    </footer>
  );
};

export default FinalSection;
