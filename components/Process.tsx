import React from 'react';
import { SectionId, FLOW_STEPS } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';

export const Flow: React.FC = () => {
  return (
    <section id={SectionId.FLOW} className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="font-eng text-accent tracking-[0.2em] text-sm block mb-4">Flow & Space</span>
            <h2 className="text-2xl md:text-3xl font-mincho text-text tracking-widest">
              サロンでの過ごし方
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[15px] top-4 bottom-4 w-[1px] bg-accent/30 md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {FLOW_STEPS.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className={`relative flex gap-8 md:gap-0 items-start ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Dot */}
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-white border border-accent flex items-center justify-center z-10 md:left-1/2 md:-translate-x-1/2">
                     <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <div className="flex flex-col gap-2">
                      <span className="font-eng text-main text-sm tracking-widest">Step.0{idx + 1}</span>
                      <h3 className="font-mincho text-xl text-text tracking-widest mb-2">{step.title}</h3>
                      <p className="font-sans font-light text-base leading-loose text-text">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Empty Space for Grid */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};