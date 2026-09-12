import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow || 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(6,182,212,0.15)] p-6 sm:p-8 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-xl bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            {project.category}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
              <Sparkles className="w-3 h-3" />
              Featured Project
            </span>
          )}
        </div>

        {/* Title and Subtitle */}
        <div className="pr-10 mb-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-sm font-medium text-cyan-400 mt-1">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Visual Banner Header */}
        <div className={`w-full py-5 px-6 rounded-xl bg-gradient-to-br ${project.gradient} border border-white/10 flex items-center justify-between mb-6 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-grid-pattern opacity-25"></div>
          <div className="relative z-10">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300 block">
              Project Overview
            </span>
            <div className="text-base font-bold text-white">
              {project.title}
            </div>
          </div>
          <div className="relative z-10 text-right">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-slate-950/70 text-cyan-300 border border-cyan-500/30">
              {project.category}
            </span>
          </div>
        </div>

        {/* Key Implementation Highlights (Exact from Resume) */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <span>Key Contributions & Architecture</span>
          </h4>
          <ul className="space-y-2.5 bg-slate-950/50 p-4 rounded-xl border border-slate-800">
            {project.highlights ? (
              project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))
            ) : (
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{project.summary}</span>
              </li>
            )}
          </ul>
        </div>

        {/* Metrics & Architecture Row */}
        {project.stats && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/40">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block capitalize font-mono">
                  {key}
                </span>
                <span className="text-sm font-bold text-cyan-300 font-mono">
                  {value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            Technologies & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
