import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';
import { X, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-eng text-accent tracking-[0.2em] text-sm block mb-4">Gallery</span>
            <h2 className="text-2xl md:text-3xl font-mincho text-text tracking-widest">
              上質なプライベート空間
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} className="aspect-[4/3] overflow-hidden group relative cursor-pointer" >
              <div onClick={() => setSelectedImage(img.src)} className="w-full h-full relative">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-canvas/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-text/60 hover:text-text transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} strokeWidth={1} />
          </button>
          
          <div 
            className="max-w-4xl max-h-[85vh] w-full relative shadow-2xl overflow-hidden rounded-sm animate-fade-in-up"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
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