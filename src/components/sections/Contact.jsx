import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import SectionHeader from '../common/SectionHeader';
import { personalInfo } from '../../data/portfolioData';

export default function Contact({ onNotify }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitted(true);
    if (onNotify) onNotify("Message sent successfully! Akshay will get back to you soon.");
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      if (onNotify) onNotify("Email copied to clipboard!");
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      if (onNotify) onNotify("Phone number copied!");
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeader
        badge="Get In Touch"
        title="Let's Connect &"
        highlight="Collaborate"
        subtitle="Feel free to reach out directly via email, phone, or LinkedIn for opportunities and collaborations."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info & Direct Channels (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Contact Details
            </h3>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Available for full-stack engineering roles, software internships, and machine learning collaborations.
            </p>

            {/* Direct Cards */}
            <div className="space-y-3 mb-6">
              {/* Email Card */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Email</div>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
                  aria-label="Copy email"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Phone</div>
                    <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-colors font-mono">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-emerald-400 transition-colors"
                  aria-label="Copy phone"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Location</div>
                  <div className="text-sm font-semibold text-slate-200">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-slate-800 flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white border border-slate-800 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white border border-slate-800 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl relative">
            <h3 className="text-xl font-bold text-white mb-6">
              Send a Direct Message
            </h3>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Transmitted</h4>
                <p className="text-sm text-slate-400 max-w-sm mx-auto">
                  Thank you for reaching out! I will review your message and respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your project, role, or message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
