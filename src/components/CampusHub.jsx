import React from 'react';
import { 
  MapPin, 
  FlaskConical, 
  Layers, 
  ExternalLink, 
  UserCheck, 
  CheckCircle2, 
  Compass 
} from 'lucide-react';
import { campusesData } from '../data/campusesData';

export default function CampusHub({ selectedCampus, onSelectCampus, onFilterProjectsByCampus, onOpenCollaborate }) {
  const currentCampus = campusesData.find((c) => c.id === selectedCampus) || campusesData[0];

  return (
    <section id="campuses" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-ai-cyan border border-sky-200 mb-3">
            <Compass size={14} />
            <span>Pan-University Presence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-christ-blue tracking-tight mb-3">
            One Center. <span className="text-ai-cyan">Six Specialized Campuses.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            CAI operates as a federated research mesh across all campuses of CHRIST (Deemed to be University),
            empowering each location with distinct specialized capabilities while sharing high-performance compute and industry grants.
          </p>
        </div>

        {/* Interactive Hub Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 items-start">
          {/* Left Column: Campus Selector Tabs */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2">
              Select Campus Node
            </div>
            {campusesData.map((campus) => {
              const isActive = campus.id === selectedCampus;
              return (
                <button
                  key={campus.id}
                  className={`w-full flex items-center justify-between p-4 rounded-xl bg-white border text-left transition-all shadow-xs hover:border-ai-cyan hover:shadow-md cursor-pointer ${
                    isActive 
                      ? 'border-l-4 shadow-sm' 
                      : 'border-slate-200'
                  }`}
                  onClick={() => onSelectCampus(campus.id)}
                  style={{
                    borderLeftColor: isActive ? campus.accentColor : undefined
                  }}
                >
                  <div className="space-y-1">
                    <div className={`font-bold text-sm ${isActive ? 'text-christ-blue' : 'text-slate-800'}`}>
                      {campus.shortName}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {campus.state} • {campus.stats.projects} Projects
                    </div>
                  </div>
                  <div 
                    className="w-2.5 h-2.5 rounded-full transition-transform"
                    style={{
                      backgroundColor: campus.accentColor,
                      transform: isActive ? 'scale(1.25)' : 'scale(1)'
                    }}
                  />
                </button>
              );
            })}


          </div>

          {/* Right Column: Active Campus Display Card */}
          <div 
            className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm transition-all"
            style={{ borderTop: `4px solid ${currentCampus.accentColor}` }}
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-200 pb-6 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span 
                    className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-md border"
                    style={{ 
                      color: currentCampus.accentColor, 
                      borderColor: `${currentCampus.accentColor}40`,
                      backgroundColor: `${currentCampus.accentColor}10` 
                    }}
                  >
                    <MapPin size={11} />
                    {currentCampus.state}
                  </span>
                  <span className="inline-flex items-center text-xs font-bold px-2.5 py-0.5 rounded-md border border-amber-300 bg-amber-50 text-christ-gold-dark">
                    CAI Chapter
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-christ-blue mb-1">
                  {currentCampus.name}
                </h3>
                <div className="text-sm font-semibold text-ai-cyan">
                  {currentCampus.tagline}
                </div>
              </div>

              <div className="sm:text-right">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Campus Location</div>
                <div className="text-xs sm:text-sm text-slate-700 font-medium max-w-xs mt-0.5">
                  {currentCampus.location}
                </div>
              </div>
            </div>

            {/* Campus Focus & Labs Detail Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Primary Focus */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  <Layers size={14} style={{ color: currentCampus.accentColor }} />
                  <span>Specialized Research Focus</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {currentCampus.focus}
                </p>

                {currentCampus.coordinator && (
                  <div 
                    className="mt-5 p-4 bg-slate-50 rounded-xl border border-slate-200"
                    style={{ borderLeft: `3px solid ${currentCampus.accentColor}` }}
                  >
                    <div className="text-[11px] font-bold text-slate-500 flex items-center gap-1.5 uppercase">
                      <UserCheck size={13} className="text-ai-cyan" />
                      <span>Campus Lead Coordinator</span>
                    </div>
                    <div className="text-sm font-extrabold text-christ-blue mt-1">
                      {currentCampus.coordinator}
                    </div>
                    <div className="text-xs text-slate-600">
                      {currentCampus.role}
                    </div>
                  </div>
                )}
              </div>

              {/* Dedicated Labs */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  <FlaskConical size={14} style={{ color: currentCampus.accentColor }} />
                  <span>Key Labs & Facilities</span>
                </div>
                <ul className="space-y-2 m-0 p-0 list-none">
                  {currentCampus.labs.map((lab, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      <CheckCircle2 size={16} style={{ color: currentCampus.accentColor }} className="shrink-0" />
                      <span>{lab}</span>
                    </li>
                  ))}
                </ul>

                {/* Highlight banner */}
                {currentCampus.highlight && (
                  <div className="mt-5 p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl">
                    <div className="text-[11px] font-bold text-christ-gold-dark uppercase tracking-wider mb-1">
                      Campus Milestone
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed m-0">
                      {currentCampus.highlight}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
              <div>
                <div className="text-2xl font-extrabold" style={{ color: currentCampus.accentColor }}>
                  {currentCampus.stats.projects}
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase">Active Projects</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-christ-blue">
                  {currentCampus.stats.faculty}
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase">Faculty Researchers</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-ai-cyan">
                  {currentCampus.stats.students}
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase">Student Innovators</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-christ-gold">
                  {currentCampus.stats.patents}
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase">Patents / Papers</div>
              </div>
            </div>

            {/* Actions for this campus */}
            <div className="flex gap-3 mt-8 flex-wrap">
              <button 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-christ-blue to-ai-cyan text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer"
                onClick={() => onFilterProjectsByCampus(currentCampus.id)}
              >
                <span>View {currentCampus.shortName} Innovations</span>
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
