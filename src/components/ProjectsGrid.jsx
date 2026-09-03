import React, { useState } from 'react';
import { 
  Rocket, 
  MapPin, 
  ExternalLink, 
  Info,
  X 
} from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function ProjectsGrid({ activeFilterCampus, onFilterChange }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  // Filter projects based on active filter campus or category
  const filteredProjects = projectsData.filter((proj) => {
    if (activeFilterCampus && activeFilterCampus !== 'all') {
      return proj.campus === activeFilterCampus;
    }
    if (selectedCategory !== 'all') {
      return proj.category.toLowerCase().includes(selectedCategory.toLowerCase());
    }
    return true;
  });

  const categories = [
    { id: 'all', label: 'All Innovations' },
    { id: 'genai', label: 'GenAI & NLP' },
    { id: 'robotics', label: 'Robotics & Edge' },
    { id: 'healthcare', label: 'Healthcare AI' },
    { id: 'analytics', label: 'Climate & Analytics' },
    { id: 'fintech', label: 'FinTech AI' },
    { id: 'humanities', label: 'Heritage & Social' }
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-ai-cyan border border-sky-200 mb-3">
            <Rocket size={14} />
            <span>Applied Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-christ-blue tracking-tight mb-3">
            Featured <span className="text-ai-cyan">Innovations & Projects</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Discover student-faculty co-engineered AI solutions deployed in hospitals, agricultural cooperatives, disaster zones, and financial exchanges.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                selectedCategory === cat.id && (!activeFilterCampus || activeFilterCampus === 'all') 
                  ? 'bg-christ-blue text-white border-christ-blue shadow-sm' 
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
              onClick={() => {
                setSelectedCategory(cat.id);
                onFilterChange('all');
              }}
            >
              {cat.label}
            </button>
          ))}
          {activeFilterCampus && activeFilterCampus !== 'all' && (
            <button 
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold bg-amber-50 text-christ-gold-dark border border-amber-300 shadow-xs cursor-pointer hover:bg-amber-100"
              onClick={() => onFilterChange('all')}
            >
              <span>Filtering by Campus Node (Clear)</span>
              <span>×</span>
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-ai-cyan transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-christ-blue">
                    <MapPin size={12} className="text-ai-cyan" />
                    <span>{project.campusLabel}</span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-christ-blue mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Metrics strip */}
                <div className="bg-slate-50 border-l-4 border-ai-cyan p-3 rounded-r-lg text-xs font-mono text-ai-blue font-semibold mb-4">
                  {project.metrics}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase">Project Mentor</span>
                  <span className="text-xs font-bold text-slate-700">{project.lead}</span>
                </div>
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="inline-flex items-center gap-1 text-ai-cyan text-xs font-bold hover:text-christ-blue transition-colors cursor-pointer"
                >
                  <span>Specs</span>
                  <Info size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4" onClick={() => setActiveProjectModal(null)}>
            <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
                onClick={() => setActiveProjectModal(null)}
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-sky-50 text-ai-cyan border border-sky-200">
                  {activeProjectModal.category}
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-amber-50 text-christ-gold-dark border border-amber-300">
                  {activeProjectModal.badge}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-christ-blue mb-2">
                {activeProjectModal.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {activeProjectModal.description}
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-5">
                <div className="text-[11px] font-bold text-ai-cyan uppercase tracking-wider mb-1">
                  Benchmarked Performance & Impact
                </div>
                <div className="text-sm font-mono font-bold text-christ-blue">
                  {activeProjectModal.metrics}
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Technology Architecture
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeProjectModal.techStack.map((tech, i) => (
                    <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-sky-50 text-ai-cyan border border-sky-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="text-xs text-slate-500">
                  Lead: <strong className="text-christ-blue font-bold">{activeProjectModal.lead}</strong>
                </div>
                <button 
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-christ-blue to-ai-cyan text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm hover:shadow-md cursor-pointer"
                  onClick={() => alert(`Connecting to ${activeProjectModal.campusLabel} repository... Demo environment open for academic review.`)}
                >
                  <span>Request Code Access</span>
                  <ExternalLink size={13} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
