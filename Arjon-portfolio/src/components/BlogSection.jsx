import React from 'react';
import SectionTitle from './SectionTitle';
import AnimatedCard from './AnimatedCard';
import { ExternalLink } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    { id: 1, title: "The Future of Generative AI: Beyond Text and Images", date: "May 15, 2024", excerpt: "Exploring the next frontiers of generative models, from 3D environments to interactive storytelling...", link: "#", category: "AI Musings" },
    { id: 2, title: "Finding Your Artistic Voice in a Digital World", date: "April 28, 2024", excerpt: "Navigating the challenges and opportunities for artists in the age of AI art generators and NFTs...", link: "#", category: "Creative Thoughts" },
    { id: 3, title: "Lessons from Leading a Remote First Tech Team", date: "March 10, 2024", excerpt: "Key strategies for effective communication, collaboration, and motivation in distributed teams...", link: "#", category: "Leadership Insights" },
    { id: 4, title: "The Symbiosis of Art and Technology", date: "February 20, 2024", excerpt: "How advancements in tech are not just tools for artists, but also sources of inspiration and new mediums.", link: "#", category: "Art & Tech" },
  ];

  return (
    <section id="blog" className="py-16 sm:py-24 bg-gray-100 text-gray-800 px-4">
      <div className="container mx-auto">
        <SectionTitle>My <span className="text-sky-700">Creative Writings</span> & Thoughts</SectionTitle>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12 text-lg">
          A space for sharing insights, reflections, and stories on topics close to my heart – from technology and art to leadership and life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {blogPosts.map(post => (
            <AnimatedCard key={post.id} className="bg-white border border-gray-200 shadow-lg flex flex-col">
              <div className="flex-grow">
                <span className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">{post.category}</span>
                <h3 className="text-xl font-semibold text-sky-800 mb-2 group-hover:text-sky-600 transition-colors">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{post.date}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              </div>
              <a href={post.link} className="text-sky-600 hover:text-sky-800 font-medium inline-flex items-center self-start mt-auto">
                Read Full Post <ExternalLink size={16} className="ml-1.5" />
              </a>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
