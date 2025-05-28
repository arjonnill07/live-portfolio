import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import AnimatedCard from './AnimatedCard';
import { X } from 'lucide-react';

const ArtistSection = () => {
  const artPieces = [
    { id: 1, title: "Cosmic Dreams", type: "Digital Painting", year: "2023", imageUrl: "https://placehold.co/600x400/C0392B/FFFFFF?text=Cosmic+Dreams" },
    { id: 2, title: "Urban Serenity", type: "Photography", year: "2022", imageUrl: "https://placehold.co/600x400/2980B9/FFFFFF?text=Urban+Serenity" },
    { id: 3, title: "Abstract Emotions", type: "Mixed Media", year: "2023", imageUrl: "https://placehold.co/600x400/27AE60/FFFFFF?text=Abstract+Emotions" },
    { id: 4, title: "Portrait of Time", type: "Oil on Canvas", year: "2021", imageUrl: "https://placehold.co/600x400/F39C12/FFFFFF?text=Portrait+of+Time" },
    { id: 5, title: "Sculpted Thoughts", type: "3D Render", year: "2024", imageUrl: "https://placehold.co/600x400/8E44AD/FFFFFF?text=Sculpted+Thoughts" },
    { id: 6, title: "Nature's Whisper", type: "Watercolor", year: "2022", imageUrl: "https://placehold.co/600x400/16A085/FFFFFF?text=Nature's+Whisper" },
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="artist" className="py-16 sm:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 text-slate-800 px-4">
      <div className="container mx-auto">
        <SectionTitle>The <span className="text-purple-600">Artist</span> Within</SectionTitle>
        <p className="text-center max-w-2xl mx-auto text-slate-600 mb-12 text-lg">
          Exploring the world through a creative lens, translating ideas and emotions into visual narratives. Here's a glimpse into my artistic journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {artPieces.map(art => (
            <AnimatedCard key={art.id} className="bg-white/70 backdrop-blur-sm border border-pink-200 shadow-lg cursor-pointer group" onClick={() => setSelectedImage(art)}>
              <div className="aspect-w-4 aspect-h-3 mb-4 overflow-hidden rounded-lg">
                <img src={art.imageUrl} alt={art.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-semibold text-purple-700 mb-1">{art.title}</h4>
              <p className="text-sm text-pink-600 mb-1">{art.type}</p>
              <p className="text-xs text-slate-500">{art.year}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4" onClick={() => setSelectedImage(null)}>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.imageUrl} alt={selectedImage.title} className="w-full h-auto object-contain rounded-lg mb-4 max-h-[70vh]" />
            <h3 className="text-2xl font-bold text-purple-700">{selectedImage.title}</h3>
            <p className="text-md text-pink-600">{selectedImage.type} ({selectedImage.year})</p>
            <button
              onClick={() => setSelectedImage(null)}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center"
            >
              <X size={18} className="mr-2" /> Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ArtistSection;
