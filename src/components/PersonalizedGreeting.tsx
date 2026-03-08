import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Heart, Sparkles, Send, RefreshCcw } from "lucide-react";

const PersonalizedGreeting: React.FC = () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Iltimos, ismingizni kiriting 🌸");
      return;
    }
    setError("");
    setSubmittedName(name);
  };

  const reset = () => {
    setSubmittedName("");
    setName("");
  };

  return (
    <div
      id="greeting"
      className="w-full max-w-4xl mx-auto px-4 py-24 min-h-[700px] flex flex-col items-center justify-center"
    >
      <AnimatePresence mode="wait">
        {!submittedName ? (
          <motion.div
            key="input-form"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="w-full max-w-lg glass p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden text-center border border-white/40"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary" />

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mb-10 inline-flex p-6 rounded-full bg-primary/5 text-primary"
            >
              <User className="w-12 h-12" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-primary font-bold">
              Shaxsiy Tabrik
            </h2>
            <p className="text-muted-foreground mb-10 text-lg font-medium">
              Ismingizni kiriting va o‘zingiz uchun maxsus tayyorlangan tabrikni
              qabul qiling 🌷
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative group">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (error) setError("");
                  }}
                  autoFocus
                  placeholder="Ismingizni kiriting..."
                  className={`w-full px-8 py-5 rounded-3xl glass border-2 transition-all duration-300 focus:outline-none focus:ring-8 focus:ring-primary/10 text-xl font-medium ${
                    error
                      ? "border-destructive/50 bg-destructive/5 animate-shake"
                      : "border-primary/20 group-hover:border-primary/40"
                  }`}
                />
                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -bottom-8 left-6 text-sm text-destructive font-bold flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3" /> {error}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-primary text-white rounded-3xl font-bold text-xl shadow-2xl shadow-primary/20 hover:brightness-110 active:brightness-90 transition-all flex items-center justify-center gap-3 group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative z-10">Tabrikni ko‘rish</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
              </motion.button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="greeting-card"
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="w-full max-w-2xl glass p-10 md:p-20 rounded-[4rem] shadow-[0_32px_64px_-16px_rgba(225,29,72,0.2)] relative overflow-hidden text-center border-2 border-white/60 bg-gradient-to-br from-white/80 to-primary/5"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="absolute -top-20 -right-20 opacity-10 pointer-events-none"
            >
              <Heart className="w-64 h-64 text-primary fill-primary" />
            </motion.div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="inline-flex gap-3 mb-10">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Sparkles className="w-10 h-10 text-secondary" />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
                  >
                    <Heart className="w-10 h-10 text-primary fill-primary/20" />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
                  >
                    <Sparkles className="w-10 h-10 text-secondary" />
                  </motion.div>
                </div>

                <h3 className="text-5xl md:text-7xl font-serif mb-10 text-primary leading-tight font-bold">
                  Aziz{" "}
                  <span className="text-gradient drop-shadow-sm">
                    {submittedName}
                  </span>
                  , <br />
                  8-Mart muborak!
                </h3>

                <p className="text-xl md:text-3xl italic text-muted-foreground font-medium leading-relaxed mb-16 px-4">
                  "Sizni Xalqaro xotin-qizlar kuni bilan chin qalbdan
                  tabriklaymiz! 🌷 Sizga bahordek beg‘uborlik, go‘zal baxt,
                  so‘nmas quvonch va doimo go‘zallik tilaymiz. Hayotingiz faqat
                  quvonchli lahzalarga to‘la bo‘lsin."
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={reset}
                  className="px-12 py-5 border-2 border-primary/20 text-primary rounded-full font-bold text-lg hover:bg-primary/5 transition-all flex items-center gap-3 mx-auto group shadow-lg"
                >
                  <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
                  Yana boshqa ism kiritish
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PersonalizedGreeting;
