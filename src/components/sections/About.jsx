import React from 'react';
import { CheckCircle2, User, FileCode } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { personalInfo } from '../../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeader
        badge="About Akshay"
        title="Background &"
        highlight="Technical Focus"
        subtitle="Computer Science undergraduate with practical experience in Full Stack development and Machine Learning."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Bio Card (Left) */}
        <div className="h-full">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-inner">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Who I Am</h3>
                  <p className="text-xs text-slate-400 font-medium">Full Stack Developer & Machine Learning Enthusiast</p>
                </div>
              </div>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Core highlights */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-medium text-slate-200">B.Sc CS (2023–2027) With 8.07 CGPA</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-medium text-slate-200">React.js, Node.js & MongoDB</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-medium text-slate-200">Python, Flask & ML</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-medium text-slate-200">Java Pattern-Based DSA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Humanized Code Snippet Box (Right) */}
        <div className="h-full">
          <div className="rounded-2xl bg-[#090d16]/95 border border-slate-800/90 shadow-2xl overflow-hidden font-mono text-xs h-full flex flex-col justify-between">
            {/* Editor Tab Header */}
            <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-950 text-slate-300 text-[11px] border border-slate-800">
                <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                <span>akshay.config.js</span>
              </div>
              <span className="text-[10px] text-slate-500 tracking-wider">UTF-8</span>
            </div>

            {/* Humanized Code Block */}
            <div className="p-5 sm:p-6 text-slate-300 space-y-1.5 overflow-x-auto text-[11px] sm:text-xs leading-relaxed flex-1 flex flex-col justify-center">
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
