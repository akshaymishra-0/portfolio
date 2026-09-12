import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/90 text-slate-100 border border-cyan-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(6,182,212,0.2)] backdrop-blur-md animate-fade-in transition-all">
      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
      <span className="text-sm font-medium">{message}</span>
      <button 
        onClick={onClose}
        aria-label="Close notification"
        className="ml-2 p-1 text-slate-400 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
