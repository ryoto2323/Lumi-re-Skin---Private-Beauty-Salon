import React from 'react';
import { SectionId, STAFF_LIST } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';
import { Award } from 'lucide-react';

export const Staff: React.FC = () => {
  return (
    <section id={SectionId.STAFF} className="py-24 md:py-40 bg-white bg-dot-pattern">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-24">
            <span className="font-eng text-accent tracking-[0.3em] text-xs block mb-6 uppercase">Expertise</span>
            <h2 className="text-2xl md:text-4xl font-mincho text-text tracking-widest mb-8">
              プロフェッショナルの矜持
            </h2>
            <p className="font-sans font-light text-sm md:text-base text-text-light max-w-2xl mx-auto leading-relaxed tracking-relaxed">
              私たちは、単に毛を減らす技術者ではありません。<br className="hidden md:block"/>
              あなたの肌の美しさを最大化し、自信を育む「美肌のパートナー」です。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-20 max-w-5xl mx-auto">
          {STAFF_LIST.map((staff, idx) => (
            <ScrollReveal key={staff.id} delay={idx * 0.2}>
              <div className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-10 shadow-lg">
                   <img 
                    src={staff.image} 
                    alt={staff.name} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-text/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <Award size={14} className="text-accent" />
                    <span className="text-[10px] font-sans tracking-widest text-text uppercase">Certified Expert</span>
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <span className="font-eng text-accent text-sm tracking-widest block mb-2">{staff.role}</span>
                  <h3 className="font-mincho text-2xl text-text mb-6 tracking-[0.15em]">{staff.name}</h3>
                  <div className="h-[1px] w-12 bg-accent/30 mb-6 hidden md:block" />
                  <p className="font-sans font-light text-sm md:text-[15px] leading-loose text-text-light text-left md:text-left italic tracking-relaxed">
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