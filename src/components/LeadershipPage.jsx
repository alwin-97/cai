import React, { useEffect } from 'react';
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  Building2, 
  ArrowRight, 
  Quote, 
  Sparkles, 
  ShieldCheck, 
  Compass,
  Mail
} from 'lucide-react';
import { 
  universityPatrons, 
  caiDirectors, 
  campusLeads, 
  advisoryCouncil 
} from '../data/leadershipData';

export default function LeadershipPage({ onNavigateHome }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white text-slate-800">
      {/* 1. Header Banner */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <button onClick={onNavigateHome} className="hover:text-christ-blue cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span className="text-christ-blue font-bold">Leadership & Governance</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-ai-cyan border border-sky-200 mb-4">
              <GraduationCap size={14} />
              <span>Academic Stewardship & Governance</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-christ-blue tracking-tight leading-tight mb-4">
              Leadership & <span className="text-ai-cyan">Campus Directors</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Guided by visionary university patrons, distinguished senior faculty chairs, and multi-campus directors 
              uniting computer science, engineering, clinical healthcare, business analytics, and ethical philosophy into an apex AI ecosystem.
            </p>

            <div className="flex justify-center gap-3 flex-wrap">
              <a 
                href="#campus-directors" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-christ-blue to-ai-cyan text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-sm hover:shadow-md hover:brightness-105 transition-all"
              >
                <span>Explore 6-Campus Directors</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. University Patrons & Chancellery */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-christ-gold-dark uppercase tracking-wider mb-2">
              <Award size={14} className="text-christ-gold" />
              <span>Executive Chancellery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-christ-blue tracking-tight">
              University Executive Patrons
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mt-2">
              Visionary stewardship championing values-driven, human-centered technological innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {universityPatrons.map((patron, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between relative shadow-2xs hover:shadow-xs transition-all"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={patron.image} 
                      alt={patron.name} 
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-christ-blue shadow-sm"
                      onError={(e) => {
                        e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(patron.name) + '&background=002147&color=ffffff';
                      }}
                    />
                    <div>
                      <h3 className="text-lg font-bold text-christ-blue">{patron.name}</h3>
                      <div className="text-xs font-bold text-ai-cyan">{patron.role}</div>
                      <div className="text-[11px] font-semibold text-slate-500">{patron.institution}</div>
                    </div>
                  </div>

                  <div className="relative">
                    <Quote size={20} className="text-slate-300 mb-2" />
                    <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                      "{patron.message}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Center for Artificial Intelligence (CAI) Directorship */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-ai-cyan border border-sky-200 mb-3">
              <Sparkles size={13} />
              <span>Center Directorship</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-christ-blue tracking-tight">
              CAI Executive Directors & Domain Chairs
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-2">
              Overseeing strategic R&D, compute infrastructure allocation, industry consortia, and cross-campus alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caiDirectors.map((director, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-ai-cyan transition-all flex flex-col justify-between"
              >
                <div>
                  <img 
                    src={director.image} 
                    alt={director.name} 
                    className="w-20 h-20 rounded-2xl object-cover mx-auto mb-4 border-2 border-slate-200 shadow-sm"
                    onError={(e) => {
                      e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(director.name) + '&background=002147&color=ffffff';
                    }}
                  />
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-christ-blue mb-0.5">{director.name}</h3>
                    <div className="text-xs font-bold text-ai-cyan mb-1">{director.role}</div>
                    <div className="text-[11px] font-semibold text-christ-gold-dark uppercase tracking-wider">
                      {director.domain}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-600 mb-4 leading-relaxed">
                    <strong className="text-slate-800 font-bold block mb-1">Portfolio:</strong>
                    {director.focus}
                  </div>

                  <p className="text-xs text-slate-500 italic leading-relaxed text-center mb-4">
                    "{director.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Multi-Campus Academic Directors (All 6 Campuses) */}
      <section id="campus-directors" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-ai-cyan border border-sky-200 mb-3">
              <Compass size={13} />
              <span>Pan-University Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-christ-blue tracking-tight">
              Campus Directors & Academic Leads
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-2">
              Empowering each of CHRIST University's 6 campuses with local lab stewardship, faculty research groups, and student cohorts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusLeads.map((lead, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:bg-white hover:shadow-md hover:border-ai-cyan transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-christ-blue">
                    <MapPin size={14} className="text-ai-cyan" />
                    <span>{lead.campus}</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-100 text-ai-cyan">
                    Active Node
                  </span>
                </div>

                <h3 className="text-xl font-bold text-christ-blue mb-1">
                  {lead.lead}
                </h3>
                <div className="text-xs font-semibold text-slate-500 mb-4">
                  {lead.designation}
                </div>

                <div className="space-y-2 border-t border-slate-200/80 pt-4 text-xs">
                  <div>
                    <span className="text-slate-400 font-bold block">Specialized Research Domain:</span>
                    <span className="font-semibold text-slate-700">{lead.focus}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block">Flagship Facility:</span>
                    <span className="font-semibold text-christ-gold-dark">{lead.facility}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Advisory Council & Governance */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-christ-blue tracking-tight">
              Advisory Council & Ethics Governance
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mt-2">
              Overseeing research compliance, institutional data integrity, and ethical sandboxing across all campuses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisoryCouncil.map((adv, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs">
                <div className="flex items-center gap-2 mb-3 text-ai-cyan font-bold text-xs">
                  <ShieldCheck size={16} />
                  <span>Governance Chair</span>
                </div>
                <h3 className="text-lg font-bold text-christ-blue mb-1">{adv.name}</h3>
                <div className="text-xs font-semibold text-slate-600 mb-2">{adv.role}</div>
                <div className="text-[11px] text-slate-400">{adv.affiliation}</div>
              </div>
            ))}
          </div>

          {/* Connect Banner */}
          <div className="mt-14 bg-gradient-to-r from-christ-blue via-christ-blue-light to-ai-cyan rounded-3xl p-8 sm:p-12 text-center text-white shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Engage with CAI Leadership
            </h3>
            <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto mb-6">
              Invite university AI leadership for keynote addresses, academic advisory panels, or joint institutional research charters.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a 
                href="mailto:ai@christuniversity.in"
                className="bg-white text-christ-blue hover:bg-slate-100 text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-xs transition-colors"
              >
                ai@christuniversity.in
              </a>
              <button 
                onClick={onNavigateHome}
                className="bg-christ-blue-dark/50 hover:bg-christ-blue-dark text-white border border-white/30 text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer"
              >
                Back to Home Overview
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
