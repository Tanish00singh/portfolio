import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Portfolio from './components/Portfolio.jsx';
import Hub from './components/Hub.jsx';
import Stats from './components/Stats.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { Toaster } from './components/ui/toaster.jsx';

const HomePage = () => (
  <div className="app-bg">
    <Navbar />
    <main className="relative z-10">
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Hub />
      <Stats />
      <Contact />
      <Footer />
    </main>
    <Toaster />
  </div>
);

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.replace('#', ''));
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = 88; // fixed navbar offset
    const y = el.getBoundingClientRect().top + window.scrollY - yOffset;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  }, [hash, pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

