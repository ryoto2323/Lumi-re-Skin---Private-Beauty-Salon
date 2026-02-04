import React from 'react';
import { SectionId, PROMISES } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';

export const Promises: React.FC = () => {
  return (
    <section id={SectionId.PROMISES} className="py-32 md:py-48 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative">
        <ScrollReveal>
          <div className="text-center mb-40 relative z-10">
            <span className="font-eng text-accent tracking-extreme text-xs block mb-8 uppercase">3 Promises</span>
            <h2 className="text-3xl md:text-5xl font-mincho font-light text-text tracking-widest leading-loose">
              <span className="inline-block">私たちが約束する</span><span className="inline-block">3つの「安心」</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-20 lg:gap-32">
          {PROMISES.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.2}>
              <div className="flex flex-col items-center text-center group relative p-4">
                {/* Background Giant Number - Lighter, more organic */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 text-[10rem] leading-none font-serif text-[#E6DDD3]/40 select-none pointer-events-none z-0">
                  {item.no}
                </div>

                <div className="relative z-10">
                  <h3 className="font-eng text-xs text-accent tracking-[0.3em] mb-6 uppercase">
                    {item.title_en}
                  </h3>
                  <h4 
                    className="font-mincho font-normal text-xl text-text mb-8 pb-6 w-full leading-loose tracking-widest text-balance border-b border-[#E6DDD3]"
                    dangerouslySetInnerHTML={{ __html: item.title_ja }}
                  />
                  <p className="font-sans font-light text-sm leading-loose tracking-relaxed text-text-light text-justify md:text-center text-balance opacity-80">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};