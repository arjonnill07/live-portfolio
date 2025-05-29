import React from 'react';
import SectionTitle from './SectionTitle';
import { Mail, Phone, MapPin, Linkedin, Github, Facebook } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail size={22} className="text-sky-600 mr-3" />, label: 'Email', value: 'arjongoldercse@gmail.com', link: 'mailto:arjongoldercse@gmail.com'
  },
  {
    icon: <Phone size={22} className="text-sky-600 mr-3" />, label: 'Phone', value: '+880 1881896752', link: 'tel:+8801881896752'
  },
  {
    icon: <MapPin size={22} className="text-sky-600 mr-3" />, label: 'Location', value: 'Khulna, Bangladesh', link: null
  },
];

const socialLinks = [
  {
    icon: <Linkedin size={22} />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/arjon-golder/'
  },
  {
    icon: <Github size={22} />, label: 'GitHub', url: 'https://github.com/arjonnill07'
  },
  {
    icon: <Facebook size={22} />, label: 'Facebook', url: 'https://www.facebook.com/arjon.nill'
  },
  
];

const GetInTouch = () => (
  <section id="get-in-touch" className="py-16 sm:py-24 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 text-slate-800 px-4">
    <div className="container mx-auto max-w-2xl">
      <SectionTitle>Get in <span className="text-sky-600">Touch</span></SectionTitle>
      <p className="text-center text-lg text-slate-600 mb-10">
        Feel free to reach out for collaborations, opportunities, or just to say hello!
      </p>
      <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
        <ul className="space-y-6">
          {contactInfo.map((item, idx) => (
            <li key={idx} className="flex items-center text-lg">
              {item.icon}
              {item.link ? (
                <a href={item.link} className="text-sky-700 hover:underline font-medium">{item.value}</a>
              ) : (
                <span className="text-slate-700 font-medium">{item.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center space-x-8 mt-6">
        {socialLinks.map((social, idx) => (
          <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 transition-colors flex flex-col items-center">
            {social.icon}
            <span className="text-xs mt-1">{social.label}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default GetInTouch;
