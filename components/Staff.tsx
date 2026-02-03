import React from 'react';
import { SectionId, STAFF_LIST } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';

export const Staff: React.FC = () => {
  return (
    <section id={SectionId.STAFF} className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="font-eng text-accent tracking-[0.2em] text-sm block mb-4">Staff</span>
            <h2 className="text-2xl md:text-3xl font-mincho text-text tracking-widest mb-6">
              私たちが、心を込めて担当します。
            </h2>
            <p className="font-sans font-light text-sm md:text-base text-text/80 leading-loose">
              技術はもちろん、話しやすさ・居心地の良さを大切にしています。<br/>
              お肌の悩み、ムダ毛の悩み、なんでもお話しください。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {STAFF_LIST.map((staff, idx) => (
            <ScrollReveal key={staff.id} delay={idx * 0.2}>
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 mb-8 relative">
                   <img 
                    src={`https://placehold.co/400x400/EAEAEA/BCBCBC?text=${staff.name.split(' ')[1]}`} 
                    alt={staff.name} 
                    className="w-full h-full object-cover rounded-full md:rounded-[40px] grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h3 className="font-mincho text-xl text-text mb-2 tracking-widest">
                  {staff.name}
                </h3>
                {staff.role && (
                  <p className="font-sans text-xs text-accent mb-4 tracking-wider">{staff.role}</p>
                )}
                <div className="relative p-6 bg-base mt-4 rounded-lg">
                  <p className="font-sans font-light text-sm leading-loose text-text text-justify">
                    {staff.message}
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