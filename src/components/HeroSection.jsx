import React from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import HeroCanvas from './HeroCanvas';

export default function HeroSection({ onOpenCampusHub, onOpenCollaborate }) {
  return (
    <section id="hero" className="relative min-h-[82vh] flex items-center justify-center overflow-hidden py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40">
      {/* Dynamic Synaptic Neural Canvas positioned in background */}
      <HeroCanvas />

      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        {/* Institutional Pill Badge linking to Strategic Pillars */}
        <a 
          href="#strategic-pillars" 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs mb-6 text-xs sm:text-sm font-semibold text-slate-700 hover:border-ai-cyan hover:shadow-xs transition-all cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-ai-cyan pulse-ring-dot"></span>
          <span className="text-christ-blue font-bold">University AI Strategic Pillars</span>
          <span className="text-slate-400">•</span>
          <span className="text-ai-cyan font-bold flex items-center gap-1">
            Explore 4 Pillars <ArrowRight size={12} />
          </span>
        </a>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-christ-blue tracking-tight leading-tight mb-6">
          Engineering <span className="bg-gradient-to-r from-christ-blue via-ai-cyan to-indigo-600 bg-clip-text text-transparent">Intelligent Frontiers</span> For Society & Science
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          The <strong className="text-slate-800 font-semibold">Center for Artificial Intelligence (CAI)</strong> is CHRIST (Deemed to be University)'s apex 
          research ecosystem—uniting engineering, clinical analytics, digital humanities, and edge computing across all campuses 
          into a singular high-impact innovation engine.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap mb-14">
          <a 
            href="#campuses" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-christ-blue to-ai-cyan text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:brightness-105 transition-all"
            onClick={onOpenCampusHub}
          >
            <span>Explore 6-Campus Network</span>
            <Compass size={18} />
          </a>
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 bg-white text-christ-blue border border-slate-300 text-sm font-semibold px-6 py-3 rounded-xl shadow-2xs hover:border-ai-cyan hover:text-ai-cyan hover:bg-slate-50 transition-all"
          >
            <span>Flagship Innovations</span>
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Key Counters Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-ai-cyan transition-all text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-christ-blue mb-1">6</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Campuses</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-ai-cyan transition-all text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-ai-cyan mb-1">55+</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Labs & Projects</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-ai-cyan transition-all text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-purple-600 mb-1">1,370+</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Student Fellows</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-ai-cyan transition-all text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-christ-gold mb-1">16</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Patents Filed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
