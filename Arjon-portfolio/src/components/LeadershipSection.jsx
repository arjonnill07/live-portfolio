import React from 'react';
import SectionTitle from './SectionTitle';
import AnimatedCard from './AnimatedCard';
import { ExternalLink } from 'lucide-react';

const LeadershipSection = () => {
  const events = [
    { name: "AI Ethics Panel Discussion", role: "Organizer & Moderator", year: "2023", imageUrl: "https://placehold.co/600x400/D97706/FFFFFF?text=AI+Ethics+Panel", link: "#" },
    { name: "University Tech Fest 'Innovate'", role: "Lead Coordinator", year: "2022", imageUrl: "https://placehold.co/600x400/D97706/FFFFFF?text=Tech+Fest", link: "#" },
    { name: "Community Coding Workshop", role: "Instructor & Mentor", year: "2023", imageUrl: "https://placehold.co/600x400/D97706/FFFFFF?text=Coding+Workshop", link: "#" },
  ];
  const leadershipCerts = [
    { name: "Project Management Essentials", issuer: "PMI Chapter", year: "2023", imageUrl: "https://placehold.co/400x300/CA8A04/FFFFFF?text=PM+Certificate" },
    { name: "Agile Leadership Training", issuer: "Scrum Alliance", year: "2022", imageUrl: "https://placehold.co/400x300/CA8A04/FFFFFF?text=Agile+Leadership" },
  ];

  return (
    <section id="leadership" className="py-16 sm:py-24 bg-amber-50 text-slate-800 px-4">
      <div className="container mx-auto">
        <SectionTitle>Leading with <span className="text-amber-600">Impact</span></SectionTitle>
        <p className="text-center max-w-2xl mx-auto text-slate-600 mb-12 text-lg">
          Passionate about inspiring teams, organizing impactful events, and fostering collaborative environments to achieve shared goals.
        </p>
        <h3 className="text-2xl font-semibold text-amber-700 mb-8 text-center">Events Organized & Led</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <AnimatedCard key={index} className="bg-white border border-amber-200 shadow-xl group">
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

export default LeadershipSection;
