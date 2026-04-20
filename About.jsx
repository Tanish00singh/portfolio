import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../mock';
import { Download, ArrowUpRight, MapPin, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel text="About Me" />
        <p className="text-center text-gray-400 mt-3 mb-14 max-w-2xl mx-auto">
          Software engineer portfolio focused on AI/ML research, full-stack delivery, and algorithmic problem solving
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-3xl md:text-5xl font-extrabold leading-tight">
              <span className="text-gradient-purple">Hello, I'm</span>
              <div className="text-white mt-2">{profile.firstName} {profile.lastName}</div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="pill">
                <MapPin size={12} /> {profile.flag} {profile.location}
              </span>
              <span className="pill !text-emerald-300 !border-emerald-400/30 !bg-emerald-400/5">
                <Briefcase size={12} /> {profile.availability}
              </span>
            </div>

            <p className="mt-6 text-gray-300/90 leading-relaxed">
              {profile.aboutParagraph}
            </p>

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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <ProfileAvatar />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {profile.stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glow-border p-7"
            >
              <div className="text-5xl font-extrabold text-gradient-purple">{s.value}</div>
              <div className="mt-2 text-white font-semibold">{s.label}</div>
              <div className="text-sm text-gray-400 mt-1">{s.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProfileAvatar = () => (
  <div className="relative w-full max-w-[440px] mx-auto aspect-square">
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/30 to-cyan-400/10 blur-3xl" />
    <div className="relative w-full h-full rounded-full overflow-hidden border border-purple-500/30 shadow-[0_0_80px_rgba(124,58,237,0.35)] bg-gradient-to-br from-[#120b2a] to-[#0b0917]">
      <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="avatarBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1a1030" />
            <stop offset="1" stopColor="#07060d" />
          </linearGradient>
          <radialGradient id="head" cx="0.5" cy="0.4" r="0.6">
            <stop offset="0" stopColor="#2c1e55" />
            <stop offset="1" stopColor="#0a0617" />
          </radialGradient>
        </defs>
        <rect width="400" height="400" fill="url(#avatarBg)" />
        <ellipse cx="200" cy="170" rx="80" ry="90" fill="url(#head)" />
        <path d="M80 400 C 80 290, 320 290, 320 400 Z" fill="#141028" />
        <path d="M170 280 L200 320 L230 280 L225 340 L175 340 Z" fill="#e5e7eb" />
        <line x1="200" y1="280" x2="200" y2="340" stroke="#0a0617" strokeWidth="2" />
        <text x="200" y="392" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#a78bfa">
          {'<Tanish />'}
        </text>
      </svg>
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

export default About;
