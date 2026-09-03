import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  FlaskConical, 
  Cpu, 
  Users, 
  ShieldCheck, 
  GraduationCap, 
  Network, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  FileText, 
  Target, 
  Building2, 
  Sparkles, 
  Compass, 
  UserCheck,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { 
  strategicOverview, 
  strategicPillars, 
  workingGroupsData, 
  strategicOutcomes, 
  strategicRoadmap 
} from '../data/strategicPillarsData';

const pillarIcons = {
  academics: <BookOpen size={24} />,
  research: <FlaskConical size={24} />,
  administration: <Cpu size={24} />,
  upskilling: <Users size={24} />
};

const reasonIcons = {
  ShieldCheck: <ShieldCheck size={22} className="text-ai-cyan" />,
  GraduationCap: <GraduationCap size={22} className="text-christ-blue" />,
  Network: <Network size={22} className="text-purple-600" />,
  Zap: <Zap size={22} className="text-christ-gold" />
};

export default function StrategicPillarsPage({ onNavigateHome, onOpenCollaborate }) {
  const [activePillarTab, setActivePillarTab] = useState('academics');
  const [activeGroupTab, setActiveGroupTab] = useState('academics');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedPillar = strategicPillars.find((p) => p.id === activePillarTab) || strategicPillars[0];
  const selectedGroup = workingGroupsData[activeGroupTab];

  return (
    <div className="bg-white text-slate-800">
      {/* 1. Page Header & Institutional Overview */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <button onClick={onNavigateHome} className="hover:text-christ-blue cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span className="text-christ-blue font-bold">Strategic Pillars</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-ai-cyan border border-sky-200 mb-4">
              <Sparkles size={13} />
              <span>University-Level Strategic Initiative</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-christ-blue tracking-tight leading-tight mb-4">
              AI Strategic Pillars <br />
              <span className="text-ai-cyan">CHRIST (Deemed to be University)</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              A university-wide mandate focused on enabling the responsible, strategic, and effective adoption 
              of Artificial Intelligence across academics, research, administration, and capability development—preparing 
              Christites to lead in AI-powered workplaces and society.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Why the AI Strategic Initiative? (4 Reasons) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-christ-blue tracking-tight mb-2">
              Why the AI Strategic Initiative?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Four fundamental imperatives driving the transformation of CHRIST into a globally recognized leader in responsible AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicOverview.reasons.map((reason, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-ai-cyan transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4">
                    {reasonIcons[reason.icon]}
                  </div>
                  <h3 className="text-lg font-bold text-christ-blue mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The 4 Strategic Focus Areas (Pillars Deep Dive) */}
      <section id="four-pillars" className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-ai-cyan border border-sky-200 mb-3">
              <Layers size={13} />
              <span>Core Operational Pillars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-christ-blue tracking-tight mb-3">
              Four Strategic Focus Areas
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Structured into four permanent Strategic Pillars governing curricula, scientific inquiry, operational automation, and pan-university capability building.
            </p>
          </div>

          {/* Pillar Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {strategicPillars.map((pillar) => {
              const isActive = pillar.id === activePillarTab;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarTab(pillar.id)}
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isActive 
                      ? 'bg-white border-ai-cyan shadow-md ring-2 ring-sky-100' 
                      : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-400">PILLAR {pillar.number}</span>
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-sky-50 text-ai-cyan' : 'bg-slate-100 text-slate-500'}`}>
                      {pillarIcons[pillar.id]}
                    </div>
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm sm:text-base mb-1 ${isActive ? 'text-christ-blue' : 'text-slate-800'}`}>
                      {pillar.title}
                    </h3>
                    <div className="text-xs text-slate-500 line-clamp-1">
                      {pillar.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Details Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            {/* Header of Active Pillar */}
            <div className="border-b border-slate-100 pb-6 mb-8">
              <div className="flex items-center gap-2 text-xs font-bold text-ai-cyan uppercase tracking-wider mb-2">
                <span>Strategic Pillar {selectedPillar.number}</span>
                <span>•</span>
                <span>{selectedPillar.subtitle}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-christ-blue mb-2">
                {selectedPillar.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                {selectedPillar.lead}
              </p>
            </div>

            {/* Strategic Initiatives List */}
            <div className="mb-10">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Target size={14} className="text-christ-blue" />
                <span>Key Strategic Initiatives & Mandates</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {selectedPillar.initiatives.map((init, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <CheckCircle2 size={16} className="text-ai-cyan shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-normal">{init}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PILLAR 1 SPECIAL: Three-Tier AI Competency Framework */}
            {selectedPillar.id === 'academics' && (
              <div className="mt-10 pt-8 border-t border-slate-100">
                <div className="text-center sm:text-left mb-6">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-christ-gold-dark uppercase tracking-wider mb-1">
                    <BookOpen size={13} />
                    <span>Curricular Architecture</span>
                  </div>
                  <h4 className="text-xl font-extrabold text-christ-blue">
                    Three-Tier AI Competency Framework in Teaching-Learning
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500">
                    A progressive, universal scaffolding embedded systematically into Graduate Attributes (GA) and Programme Outcomes.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {selectedPillar.framework.map((fw, idx) => (
                    <div 
                      key={idx} 
                      className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative flex flex-col justify-between"
                    >
                      <div>
                        <div className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-md bg-sky-100 text-ai-cyan mb-3">
                          {fw.tier}
                        </div>
                        <h5 className="text-lg font-bold text-christ-blue mb-1">
                          {fw.name}
                        </h5>
                        <div className="text-xs font-semibold text-christ-gold-dark mb-3">
                          {fw.target}
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed mb-6">
                          {fw.desc}
                        </p>
                      </div>

                      <div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Core Competencies
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {fw.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PILLAR 2 SPECIAL: Research Policies & Approved Tools */}
            {selectedPillar.id === 'research' && (
              <div className="mt-10 pt-8 border-t border-slate-100">
                <div className="mb-6">
                  <div className="text-xs font-bold text-christ-gold-dark uppercase tracking-wider mb-1">
                    Governance & Tool Repositories
                  </div>
                  <h4 className="text-xl font-extrabold text-christ-blue">
                    Responsible AI Research Framework & Policies
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {selectedPillar.resources.map((res, rIdx) => (
                    <div key={rIdx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
                      <div>
                        <div className="text-sm font-bold text-christ-blue mb-1">{res.name}</div>
                        <div className="text-xs text-slate-500 leading-relaxed mb-4">{res.desc}</div>
                      </div>
                      <button 
                        onClick={() => alert(`Accessing ${res.name} portal documentation...`)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-ai-cyan hover:underline cursor-pointer"
                      >
                        <span>Access Document</span>
                        <ChevronRight size={13} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PILLAR 3 SPECIAL: Priority Offices for AI Transformation */}
            {selectedPillar.id === 'administration' && (
              <div className="mt-10 pt-8 border-t border-slate-100">
                <div className="mb-6">
                  <div className="text-xs font-bold text-christ-gold-dark uppercase tracking-wider mb-1">
                    Institutional Transformation Projects
                  </div>
                  <h4 className="text-xl font-extrabold text-christ-blue">
                    Priority Offices for AI-Enabled Automation
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedPillar.priorityOffices.map((off, oIdx) => (
                    <div key={oIdx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="flex items-center gap-2 font-bold text-sm text-christ-blue mb-1">
                        <Building2 size={15} className="text-ai-cyan" />
                        <span>{off.name}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{off.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PILLAR 4 SPECIAL: Audience Tracks & Rollout Phases */}
            {selectedPillar.id === 'upskilling' && (
              <div className="mt-10 pt-8 border-t border-slate-100">
                <div className="mb-6">
                  <div className="text-xs font-bold text-christ-gold-dark uppercase tracking-wider mb-1">
                    Capacity Building Architecture
                  </div>
                  <h4 className="text-xl font-extrabold text-christ-blue">
                    Tailored Capability Tracks Across the University Community
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedPillar.tracks.map((track, tIdx) => (
                    <div key={tIdx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="text-sm font-bold text-christ-blue mb-1">{track.group}</div>
                      <p className="text-xs text-slate-600 leading-relaxed">{track.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Strategic Working Groups (Rebranded from Task Force Members) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-ai-cyan border border-sky-200 mb-3">
              <UserCheck size={13} />
              <span>Multi-Campus Academic Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-christ-blue tracking-tight mb-3">
              Strategic Pillar Working Groups
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Distinguished faculty leaders and campus coordinators steering implementation across all 6 campuses of CHRIST (Deemed to be University).
            </p>
          </div>

          {/* Group Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {Object.keys(workingGroupsData).map((key) => {
              const group = workingGroupsData[key];
              const isGroupActive = key === activeGroupTab;
              return (
                <button
                  key={key}
                  onClick={() => setActiveGroupTab(key)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                    isGroupActive 
                      ? 'bg-christ-blue text-white border-christ-blue shadow-sm' 
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {group.title.replace(" Strategic Pillar Working Group", "")} Working Group
                </button>
              );
            })}
          </div>

          {/* Group Members Grid */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10">
            <div className="mb-6 text-center sm:text-left">
              <h3 className="text-xl font-bold text-christ-blue mb-1">{selectedGroup.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500">{selectedGroup.desc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedGroup.members.map((member, mIdx) => (
                <div key={mIdx} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center text-christ-blue font-bold text-sm">
                      {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-christ-blue">{member.name}</h4>
                      <div className="text-xs text-ai-cyan font-medium">{member.campus}</div>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                    {member.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Intended Institutional Outcomes / Vision */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-christ-blue tracking-tight mb-2">
              Intended Institutional Outcomes
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Delivering measurable impact across curriculum, scientific inquiry, administration, and community leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicOutcomes.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs text-left">
                <div 
                  className="text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: item.color }}
                >
                  {item.area}
                </div>
                <h3 className="text-lg font-bold text-christ-blue mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Future Strategic Roadmap (Center for AI Direction) */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-ai-cyan border border-sky-200 mb-3">
              <Compass size={13} />
              <span>Center for AI Direction</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-christ-blue tracking-tight mb-3">
              Strategic Roadmap & Long-Term Vision
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Guiding the sustained expansion of the Center for Artificial Intelligence into an international benchmark for education, research, and enterprise incubation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {strategicRoadmap.map((road, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <div className="text-2xl font-black text-ai-cyan/40 mb-2">{road.step}</div>
                  <h4 className="text-sm font-bold text-christ-blue mb-2">{road.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{road.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
