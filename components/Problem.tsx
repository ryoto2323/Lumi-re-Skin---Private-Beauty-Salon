import React from 'react';
import { SectionId } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';

export const Introduction: React.FC = () => {
  return (
    <section id={SectionId.CONCEPT} className="py-32 md:py-48 bg-transparent relative overflow-hidden">
      {/* Decorative Text */}
      <div className="absolute top-20 right-[-5%] text-[12rem] font-serif text-[#E6DDD3]/20 pointer-events-none select-none z-0 rotate-90 mix-blend-multiply">
        Problems
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-end mb-32">
            <h2 className="text-3xl md:text-5xl font-mincho font-light text-text tracking-widest leading-loose md:w-1/2">
              <span className="block mb-6 text-xs font-eng tracking-widest text-accent uppercase">Concept</span>
              サロン選びに<br/>疲れてしまった<br/>あなたへ
            </h2>
            <p className="font-sans font-light text-text-light leading-loose tracking-relaxed text-base md:w-1/2 md:pb-4 border-l border-[#E6DDD3] pl-8">
              「また予約が取れない…」<br/>
              そんなストレスから、あなたを解放するために。<br/>
              Lumière Skinは生まれました。
            </p>
          </div>
        </ScrollReveal>
            
        {/* Typographic Layout (No Images) */}
        <div className="max-w-4xl mx-auto space-y-20 mb-40">
           {/* Item 1 */}
           <ScrollReveal delay={0.1} className="flex flex-col md:flex-row gap-6 md:gap-16 items-start border-t border-[#E6DDD3] pt-10">
               <div className="md:w-1/4 flex flex-row md:flex-col items-baseline md:items-start gap-4 md:gap-0">
                  <span className="font-eng text-5xl text-[#BFA588] font-light block mb-2 opacity-80">01</span>
                  <span className="font-mincho text-lg text-text tracking-widest">予約が取れない</span>
               </div>
               <div className="md:w-3/4">
                  <h3 className="font-mincho text-xl text-text mb-6 tracking-wide">キャンペーンで契約したのに…</h3>
                  <p className="font-sans font-light text-sm text-text-light leading-loose tracking-wide">
                     大型サロンによくある「契約後の予約難」。私たちは既存会員様の予約枠を最優先し、会員数を厳格に制限することで、この問題を根本から解決しました。
                     「通いたい時に予約が取れる」。それは私たちにとって、守るべき当たり前の約束です。
                  </p>
               </div>
           </ScrollReveal>

           {/* Item 2 */}
           <ScrollReveal delay={0.2} className="flex flex-col md:flex-row gap-6 md:gap-16 items-start border-t border-[#E6DDD3] pt-10">
               <div className="md:w-1/4 flex flex-row md:flex-col items-baseline md:items-start gap-4 md:gap-0">
                  <span className="font-eng text-5xl text-[#BFA588] font-light block mb-2 opacity-80">02</span>
                  <span className="font-mincho text-lg text-text tracking-widest">担当が毎回変わる</span>
               </div>
               <div className="md:w-3/4">
                  <h3 className="font-mincho text-xl text-text mb-6 tracking-wide">誰に相談すればいいの？</h3>
                  <p className="font-sans font-light text-sm text-text-light leading-loose tracking-wide">
                     流れ作業のような施術はいたしません。Lumière Skinは「完全専任担当制」。
                     あなたの肌質や毛の減り方を熟知した担当者が、卒業まで責任を持って伴走いたします。小さな肌の変化も見逃しません。
                  </p>
               </div>
           </ScrollReveal>

           {/* Item 3 */}
           <ScrollReveal delay={0.3} className="flex flex-col md:flex-row gap-6 md:gap-16 items-start border-t border-[#E6DDD3] pt-10">
               <div className="md:w-1/4 flex flex-row md:flex-col items-baseline md:items-start gap-4 md:gap-0">
                  <span className="font-eng text-5xl text-[#BFA588] font-light block mb-2 opacity-80">03</span>
                  <span className="font-mincho text-lg text-text tracking-widest">痛みが怖い</span>
               </div>
               <div className="md:w-3/4">
                  <h3 className="font-mincho text-xl text-text mb-6 tracking-wide">痛くて通うのが辛い</h3>
                  <p className="font-sans font-light text-sm text-text-light leading-loose tracking-wide">
                     「脱毛は痛いもの」という常識は過去のものです。最新のSHR方式を採用し、温かいマッサージを受けているような感覚を実現しました。
                     痛みに弱い方や、敏感肌の方でも、リラックスして施術を受けていただけます。
                  </p>
               </div>
           </ScrollReveal>
        </div>

        <div className="text-center md:text-left md:pl-[20%] space-y-8">
            <h3 className="text-2xl font-mincho text-text tracking-widest leading-loose font-light">
              私たちが大切にしているのは、<br/>
              <span className="bg-gradient-to-r from-[#D8C6C6]/30 to-transparent pr-4">「流れ作業ではない、一人ひとりに寄り添う脱毛」</span>
            </h3>
            <p className="font-sans font-light text-text-light">
              大型店にはできない、きめ細やかなおもてなしをお約束します。
            </p>
        </div>
      </div>
    </section>
  );
};