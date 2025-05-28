import React from 'react';
import { Award } from 'lucide-react';
import SectionTitle from './SectionTitle';
import AnimatedCard from './AnimatedCard';

const AboutSection = () => {
  const journeyPoints = [
    { year: "2015", title: "Early Sparks", description: "Discovered a passion for [Your Early Interest 1] and [Your Early Interest 2], laying the groundwork for future explorations.", image: "/images/early_sparks.jpg" },
    { year: "2018", title: "Academic Foundations", description: "Began my [Your Degree] at [Your University], focusing on [Your Key Subject].", image: "/images/academic_foundations.jpg" },
    { year: "2020", title: "First Major Project", description: "Developed [Your Project], which solidified my interest in [Your Field].", image: "/images/first_project.jpg" },
    { year: "2022", title: "Key Internship/Experience", description: "Gained practical experience at [Company/Organization] as a [Your Role].", image: "/images/internship.jpg" },
    { year: "Present", title: "Continuous Growth", description: "Actively pursuing new challenges in AI, art, and research, always eager to learn and contribute.", image: "/images/growth.jpg" },
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
              <AnimatedCard className={`order-1 sm:w-5/12 px-6 py-4 bg-white shadow-lg rounded-xl border border-teal-200 flex flex-col sm:flex-row items-center gap-4`}>
                <img
                  src={point.image}
                  alt={point.title}
                  className="w-32 h-20 sm:w-40 sm:h-24 object-cover rounded-lg border border-teal-100 shadow-md bg-white flex-shrink-0"
                />
                <div className="flex-1 text-left">
                  <h4 className="font-bold text-teal-700 text-xl mb-2">{point.title}</h4>
                  <p className="text-sm text-slate-600 leading-snug">{point.description}</p>
                </div>
              </AnimatedCard>
            </div>
          ))}
        </div>
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-teal-700 mb-6">Key Qualifications</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[
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

export default AboutSection;
