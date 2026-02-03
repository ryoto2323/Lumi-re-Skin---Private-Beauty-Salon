import React from 'react';
import { SectionId, MENU_ITEMS } from '../constants';
import { Button } from './ui/Button';
import { ScrollReveal } from './ui/ScrollReveal';

interface MenuProps {
  onBook: () => void;
}

export const Menu: React.FC<MenuProps> = ({ onBook }) => {
  return (
    <section id={SectionId.MENU} className="py-24 md:py-32 bg-base">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-eng text-accent tracking-[0.2em] text-sm block mb-4">Menu & Price</span>
            <h2 className="text-xl md:text-3xl font-mincho text-text tracking-widest mb-6">
              分かりやすさと誠実さを大切に。
            </h2>
            <p className="font-sans font-light text-sm md:text-base text-text leading-loose">
              複雑な条件や、強引なローンの勧誘は一切ございません。<br className="hidden md:block"/>
              必要な回数を、明確な価格でご提案します。
            </p>
          </div>
        </ScrollReveal>

        {/* Special Item */}
        <ScrollReveal delay={0.2}>
          <div className="bg-white border border-main/30 p-8 md:p-12 mb-12 relative shadow-sm">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-main text-white font-eng px-6 py-1 text-sm tracking-widest">
              Pickup
            </div>
            <div className="text-center">
              <h3 className="font-mincho text-xl md:text-2xl text-text mb-4 tracking-widest">
                {MENU_ITEMS.pickup.name}
              </h3>
              <p className="font-sans font-light text-sm text-text/90 mb-6">
                {MENU_ITEMS.pickup.content}
              </p>
              <div className="flex justify-center items-baseline gap-4 mb-8">
                <span className="text-sm text-text-light line-through">通常 {MENU_ITEMS.pickup.price_original}</span>
                <span className="font-eng text-3xl md:text-4xl text-accent font-medium">
                  {MENU_ITEMS.pickup.price_discount} <span className="text-sm text-text ml-1">(税込)</span>
                </span>
              </div>
              <p className="text-xs text-text mb-8">まずは「痛みのなさ」と「おもてなし」をご体感ください。</p>
              <Button variant="secondary" onClick={onBook} className="w-full md:w-auto min-w-[240px]">
                ご予約はこちら
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Normal Menu */}
        <ScrollReveal delay={0.4}>
          <div className="bg-white border border-gray-200 p-8 md:p-12">
            <ul className="space-y-6">
              {MENU_ITEMS.normal.map((item, idx) => (
                <li key={idx} className="flex flex-col md:flex-row justify-between items-baseline border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <span className="font-mincho text-lg text-text mb-2 md:mb-0">{item.name}</span>
                  <span className="font-sans font-light text-text">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 text-center text-xs text-text-light">
            ※表示価格はすべて税込です。入会金・事務手数料はかかりません。
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};