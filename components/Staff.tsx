import React from 'react';
import { SectionId, STAFF_LIST } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';
import { Award } from 'lucide-react';

export const Staff: React.FC = () => {
  return (
    <section id={SectionId.STAFF} className="py-32 md:py-48 bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-32">
            <span className="font-eng text-accent tracking-[0.3em] text-xs block mb-8 uppercase">Expertise</span>
            <h2 className="text-3xl md:text-5xl font-mincho font-light text-text tracking-widest mb-10">
              プロフェッショナルの矜持
            </h2>
            <p className="font-sans font-light text-sm md:text-base text-text-light max-w-2xl mx-auto leading-loose tracking-relaxed text-balance opacity-80">
              私たちは、単に毛を減らす技術者ではありません。<br className="hidden md:block"/>
              あなたの肌の美しさを最大化し、自信を育む「美肌のパートナー」です。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-24 max-w-5xl mx-auto">
          {STAFF_LIST.map((staff, idx) => (
            <ScrollReveal key={staff.id} delay={idx * 0.2}>
              <div className="group flex flex-col items-center">
                <div className="relative w-full max-w-[320px] aspect-[4/5] overflow-hidden rounded-sm mb-12 shadow-xl shadow-[#D8C6C6]/20">
                   <img 
                    src={staff.image} 
                    alt={staff.name} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A4A4A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-6 left-6 right-6 flex justify-center items-center gap-2 bg-white/95 backdrop-blur px-6 py-3 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 shadow-sm">
                    <Award size={14} className="text-[#BFA588]" />
                    <span className="text-[10px] font-sans tracking-widest text-text uppercase">Certified Expert</span>
                  </div>
                </div>
                
                <div className="text-center max-w-sm">
                  <span className="font-eng text-[#BFA588] text-xs tracking-widest block mb-4">{staff.role}</span>
                  <h3 className="font-mincho text-2xl text-text mb-8 tracking-[0.2em]">{staff.name}</h3>
                  <p className="font-sans font-light text-sm leading-loose text-text-light text-justify md:text-center italic tracking-relaxed text-balance opacity-80">
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