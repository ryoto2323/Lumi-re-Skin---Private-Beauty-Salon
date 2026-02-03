import React from 'react';
import { SectionId, REVIEWS } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';

export const Voice: React.FC = () => {
  return (
    <section id={SectionId.VOICE} className="py-24 md:py-32 bg-base border-t border-white">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-eng text-accent tracking-[0.2em] text-sm block mb-4">Customer Voice</span>
            <h2 className="text-2xl md:text-3xl font-mincho text-text tracking-widest">
              実際に通われているお客様の声
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {REVIEWS.map((review, idx) => (
            <ScrollReveal key={review.id} delay={idx * 0.2}>
              <div className="bg-white p-8 md:p-10 shadow-sm border border-gray-50 relative h-full">
                <div className="font-eng text-6xl text-main/20 absolute top-4 left-6">"</div>
                <p className="font-sans font-light text-sm md:text-base leading-loose text-text mb-6 relative z-10">
                  {review.comment}
                </p>
                <div className="text-right">
                   <span className="font-sans text-xs text-text-light border-t border-gray-100 pt-2 inline-block px-4">
                     {review.age}
                   </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};