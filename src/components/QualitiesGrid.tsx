import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Sun, Smile, Crown, Star } from "lucide-react";

const qualities = [
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Mehr",
    desc: "Sizning mehringiz eng oddiy kunni ham go‘zal qiladi.",
    color:
      "bg-primary/5 border-primary/20 hover:bg-primary/10 transition-all duration-300",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-secondary" />,
    title: "Go‘zallik",
    desc: "Sizning ichki va tashqi go‘zalligingiz hayotimizning eng yorqin sahifasi.",
    color:
      "bg-secondary/5 border-secondary/20 hover:bg-secondary/10 transition-all duration-300",
  },
  {
    icon: <Sun className="w-8 h-8 text-primary" />,
    title: "Ilhom",
    desc: "Sizning orzularingiz va ishonchingiz boshqalarga motivatsiya beradi.",
    color:
      "bg-primary/5 border-primary/20 hover:bg-primary/10 transition-all duration-300",
  },
  {
    icon: <Smile className="w-8 h-8 text-secondary" />,
    title: "Nazokat",
    desc: "Sizning nafisligingiz va odobingiz hayotga chiroy qo‘shadi.",
    color:
      "bg-secondary/5 border-secondary/20 hover:bg-secondary/10 transition-all duration-300",
  },
  {
    icon: <Crown className="w-8 h-8 text-primary" />,
    title: "Kuch",
    desc: "Sizning chidamingiz va irodangiz har qanday qiyinchilikdan ustun.",
    color:
      "bg-primary/5 border-primary/20 hover:bg-primary/10 transition-all duration-300",
  },
  {
    icon: <Star className="w-8 h-8 text-secondary" />,
    title: "Qadriyat",
    desc: "Sizning oila va jamiyatdagi o‘rningiz beqiyos va qadrlidir.",
    color:
      "bg-secondary/5 border-secondary/20 hover:bg-secondary/10 transition-all duration-300",
  },
];

const QualitiesGrid: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-20"
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif mb-6 sm:mb-8 text-primary font-bold">
          Nega Siz Maxsus?
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium px-4">
          Har bir ayol bu dunyoni o‘zgacha nur bilan to‘ldiradi. Sizdagi bu
          fazilatlar har doim e’zozlanishga va ardoqlanishga loyiqdir.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {qualities.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -15, scale: 1.02 }}
            className={`glass p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border-2 ${item.color} group relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(225,29,72,0.1)] transition-all duration-500`}
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

            <div className="mb-6 sm:mb-8 p-4 sm:p-5 rounded-2xl bg-white w-fit shadow-xl shadow-black/5 group-hover:scale-110 transition-transform duration-500">
              {item.icon}
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif mb-4 sm:mb-5 text-primary font-bold">
              {item.title}
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QualitiesGrid;
