import React from 'react';

export default function SectionHeader({ badge, title, highlight, subtitle, align = 'center' }) {
  const alignmentClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignmentClass} mb-14 md:mb-20`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4 backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          {badge}
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
        {title}{' '}
        {highlight && (
          <span className="gradient-text-cyan">{highlight}</span>
        )}
      </h2>

      {subtitle && (
        <p className="max-w-2xl text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
