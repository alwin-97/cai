import React from 'react';
import { MapPin, Mail, Globe } from 'lucide-react';
import { campusesData } from '../data/campusesData';

export default function Footer({ onSelectCampus }) {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Call to Action banner before footer links */}
        <div className="bg-gradient-to-r from-christ-blue via-christ-blue-light to-ai-cyan rounded-3xl p-8 sm:p-14 text-center shadow-lg text-white mb-16 relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-full bg-amber-400/20 text-christ-gold-light border border-amber-300/40 mb-4">
              Academic & Industrial Convergence
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Ready to Build the Future of AI with CHRIST University?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base mb-8 leading-relaxed font-normal">
              Whether you are an undergraduate innovator, doctoral scholar, hospital research fellow, or industry enterprise, CAI welcomes your partnership across all 6 campuses.
            </p>
            <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
              <a 
                href="mailto:ai@christuniversity.in" 
                className="inline-flex items-center gap-2 bg-white text-christ-blue hover:bg-slate-100 text-sm font-semibold px-6 py-3 rounded-xl shadow-xs transition-colors"
              >
                <Mail size={16} />
                <span>ai@christuniversity.in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Both Logos at Both Ends in Footer Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-200 pb-8 mb-8 gap-6">
          <div>
            <img 
              src="/cai-logo.png" 
              alt="Centre for Artificial Intelligence" 
              className="h-12 w-auto object-contain" 
            />
          </div>
          <div className="sm:text-right">
            <img 
              src="/christ-university-logo.png" 
              alt="CHRIST (Deemed to be University)" 
              className="h-12 w-auto object-contain sm:ml-auto" 
            />
          </div>
        </div>

        {/* University Campuses Presented in a Straight Horizontal Line */}
        <div className="border-b border-slate-200 pb-6 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-slate-600">
            {campusesData.filter(c => c.id !== 'all').map((c, i, arr) => (
              <React.Fragment key={c.id}>
                <a 
                  href="#campuses" 
                  className="hover:text-christ-blue hover:underline transition-colors whitespace-nowrap"
                  onClick={() => onSelectCampus(c.id)}
                >
                  {c.name}
                </a>
                {i < arr.length - 1 && <span className="text-slate-300 hidden sm:inline">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Footer 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Col */}
          <div>
            <h4 className="text-xs font-bold text-christ-blue uppercase tracking-wider mb-4">
              About the Center
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
              Pioneering interdisciplinary artificial intelligence research, human-aligned machine learning, and technological leadership across all campuses of CHRIST (Deemed to be University).
            </p>
          </div>


          {/* Contact & Secretariat */}
          <div>
            <h4 className="text-xs font-bold text-christ-blue uppercase tracking-wider mb-4">
              CAI Secretariat
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-christ-blue shrink-0 mt-0.5" />
                <span>Third Floor, Block II, CHRIST (Deemed to be University), Bangalore Central Campus</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-christ-blue" />
                <a href="mailto:ai@christuniversity.in" className="font-semibold text-christ-blue hover:underline">
                  ai@christuniversity.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={15} className="text-christ-blue" />
                <a href="https://christuniversity.in" target="_blank" rel="noreferrer" className="font-semibold text-christ-blue hover:underline">
                  christuniversity.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} Center for Artificial Intelligence (CAI), CHRIST (Deemed to be University). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-christ-blue transition-colors">Research Ethics Policy</a>
            <a href="#" className="hover:text-christ-blue transition-colors">Open Source Governance</a>
            <a href="#" className="hover:text-christ-blue transition-colors">Privacy & Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
