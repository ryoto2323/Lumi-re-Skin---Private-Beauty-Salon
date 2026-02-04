import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';
import { X, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Define organic, distinct corner radii for each slot to break the grid
  const cornerStyles = [
    "rounded-tl-[100px] rounded-br-[20px]",
    "rounded-tr-[100px] rounded-bl-[20px]",
    "rounded-bl-[100px] rounded-tr-[20px]",
    "rounded-br-[100px] rounded-tl-[20px]"
  ];

  return (
    <section id="gallery" className="py-32 md:py-48 bg-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-64 bg-canvas/50 -rotate-6 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-32">
            <span className="font-eng text-accent tracking-extreme text-xs block mb-8 uppercase">Interior & Atmosphere</span>
            <h2 className="text-3xl md:text-4xl font-mincho font-light text-text tracking-widest leading-loose">
              五感を満たす、<br/>
              静謐なプライベート空間
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto">
          {GALLERY_IMAGES.map((img, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15} className={`aspect-[4/5] overflow-hidden group relative cursor-pointer shadow-2xl shadow-main/5 transition-all duration-1000 hover:-translate-y-4 ${cornerStyles[idx % 4]}`} >
              <div onClick={() => setSelectedImage(img.src)} className="w-full h-full relative">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110 grayscale-[0.05] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-text/0 group-hover:bg-text/30 transition-all duration-700 flex flex-col items-center justify-center gap-6">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-50 group-hover:scale-100" />
                  <span className="text-white text-[11px] tracking-[0.6em] opacity-0 group-hover:opacity-100 transition-all duration-700 uppercase font-eng font-light">{img.alt}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-24 text-center">
           <p className="font-sans font-light text-sm text-text-light/50 tracking-[0.4em] italic uppercase">
             Curated for your timeless beauty
           </p>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-canvas/98 backdrop-blur-2xl flex items-center justify-center p-8 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-10 right-10 text-text/40 hover:text-accent transition-colors p-3"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} strokeWidth={1} />
          </button>
          
          <div 
            className="max-w-5xl max-h-[85vh] w-full relative shadow-[0_60px_120px_-30px_rgba(0,0,0,0.2)] overflow-hidden rounded-sm animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Expanded view" 
              className="w-full h-full object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
};