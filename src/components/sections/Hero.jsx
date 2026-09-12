import React, { useState } from 'react';
import { ArrowRight, Mail, Check } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function Hero({ onCopyEmail }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    if (onCopyEmail) onCopyEmail();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-slate-900/80 border border-emerald-500/30 text-emerald-300 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)] animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{personalInfo.status}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          Architecting modern,{' '}
          <span className="gradient-text-cyan">sleek & resilient</span>{' '}
          web applications.
        </h1>

        {/* Introduction Subtitle */}
        <p className="max-w-2xl text-base sm:text-xl text-slate-300 mb-10 leading-relaxed font-normal">
          Hello! I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>, a{' '}
          <span className="text-cyan-400 font-medium">{personalInfo.role}</span>. I craft fast, visually captivating, and scalable digital software from concept to deployment.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all transform hover:-translate-y-0.5"
          >
            <span>View Featured Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/40 backdrop-blur-md transition-all"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Email Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
          >
            Contact Me
          </a>
        </div>

        {/* Quick Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl pt-8 border-t border-slate-800/60">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl glass-panel text-center hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mb-1">
                <span className="gradient-text-cyan">{stat.value}</span>
              </div>
              <div className="text-xs text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
