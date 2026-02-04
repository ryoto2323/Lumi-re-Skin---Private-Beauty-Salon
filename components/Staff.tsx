import React from 'react';
import { SectionId, STAFF_LIST } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';
import { Award } from 'lucide-react';

export const Staff: React.FC = () => {
  return (
    <section id={SectionId.STAFF} className="py-32 md:py-48 bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-40">
            <span className="font-eng text-accent tracking-[0.3em] text-xs block mb-8 uppercase">Expertise</span>
            <h2 className="text-3xl md:text-5xl font-mincho font-light text-text tracking-widest mb-10 leading-loose">
              プロフェッショナルの矜持
            </h2>
            <p className="font-sans font-light text-sm md:text-base text-text-light max-w-2xl mx-auto leading-loose tracking-relaxed text-balance opacity-80">
              私たちは、単に毛を減らす技術者ではありません。<br className="hidden md:block"/>
              あなたの肌の美しさを最大化し、自信を育む「美肌のパートナー」です。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-32 lg:gap-48 max-w-6xl mx-auto">
          {STAFF_LIST.map((staff, idx) => (
            <ScrollReveal key={staff.id} delay={idx * 0.2}>
              <div className="group flex flex-col items-center">
                <div className="relative w-full max-w-[360px] mb-20">
                  {/* Decorative Frames - Material Sharing */}
                  <div className={`absolute -inset-6 border border-accent/20 z-0 transition-transform duration-1000 group-hover:scale-105 ${idx % 2 === 0 ? 'translate-x-6 translate-y-6' : '-translate-x-6 translate-y-6'}`}></div>
                  <div className={`absolute inset-0 bg-sand/10 z-0 ${idx % 2 === 0 ? '-translate-x-3 -translate-y-3' : 'translate-x-3 -translate-y-3'}`}></div>
                  
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl shadow-main/5 z-10">
                    <img 
                      src={staff.image} 
                      alt={staff.name} 
                      className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
                    />
                    {/* Bottom bleed gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-text/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center items-center gap-2 bg-white/95 backdrop-blur px-8 py-4 rounded-full transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 shadow-xl shadow-black/5 whitespace-nowrap">
                      <Award size={16} className="text-accent" />
                      <span className="text-[10px] font-sans tracking-[0.3em] text-text uppercase font-medium">Licensed Aesthetician</span>
                    </div>
                  </div>

                  {/* Vertically Aligned Name Accent - Material Sharing */}
                  <div className={`absolute -top-12 vertical-text font-serif text-6xl text-main/10 select-none pointer-events-none ${idx % 2 === 0 ? '-right-12' : '-left-12'}`}>
                    {staff.name}
                  </div>
                </div>
                
                <div className="text-center max-w-sm px-4">
                  <span className="font-eng text-accent text-xs tracking-widest block mb-4 uppercase font-medium">{staff.role}</span>
                  <h3 className="font-mincho text-2xl md:text-3xl text-text mb-8 tracking-[0.2em]">{staff.name}</h3>
                  <div className="w-10 h-[0.5px] bg-accent/40 mx-auto mb-8"></div>
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