import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../mock.js';
import { MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { SectionLabel } from './About.jsx';
import { fadeUp, stagger, transitionMed, viewportOnce } from './motion/motionPresets.js';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        transition={transitionMed}
      >
        <SectionLabel text="Experience & Education" />
        <p className="text-center text-gray-400 mt-3 mb-14">My professional journey and academic background</p>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {experiences.map((e, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={transitionMed}
              className="terminal-card"
            >
              <div className="terminal-header">
                <div className="flex items-center gap-3">
                  <div className="dots">
                    <span className="dot r" />
                    <span className="dot y" />
                    <span className="dot g" />
                  </div>
                  <span className="text-purple-300/80">{e.path}</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-[10px] tracking-widest">
                  {String(e.type).toUpperCase()}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-purple-500/10 border border-purple-500/30 text-purple-300">
                    {e.type === 'Education' ? <GraduationCap size={20} /> : <Briefcase size={20} />}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono font-bold text-lg text-white">{e.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mt-1">
                      <a href={e.orgUrl} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">
                        {e.org}
                      </a>
                      <span className="text-gray-500 inline-flex items-center gap-1">
                        <MapPin size={12} />
                        {e.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {[
                    { label: 'FROM', value: e.from },
                    { label: 'TO', value: e.to },
                    { label: 'DURATION', value: e.duration }
                  ].map((b) => (
                    <div key={b.label} className="rounded-md border border-purple-800/30 bg-[#0a0717] px-3 py-2">
                      <div className="text-[10px] tracking-widest text-purple-400 font-mono">{b.label}</div>
                      <div className="font-mono font-semibold text-white">{b.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <div className="font-mono text-xs text-purple-300/80 mb-2">$ cat description.md</div>
                  <div className="code-block text-gray-300 leading-relaxed">{e.description}</div>
                </div>

                <div className="mt-5">
                  <div className="font-mono text-xs text-purple-300/80 mb-2">$ ls ./tech-stack</div>
                  <div className="flex flex-wrap gap-2">
                    {e.tech.map((t) => (
                      <span key={t} className="badge-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between font-mono text-xs">
                  <span className="text-purple-300/80">$ {e.type === 'Education' ? 'edu' : 'work'} --status_</span>
                  <span className={`inline-flex items-center gap-1.5 ${e.status === 'Present' ? 'text-emerald-300' : 'text-purple-300'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${e.status === 'Present' ? 'bg-emerald-400 animate-pulse' : 'bg-purple-400'}`} />
                    {e.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

