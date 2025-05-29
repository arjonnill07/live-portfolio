import React from 'react';
import { Download, User } from 'lucide-react';

const HomeSection = ({ setCurrentPage }) => (
  <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-sky-100 via-slate-50 to-stone-100 py-16 sm:py-24 px-4">
    <div className="text-center max-w-3xl">
      {/* Profile photo centered above the greeting */}
      <div className="flex justify-center mb-6">
        <img
          src="public/images/propic_n.jpg" // Place your photo as public/images/profile.jpg
          alt="Arjon Golder profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-sky-200 shadow-lg"
        />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 mb-6">
        <span className="block">Hello, I'm</span>
        <span className="block text-sky-600 mt-2">Arjon Golder</span>
      </h1>
      <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
        A passionate AI Engineer, creative Artist, dedicated Researcher, and aspiring Leader. I thrive on turning complex challenges into innovative solutions and expressing ideas through technology and art.
      </p>
      <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row items-center justify-center">
        <a
          href="/documents/Arjon_Golder_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-sky-600 hover:bg-sky-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <Download size={20} className="mr-2" />
          View My CV
        </a>
        <button
          onClick={() => setCurrentPage('about')}
          className="inline-flex items-center justify-center px-8 py-3 border border-sky-600 text-base font-medium rounded-lg text-sky-600 bg-white hover:bg-sky-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Learn More About Me
          <User size={20} className="ml-2" />
        </button>
        <button
          onClick={() => setCurrentPage('get-in-touch')}
          className="inline-flex items-center justify-center px-8 py-3 border border-sky-600 text-base font-medium rounded-lg text-sky-600 bg-white hover:bg-sky-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Get in Touch
          <span className="ml-2" role="img" aria-label="mail">📬</span>
        </button>
      </div>
    </div>
  </section>
);

export default HomeSection;
