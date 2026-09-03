import React from 'react';
import { 
  Sparkles, 
  Bot, 
  HeartPulse, 
  LineChart, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  ArrowRight 
} from 'lucide-react';
import { researchClusters } from '../data/researchData';

const iconMap = {
  Sparkles: <Sparkles size={22} />,
  Bot: <Bot size={22} />,
  HeartPulse: <HeartPulse size={22} />,
  LineChart: <LineChart size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
  Cpu: <Cpu size={22} />
};

export default function ResearchClusters({ onOpenCollaborate }) {
  return (
    <section id="research" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-ai-cyan border border-sky-200 mb-3">
            <Layers size={14} />
            <span>Research Frontiers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-christ-blue tracking-tight mb-3">
            Strategic <span className="text-ai-cyan">Research Clusters</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Bridging fundamental theoretical inquiry with translational engineering to solve pressing challenges across health, climate, governance, and autonomous systems.
          </p>
        </div>

        {/* Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {researchClusters.map((cluster) => {
            return (
              <div 
                key={cluster.id} 
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-ai-cyan transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-ai-cyan">
                      {iconMap[cluster.icon] || <Sparkles size={22} />}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-amber-50 text-christ-gold-dark border border-amber-200">
                      {cluster.campusLead}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-christ-blue mb-1">
                    {cluster.title}
                  </h3>
                  <div className="text-xs font-semibold text-ai-cyan mb-3">
                    {cluster.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {cluster.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cluster.domains.map((dom, i) => (
                      <span key={i} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200">
                        {dom}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs">
                  <span className="font-bold text-christ-blue">{cluster.keyMetrics}</span>
                  <a 
                    href="#projects"
                    className="inline-flex items-center gap-1 text-ai-cyan font-bold hover:text-christ-blue transition-colors"
                  >
                    <span>View Projects</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
