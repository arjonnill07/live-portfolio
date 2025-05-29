import React from 'react';
import SectionTitle from './SectionTitle';
import AnimatedCard from './AnimatedCard';
import { ExternalLink } from 'lucide-react';

const ResearcherSection = () => {
  const publications = [
    {
      title: "Optimizing Privacy and Efficiency in Brain Tumor Classification through Advanced Non-IID Federated Deep Learning",
      journal: "International Conference on Information and Communication Technology (ICICT 2024), BUET",
      year: "2024",
      link: "https://ieeexplore.ieee.org/abstract/document/10839736/" // Replace with actual publication link if available
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
  // Separate certificates into two categories
  const technicalCertificates = [
    {
      name: "Machine Learning Pipelines with Azure ML Studio",
      issuer: "Coursera ",
      year: "2024",
      imageUrl: "images/certificates/ML_pipelines_page-0001.jpg",
      link: "https://coursera.org/share/4463e80d11c2198452581097de198056"
    },
    {
      name: "Research Paper Award (ICICT 2024)",
      issuer: "International Conference on ICT, BUET",
      year: "2024",
      imageUrl: "images/the certificate.jpg",
      link: "https://www.linkedin.com/in/arjon-golder/"
    },
    {
      name: "Using Python to Access Web Data",
      issuer: "University of Michigan",
      year: "2020",
      imageUrl: "images/certificates/python to access webdata_page-0001.jpg",
      link: "https://coursera.org/share/57ed40fcb7b9c80af9a005e97a07f816"
    },
    {
      name: "Python Data Structures",
      issuer: "University of Michigan",
      year: "2020",
      imageUrl: "images/certificates/python data struture_page-0001.jpg",
      link: "https://coursera.org/share/7109c734e598b5a54ec1eecc2db5816c"
    },    

  ];
  const personalCertificates = [
    {
      name: "Inspiring Leadership through Emotional Intelligence",
      issuer: "Case Western Reserve University",
      year: "2020",
      imageUrl: "images/certificates/Inspiring leadership_page-0001.jpg",
      
      link: "https://coursera.org/share/9320f91d3a607ae09ab4b81f45ca39ef"
    },
    {
      name: "Mindshift: Break Through Obstacles to Learning and Discover Your Hidden Potential",
      issuer: "McMaster University",
      year: "2022",
      imageUrl: "images/certificates/Mindshift_page-0001.jpg",
      link: "https://coursera.org/share/a985b1b24f58ced78ee8186461d8daf5"
    },
    {
      name: "Learning How to Learn: Powerful mental tools to help you master tough subjects",
      issuer: "Coursera",
      year: "2021",
      imageUrl: "images/certificates/learning how to learn_page-0001.jpg",
      link: "https://courses.edx.org/certificates/706b368a55fa4f1090ea3744ce0e9299"
    },
  ];

  return (
    <section id="researcher" className="py-16 sm:py-24 bg-blue-50 text-slate-800 px-4">
      <div className="container mx-auto">
        <SectionTitle>The <span className="text-blue-700">Researcher</span> Mindset</SectionTitle>
        <p className="text-center max-w-2xl mx-auto text-slate-600 mb-12 text-lg">
          I am a relentless explorer—fusing curiosity, creativity, and discipline to turn questions into discoveries. My research is driven by a desire to solve real problems, connect ideas across fields, and leave a meaningful mark on the world.
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
            <h4 className="text-lg font-bold text-blue-600 mb-3 mt-2">Technical</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {technicalCertificates.map((cert, index) => (
                <AnimatedCard key={index} className="bg-white border border-blue-200 shadow-lg group">
                  <div className="aspect-w-4 aspect-h-3 mb-3 overflow-hidden rounded-md">
                    <img src={cert.imageUrl} alt={cert.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-md font-semibold text-blue-800 mb-1">{cert.name}</h4>
                  <p className="text-xs text-slate-500">{cert.issuer} - {cert.year}</p>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sky-600 hover:text-sky-800 text-xs font-semibold underline">View Certification</a>
                  )}
                </AnimatedCard>
              ))}
            </div>
            <h4 className="text-lg font-bold text-blue-600 mb-3 mt-6">Personal Development</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {personalCertificates.map((cert, index) => (
                <AnimatedCard key={index} className="bg-white border border-blue-200 shadow-lg group">
                  <div className="aspect-w-4 aspect-h-3 mb-3 overflow-hidden rounded-md">
                    <img src={cert.imageUrl} alt={cert.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-md font-semibold text-blue-800 mb-1">{cert.name}</h4>
                  <p className="text-xs text-slate-500">{cert.issuer} - {cert.year}</p>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sky-600 hover:text-sky-800 text-xs font-semibold underline">View Certification</a>
                  )}
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
