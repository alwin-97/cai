import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CampusHub from './components/CampusHub';
import ResearchClusters from './components/ResearchClusters';
import ProjectsGrid from './components/ProjectsGrid';
import Infrastructure from './components/Infrastructure';
import EventsTimeline from './components/EventsTimeline';
import StrategicPillarsPage from './components/StrategicPillarsPage';
import LeadershipPage from './components/LeadershipPage';
import EventsPage from './components/EventsPage';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCampus, setSelectedCampus] = useState('central');
  const [projectCampusFilter, setProjectCampusFilter] = useState('all');

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#strategic-pillars') {
        setCurrentPage('strategic-pillars');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#leadership') {
        setCurrentPage('leadership');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#events') {
        setCurrentPage('events');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (page === 'strategic-pillars') {
      window.location.hash = '#strategic-pillars';
    } else if (page === 'leadership') {
      window.location.hash = '#leadership';
    } else if (page === 'events') {
      window.location.hash = '#events';
    } else {
      window.location.hash = '';
    }
  };

  const handleSelectCampus = (campusId) => {
    setCurrentPage('home');
    setSelectedCampus(campusId);
    setTimeout(() => {
      const element = document.getElementById('campuses');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleFilterProjectsByCampus = (campusId) => {
    setCurrentPage('home');
    setProjectCampusFilter(campusId);
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-body">
      {/* Top Navigation */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content: Render Page depending on currentPage */}
      {currentPage === 'strategic-pillars' ? (
        <main>
          <StrategicPillarsPage 
            onNavigateHome={() => handleNavigate('home')}
          />
        </main>
      ) : currentPage === 'leadership' ? (
        <main>
          <LeadershipPage 
            onNavigateHome={() => handleNavigate('home')}
          />
        </main>
      ) : currentPage === 'events' ? (
        <main>
          <EventsPage 
            onNavigateHome={() => handleNavigate('home')}
          />
        </main>
      ) : (
        <main>
          {/* Animated Hero Section with Canvas */}
          <HeroSection 
            onOpenCampusHub={() => handleSelectCampus('central')}
          />

          {/* 6-Campus Interactive Network Explorer */}
          <CampusHub 
            selectedCampus={selectedCampus}
            onSelectCampus={setSelectedCampus}
            onFilterProjectsByCampus={handleFilterProjectsByCampus}
          />

          {/* Core Strategic Research Clusters */}
          <ResearchClusters />

          {/* Applied Innovations & Flagship Projects Filterable Grid */}
          <ProjectsGrid 
            activeFilterCampus={projectCampusFilter}
            onFilterChange={setProjectCampusFilter}
          />

          {/* High-Performance Computing Mesh & GPU Clusters */}
          <Infrastructure />

          {/* Unified Hackathons, Seminars & Symposia Timeline (Showing Recent 4) */}
          <EventsTimeline 
            onNavigateToEvents={() => handleNavigate('events')}
          />
        </main>
      )}

      {/* Footer */}
      <Footer 
        onSelectCampus={handleSelectCampus}
      />
    </div>
  );
}
