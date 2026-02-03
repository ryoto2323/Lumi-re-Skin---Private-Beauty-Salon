import React from 'react';
import { SectionId } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';

export const Introduction: React.FC = () => {
  return (
    <section id={SectionId.CONCEPT} className="py-24 md:py-32 bg-base relative">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-mincho font-medium text-text mb-12 tracking-widest leading-relaxed">
              サロン選びに疲れてしまった、<br/>あなたへ。
            </h2>
            
            <div className="space-y-8 font-sans font-light text-text leading-loose tracking-relaxed text-sm md:text-base">
              <p className="opacity-80">
                「キャンペーンで契約したけど、全然予約が取れない」<br/>
                「毎回スタッフが変わって、悩みを相談できない」<br/>
                「医療脱毛は痛すぎて、通うのが辛くなってしまった」
              </p>
              
              <p>
                もし、あなたがそんな経験をお持ちなら、<br className="md:hidden"/>
                Lumière Skinが最後のサロンになります。
              </p>
              
              <p>
                私たちが大切にしているのは、<br/>
                <strong className="font-medium border-b border-main pb-1">「流れ作業ではない、一人ひとりに寄り添う脱毛」</strong>。
              </p>
              
              <p>
                大型店にはできない、<br className="md:hidden"/>
                きめ細やかなおもてなしをお約束します。
              </p>
            </div>
            
            <div className="mt-16 w-[1px] h-24 bg-accent/30 mx-auto"></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};