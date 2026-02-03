import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';

export const Gallery: React.FC = () => {
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
            <ScrollReveal key={idx} delay={idx * 0.1} className="aspect-[4/3] overflow-hidden group">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};