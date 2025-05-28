import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import AIEngineerSection from './components/AIEngineerSection';
import ArtistSection from './components/ArtistSection';
import ResearcherSection from './components/ResearcherSection';
import LeadershipSection from './components/LeadershipSection';
import BlogSection from './components/BlogSection';

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const mainContentRef = useRef(null);

  // Scroll to top when page changes
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0; // For scrollable div (not strictly necessary with window scroll)
    }
    window.scrollTo(0, 0); // For window
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeSection setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutSection />;
      case 'ai-engineer':
        return <AIEngineerSection />;
      case 'artist':
        return <ArtistSection />;
      case 'researcher':
        return <ResearcherSection />;
      case 'leadership':
        return <LeadershipSection />;
      case 'blog':
        return <BlogSection />;
      default:
        return <HomeSection setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    // The font-sans and antialiased classes apply the Inter font and font smoothing
    // bg-slate-50 sets the default background for the entire app
    <div className="flex flex-col min-h-screen font-sans antialiased bg-slate-50">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main ref={mainContentRef} className="flex-grow">
        {/* The animate-fadeIn class uses the animation defined in tailwind.config.js */}
        <div key={currentPage} className="animate-fadeIn">
          {renderPage()}
        </div>
      </main>
      <Footer />
    </div>
  );
}