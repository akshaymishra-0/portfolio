import React from 'react';
import { Briefcase, GraduationCap, Calendar, ChevronRight, Award, Trophy, Code2, ExternalLink } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { experiences, education, personalInfo } from '../../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <SectionHeader
        badge="Experience & Background"
        title="Internship &"
        highlight="Education"
        subtitle="Academic internship experience, competitive programming achievements, and formal education track."
      />

      <div className="space-y-16">
        {/* Academic Internship Timeline */}
        <div>
          <div className="flex items-center gap-2.5 mb-8">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-white">Academic Experience</h3>
          </div>

          <div className="relative pl-6 sm:pl-10 border-l border-slate-800/90 space-y-10">
            {experiences.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Indicator Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 group-hover:bg-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(6,182,212,0.6)]"></div>

                {/* Experience Card */}
                <div className="glass-panel p-6 sm:p-7 rounded-2xl group-hover:border-cyan-500/30 transition-all duration-300">
                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h4>
                      <p className="text-sm font-semibold text-cyan-400">
                        {item.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {item.period}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Bullet achievements */}
                  <ul className="space-y-2 mb-5">
                    {item.achievements.map((achieve, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{achieve}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {item.certificateUrl ? (
                      <a
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 hover:text-emerald-100 bg-emerald-500/15 hover:bg-emerald-500/25 px-3 py-1.5 rounded-lg border border-emerald-500/30 hover:border-emerald-400/60 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all group/cert"
                      >
                        <Award className="w-3.5 h-3.5 text-emerald-400 group-hover/cert:scale-110 transition-transform" />
                        <span>View Certificate</span>
                        <ExternalLink className="w-3 h-3 text-emerald-400 group-hover/cert:translate-x-0.5 transition-transform" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                        <Award className="w-3.5 h-3.5" />
                        Certificate Completed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coding & Achievements Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-cyan-950/20">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Coding & Achievements</h3>
              <p className="text-xs text-slate-400">Competitive programming and pattern-based problem solving</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {personalInfo.achievements.map((achievement, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                  <Code2 className="w-4 h-4" />
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div id="education">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-white">Formal Education</h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-cyan-500/30 transition-colors"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {edu.degree}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {edu.score}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-400">
                    {edu.details}
                  </p>
                </div>
                <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800 self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
