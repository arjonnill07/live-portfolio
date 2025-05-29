import React from 'react';
import SectionTitle from './SectionTitle';
import AnimatedCard from './AnimatedCard';

const ArtistSection = () => {
  // Video gallery for performance videos (YouTube/Facebook)
  const videoGallery = [
    { id: 1, title: "অপূর্ণতা", url: "https://www.youtube.com/watch?v=Hsj2r2GN7ic" },
    { id: 2, title: "খুব ভোরে", url: "https://www.facebook.com/campusnama/videos/7244651108993559" },
    { id: 3, title: "Campusnama", url: "https://www.facebook.com/campusnama/videos/1080265863378301" },
    { id: 4, title: "Rajniti - রাজনীতি", url: "https://www.facebook.com/campusnama/videos/3228286177488373" },
    // Add more video links as needed
  ];

  return (
    <section id="artist" className="py-16 sm:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 text-slate-800 px-4">
      <div className="container mx-auto">
        <SectionTitle>The <span className="text-purple-600">Artist</span> Within</SectionTitle>
        <p className="text-center max-w-2xl mx-auto text-slate-600 mb-12 text-lg">
          Exploring the world through a creative lens, translating ideas and emotions into visual narratives. Here's a glimpse into my artistic journey.
        </p>
        {/* Artistic Photo Gallery - la vie */}
        <h3 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-amber-300 drop-shadow-lg tracking-wider mb-8">la vie</h3>
        <div className="mb-20">
          <div className="bg-white/0 p-0 border-0 shadow-none">
            {/* To add images, simply add objects to the laVieImages array below */}
            {(() => {
              const laVieImages = [
                {
                  src: "/images/campusnama_craftlive22.jpg",
                  alt: "Live at Craft Live22",
                  title: "Live at Craft Live22",
                  desc: "The crowd, the lights, the energy—pure freedom on stage."
                },
                {
                  src: "/images/campusnama stories.jpg",
                  alt: "Open Air Concert",
                  title: "Open Air Concert",
                  desc: "A magical night under the stars, music echoing through the campus."
                },
                {
                  src: "/images/Campusnama at ku.jpg",
                  alt: "Inter University Music Fest, KU 2024",
                  title: "Inter University Music Fest, KU 2024",
                  desc: "Lost in the rhythm, found in the moment."
                },
                {
                  src: "/images/the back and white hand.jpg",
                  alt: "Combined Graduation ceremony, PSTU 2023",
                  title: "Combined Graduation ceremony, PSTU 2023",
                  desc: "Night full of memories and bonds of brotherhood."
                },
                 {
                  src: "/images/the great black and white redemption.jpg",
                  alt: "Combined Graduation ceremony, PSTU 2023",
                  title: "Combined Graduation ceremony,PSTU 2023",
                  desc: "Night full of memories and bonds of brotherhood."
                },
                // Add more images here, e.g.:
                // {
                //   src: "/images/your_image.jpg",
                //   alt: "Description",
                //   title: "Title",
                //   desc: "Poetic caption or story."
                // }
              ];
              return (
                <div className="flex overflow-x-auto gap-6 md:gap-10 pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-pink-200 scrollbar-track-pink-50">
                  {laVieImages.map((img, i) => (
                    <div
                      key={i}
                      className="group relative min-w-[260px] sm:min-w-[320px] max-w-xs rounded-2xl overflow-hidden flex flex-col justify-end transition-transform hover:scale-105 duration-300 snap-center bg-white/0 border-0 shadow-none"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-56 sm:h-64 object-contain object-center bg-white transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="p-4 md:p-6">
                          <h4 className="text-lg sm:text-xl font-semibold text-white drop-shadow mb-1 md:mb-2 tracking-tight">{img.title}</h4>
                          <p className="text-sm sm:text-base text-pink-100 italic leading-snug">{img.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
        {/* Video Gallery */}
        <h3 className="text-2xl font-bold text-purple-700 mb-4 mt-10 text-center">Performance Videos</h3>
        <div className="flex overflow-x-auto gap-8 mb-12 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-purple-50">
          {videoGallery.map(video => (
            <AnimatedCard key={video.id} className="min-w-[340px] max-w-xs bg-white/80 border border-purple-200 shadow-lg flex-shrink-0 snap-center">
              <div className="aspect-w-16 aspect-h-9 mb-3 rounded-lg overflow-hidden">
                {video.url.includes('youtube.com') ? (
                  <iframe
                    src={video.url.replace('watch?v=', 'embed/')}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-56 rounded-lg border-none"
                  ></iframe>
                ) : video.url.includes('facebook.com') ? (
                  video.url.includes('/videos/') ? (
                    <iframe
                      src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url)}`}
                      title={video.title}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                      allowFullScreen
                      className="w-full h-56 rounded-lg border-none"
                    ></iframe>
                  ) : (
                    <a href={video.url} target="_blank" rel="noopener noreferrer" className="block w-full h-56 flex items-center justify-center bg-blue-100 text-blue-700 font-semibold">View on Facebook</a>
                  )
                ) : (
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="block w-full h-56 flex items-center justify-center bg-purple-100 text-purple-700 font-semibold">View Video</a>
                )}
              </div>
              <h4 className="text-md font-semibold text-purple-700 text-center">{video.title}</h4>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;
