import React from 'react';
import { SectionId } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';

export const Machine: React.FC = () => {
  return (
    <section id={SectionId.MACHINE} className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative overflow-hidden rounded-t-full md:rounded-t-none md:rounded-l-full border border-base group">
             <ScrollReveal className="h-full w-full">
                <img 
                  src="https://github.com/ryoto2323/Lumi-re-Skin---Private-Beauty-Salon/blob/main/b.png?raw=true" 
                  alt="Treatment Room" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-[2s] group-hover:scale-105" 
                />
            </ScrollReveal>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <ScrollReveal delay={0.2}>
              <h2 className="text-2xl md:text-3xl font-mincho text-text tracking-widest mb-8 leading-relaxed">
                「痛くない」には、<br/>理由があります。
              </h2>
              <div className="font-sans font-light text-text leading-loose tracking-relaxed space-y-6">
                <p>
                  日本人の繊細な肌に合わせて開発された、最新の「SHR方式」マシンを採用。
                </p>
                <p>
                  毛包全体に弱い熱を蓄積させる方式のため、従来の「バチッ」という強い痛みがありません。温かいマッサージを受けているような感覚で、痛みに弱い方やVIO脱毛でもリラックスして受けていただけます。
                </p>
                <p>
                  産毛や金髪、日焼け肌や色黒肌にも対応可能です。
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};