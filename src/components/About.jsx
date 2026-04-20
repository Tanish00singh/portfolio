import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../mock.js';
import { Download, ArrowUpRight, MapPin, Briefcase } from 'lucide-react';
import { fadeUp, stagger, transitionMed, viewportOnce } from './motion/motionPresets.js';

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        transition={transitionMed}
      >
        <SectionLabel text="About Me" />
        <p className="text-center text-gray-400 mt-3 mb-14 max-w-2xl mx-auto">
          Software engineer portfolio focused on AI/ML research, full-stack delivery, and algorithmic problem solving
        </p>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div
            variants={fadeUp}
            transition={transitionMed}
          >
            <div className="text-3xl md:text-5xl font-extrabold leading-tight">
              <span className="text-gradient-purple">Hello, I'm</span>
              <div className="text-white mt-2">
                {profile.firstName} {profile.lastName}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="pill">
                <MapPin size={12} /> {profile.flag} {profile.location}
              </span>
              <span className="pill !text-emerald-300 !border-emerald-400/30 !bg-emerald-400/5">
                <Briefcase size={12} /> {profile.availability}
              </span>
            </div>

            <p className="mt-6 text-gray-300/90 leading-relaxed">{profile.aboutParagraph}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#portfolio" className="btn-primary">
                <Download size={16} /> Download CV
              </a>
              <a href="#portfolio" className="btn-ghost">
                View Projects <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={transitionMed}
            className="relative"
          >
            <ProfileAvatar />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {profile.stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={transitionMed}
              className="glass-card glow-border p-7"
            >
              <div className="text-5xl font-extrabold text-gradient-purple">{s.value}</div>
              <div className="mt-2 text-white font-semibold">{s.label}</div>
              <div className="text-sm text-gray-400 mt-1">{s.note}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

const ProfileAvatar = () => (
  <div className="relative w-full max-w-[440px] mx-auto aspect-square">
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/30 to-cyan-400/10 blur-3xl" />
    <div className="relative w-full h-full rounded-full overflow-hidden border border-purple-500/30 shadow-[0_0_80px_rgba(124,58,237,0.35)] bg-gradient-to-br from-[#120b2a] to-[#0b0917]">
      <img
        src="/profile.png"
        alt={`${profile.firstName} ${profile.lastName}`}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
);

export const SectionLabel = ({ text }) => (
  <motion.h2
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="section-title text-center"
  >
    {text}
  </motion.h2>
);

