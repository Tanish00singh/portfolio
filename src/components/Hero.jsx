import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../mock.js';
import { ArrowUpRight, Mail, Github, Linkedin, Instagram, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="pill mb-6">
            <Sparkles size={12} className="text-purple-300" />
            Ready to Build
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1" />
          </div>
          <h1 className="font-extrabold leading-[1.05] tracking-tight text-5xl md:text-7xl">
            <span className="block text-white/90">Hello, I'm</span>
            <span className="block text-gradient-purple">
              {profile.firstName} {profile.lastName}
            </span>
          </h1>
          <div className="mt-6 text-xl md:text-2xl font-mono text-cyan-200/90">
            {profile.subtitle}
            <span className="caret" />
          </div>

          <p className="mt-8 text-gray-300/90 max-w-xl leading-relaxed">{profile.heroIntro}</p>
          <p className="mt-4 text-gray-400 max-w-xl leading-relaxed text-sm">{profile.heroDescription}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {profile.pills.map((p) => (
              <span key={p} className="pill">
                {p}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#portfolio" className="btn-primary">
              Projects <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              Contact <Mail size={16} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { icon: Github, href: profile.socials.github },
              { icon: Linkedin, href: profile.socials.linkedin },
              { icon: Instagram, href: profile.socials.instagram }
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg border border-purple-800/40 flex items-center justify-center text-purple-200 hover:text-white hover:border-purple-400/60 hover:bg-purple-500/10 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
}

const HeroIllustration = () => (
  <div className="relative w-full aspect-square max-w-[560px] ml-auto">
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/25 via-indigo-500/15 to-cyan-400/20 blur-3xl" />
    <svg viewBox="0 0 500 500" className="relative w-full h-full float-anim" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4c1d95" />
          <stop offset="1" stopColor="#1e293b" />
        </linearGradient>
      </defs>
      <rect x="120" y="130" width="260" height="180" rx="14" fill="url(#g2)" stroke="#a78bfa" strokeWidth="1.5" />
      <rect x="135" y="150" width="230" height="140" rx="8" fill="#0b0917" />
      <g fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#c4b5fd">
        <text x="150" y="172">
          const tanish = {'{'}
        </text>
        <text x="160" y="190">
          role: <tspan fill="#f472b6">'AI/ML Engineer'</tspan>,
        </text>
        <text x="160" y="208">
          stack: [<tspan fill="#22d3ee">'python'</tspan>, <tspan fill="#22d3ee">'java'</tspan>],
        </text>
        <text x="160" y="226">
          cgpa: <tspan fill="#34d399">8.51</tspan>,
        </text>
        <text x="160" y="244">
          rank: <tspan fill="#fbbf24">'AIR 4'</tspan>,
        </text>
        <text x="160" y="262">
          build: () =&gt; <tspan fill="#a855f7">'ship it'</tspan>,
        </text>
        <text x="150" y="282">
          {'}'};
        </text>
      </g>
      <rect x="220" y="310" width="60" height="10" rx="3" fill="#2a1f4a" />
      <rect x="170" y="322" width="160" height="6" rx="3" fill="#1a1330" />

      <g transform="translate(60, 90)">
        <circle r="34" fill="#2a1f4a" stroke="url(#g1)" strokeWidth="2" />
        <circle r="14" fill="#0b0917" stroke="#a78bfa" />
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x={-4} y={-44} width="8" height="12" fill="#a78bfa" transform={`rotate(${i * 45})`} />
        ))}
      </g>

      <g transform="translate(380, 300)">
        <rect x="0" y="0" width="70" height="120" rx="12" fill="url(#g2)" stroke="#a78bfa" />
        <rect x="6" y="12" width="58" height="96" rx="6" fill="#0b0917" />
        <rect x="14" y="24" width="42" height="6" rx="3" fill="#a855f7" />
        <rect x="14" y="36" width="30" height="4" rx="2" fill="#4c1d95" />
        <circle cx="35" cy="74" r="16" fill="none" stroke="#22d3ee" strokeWidth="2" />
        <path d="M27 74 l6 6 l12 -14" fill="none" stroke="#22d3ee" strokeWidth="2" />
      </g>

      <g stroke="#7c3aed" strokeOpacity="0.6" strokeWidth="1">
        <line x1="80" y1="300" x2="140" y2="260" />
        <line x1="80" y1="300" x2="140" y2="300" />
        <line x1="80" y1="300" x2="140" y2="340" />
        <line x1="60" y1="370" x2="140" y2="260" />
        <line x1="60" y1="370" x2="140" y2="340" />
      </g>
      <g fill="#a855f7">
        <circle cx="80" cy="300" r="6" />
        <circle cx="60" cy="370" r="6" />
        <circle cx="140" cy="260" r="6" />
        <circle cx="140" cy="300" r="6" />
        <circle cx="140" cy="340" r="6" />
      </g>
    </svg>
  </div>
);

