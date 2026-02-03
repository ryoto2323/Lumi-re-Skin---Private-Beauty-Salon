import React from 'react';
import { SectionId, PROMISES } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';

export const Promises: React.FC = () => {
  return (
    <section id={SectionId.PROMISES} className="py-24 md:py-40 bg-[#F9F8F6]">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-24">
            <span className="font-eng text-accent tracking-extreme text-xs block mb-6 uppercase">3 Promises</span>
            <h2 className="text-2xl md:text-4xl font-mincho font-medium text-text tracking-widest leading-airy">
              <span className="inline-block">私たちが約束する</span><span className="inline-block">3つの「安心」</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
          {PROMISES.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.2}>
              <div className="flex flex-col items-center text-center group">
                <div className="font-eng text-6xl md:text-7xl text-main/30 font-light mb-8 group-hover:text-accent/40 transition-colors duration-500">
                  {item.no}
                </div>
                <h3 className="font-eng text-xl text-accent tracking-extreme mb-4 uppercase">
                  {item.title_en}
                </h3>
                <h4 
                  className="font-mincho font-medium text-lg md:text-xl text-text mb-8 border-b border-text/10 pb-6 w-full leading-relaxed tracking-widest text-balance"
                  dangerouslySetInnerHTML={{ __html: item.title_ja }}
                />
                <p className="font-sans font-light text-sm leading-relaxed tracking-relaxed text-text text-left md:text-center text-balance">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};