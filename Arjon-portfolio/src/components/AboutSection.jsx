import React from 'react';
import { Award } from 'lucide-react';
import SectionTitle from './SectionTitle';
import AnimatedCard from './AnimatedCard';

const AboutSection = () => {
  const journeyPoints = [
    { year: "2014", title: "Duronto Prottoy", description: "A group of Teenagers of KZS16 Discovered a passion for volunteering and community service that impacted 500+ beneficiaries.", image: "/images/early_sparks.jpg" },
    { year: "2020", title: "Campusnama,PSTU", description: "Founded Bangladesh’s only university-based band focused on original music composition.", image: "/images/The campusnama gang.jpg" },
    { year: " ", title: "CSE CLUB,PSTU", description: "Serving as a member to General Secretary,transforming PSTU’s CSE Club into Bangladesh’s premier student tech organization.", image: "/images/honor from vc pstu.jpg" },
    { year: "2024", title: "ICICT,BUET", description: "Authored & Presented a research paper on Federated Medical AI at the International Conference on ICT.", image: "/images/the certificate.jpg" },
    { year: "2025", title: "CSE,KU", description: "Gained 1st position in M.Sc Admission Test.", image: "/images/KU Chairman Honor.jpg" },
    { year: " ", title: "The journey continues..." },
  ];

  // Academic Journey Points
  const academicJourney = [
    { year: "2016", title: "SSC, KZS16", description: "GPA: 5.00" },
    { year: "2018", title: "HSC, Govt. M.M City College", description: "GPA: 5.00" },
    { year: "2024", title: "B.Sc, CSE, PSTU", description: "Ranked 16th among the 80 students." },
    { year: "2026 (expected)", title: "M.Sc, CSE, KU", description: "Pursuing M.Sc. in Computer Science & Engineering at Khulna University." },
  ];

  // Professional Journey Points
  const professionalJourney = [
    { year: "2020", title: "Learning Mentor", description: "Guiding school and college students in their learning journeys." },
    { year: "2023", title: "Mentor & Researcher", description: "Mentoring junior engineers and contributing to research in AI/ML through the 'AI & Research Enthusiasts Program'." },
    { year: "2024", title: "AI Engineer, [CDSR]", description: "Started professional career as an AI Engineer, working on impactful projects." },
    //{ year: "2025", title: "Mentor & Researcher", description: "Mentoring junior engineers and contributing to research in AI/ML." },
    { year: "Future", title: "Continuous Growth", description: "Committed to lifelong learning and impactful contributions in tech." },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 text-slate-700 px-4">
      <div className="container mx-auto">
        <SectionTitle>My Journey & Qualifications</SectionTitle>
        <div className="max-w-3xl mx-auto mb-12 text-lg text-center leading-relaxed">
          <p className="mb-4">
            I believe life is a canvas of experiences, and I'm dedicated to painting mine with diverse skills and meaningful contributions. 
          </p>

        </div>
        {/* Highlights Title and Animation */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 drop-shadow-lg tracking-wider animate-fadeInUp">Highlights</h2>
          <div className="mt-2 mb-4 w-24 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 rounded-full animate-pulse"></div>
          <div className="animate-bounce text-2xl text-teal-400 mb-2">&#8595;</div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-teal-300 transform -translate-x-1/2 hidden sm:block"></div>
          {journeyPoints.map((point, index) => (
            <div key={index} className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
              <div className="order-1 sm:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-teal-500 shadow-xl w-12 h-12 rounded-full sm:mx-4">
                <h3 className="mx-auto font-semibold text-lg text-white">{point.year}</h3>
              </div>
              {point.title === "The journey continues..." ? (
                <AnimatedCard className="order-1 sm:w-5/12 px-6 py-8 bg-gradient-to-r from-cyan-100 via-emerald-100 to-teal-100 shadow-lg rounded-xl border-2 border-dashed border-teal-300 flex flex-col items-center text-center">
                  <h4 className="font-bold text-teal-700 text-2xl italic tracking-wide animate-pulse">{point.title}</h4>
                </AnimatedCard>
              ) : (
                <AnimatedCard className="order-1 sm:w-5/12 px-6 py-6 bg-white shadow-lg rounded-xl border border-teal-200 flex flex-col items-center text-center">
                  <h4 className="font-bold text-teal-700 text-xl mb-3">{point.title}</h4>
                  <img
                    src={point.image}
                    alt={point.title}
                    className="w-40 h-28 object-cover rounded-lg border border-teal-100 shadow-md bg-white mb-3"
                  />
                  <p className="text-sm text-slate-600 leading-snug">{point.description}</p>
                </AnimatedCard>
              )}
            </div>
          ))}
        </div>
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-teal-700 mb-6">Key Qualifications</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[
              "Advanced proficiency in Python, TensorFlow, PyTorch",
              "Expertise in AI/ML, Deep Learning,Federated Learning",
              "Built production-grade ML apps ",
              "Proven research and analytical capabilities",
              "Strong leadership and team collaboration",
              "Mentored 50+ junior engineers in reproducible research practices",
              "Skilled Learning Mentor guiding students to master the art of learning and navigate complex challenges",
              "Fluent in [English], Proficient in Prompt Engineering",
            ].map((qual, i) => (
              <li key={i} className="bg-white p-4 rounded-lg shadow-md border border-teal-100 flex items-start">
                <Award size={20} className="text-teal-500 mr-3 mt-1 flex-shrink-0" />
                <span>{qual}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-teal-700 mb-6">Academic Journey</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-0 mb-12">
            {academicJourney.map((item, idx) => (
              <React.Fragment key={idx}>
                <AnimatedCard className="flex-1 min-w-[220px] bg-white border border-teal-200 shadow-md flex flex-col items-center px-4 py-6 mx-0">
                  <div className="text-teal-600 font-bold text-lg mb-2">{item.year}</div>
                  <div className="font-semibold text-teal-800 mb-1">{item.title}</div>
                  <div className="text-slate-600 text-sm">{item.description}</div>
                </AnimatedCard>
                {idx < academicJourney.length - 1 && (
                  <span className="hidden sm:inline-block mx-2 text-3xl text-teal-400 align-middle select-none">&#8594;</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <h3 className="text-2xl font-semibold text-teal-700 mb-6">Professional Journey</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            {professionalJourney.map((item, idx) => (
              <AnimatedCard key={idx} className="flex-1 min-w-[220px] bg-white border border-teal-200 shadow-md flex flex-col items-center px-4 py-6">
                <div className="text-teal-600 font-bold text-lg mb-2">{item.year}</div>
                <div className="font-semibold text-teal-800 mb-1">{item.title}</div>
                <div className="text-slate-600 text-sm">{item.description}</div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

