import React from 'react';
import SectionTitle from './SectionTitle';
import AnimatedCard from './AnimatedCard';
import { ExternalLink } from 'lucide-react';

const ResearcherSection = () => {
  const publications = [
    {
      title: "Federated Learning for Medical AI (ICICT 2024)",
      journal: "International Conference on ICT, BUET",
      year: "2024",
      link: "https://www.linkedin.com/in/arjon-golder/" // Replace with actual publication link if available
    },
    {
      title: "Smart Augmentation of Brain Tumor MRI Dataset",
      journal: "Research Project, PSTU",
      year: "2023",
      link: "https://github.com/arjonnill07/smart-augmentation-of-Brain-tumor-MRi-dataset-"
    },
    {
      title: "Liver Fibrosis Clinical Decision Support System",
      journal: "Capstone Project, PSTU",
      year: "2023",
      link: "https://github.com/arjonnill07/liver-fibrosis-app"
    },
    {
      title: "Predictive Analytics for Hospital Readmission",
      journal: "Academic Project, PSTU",
      year: "2022",
      link: "https://github.com/arjonnill07/clinical-cdss-readmission"
    },
  ];
  const certificates = [
    {
      name: "Deep Learning Specialization",
      issuer: "Coursera & deeplearning.ai",
      year: "2022",
      imageUrl: "https://placehold.co/400x300/0284C7/FFFFFF?text=Deep+Learning+Cert"
    },
    {
      name: "Research Methodology Workshop",
      issuer: "Patuakhali Science and Technology University",
      year: "2021",
      imageUrl: "https://placehold.co/400x300/0284C7/FFFFFF?text=Research+Workshop"
    },
    {
      name: "Best Paper Award (ICICT 2024)",
      issuer: "International Conference on ICT, BUET",
      year: "2024",
      imageUrl: "https://placehold.co/400x300/0284C7/FFFFFF?text=Best+Paper+Award"
    },
    {
      name: "Data Science Ethics",
      issuer: "Reputable Institute",
      year: "2023",
      imageUrl: "https://placehold.co/400x300/0284C7/FFFFFF?text=Data+Ethics+Cert"
    },
  ];

  return (
    <section id="researcher" className="py-16 sm:py-24 bg-blue-50 text-slate-800 px-4">
      <div className="container mx-auto">
        <SectionTitle>The <span className="text-blue-700">Researcher</span> Mindset</SectionTitle>
        <p className="text-center max-w-2xl mx-auto text-slate-600 mb-12 text-lg">
          Driven by curiosity and a systematic approach to uncover new knowledge and insights, particularly in the fields of [Your Research Area 1] and [Your Research Area 2].
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

export default ResearcherSection;
