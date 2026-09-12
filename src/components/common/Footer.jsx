import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { personalInfo } from '../../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/60 backdrop-blur-md pt-12 pb-8 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-slate-950 font-black text-xs shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                AM
              </div>
              <span className="font-bold text-lg text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors p-2"
            aria-label="Scroll to top"
          >
            Back to Top
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Akshay Mishra. Crafted with precision & code.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Built with <span className="text-cyan-400 font-medium">React</span> & <span className="text-cyan-400 font-medium">Tailwind CSS</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
