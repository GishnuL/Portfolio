import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Mail, Send, Copy, Check, CheckCircle2, Linkedin, Github } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-charcoal-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-cream-300 p-6 sm:p-8 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-cream-200 mb-6">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta-500 animate-pulse" />
            <h3 className="text-xl font-extrabold text-charcoal-900">Let's Connect</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-cream-100 hover:bg-cream-200 text-charcoal-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Email Direct Copy Bar */}
        <div className="mb-6 p-4 rounded-2xl bg-cream-50 border border-cream-200 flex items-center justify-between gap-3">
          <div className="flex items-center space-x-2.5 min-w-0">
            <Mail className="w-4 h-4 text-terracotta-500 shrink-0" />
            <span className="text-xs sm:text-sm font-mono font-bold text-charcoal-800 truncate">
              {PERSONAL_INFO.email}
            </span>
          </div>
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center space-x-1 text-xs font-semibold bg-white hover:bg-cream-100 text-charcoal-800 px-3 py-1.5 rounded-full border border-cream-300 shadow-sm transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>

        {/* Form or Success State */}
        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-charcoal-900">Message Received!</h4>
            <p className="text-xs sm:text-sm text-charcoal-600 max-w-sm mx-auto">
              Thank you for reaching out. I'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-charcoal-900 text-white text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-terracotta-500 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-charcoal-500 mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Alex Morgan"
                className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-terracotta-500 text-xs sm:text-sm text-charcoal-900"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-charcoal-500 mb-1">
                Your Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-terracotta-500 text-xs sm:text-sm text-charcoal-900"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-charcoal-500 mb-1">
                Project Overview / Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your product, timeline, or design/engineering goals..."
                className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-terracotta-500 text-xs sm:text-sm text-charcoal-900 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center space-x-2 bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold text-sm py-3 rounded-full shadow-terracotta-glow transition-all duration-300"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Social Links Footer */}
        <div className="mt-6 pt-4 border-t border-cream-200 flex items-center justify-center space-x-6 text-xs text-charcoal-600">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-terracotta-500 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-terracotta-500 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>

      </div>
    </div>
  );
};
