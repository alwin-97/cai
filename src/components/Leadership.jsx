import React from 'react';
import { GraduationCap } from 'lucide-react';
import { leadershipData } from '../data/eventsData';

export default function Leadership() {
  return (
    <section id="leadership" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-ai-cyan border border-sky-200 mb-3">
            <GraduationCap size={14} />
            <span>Academic Stewardship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-christ-blue tracking-tight mb-3">
            Leadership & <span className="text-ai-cyan">Campus Directors</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Guided by visionary university leadership and distinguished faculty chairs across computer science, engineering, data analytics, and ethics.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {leadershipData.map((leader, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-center shadow-xs hover:shadow-md hover:border-ai-cyan transition-all">
              <img 
                src={leader.image} 
                alt={leader.name} 
                className="w-24 h-24 rounded-full object-cover mx-auto mb-5 border-2 border-christ-blue shadow-md"
                onError={(e) => {
                  e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(leader.name) + '&background=002147&color=ffffff';
                }}
              />
              <h3 className="text-lg font-bold text-christ-blue mb-1">{leader.name}</h3>
              <div className="text-xs font-bold text-ai-cyan mb-1">{leader.role}</div>
              <div className="text-[11px] font-bold text-christ-gold-dark uppercase tracking-wider mb-3">
                {leader.designation}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                "{leader.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
