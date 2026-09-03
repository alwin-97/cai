import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Filter, 
  CheckCircle2, 
  Clock, 
  Users, 
  ExternalLink 
} from 'lucide-react';
import { eventsData } from '../data/eventsData';

export default function EventsPage({ onNavigateHome }) {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredEvents = eventsData.filter((ev) => {
    if (selectedType !== 'all' && ev.type.toLowerCase() !== selectedType.toLowerCase()) {
      return false;
    }
    if (selectedStatus !== 'all' && ev.status.toLowerCase() !== selectedStatus.toLowerCase()) {
      return false;
    }
    return true;
  });

  const eventTypes = [
    { id: 'all', label: 'All Formats' },
    { id: 'hackathon', label: 'Hackathons' },
    { id: 'symposium', label: 'Symposia & Conclaves' },
    { id: 'workshop', label: 'Bootcamps & Workshops' },
    { id: 'lecture', label: 'Distinguished Lectures' }
  ];

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
            <span className="text-christ-blue font-bold">Events</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-ai-cyan border border-sky-200 mb-4">
              <Calendar size={14} />
              <span>Pan-University Academic & Industry Calendar</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-christ-blue tracking-tight leading-tight mb-4">
              Events, Hackathons & <br />
              <span className="text-ai-cyan">Research Symposia</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Explore university-wide deep-tech hackathons, global AI keynote series, faculty enablement bootcamps, 
              and interdisciplinary conferences spanning all 6 campuses of CHRIST (Deemed to be University).
            </p>

            <div className="flex justify-center gap-2 flex-wrap">
              {eventTypes.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedType(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                    selectedType === cat.id
                      ? 'bg-christ-blue text-white border-christ-blue shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Events Directory Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Status Sub-filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 mb-10 border-b border-slate-100">
            <div className="text-sm font-bold text-slate-700">
              Showing <span className="text-christ-blue">{filteredEvents.length}</span> Scheduled Events
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">Status:</span>
              <button
                onClick={() => setSelectedStatus('all')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                  selectedStatus === 'all' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedStatus('upcoming')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                  selectedStatus === 'upcoming' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setSelectedStatus('completed')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                  selectedStatus === 'completed' ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Archive
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredEvents.map((ev) => {
              const isUpcoming = ev.status === 'Upcoming';
              return (
                <div 
                  key={ev.id} 
                  className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-ai-cyan transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-christ-gold-dark bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg">
                        <Calendar size={13} />
                        {ev.date}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-sky-50 text-ai-cyan border border-sky-200">
                          {ev.badge}
                        </span>
                        {isUpcoming ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Upcoming
                          </span>
                        ) : (
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                            Concluded
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-christ-blue mb-2.5">
                      {ev.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {ev.desc}
                    </p>

                    <div className="flex items-center gap-2 text-xs font-bold text-ai-cyan mb-5">
                      <MapPin size={14} />
                      <span>{ev.campus} • {ev.mode}</span>
                    </div>

                    {ev.speakers && (
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 mb-6">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Keynote Dignitaries & Academic Chairs
                        </div>
                        <div className="text-xs text-slate-700 font-semibold">
                          {ev.speakers.join(', ')}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-400 uppercase tracking-wider">{ev.type}</span>
                    {ev.registrationOpen ? (
                      <button 
                        className="inline-flex items-center gap-1.5 bg-gradient-to-r from-christ-blue to-ai-cyan text-white px-4 py-2 rounded-xl font-bold hover:brightness-105 shadow-2xs transition-all cursor-pointer" 
                        onClick={() => alert(`Registration portal for "${ev.title}" opens 3 weeks prior to event date. Updates will be emailed to registered Christites.`)}
                      >
                        <span>Register Interest</span>
                        <ArrowRight size={13} />
                      </button>
                    ) : (
                      <button 
                        className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 px-4 py-2 rounded-xl font-semibold hover:bg-slate-200 transition-all cursor-pointer"
                        onClick={() => alert(`Accessing conference proceedings & recorded sessions for "${ev.title}"...`)}
                      >
                        <span>View Proceedings</span>
                        <ExternalLink size={13} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16 bg-slate-50 border border-slate-200 rounded-3xl">
              <Calendar size={36} className="text-slate-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-christ-blue mb-1">No Events Found</h4>
              <p className="text-sm text-slate-500 mb-4">Try selecting a different format or status filter above.</p>
              <button 
                onClick={() => { setSelectedType('all'); setSelectedStatus('all'); }}
                className="px-4 py-2 rounded-xl bg-christ-blue text-white text-xs font-bold cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
