import React from 'react';
import { SectionId, PROMISES } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';

export const Promises: React.FC = () => {
  return (
    <section id={SectionId.PROMISES} className="py-24 md:py-32 bg-[#F9F8F6]">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="font-eng text-accent tracking-[0.2em] text-sm block mb-4">3 Promises</span>
            <h2 className="text-xl md:text-3xl font-mincho text-text tracking-widest">
              私たちが約束する3つの「安心」
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {PROMISES.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.2}>
              <div className="flex flex-col items-center text-center group">
                <div className="font-eng text-5xl md:text-6xl text-main/30 font-light mb-6 group-hover:text-accent/40 transition-colors duration-500">
                  {item.no}
                </div>
                <h3 className="font-eng text-lg text-accent tracking-widest mb-2">
                  {item.title_en}
                </h3>
                <h4 
                  className="font-mincho text-lg text-text mb-6 border-b border-text/10 pb-4 w-full"
                  dangerouslySetInnerHTML={{ __html: item.title_ja }}
                />
                <p className="font-sans font-light text-sm leading-loose text-text text-justify">
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