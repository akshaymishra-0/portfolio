import React, { useState } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Toast from './components/ui/Toast';
import { useScrollSpy } from './hooks/useScrollSpy';

export default function App() {
  const activeSection = useScrollSpy(['hero', 'about', 'skills', 'projects', 'experience', 'contact']);
  const [toast, setToast] = useState({ visible: false, message: '' });

  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Subtle global background grid and ambient lighting */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0"></div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-radial-gradient pointer-events-none z-0"></div>

      {/* Floating Glassmorphic Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onCopyEmail={() => showToast("Email address copied to clipboard!")} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact onNotify={(msg) => showToast(msg)} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Toast Notifications */}
      <Toast
        message={toast.message}
        visible={toast.visible}
        onClose={() => setToast({ visible: false, message: '' })}
      />
    </div>
  );
}
