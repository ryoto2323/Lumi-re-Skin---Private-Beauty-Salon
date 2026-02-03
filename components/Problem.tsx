import React from 'react';
import { SectionId } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';

export const Introduction: React.FC = () => {
  const troubles = [
    "キャンペーンで契約したけど、全然予約が取れない",
    "毎回スタッフが変わって、悩みを相談できない",
    "医療脱毛は痛すぎて、通うのが辛くなってしまった"
  ];

  return (
    <section id={SectionId.CONCEPT} className="py-24 md:py-40 bg-canvas relative">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-mincho font-medium text-text mb-20 tracking-widest leading-airy px-4">
              <span className="phrase">サロン選びに</span><br className="md:hidden"/><span className="phrase">疲れてしまったあなたへ</span>
            </h2>
            
            {/* Troubles Section */}
            <div className="space-y-6 mb-24 px-4">
              {troubles.map((text, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-sm border border-main/20 p-6 md:p-8 rounded-sm shadow-sm flex flex-col items-center justify-center text-center">
                  <p className="font-sans font-normal text-text leading-airy tracking-relaxed text-base md:text-lg w-full">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-12 font-sans font-light text-text leading-airy tracking-relaxed text-base md:text-lg px-6">
              <p>
                <span className="phrase">もしあなたがそんな経験をお持ちなら、</span><br/>
                <span className="phrase">Lumière Skinが最後のサロンになります。</span>
              </p>
              
              <p>
                <span className="phrase">私たちが大切にしているのは、</span><br/>
                <strong className="font-medium border-b border-main pb-1 phrase">「流れ作業ではない、一人ひとりに寄り添う脱毛」</strong>
              </p>
              
              <p>
                <span className="phrase">大型店にはできない、</span><br/>
                <span className="phrase">きめ細やかなおもてなしをお約束します。</span>
              </p>
            </div>
            
            <div className="mt-24 w-[1px] h-32 bg-accent/20 mx-auto"></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};