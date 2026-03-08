import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Volume2, VolumeX, Heart, Sparkles } from "lucide-react";

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((err) => console.log("Autoplay blocked", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="absolute bottom-16 sm:bottom-20 right-0 w-max max-w-[calc(100vw-2rem)] bg-white/90 glass p-4 sm:p-5 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl mb-4 border border-primary/20"
          >
            <div className="text-xs sm:text-sm font-bold text-primary flex items-center gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 bg-primary/10 rounded-full shrink-0">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
              </div>
              Yaxshi kayfiyat uchun bayramona musiqani yoqing ✨
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMusic}
        className={`relative p-4 sm:p-5 rounded-full shadow-[0_20px_40px_rgba(225,29,72,0.2)] transition-all duration-500 group overflow-hidden border-2 ${
          isPlaying
            ? "bg-primary text-white border-primary scale-110"
            : "bg-white/80 glass text-primary border-primary/20 hover:bg-white hover:border-primary/40"
        }`}
      >
        <div className="relative z-10">
          {isPlaying ? (
            <Volume2 className="w-6 h-6" />
          ) : (
            <VolumeX className="w-6 h-6" />
          )}
        </div>

        {isPlaying && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 bg-primary/20 blur-xl pointer-events-none"
          />
        )}

        <audio
          ref={audioRef}
          loop
          src="https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=spring-waltz-piano-1100.mp3"
          className="hidden"
        />
      </motion.button>

      {isPlaying && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-1 pointer-events-none">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -20, opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            >
              <Music className="w-3 h-3 text-primary" />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
