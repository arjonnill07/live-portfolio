import React from 'react';
import SectionTitle from './SectionTitle';
import AnimatedCard from './AnimatedCard';
import { Github, ExternalLink } from 'lucide-react';

const AIEngineerSection = () => {
  const aiProjects = [
    {
      title: "Smart Augmentation of Brain Tumor MRI Dataset",
      description: "Research-driven augmentation techniques to improve model generalization for medical imaging. Enhanced dataset diversity and reduced overfitting for brain tumor classification.",
      technologies: ["Python", "Keras", "OpenCV", "Jupyter"],
      githubLink: "https://github.com/arjonnill07/smart-augmentation-of-Brain-tumor-MRi-dataset-",
    },
    {
      title: "Liver Fibrosis App",
      description: "Clinical decision support system for liver fibrosis risk prediction. Integrated ML models with an interactive web interface for clinicians.",
      technologies: ["Python", "Scikit-learn", "Streamlit"],
      githubLink: "https://github.com/arjonnill07/liver-fibrosis-app",
    },
    {
      title: "Clinical CDSS Readmission",
      description: "Predictive analytics for hospital readmission using clinical data. Developed robust data pipelines and interpretable ML models.",
      technologies: ["Python", "Pandas", "ML"],
      githubLink: "https://github.com/arjonnill07/clinical-cdss-readmission",
    },
    {
      title: "Federated Medical AI (ICICT 2024)",
      description: "Published research on privacy-preserving federated learning for medical data. Designed and evaluated federated models for sensitive healthcare applications.",
      technologies: ["Python", "TensorFlow Federated"],
      githubLink: "https://www.linkedin.com/in/arjon-golder/", // Link to publication or profile
    },
  ];

  const skills = [
    { name: "Python", level: 98 },
    { name: "TensorFlow", level: 92 },
    { name: "PyTorch", level: 90 },
    { name: "Keras", level: 88 },
    { name: "Scikit-learn", level: 90 },
    { name: "Pandas", level: 88 },
    { name: "NumPy", level: 87 },
    { name: "Hugging Face Transformers", level: 85 },
    { name: "OpenCV", level: 83 },
    { name: "FastAPI", level: 80 },
    { name: "Flask", level: 80 },
    { name: "Docker", level: 78 },
    { name: "Kubernetes", level: 65 },
    { name: "AWS/GCP", level: 75 },
    { name: "Federated Learning", level: 80 },
    { name: "MLOps", level: 75 },
    { name: "Prompt Engineering", level: 80 },
    { name: "Reproducible Research", level: 85 },
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
