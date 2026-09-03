import React, { useState } from 'react';
import { Send, CheckCircle, X, Sparkles } from 'lucide-react';
import { campusesData } from '../data/campusesData';

export default function CollaborateModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'student',
    preferredCampus: 'central',
    interestArea: 'genai',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
        <button 
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 cursor-pointer transition-colors" 
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-md bg-sky-50 text-ai-cyan border border-sky-200">
                <Sparkles size={12} />
                Connect With CAI
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-christ-blue mb-1">
              Collaborate / Pitch a Project
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Submit research proposals, industry compute sponsorship inquiries, or student fellowship applications to the Center for Artificial Intelligence.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Full Name
                </label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-ai-cyan focus:ring-2 focus:ring-sky-100 transition-all" 
                  placeholder="e.g. Dr. Jane Doe / Alok Verma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Institutional / Professional Email
                </label>
                <input 
                  type="email" 
                  required 
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-ai-cyan focus:ring-2 focus:ring-sky-100 transition-all" 
                  placeholder="name@christuniversity.in or name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Stakeholder Type
                  </label>
                  <select 
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-ai-cyan focus:ring-2 focus:ring-sky-100 transition-all cursor-pointer"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  >
                    <option value="student">Christ University Student</option>
                    <option value="faculty">University Faculty / Researcher</option>
                    <option value="industry">Industry / Corporate Partner</option>
                    <option value="alumni">Alumni / External Scholar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Campus Node
                  </label>
                  <select 
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-ai-cyan focus:ring-2 focus:ring-sky-100 transition-all cursor-pointer"
                    value={formData.preferredCampus}
                    onChange={(e) => setFormData({ ...formData, preferredCampus: e.target.value })}
                  >
                    {campusesData.filter(c => c.id !== 'all').map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Research Cluster of Interest
                </label>
                <select 
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-ai-cyan focus:ring-2 focus:ring-sky-100 transition-all cursor-pointer"
                  value={formData.interestArea}
                  onChange={(e) => setFormData({ ...formData, interestArea: e.target.value })}
                >
                  <option value="genai">Generative AI & LLM Systems</option>
                  <option value="robotics">Autonomous Robotics & Edge Systems</option>
                  <option value="healthcare">Healthcare AI & Bio-Signal Modeling</option>
                  <option value="analytics">Predictive Analytics & Climate Science</option>
                  <option value="ethics">Responsible AI & Regulatory Sandboxing</option>
                  <option value="fintech">FinTech AI & Algorithmic Markets</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Brief Proposal Summary / Scope
                </label>
                <textarea 
                  rows={3} 
                  required 
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-ai-cyan focus:ring-2 focus:ring-sky-100 transition-all" 
                  placeholder="Describe your research proposal, compute resource requirement, or partnership scope..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button 
                type="submit" 
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-christ-blue to-ai-cyan text-white text-sm font-semibold py-3 rounded-xl shadow-md hover:shadow-lg hover:brightness-105 transition-all cursor-pointer"
              >
                <span>Submit Collaboration Pitch</span>
                <Send size={15} />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-4 text-emerald-600">
              <CheckCircle size={28} />
            </div>
            <h3 className="text-2xl font-extrabold text-christ-blue mb-2">
              Proposal Transmitted Successfully!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, <strong className="text-slate-800">{formData.name}</strong>. Your inquiry has been routed to the CAI Coordination Cell for the selected campus. You will receive a response within 48 business hours.
            </p>
            <button 
              className="px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
              onClick={onClose}
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
