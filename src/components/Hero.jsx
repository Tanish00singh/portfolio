import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../mock.js';
import { ArrowUpRight, Mail, Github, Linkedin, Instagram, Sparkles } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

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
          <div className="relative w-full aspect-[4/5] max-w-[420px] ml-auto rounded-3xl overflow-hidden shadow-2xl border border-purple-800/50">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-cyan-400/10 z-10 mix-blend-overlay" />
            <img src={profileImage} alt="Tanish Singh" className="w-full h-full object-cover relative z-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

