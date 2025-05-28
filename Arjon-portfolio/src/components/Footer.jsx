import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-800 text-slate-300 py-12">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center space-x-6 mb-6">
        <a href="https://www.linkedin.com/in/arjon-golder/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="https://github.com/arjonnill07" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
          <Github size={24} />
        </a>
        <a href="mailto:arjongoldercse@gmail.com" className="hover:text-sky-400 transition-colors">
          <Mail size={24} />
        </a>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} Arjon Golder. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
