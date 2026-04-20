import React, { useEffect, useState } from 'react';
import { navLinks, profile } from '../mock.js';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [active, setActive] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = ['home', 'about', 'experience', 'portfolio', 'hub', 'stats', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-[#07060d]/70 border-b border-purple-900/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="text-2xl font-extrabold text-gradient-cyan-purple">
            {profile.brandName}
          </span>
          <span className="relative inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] tracking-[0.22em] font-mono font-semibold text-cyan-300 border border-cyan-400/30 bg-cyan-400/5">
            {profile.brandLabel}
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link ${active === l.href ? 'active' : ''}`}
            >
              {l.label}
            </a>
          ))}
          <span className="h-5 w-px bg-purple-800/40" />
          <a href="#contact" className="nav-link text-gradient-cyan-purple font-semibold">
            Hire Me
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg border border-purple-800/40 text-purple-200"
          aria-label="toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-purple-900/30 bg-[#07060d]/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-200 py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-gradient-cyan-purple font-semibold py-2"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

