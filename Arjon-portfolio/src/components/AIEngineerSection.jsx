import React from 'react';
import SectionTitle from './SectionTitle';
import AnimatedCard from './AnimatedCard';
import { Github, ExternalLink } from 'lucide-react';

const AIEngineerSection = () => {
  const aiProjects = [
    {
      title: "Intelligent Recommendation System",
      description: "A collaborative filtering based recommendation engine for e-commerce, improving user engagement by 15%.",
      technologies: ["Python", "TensorFlow", "Flask", "Docker"],
      githubLink: "https://github.com/yourusername/recsys-project",
      liveLink: "#"
    },
    {
      title: "NLP-Powered Chatbot",
      description: "Developed a customer service chatbot using BERT for intent recognition and response generation.",
      technologies: ["Python", "PyTorch", "Hugging Face Transformers", "FastAPI"],
      githubLink: "https://github.com/yourusername/nlp-chatbot",
    },
    {
      title: "Computer Vision for Anomaly Detection",
      description: "Implemented a CNN model to detect anomalies in manufacturing processes from image data.",
      technologies: ["Python", "OpenCV", "Keras", "AWS Sagemaker"],
      githubLink: "https://github.com/yourusername/cv-anomaly",
      liveLink: "#"
    },
  ];

  const skills = [
    { name: "Python", level: 95 }, { name: "TensorFlow", level: 90 }, { name: "PyTorch", level: 85 },
    { name: "Scikit-learn", level: 90 }, { name: "NLP", level: 88 }, { name: "Computer Vision", level: 82 },
    { name: "Docker", level: 75 }, { name: "Kubernetes", level: 60 }, { name: "AWS/GCP", level: 70 },
  ];

  return (
    <section id="ai-engineer" className="py-16 sm:py-24 bg-slate-900 text-slate-100 px-4">
      <div className="container mx-auto">
        <SectionTitle><span className="text-sky-400">AI Engineering</span> Prowess</SectionTitle>
        <p className="text-center max-w-2xl mx-auto text-slate-300 mb-12 text-lg">
          Leveraging cutting-edge artificial intelligence and machine learning techniques to build intelligent systems that solve real-world problems.
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
                {project.liveLink && project.liveLink !== "#" && (
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

export default AIEngineerSection;
