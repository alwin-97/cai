import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { eventsData } from '../data/eventsData';

export default function EventsTimeline({ onNavigateToEvents }) {
  // Show only the recent 4 events on the main page
  const recentEvents = eventsData.slice(0, 4);

  return (
    <section id="events" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-ai-cyan border border-sky-200 mb-3">
            <Calendar size={14} />
            <span>Academic & Industry Engagements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-christ-blue tracking-tight mb-3">
            Recent & Upcoming <span className="text-ai-cyan">Events</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Featured university-wide hackathons, AI speaker series, and technical bootcamps across our 6 campus venues.
          </p>
        </div>

        {/* Grid of Recent 4 Events in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {recentEvents.map((ev) => (
            <div key={ev.id} className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-ai-cyan transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-1 mb-3 flex-wrap">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-christ-gold-dark bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                    <Calendar size={11} />
                    {ev.date}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-50 text-ai-cyan border border-sky-200">
                    {ev.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-christ-blue mb-2 leading-snug">
                  {ev.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {ev.desc}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-ai-cyan mb-4">
                  <MapPin size={12} className="shrink-0" />
                  <span className="line-clamp-1">{ev.campus}</span>
                </div>

                {ev.speakers && (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 mb-5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Invited Dignitaries
                    </div>
                    <div className="text-[11px] text-slate-700 font-medium line-clamp-2">
                      {ev.speakers.join(', ')}
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase">{ev.type}</span>
                <button 
                  className="inline-flex items-center gap-1.5 bg-amber-50 text-christ-gold-dark border border-amber-300 px-3.5 py-1.5 rounded-lg text-xs font-bold hover:bg-amber-100 transition-all cursor-pointer" 
                  onClick={() => alert(`Registration portal for "${ev.title}" opens 3 weeks prior to event dates.`)}
                >
                  <span>Register Interest</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action to View All Events on the Dedicated Page */}
        <div className="mt-12 text-center">
          <button 
            type="button"
            onClick={() => {
              if (onNavigateToEvents) {
                onNavigateToEvents();
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-christ-blue to-ai-cyan text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-xs hover:shadow-md hover:brightness-105 transition-all cursor-pointer"
          >
            <span>View All Events & Symposia ({eventsData.length})</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
