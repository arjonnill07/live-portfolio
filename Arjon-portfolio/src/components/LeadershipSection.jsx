import React from 'react';
import SectionTitle from './SectionTitle';
import AnimatedCard from './AnimatedCard';
import { ExternalLink } from 'lucide-react';

const LeadershipSection = () => {
  const events = [
    { name: "PSTU IT Carnival 2024", role: "Organizer & Moderator", year: "2024", imageUrl: "/images/it carnival main banner.jpg", link: "https://www.linkedin.com/posts/cse-club-pstu_pstu-it-carnival-2024-activity-7266827251491438593-DPQ1/" },
    { name: "Inter University Hackathon 2022-24", role: "Lead Coordinator", year: "2022", imageUrl: "/images/IT carnival 2k24 hackathon banner.jpg", link: "https://www.facebook.com/photo/?fbid=884709480413902&set=pcb.884739273744256" },
    { name: "PSTU Graduation Ceremony ", role: "Organizer", year: "2023", imageUrl: "/images/Antim 18.jpg", link: "https://www.facebook.com/xshwapno/videos/905984687332490" },
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
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg bg-white flex items-center justify-center">
                <img src={event.imageUrl} alt={event.name} className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300" />
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
      </div>
    </section>
  );
};

export default LeadershipSection;
