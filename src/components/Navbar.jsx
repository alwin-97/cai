import React, { useState } from 'react';
import { Menu, X, Home, Layers, Compass, Calendar, GraduationCap } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (target) => {
    setMobileMenuOpen(false);
    if (target === 'strategic-pillars') {
      onNavigate('strategic-pillars');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'leadership') {
      onNavigate('leadership');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'events') {
      onNavigate('events');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <>
      {/* Website Under Development Top Banner */}
      <div className="bg-amber-400 text-slate-950 py-1.5 px-4 text-xs font-bold text-center flex items-center justify-center gap-2 shadow-2xs tracking-wide">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
        </span>
        <span>Website Under Development</span>
      </div>

      {/* Main Navigation Bar - CAI Logo on LHS and University Logo on RHS */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
          {/* LHS: CAI Logo */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center transition-transform hover:scale-[1.02] cursor-pointer bg-transparent border-0 p-0" 
            title="Center for Artificial Intelligence (CAI)"
          >
            <img 
              src="/cai-logo.png" 
              alt="Center for Artificial Intelligence (CAI)" 
              className="h-10 sm:h-12 w-auto object-contain block" 
            />
          </button>

          {/* Center: Navigation Links with Uniform Icons and Styling */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-3 list-none m-0 p-0">
              <li>
                <button 
                  onClick={() => handleNavClick('hero')} 
                  className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    currentPage === 'home'
                      ? 'bg-sky-50 text-ai-cyan font-bold border border-sky-200 shadow-2xs'
                      : 'text-slate-700 hover:text-christ-blue hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <Home size={16} className={currentPage === 'home' ? 'text-ai-cyan' : 'text-slate-500'} />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('strategic-pillars')} 
                  className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    currentPage === 'strategic-pillars'
                      ? 'bg-sky-50 text-ai-cyan font-bold border border-sky-200 shadow-2xs'
                      : 'text-slate-700 hover:text-christ-blue hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <Layers size={16} className={currentPage === 'strategic-pillars' ? 'text-ai-cyan' : 'text-slate-500'} />
                  <span>Strategic Pillars</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('campuses')} 
                  className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-sm font-semibold text-slate-700 hover:text-christ-blue hover:bg-slate-50 border border-transparent transition-all cursor-pointer"
                >
                  <Compass size={16} className="text-slate-500" />
                  <span>Campuses</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('events')} 
                  className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    currentPage === 'events'
                      ? 'bg-sky-50 text-ai-cyan font-bold border border-sky-200 shadow-2xs'
                      : 'text-slate-700 hover:text-christ-blue hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <Calendar size={16} className={currentPage === 'events' ? 'text-ai-cyan' : 'text-slate-500'} />
                  <span>Events</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('leadership')} 
                  className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    currentPage === 'leadership'
                      ? 'bg-sky-50 text-ai-cyan font-bold border border-sky-200 shadow-2xs'
                      : 'text-slate-700 hover:text-christ-blue hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <GraduationCap size={16} className={currentPage === 'leadership' ? 'text-ai-cyan' : 'text-slate-500'} />
                  <span>Leadership</span>
                </button>
              </li>
            </ul>
          </nav>

          {/* RHS: University Logo */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleNavClick('hero')} 
              className="flex items-center transition-transform hover:scale-[1.02] cursor-pointer bg-transparent border-0 p-0" 
              title="CHRIST (Deemed to be University)"
            >
              <img 
                src="/christ-university-logo.png" 
                alt="CHRIST (Deemed to be University)" 
                className="h-10 sm:h-12 w-auto object-contain block" 
              />
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-1 text-slate-800 hover:text-christ-blue cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 p-4 space-y-2 shadow-lg">
            <button 
              onClick={() => handleNavClick('hero')} 
              className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold flex items-center gap-2 ${
                currentPage === 'home' ? 'bg-sky-50 text-ai-cyan font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <Home size={16} className={currentPage === 'home' ? 'text-ai-cyan' : 'text-slate-500'} />
              <span>Home</span>
            </button>
            <button 
              onClick={() => handleNavClick('strategic-pillars')} 
              className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold flex items-center gap-2 ${
                currentPage === 'strategic-pillars' ? 'bg-sky-50 text-ai-cyan font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <Layers size={16} className={currentPage === 'strategic-pillars' ? 'text-ai-cyan' : 'text-slate-500'} />
              <span>Strategic Pillars</span>
            </button>
            <button 
              onClick={() => handleNavClick('campuses')} 
              className="w-full text-left py-2.5 px-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg flex items-center gap-2"
            >
              <Compass size={16} className="text-slate-500" />
              <span>Campuses</span>
            </button>
            <button 
              onClick={() => handleNavClick('events')} 
              className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold flex items-center gap-2 ${
                currentPage === 'events' ? 'bg-sky-50 text-ai-cyan font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <Calendar size={16} className={currentPage === 'events' ? 'text-ai-cyan' : 'text-slate-500'} />
              <span>Events & Symposia</span>
            </button>
            <button 
              onClick={() => handleNavClick('leadership')} 
              className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold flex items-center gap-2 ${
                currentPage === 'leadership' ? 'bg-sky-50 text-ai-cyan font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <GraduationCap size={16} className={currentPage === 'leadership' ? 'text-ai-cyan' : 'text-slate-500'} />
              <span>Leadership</span>
            </button>
          </div>
        )}
      </header>
    </>
  );
}
