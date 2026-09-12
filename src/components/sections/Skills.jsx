import React from 'react';
import { 
  Code, Code2, Layers, Palette, Cpu, Zap, Layout,
  Server, Globe, Database, HardDrive, Share2, Shield,
  GitFork, Cloud, ExternalLink, Terminal, CheckSquare, RefreshCw
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { skillCategories } from '../../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Code, Code2, Layers, Palette, Cpu, Zap, Layout,
  Server, Globe, Database, HardDrive, Share2, Shield,
  GitFork, Cloud, ExternalLink, Terminal, CheckSquare, RefreshCw
};

export default function Skills() {
  const getBadgeColor = (level) => {
    switch (level) {
      case 'Proficient':
        return 'text-emerald-300 bg-emerald-500/15 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]';
      case 'Moderate':
        return 'text-cyan-300 bg-cyan-500/15 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.15)]';
      case 'Core':
        return 'text-purple-300 bg-purple-500/15 border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.15)]';
      case 'Basic':
        return 'text-sky-300 bg-sky-500/15 border-sky-500/30 shadow-[0_0_10px_rgba(14,165,233,0.12)]';
      case 'Expert':
        return 'text-teal-300 bg-teal-500/15 border-teal-500/30 shadow-[0_0_10px_rgba(20,184,166,0.15)]';
      case 'Advanced':
        return 'text-indigo-300 bg-indigo-500/15 border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.15)]';
      default:
        return 'text-slate-300 bg-slate-800/80 border-slate-700';
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeader
        badge="Technical Arsenal"
        title="Skills &"
        highlight="Technologies"
        subtitle="A categorized overview of the tools, frameworks, and programming languages, used to build my projects."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {skillCategories.map((group, idx) => (
          <div
            key={idx}
            className="glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300"
          >
            <div>
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {group.category}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 gap-2.5">
                {group.skills.map((skill, sIdx) => {
                  const Icon = iconMap[skill.icon] || Code;
                  return (
                    <div
                      key={sIdx}
                      className="group flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                          {skill.name}
                        </span>
                      </div>

                      <span
                        className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md border transition-colors ${getBadgeColor(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom count badge */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>{group.skills.length} competencies</span>
              <span className="text-cyan-400 font-mono">Curated Stacks</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
