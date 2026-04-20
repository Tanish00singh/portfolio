import React from 'react';
import { motion } from 'framer-motion';
import { hubCards } from '../mock.js';
import { BookOpen, Layers, Terminal, ArrowRight } from 'lucide-react';
import { fadeUp, stagger, transitionMed, viewportOnce } from './motion/motionPresets.js';

const iconMap = { blue: BookOpen, purple: Layers, green: Terminal };
const colorMap = {
  blue: { bg: 'bg-sky-500/10', text: 'text-sky-300', ring: 'border-sky-400/30', arrow: 'text-sky-300' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-300', ring: 'border-purple-400/30', arrow: 'text-purple-300' },
  green: { bg: 'bg-emerald-500/10', text: 'text-emerald-300', ring: 'border-emerald-400/30', arrow: 'text-emerald-300' }
};

export default function Hub() {
  return (
    <section id="hub" className="relative py-16 px-6">
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {hubCards.map((c) => {
          const Icon = iconMap[c.color];
          const col = colorMap[c.color];
          return (
            <motion.a
              href={c.href}
              key={c.title}
              whileHover={{ y: -4 }}
              className="hub-card block"
              variants={fadeUp}
              transition={transitionMed}
            >
              <div className={`w-11 h-11 rounded-lg ${col.bg} ${col.ring} border flex items-center justify-center ${col.text}`}>
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-white text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-gray-400 text-sm leading-relaxed">{c.description}</p>
              <div className={`mt-4 inline-flex items-center gap-2 font-semibold ${col.arrow}`}>
                {c.cta} <ArrowRight size={14} />
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
}

