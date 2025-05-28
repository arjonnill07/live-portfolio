import React, { useState, useEffect, useRef } from 'react';
import { Home, User, Brain, Palette, Mic2, Award, Users, BookOpen, Linkedin, Github, Mail, Download, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';

// Helper component for section titles
const SectionTitle = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">{children}</h2>
);

// Helper component for animated card effect on hover
const AnimatedCard = ({ children, className = "" }) => (
  <div className={`transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl rounded-xl p-6 ${className}`}>
    {children}
  </div>
);

// Navigation Links Data
const navLinks = [
  { id: 'home', text: 'Home', icon: <Home size={18} /> },
  { id: 'about', text: 'About', icon: <User size={18} /> },
  { id: 'ai-engineer', text: 'AI Engineer', icon: <Brain size={18} /> },
  { id: 'artist', text: 'Artist', icon: <Palette size={18} /> },
  { id: 'researcher', text: 'Researcher', icon: <Mic2 size={18} /> },
  { id: 'leadership', text: 'Leadership', icon: <Users size={18} /> },
  { id: 'blog', text: 'Blog', icon: <BookOpen size={18} /> },
];

// Header Component
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
              Your Name {/* !!! REPLACE THIS !!! */}
            </button>
          </div>
          {/* Desktop Navigation */}
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
          {/* Mobile Menu Button */}
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
      {/* Mobile Navigation Menu */}
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

// Footer Component
const Footer = () => (
  <footer className="bg-slate-800 text-slate-300 py-12">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center space-x-6 mb-6">
        {/* !!! REPLACE THESE LINKS !!! */}
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
          <Github size={24} />
        </a>
        <a href="mailto:youremail@example.com" className="hover:text-sky-400 transition-colors">
          <Mail size={24} />
        </a>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p> {/* !!! REPLACE Your Name !!! */}
      <p className="text-xs mt-2">Inspired by braydoncoyer.dev. Crafted with React & Tailwind CSS.</p>
    </div>
  </footer>
);

// Home Section
const HomeSection = ({ setCurrentPage }) => (
  <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-sky-100 via-slate-50 to-stone-100 py-16 sm:py-24 px-4">
    <div className="text-center max-w-3xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 mb-6">
        <span className="block">Hello, I'm</span>
        <span className="block text-sky-600 mt-2">Your Name</span> {/* !!! REPLACE THIS !!! */}
      </h1>
      <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
        A passionate AI Engineer, creative Artist, dedicated Researcher, and aspiring Leader. I thrive on turning complex challenges into innovative solutions and expressing ideas through technology and art. {/* !!! CUSTOMIZE THIS TEXT !!! */}
      </p>
      <div className="space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="https://placehold.co/your_cv.pdf" // !!! REPLACE with your actual CV link !!!
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
      </div>
    </div>
  </section>
);

// About Section
const AboutSection = () => {
  const journeyPoints = [ // !!! CUSTOMIZE ALL OF THESE !!!
    { year: "2015", title: "Early Sparks", description: "Discovered a passion for [Your Early Interest 1] and [Your Early Interest 2], laying the groundwork for future explorations." },
    { year: "2018", title: "Academic Foundations", description: "Began my [Your Degree] at [Your University], focusing on [Your Key Subject]." },
    { year: "2020", title: "First Major Project", description: "Developed [Your Project], which solidified my interest in [Your Field]." },
    { year: "2022", title: "Key Internship/Experience", description: "Gained practical experience at [Company/Organization] as a [Your Role]." },
    { year: "Present", title: "Continuous Growth", description: "Actively pursuing new challenges in AI, art, and research, always eager to learn and contribute." },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 text-slate-700 px-4">
      <div className="container mx-auto">
        <SectionTitle>My Journey & Qualifications</SectionTitle>
        <div className="max-w-3xl mx-auto mb-12 text-lg text-center leading-relaxed">
          {/* !!! CUSTOMIZE THIS TEXT !!! */}
          <p className="mb-4">
            I believe life is a canvas of experiences, and I'm dedicated to painting mine with diverse skills and meaningful contributions. From the intricate logic of AI to the expressive freedom of art, my path has been one of continuous learning and creation.
          </p>
          <p>
            My academic background in [Your Major/Field] from [Your University] (Graduation Year: [Year]) provided a strong foundation, which I've built upon with practical projects, research endeavors, and leadership roles.
          </p>
        </div>

        {/* Timeline-inspired section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-teal-300 transform -translate-x-1/2 hidden sm:block"></div>
          {journeyPoints.map((point, index) => (
            <div key={index} className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
              <div className="order-1 sm:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-teal-500 shadow-xl w-12 h-12 rounded-full sm:mx-4">
                <h3 className="mx-auto font-semibold text-lg text-white">{point.year}</h3>
              </div>
              <AnimatedCard className={`order-1 sm:w-5/12 px-6 py-4 bg-white shadow-lg rounded-xl border border-teal-200`}>
                <h4 className="font-bold text-teal-700 text-xl mb-2">{point.title}</h4>
                <p className="text-sm text-slate-600 leading-snug">{point.description}</p>
              </AnimatedCard>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-teal-700 mb-6">Key Qualifications</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[ // !!! CUSTOMIZE THESE QUALIFICATIONS !!!
              "Advanced proficiency in Python, TensorFlow, PyTorch",
              "Expertise in Machine Learning, Deep Learning, NLP",
              "Creative design skills with Adobe Creative Suite",
              "Proven research and analytical capabilities",
              "Strong leadership and team collaboration",
              "Fluent in [Language 1], Proficient in [Language 2]",
            ].map((qual, i) => (
              <li key={i} className="bg-white p-4 rounded-lg shadow-md border border-teal-100 flex items-start">
                <Award size={20} className="text-teal-500 mr-3 mt-1 flex-shrink-0" />
                <span>{qual}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// AI Engineer Section
const AIEngineerSection = () => {
  const aiProjects = [ // !!! CUSTOMIZE ALL PROJECTS !!!
    {
      title: "Intelligent Recommendation System",
      description: "A collaborative filtering based recommendation engine for e-commerce, improving user engagement by 15%.",
      technologies: ["Python", "TensorFlow", "Flask", "Docker"],
      githubLink: "https://github.com/yourusername/recsys-project", // !!! REPLACE
      liveLink: "#" // !!! REPLACE or remove if no live demo
    },
    {
      title: "NLP-Powered Chatbot",
      description: "Developed a customer service chatbot using BERT for intent recognition and response generation.",
      technologies: ["Python", "PyTorch", "Hugging Face Transformers", "FastAPI"],
      githubLink: "https://github.com/yourusername/nlp-chatbot", // !!! REPLACE
    },
    {
      title: "Computer Vision for Anomaly Detection",
      description: "Implemented a CNN model to detect anomalies in manufacturing processes from image data.",
      technologies: ["Python", "OpenCV", "Keras", "AWS Sagemaker"],
      githubLink: "https://github.com/yourusername/cv-anomaly", // !!! REPLACE
      liveLink: "#" // !!! REPLACE or remove
    },
  ];

  const skills = [ // !!! CUSTOMIZE SKILLS AND LEVELS !!!
    { name: "Python", level: 95 }, { name: "TensorFlow", level: 90 }, { name: "PyTorch", level: 85 },
    { name: "Scikit-learn", level: 90 }, { name: "NLP", level: 88 }, { name: "Computer Vision", level: 82 },
    { name: "Docker", level: 75 }, { name: "Kubernetes", level: 60 }, { name: "AWS/GCP", level: 70 },
  ];

  return (
    <section id="ai-engineer" className="py-16 sm:py-24 bg-slate-900 text-slate-100 px-4">
      <div className="container mx-auto">
        <SectionTitle><span className="text-sky-400">AI Engineering</span> Prowess</SectionTitle>
        <p className="text-center max-w-2xl mx-auto text-slate-300 mb-12 text-lg">
          Leveraging cutting-edge artificial intelligence and machine learning techniques to build intelligent systems that solve real-world problems. {/* !!! CUSTOMIZE !!! */}
        </p>

        <div className="mb-16">
            <h3 className="text-2xl font-semibold text-sky-400 mb-6 text-center">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {skills.map(skill => (
                    <div key={skill.name} className="bg-slate-800 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-slate-200">{skill.name}</span>
                            <span className="text-xs text-sky-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2.5">
                            <div className="bg-sky-500 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <h3 className="text-2xl font-semibold text-sky-400 mb-8 text-center">Featured AI Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiProjects.map((project, index) => (
            <AnimatedCard key={index} className="bg-slate-800 border border-slate-700 shadow-2xl">
              <h4 className="text-xl font-bold text-sky-400 mb-3">{project.title}</h4>
              <p className="text-slate-300 text-sm mb-4 h-20 overflow-y-auto custom-scrollbar">{project.description}</p>
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-slate-400 mb-2">Technologies:</h5>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-slate-700 text-sky-300 text-xs rounded-md font-mono">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-3">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors text-sm">
                  <Github size={16} className="mr-1.5" /> GitHub
                </a>
                {project.liveLink && project.liveLink !== "#" && ( // Added check for "#"
                   <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors text-sm">
                     <ExternalLink size={16} className="mr-1.5" /> Live Demo
                   </a>
                )}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// Artist Section
const ArtistSection = () => {
  const artPieces = [ // !!! REPLACE WITH YOUR ART, USE LOCAL IMAGES (see below) OR HOSTED URLs !!!
    { id: 1, title: "Cosmic Dreams", type: "Digital Painting", year: "2023", imageUrl: "https://placehold.co/600x400/C0392B/FFFFFF?text=Cosmic+Dreams" },
    { id: 2, title: "Urban Serenity", type: "Photography", year: "2022", imageUrl: "https://placehold.co/600x400/2980B9/FFFFFF?text=Urban+Serenity" },
    { id: 3, title: "Abstract Emotions", type: "Mixed Media", year: "2023", imageUrl: "https://placehold.co/600x400/27AE60/FFFFFF?text=Abstract+Emotions" },
    { id: 4, title: "Portrait of Time", type: "Oil on Canvas", year: "2021", imageUrl: "https://placehold.co/600x400/F39C12/FFFFFF?text=Portrait+of+Time" },
    { id: 5, title: "Sculpted Thoughts", type: "3D Render", year: "2024", imageUrl: "https://placehold.co/600x400/8E44AD/FFFFFF?text=Sculpted+Thoughts" },
    { id: 6, title: "Nature's Whisper", type: "Watercolor", year: "2022", imageUrl: "https://placehold.co/600x400/16A085/FFFFFF?text=Nature's+Whisper" },
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  // To use local images:
  // 1. Create a `public` folder in your project root (my-portfolio/public)
  // 2. Inside `public`, create an `images` folder (my-portfolio/public/images)
  // 3. Put your art images there, e.g., `my-portfolio/public/images/cosmic-dreams.jpg`
  // 4. Update imageUrl: `imageUrl: "/images/cosmic-dreams.jpg"` (note the leading slash)

  return (
    <section id="artist" className="py-16 sm:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 text-slate-800 px-4">
      <div className="container mx-auto">
        <SectionTitle>The <span className="text-purple-600">Artist</span> Within</SectionTitle>
        <p className="text-center max-w-2xl mx-auto text-slate-600 mb-12 text-lg">
          Exploring the world through a creative lens, translating ideas and emotions into visual narratives. Here's a glimpse into my artistic journey. {/* !!! CUSTOMIZE !!! */}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {artPieces.map(art => (
            <AnimatedCard key={art.id} className="bg-white/70 backdrop-blur-sm border border-pink-200 shadow-lg cursor-pointer group" onClick={() => setSelectedImage(art)}>
              <div className="aspect-w-4 aspect-h-3 mb-4 overflow-hidden rounded-lg"> {/* You might need @tailwindcss/aspect-ratio for this or define custom CSS */}
                <img src={art.imageUrl} alt={art.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-semibold text-purple-700 mb-1">{art.title}</h4>
              <p className="text-sm text-pink-600 mb-1">{art.type}</p>
              <p className="text-xs text-slate-500">{art.year}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
      {/* Modal for selected image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" onClick={() => setSelectedImage(null)}>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.imageUrl} alt={selectedImage.title} className="w-full h-auto object-contain rounded-lg mb-4 max-h-[70vh]" />
            <h3 className="text-2xl font-bold text-purple-700">{selectedImage.title}</h3>
            <p className="text-md text-pink-600">{selectedImage.type} ({selectedImage.year})</p>
            <button
              onClick={() => setSelectedImage(null)}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center"
            >
              <X size={18} className="mr-2" /> Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
// If you use aspect-w-4 aspect-h-3, you might need to install @tailwindcss/aspect-ratio
// `npm install -D @tailwindcss/aspect-ratio`
// Then add it to tailwind.config.js plugins: `plugins: [require('@tailwindcss/aspect-ratio')],`

// Researcher Section
const ResearcherSection = () => {
  const publications = [ // !!! CUSTOMIZE !!!
    { title: "Advancements in Few-Shot Learning for NLP", journal: "Journal of AI Research, Vol. 3", year: "2023", link: "#" },
    { title: "Ethical Considerations in AI Model Deployment", journal: "AI & Society Conference Proceedings", year: "2022", link: "#" },
    { title: "A Novel Approach to Anomaly Detection in Time Series Data", journal: "Preprint arXiv:xxxx.xxxxx", year: "2024", link: "#" },
  ];
  const certificates = [ // !!! CUSTOMIZE, REPLACE PLACEHOLDERS WITH YOUR IMAGES !!!
    { name: "Deep Learning Specialization", issuer: "Coursera & deeplearning.ai", year: "2022", imageUrl: "https://placehold.co/400x300/0284C7/FFFFFF?text=Deep+Learning+Cert" },
    { name: "Research Methodology Workshop", issuer: "My University", year: "2021", imageUrl: "https://placehold.co/400x300/0284C7/FFFFFF?text=Research+Workshop" },
    { name: "Data Science Ethics", issuer: "Reputable Institute", year: "2023", imageUrl: "https://placehold.co/400x300/0284C7/FFFFFF?text=Data+Ethics+Cert" },
  ];

  return (
    <section id="researcher" className="py-16 sm:py-24 bg-blue-50 text-slate-800 px-4">
      <div className="container mx-auto">
        <SectionTitle>The <span className="text-blue-700">Researcher</span> Mindset</SectionTitle>
        <p className="text-center max-w-2xl mx-auto text-slate-600 mb-12 text-lg">
          Driven by curiosity and a systematic approach to uncover new knowledge and insights, particularly in the fields of [Your Research Area 1] and [Your Research Area 2]. {/* !!! CUSTOMIZE !!! */}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Publications & Papers</h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <AnimatedCard key={index} className="bg-white border border-blue-200 shadow-lg">
                  <h4 className="text-lg font-semibold text-blue-800 mb-1">{pub.title}</h4>
                  <p className="text-sm text-slate-600 italic mb-2">{pub.journal} - {pub.year}</p>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center">
                    Read More <ExternalLink size={14} className="ml-1.5" />
                  </a>
                </AnimatedCard>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Certificates & Awards</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <AnimatedCard key={index} className="bg-white border border-blue-200 shadow-lg group">
                   {/* You might need @tailwindcss/aspect-ratio for this or define custom CSS */}
                  <div className="aspect-w-4 aspect-h-3 mb-3 overflow-hidden rounded-md">
                    <img src={cert.imageUrl} alt={cert.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-md font-semibold text-blue-800 mb-1">{cert.name}</h4>
                  <p className="text-xs text-slate-500">{cert.issuer} - {cert.year}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Leadership Section
const LeadershipSection = () => {
  const events = [ // !!! CUSTOMIZE !!!
    { name: "AI Ethics Panel Discussion", role: "Organizer & Moderator", year: "2023", imageUrl: "https://placehold.co/600x400/D97706/FFFFFF?text=AI+Ethics+Panel", link: "#" },
    { name: "University Tech Fest 'Innovate'", role: "Lead Coordinator", year: "2022", imageUrl: "https://placehold.co/600x400/D97706/FFFFFF?text=Tech+Fest", link: "#" },
    { name: "Community Coding Workshop", role: "Instructor & Mentor", year: "2023", imageUrl: "https://placehold.co/600x400/D97706/FFFFFF?text=Coding+Workshop", link: "#" },
  ];
  const leadershipCerts = [ // !!! CUSTOMIZE !!!
    { name: "Project Management Essentials", issuer: "PMI Chapter", year: "2023", imageUrl: "https://placehold.co/400x300/CA8A04/FFFFFF?text=PM+Certificate" },
    { name: "Agile Leadership Training", issuer: "Scrum Alliance", year: "2022", imageUrl: "https://placehold.co/400x300/CA8A04/FFFFFF?text=Agile+Leadership" },
  ];

  return (
    <section id="leadership" className="py-16 sm:py-24 bg-amber-50 text-slate-800 px-4">
      <div className="container mx-auto">
        <SectionTitle>Leading with <span className="text-amber-600">Impact</span></SectionTitle>
        <p className="text-center max-w-2xl mx-auto text-slate-600 mb-12 text-lg">
          Passionate about inspiring teams, organizing impactful events, and fostering collaborative environments to achieve shared goals. {/* !!! CUSTOMIZE !!! */}
        </p>

        <h3 className="text-2xl font-semibold text-amber-700 mb-8 text-center">Events Organized & Led</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <AnimatedCard key={index} className="bg-white border border-amber-200 shadow-xl group">
              {/* You might need @tailwindcss/aspect-ratio for this or define custom CSS */}
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                <img src={event.imageUrl} alt={event.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-semibold text-amber-700 mb-1">{event.name}</h4>
              <p className="text-sm text-slate-600 mb-1">Role: {event.role}</p>
              <p className="text-xs text-slate-500 mb-3">{event.year}</p>
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-sm text-amber-600 hover:text-amber-800 hover:underline inline-flex items-center">
                Event Details <ExternalLink size={14} className="ml-1.5" />
              </a>
            </AnimatedCard>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-amber-700 mb-8 text-center">Leadership Certificates</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {leadershipCerts.map((cert, index) => (
            <AnimatedCard key={index} className="bg-white border border-amber-200 shadow-xl group">
               {/* You might need @tailwindcss/aspect-ratio for this or define custom CSS */}
               <div className="aspect-w-4 aspect-h-3 mb-3 overflow-hidden rounded-md">
                <img src={cert.imageUrl} alt={cert.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-md font-semibold text-amber-800 mb-1">{cert.name}</h4>
              <p className="text-xs text-slate-500">{cert.issuer} - {cert.year}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// Blog Section
const BlogSection = () => {
  const blogPosts = [ // !!! CUSTOMIZE OR REMOVE IF NOT NEEDED !!!
    { id: 1, title: "The Future of Generative AI: Beyond Text and Images", date: "May 15, 2024", excerpt: "Exploring the next frontiers of generative models, from 3D environments to interactive storytelling...", link: "#", category: "AI Musings" },
    { id: 2, title: "Finding Your Artistic Voice in a Digital World", date: "April 28, 2024", excerpt: "Navigating the challenges and opportunities for artists in the age of AI art generators and NFTs...", link: "#", category: "Creative Thoughts" },
    { id: 3, title: "Lessons from Leading a Remote First Tech Team", date: "March 10, 2024", excerpt: "Key strategies for effective communication, collaboration, and motivation in distributed teams...", link: "#", category: "Leadership Insights" },
    { id: 4, title: "The Symbiosis of Art and Technology", date: "February 20, 2024", excerpt: "How advancements in tech are not just tools for artists, but also sources of inspiration and new mediums.", link: "#", category: "Art & Tech" },
  ];

  return (
    <section id="blog" className="py-16 sm:py-24 bg-gray-100 text-gray-800 px-4">
      <div className="container mx-auto">
        <SectionTitle>My <span className="text-sky-700">Creative Writings</span> & Thoughts</SectionTitle>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12 text-lg">
          A space for sharing insights, reflections, and stories on topics close to my heart – from technology and art to leadership and life. {/* !!! CUSTOMIZE !!! */}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {blogPosts.map(post => (
            <AnimatedCard key={post.id} className="bg-white border border-gray-200 shadow-lg flex flex-col">
              <div className="flex-grow">
                <span className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">{post.category}</span>
                <h3 className="text-xl font-semibold text-sky-800 mb-2 group-hover:text-sky-600 transition-colors">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{post.date}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              </div>
              <a href={post.link} className="text-sky-600 hover:text-sky-800 font-medium inline-flex items-center self-start mt-auto">
                Read Full Post <ExternalLink size={16} className="ml-1.5" />
              </a>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};


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