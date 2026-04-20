import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from '../mock.js';
import { Github, Award, ExternalLink, Code, GraduationCap } from 'lucide-react';
import { fadeUp, stagger, transitionMed, viewportOnce } from './motion/motionPresets.js';

export default function Stats() {
  return (
    <section id="stats" className="relative py-24 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        transition={transitionMed}
      >
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl md:text-5xl font-black font-mono">
            <span className="text-white">MY</span>
            <span className="text-gradient-purple">_STATS</span>
          </h2>
          <span className="inline-flex items-center gap-2 text-emerald-300 font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE
          </span>
        </div>

        <motion.div
          className="grid lg:grid-cols-2 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <StatCardGithub />
          <StatCardLeetcode />
          <StatCardAcademics />
        </motion.div>
      </motion.div>
    </section>
  );
}

const TerminalFrame = ({ url, children }) => (
  <motion.div
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
        <span className="text-purple-300/80">{url}</span>
      </div>
    </div>
    <div className="p-6">{children}</div>
  </motion.div>
);

const StatCardGithub = () => {
  const g = statsData.github;
  return (
    <TerminalFrame url={g.url.replace('https://', '')}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300">
            <Github size={20} />
          </div>
          <div>
            <div className="font-mono font-bold text-lg text-white">{g.handle}</div>
            <div className="text-xs text-gray-400">{g.tagline}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-extrabold text-gradient-purple">{g.repos}</div>
          <div className="text-xs text-gray-400 font-mono">repos</div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        <MiniStat label="Followers" value={g.followers} />
        <MiniStat label="Following" value={g.following} />
        <MiniStat label="Public Repos" value={g.publicRepos} />
      </div>
      <BadgeRow title="codingStats.ghBadges" badges={g.badges} />
      <FooterRow cmd="$ gh --stats_" cta="View_GH" href={g.url} />
    </TerminalFrame>
  );
};

const StatCardLeetcode = () => {
  const l = statsData.leetcode;
  return (
    <TerminalFrame url={l.url.replace('https://', '')}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300">
            <Code size={20} />
          </div>
          <div>
            <div className="font-mono font-bold text-lg text-white">{l.handle}</div>
            <div className="text-xs text-gray-400">{l.tagline}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-extrabold text-amber-400">{l.solved}</div>
          <div className="text-xs text-gray-400 font-mono">solved</div>
        </div>
      </div>
      <div className="mt-5 space-y-3">
        <ProgressRow label="Easy" done={l.easy.done} total={l.easy.total} color="bg-emerald-400" />
        <ProgressRow label="Medium" done={l.medium.done} total={l.medium.total} color="bg-amber-400" />
        <ProgressRow label="Hard" done={l.hard.done} total={l.hard.total} color="bg-rose-400" />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-2">
        <MiniStat label="Streak" value={`${l.streak}d`} />
        <MiniStat label="Total Score" value={l.score} />
      </div>
      <BadgeRow title="Badges Earned" badges={l.badges} />
      <FooterRow cmd="$ leetcode --u_" cta="View_LC" href={l.url} />
    </TerminalFrame>
  );
};



const StatCardAcademics = () => {
  const a = statsData.academics;
  return (
    <TerminalFrame url={'nit-trichy/mca-profile'}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
            <GraduationCap size={20} />
          </div>
          <div>
            <div className="font-mono font-bold text-lg text-white">{a.handle}</div>
            <div className="text-xs text-gray-400">{a.tagline}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-extrabold text-gradient-purple">{a.cgpa}</div>
          <div className="text-xs text-gray-400 font-mono">CGPA</div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        <MiniStat label="Rank" value={a.rank} />
        <MiniStat label="Exam" value={a.exam} />
        <MiniStat label="DSA Solved" value={a.dsaSolved} />
      </div>
      <BadgeRow title="Achievements" badges={a.badges} />
      <FooterRow cmd="$ profile --academic_" cta="View_CV" href={a.url} />
    </TerminalFrame>
  );
};

const MiniStat = ({ label, value }) => (
  <div className="rounded-md border border-purple-800/30 bg-[#0a0717] px-3 py-2">
    <div className="text-[10px] tracking-widest text-purple-400 font-mono uppercase">{label}</div>
    <div className="font-mono font-semibold text-white">{value}</div>
  </div>
);

const ProgressRow = ({ label, done, total, color }) => {
  const pct = Math.min(100, (done / total) * 100);
  return (
    <div>
      <div className="flex justify-between text-xs font-mono text-gray-300">
        <span>{label}</span>
        <span className="text-gray-400">
          {done} / {total}
        </span>
      </div>
      <div className="mt-1 h-1.5 rounded-full bg-[#140c2a] overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};

const BadgeRow = ({ title, badges }) => (
  <div className="mt-5">
    <div className="font-mono text-xs text-purple-300/80 mb-2">
      {title} ({badges.length})
    </div>
    <div className="flex flex-wrap gap-2">
      {badges.map((b) => (
        <span key={b} className="badge-chip">
          <Award size={11} className="mr-1" /> {b}
        </span>
      ))}
    </div>
  </div>
);

const FooterRow = ({ cmd, cta, href }) => (
  <div className="mt-6 flex items-center justify-between pt-4 border-t border-purple-900/30">
    <span className="font-mono text-xs text-purple-300/80">{cmd}</span>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-mono text-cyan-300 hover:text-cyan-200"
    >
      {cta} <ExternalLink size={12} />
    </a>
  </div>
);

