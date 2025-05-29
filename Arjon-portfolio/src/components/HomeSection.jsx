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
      {/* Animated Intro Paragraph */}
      <AnimatedIntro />
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

// Add this component at the bottom of the file
const highlightWords = [
  { phrase: 'AI Engineer', className: 'text-sky-600' },
  { phrase: 'Artist', className: 'text-sky-600' },
  { phrase: 'Researcher', className: 'text-sky-600' },
  { phrase: 'curious learner', className: 'text-blue-500' }, // softer blue for contrast
];
const introText = `A passionate AI Engineer, an Artist, and a Researcher, but above all, I'm a curious learner who thrives on exploration and creation. My passion is simple: transforming complex challenges into clear, effective solutions. Ready to explore what I've been building?`;

function AnimatedIntro() {
  const [visibleCount, setVisibleCount] = React.useState(0);
  const [highlight, setHighlight] = React.useState(false);
  const words = React.useMemo(() => introText.split(' '), []);

  React.useEffect(() => {
    if (visibleCount < words.length) {
      const timer = setTimeout(() => setVisibleCount(visibleCount + 1), 60);
      return () => clearTimeout(timer);
    } else {
      // After all words are shown, trigger highlight
      setTimeout(() => setHighlight(true), 400);
    }
  }, [visibleCount, words.length]);

  // Helper to check if a word (or phrase) should be highlighted
  function getWordSpan(word, idx) {
    // Join up to 3 words to match highlight phrases
    for (let len = 3; len > 0; len--) {
      const phrase = words.slice(idx, idx + len).join(' ').replace(/[,\.]/g, '');
      const highlightObj = highlightWords.find(hw => hw.phrase === phrase);
      if (highlightObj) {
        return {
          span: (
            <span
              key={idx}
              className={`inline-block ${highlightObj.className} font-bold transition-all duration-500 ${highlight ? 'drop-shadow-lg' : ''}`}
            >
              {words.slice(idx, idx + len).join(' ')}
            </span>
          ),
          skip: len - 1
        };
      }
    }
    return { span: <span key={idx}>{word}</span>, skip: 0 };
  }

  // Build the animated word-by-word intro
  const rendered = [];
  let i = 0;
  while (i < visibleCount) {
    const { span, skip } = getWordSpan(words[i], i);
    rendered.push(span);
    i += skip + 1;
    if (i < visibleCount) rendered.push(' ');
  }

  return (
    <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed min-h-[4.5rem] text-center">
      {rendered}
      {visibleCount < words.length && <span className="inline-block w-2 animate-pulse align-middle">|</span>}
    </p>
  );
}

export default HomeSection;
