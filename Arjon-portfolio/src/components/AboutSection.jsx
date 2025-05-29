import React from 'react';
import { Award } from 'lucide-react';
import SectionTitle from './SectionTitle';
import AnimatedCard from './AnimatedCard';

const AboutSection = () => {
  const journeyPoints = [
    { year: "2014", title: "Duronto Prottoy", description: "A group of Teenagers of KZS16 Discovered a passion for volunteering and community service that impacted 500+ beneficiaries.", image: "/images/early_sparks.jpg" },
    { year: "2020", title: "Campusnama,PSTU", description: "Founded Bangladesh’s only university-based band focused on original music composition.", image: "/images/The campusnama gang.jpg" },
    { year: "2019-24", title: "CSE CLUB,PSTU", description: "Serving as a member to General Secretary,transforming PSTU’s CSE Club into Bangladesh’s premier student tech organization.", image: "/images/honor from vc pstu.jpg" },
    { year: "2024", title: "ICICT,BUET", description: "Authored & Presented a research paper on Federated Medical AI at the International Conference on ICT.", image: "/images/the certificate.jpg" },
    { year: "2025", title: "CSE,KU", description: "Gained 1st position in M.Sc Admission Test.", image: "/images/KU Chairman Honor.jpg" },
    { year: "", title: "The journey continues..." },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 text-slate-700 px-4">
      <div className="container mx-auto">
        <SectionTitle>My Journey & Qualifications</SectionTitle>
        <div className="max-w-3xl mx-auto mb-12 text-lg text-center leading-relaxed">
          <p className="mb-4">
            I believe life is a canvas of experiences, and I'm dedicated to painting mine with diverse skills and meaningful contributions. From the intricate logic of AI to the expressive freedom of art, my path has been one of continuous learning and creation.
          </p>
          <p>
            My academic background in [CSE] from [PSTU] (Graduation Year: [2024]) provided a strong foundation, which I've built upon with practical projects, research endeavors, and leadership roles.
          </p> 
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
      </div>
    </section>
  );
};

export default AboutSection;

