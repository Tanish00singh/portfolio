import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories, certificates, techStack } from '../mock.js';
import { ExternalLink, FileText, Code2, Award, Boxes } from 'lucide-react';
import { SectionLabel } from './About.jsx';
import { fadeUp, transitionMed, viewportOnce } from './motion/motionPresets.js';

const tabs = [
  { id: 'projects', label: 'Projects', icon: Code2 },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'tech', label: 'Tech Stack', icon: Boxes }
];

export default function Portfolio() {
  const [tab, setTab] = useState('projects');
  const [cat, setCat] = useState('AI / ML');
  const filtered = projects.filter((p) => p.category === cat);

  return (
    <section id="portfolio" className="relative py-24 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        transition={transitionMed}
      >
        <SectionLabel text="Portfolio Showcase" />
        <p className="text-center text-gray-400 mt-3 mb-12 max-w-3xl mx-auto">
          Explore selected AI/ML, web, and systems projects alongside certifications and the technical tooling that shapes how I build production-grade software.
        </p>

        <div className="mx-auto rounded-2xl border border-purple-800/30 bg-[#0b0917] p-2 grid grid-cols-3 gap-2 max-w-4xl">
          {tabs.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-xl py-4 flex flex-col items-center gap-1 text-sm font-semibold transition-colors ${
                  active
                    ? 'bg-gradient-to-b from-purple-600/20 to-purple-800/10 border border-purple-500/50 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-purple-500/5'
                }`}
              >
                <Icon size={18} className={active ? 'text-purple-300' : ''} />
                {t.label}
              </button>
            );
          })}
        </div>

        {tab === 'projects' && (
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            {projectCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 py-2 rounded-lg border text-sm font-medium transition-colors ${
                  cat === c
                    ? 'border-purple-400/70 bg-purple-500/15 text-white'
                    : 'border-purple-800/30 text-gray-400 hover:text-white hover:border-purple-500/50'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={tab + cat}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="mt-10"
          >
            {tab === 'projects' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.length === 0 ? (
                  <div className="col-span-full text-center text-gray-400 py-10">
                    No projects in <span className="text-purple-300">{cat}</span> yet.
                  </div>
                ) : (
                  filtered.map((p) => <ProjectCard key={p.id} p={p} />)
                )}
              </div>
            )}

            {tab === 'certificates' && (
              <div className="grid md:grid-cols-3 gap-6">
                {certificates.map((c, i) => (
                  <div key={i} className="glass-card glow-border p-5">
                    <div className="rounded-lg overflow-hidden aspect-[4/3] bg-[#0a0717]">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="mt-4">
                      <div className="text-white font-semibold">{c.title}</div>
                      <div className="text-gray-400 text-sm mt-1">{c.issuer}</div>
                      <div className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-purple-300">
                        <Award size={12} /> {c.year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {tab === 'tech' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(techStack).map(([group, items]) => (
                  <div key={group} className="glass-card glow-border p-6">
                    <div className="font-mono text-xs text-purple-300/80 mb-1">
                      $ cat stack/{group.toLowerCase().replace(/[^a-z]/g, '')}.md
                    </div>
                    <div className="font-semibold text-white text-lg">{group}</div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {items.map((it) => (
                        <span key={it} className="badge-chip">
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

const ProjectCard = ({ p }) => (
  <motion.div whileHover={{ y: -6 }} className="glass-card glow-border overflow-hidden group">
    <div className="relative aspect-video overflow-hidden bg-[#0a0717]">
      <img
        src={p.image}
        alt={p.title}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      />
      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-mono bg-purple-500/20 border border-purple-400/40 text-purple-200">
        {p.badge}
      </span>
      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-xs font-mono bg-black/60 border border-white/10 text-gray-200">
        {p.date}
      </span>
    </div>
    <div className="p-5">
      <div className="text-xs font-mono text-cyan-300/90">{p.category}</div>
      <h3 className="mt-1 text-lg font-bold text-white">{p.title}</h3>
      <p className="mt-2 text-sm text-gray-400 leading-relaxed line-clamp-3">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tech.slice(0, 4).map((t) => (
          <span key={t} className="badge-chip text-[11px]">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-2">
        <a
          href={p.live}
          className="flex-1 inline-flex items-center justify-center gap-1.5 text-sm py-2 rounded-md bg-purple-500/10 border border-purple-500/40 text-purple-200 hover:bg-purple-500/20 transition-colors"
        >
          <ExternalLink size={14} /> Live
        </a>
        <a
          href={p.details}
          className="flex-1 inline-flex items-center justify-center gap-1.5 text-sm py-2 rounded-md bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 transition-colors"
        >
          <FileText size={14} /> Details
        </a>
      </div>
    </div>
  </motion.div>
);

