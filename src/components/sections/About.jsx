import React from 'react';
import { Zap, Shield, Sparkles, CheckCircle2, User, FileCode } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { personalInfo } from '../../data/portfolioData';

export default function About() {
  const principles = [
    {
      icon: Zap,
      title: "Algorithms & Logic",
      desc: "50+ problems solved on LeetCode and GeeksforGeeks. Practicing Sliding Window, Two Pointers, and Fast/Slow Pointers in Java."
    },
    {
      icon: Sparkles,
      title: "MERN & React Ecosystem",
      desc: "Building responsive web apps with React.js, Tailwind CSS, Node.js, and Express REST APIs with MongoDB."
    },
    {
      icon: Shield,
      title: "Machine Learning & Python",
      desc: "Experience training ML regression models, data processing pipelines, and deploying predictive web tools with Flask."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeader
        badge="About Akshay"
        title="Background &"
        highlight="Technical Focus"
        subtitle="Computer Science undergraduate with practical experience in Full Stack development and Machine Learning."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Bio & Principles (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-cyan-400" />
              Who I Am
            </h3>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core highlights */}
            <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>B.Sc. CS (2023–2027) • 8.07 CGPA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>React.js, Node.js & MongoDB</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Python, Flask & Machine Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Java Pattern-Based DSA</span>
              </div>
            </div>
          </div>

          {/* Principle Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-5 rounded-xl flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Humanized Code Snippet Box (5 cols) */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-[#090d16] border border-slate-800/90 shadow-2xl overflow-hidden font-mono text-xs">
            {/* Editor Tab Header */}
            <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/70"></div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-950 text-slate-300 text-[11px] border border-slate-800">
                <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                <span>akshay.config.js</span>
              </div>
              <span className="text-[10px] text-slate-500">UTF-8</span>
            </div>

            {/* Humanized Code Block */}
            <div className="p-5 text-slate-300 space-y-1.5 overflow-x-auto text-[11px] sm:text-xs leading-relaxed">
              <p><span className="text-indigo-400">export const</span> <span className="text-cyan-300">developer</span> = &#123;</p>
              <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">'Akshay Mishra'</span>,</p>
              <p className="pl-4"><span className="text-slate-400">location:</span> <span className="text-emerald-300">'Saltora, West Bengal, India'</span>,</p>
              <p className="pl-4"><span className="text-slate-400">education:</span> &#123;</p>
              <p className="pl-8"><span className="text-slate-400">degree:</span> <span className="text-emerald-300">'B.Sc. in Computer Science'</span>,</p>
              <p className="pl-8"><span className="text-slate-400">college:</span> <span className="text-emerald-300">'Trivenidevi Bhalotia College'</span>,</p>
              <p className="pl-8"><span className="text-slate-400">cgpa:</span> <span className="text-amber-300">8.07</span>,</p>
              <p className="pl-4">&#125;,</p>
              <p className="pl-4"><span className="text-slate-400">currentFocus:</span> [</p>
              <p className="pl-8"><span className="text-emerald-300">'Full Stack Web (MERN)'</span>,</p>
              <p className="pl-8"><span className="text-emerald-300">'Machine Learning (Python/Flask)'</span>,</p>
              <p className="pl-8"><span className="text-emerald-300">'DSA Patterns in Java'</span></p>
              <p className="pl-4">],</p>
              <p className="pl-4"><span className="text-slate-400">status:</span> <span className="text-cyan-300">'Open to Software & ML Opportunities'</span>,</p>
              <p className="pl-4"><span className="text-slate-400">canCollaborate:</span> () =&gt; <span className="text-amber-300">true</span></p>
              <p>&#125;;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
