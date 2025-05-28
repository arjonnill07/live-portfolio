import React, { useState } from 'react';
import { Home, User, Brain, Palette, Mic2, Award, Users, BookOpen, Menu, X, Linkedin, Github, Mail } from 'lucide-react';

const navLinks = [
  { id: 'home', text: 'Home', icon: <Home size={18} /> },
  { id: 'about', text: 'About', icon: <User size={18} /> },
  { id: 'ai-engineer', text: 'AI Engineer', icon: <Brain size={18} /> },
  { id: 'artist', text: 'Artist', icon: <Palette size={18} /> },
  { id: 'researcher', text: 'Researcher', icon: <Mic2 size={18} /> },
  { id: 'leadership', text: 'Leadership', icon: <Users size={18} /> },
  { id: 'blog', text: 'Blog', icon: <BookOpen size={18} /> },
];

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-2xl font-bold text-slate-800 hover:text-sky-600 transition-colors"
            >
              Arjon Golder
            </button>
          </div>
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentPage(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out
                  ${currentPage === link.id
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'text-slate-600 hover:bg-sky-100 hover:text-sky-700'
                  }`}
              >
                {link.icon}
                <span className="ml-2">{link.text}</span>
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-sky-600 focus:outline-none p-2 rounded-md"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentPage(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out
                  ${currentPage === link.id
                    ? 'bg-sky-600 text-white'
                    : 'text-slate-600 hover:bg-sky-100 hover:text-sky-700'
                  }`}
              >
                {link.icon}
                <span className="ml-3">{link.text}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
