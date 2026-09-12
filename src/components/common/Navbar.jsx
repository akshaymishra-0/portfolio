import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks, personalInfo } from '../../data/portfolioData';

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 pt-4 pb-2 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-white/10 px-5 py-3'
            : 'bg-transparent px-4 py-3'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Akshay Mishra Portfolio Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-slate-950 font-black text-sm shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform">
              AM
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-xl border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/10 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-0.5"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-slate-800/80 flex flex-col gap-2 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-cyan-500 text-slate-950 shadow-md"
              >
                Let's Talk
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
