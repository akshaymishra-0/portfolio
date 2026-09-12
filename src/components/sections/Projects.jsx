import React, { useState } from 'react';
import { ExternalLink, Sparkles, Eye } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import SectionHeader from '../common/SectionHeader';
import ProjectModal from '../ui/ProjectModal';
import { projects, projectCategories } from '../../data/portfolioData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="Featured Work"
        title="Selected"
        highlight="Projects"
        subtitle="A collection of production-ready applications with modern and responsive user interfaces."
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid: 1 row with all 3 on desktop / tablets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group glass-panel rounded-2xl overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(6,182,212,0.15)]"
          >
            <div>
              {/* Card Banner / Visual Header */}
              <div
                className={`relative h-40 bg-gradient-to-br ${project.gradient} border-b border-white/10 p-5 flex flex-col justify-between overflow-hidden`}
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-25 group-hover:opacity-40 transition-opacity"></div>

                {/* Top Badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-slate-950/70 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Banner title / preview watermark */}
                <div className="relative z-10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300 block mb-0.5">
                    Project
                  </span>
                  <div className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors truncate">
                    {project.title}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-xs text-cyan-400 font-medium mb-2 line-clamp-1">
                    {project.subtitle}
                  </p>
                )}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {project.summary}
                </p>

                {/* Key stats row if present */}
                {project.stats && (
                  <div className="flex flex-wrap items-center gap-3 mb-4 pb-4 border-b border-slate-800 text-[11px]">
                    {Object.entries(project.stats).map(([k, v]) => (
                      <div key={k} className="flex items-center gap-1">
                        <span className="text-slate-500 uppercase font-mono text-[10px]">
                          {k}:
                        </span>
                        <span className="text-cyan-400 font-semibold font-mono">
                          {v}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Card Actions */}
            <div className="px-5 pb-5 pt-2 flex items-center justify-between gap-3 border-t border-slate-800/60 mt-2">
              <button
                onClick={() => setActiveModalProject(project)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Deep Dive</span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                  aria-label={`GitHub code for ${project.title}`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all"
                  >
                    <span>Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal popup */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
