import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Hub from './components/Hub';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
