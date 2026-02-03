import React from 'react';
import { SectionId, MENU_ITEMS } from '../constants';
import { Button } from './ui/Button';
import { ScrollReveal } from './ui/ScrollReveal';
import { Check, Sparkles } from 'lucide-react';

interface MenuProps {
  onBook: () => void;
}

export const Menu: React.FC<MenuProps> = ({ onBook }) => {
  return (
    <section id={SectionId.MENU} className="py-24 md:py-40 bg-base">
      <div className="container mx-auto px-6 md:px-12">
        
        <ScrollReveal>
          <div className="text-center mb-24">
            <span className="font-eng text-accent tracking-extreme text-xs block mb-6 uppercase">Menu & Price</span>
            <h2 className="text-2xl md:text-4xl font-mincho font-medium text-text tracking-widest mb-10 leading-airy">
              あなたに最適なプランを
            </h2>
            <p className="font-sans font-light text-sm md:text-base text-text leading-airy tracking-airy max-w-2xl mx-auto">
              必要な回数を、明確な価格で。<br className="hidden md:block"/>
              入会金・追加料金はいっさいございません。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column: Visual Recommended Plan */}
          <ScrollReveal delay={0.2} className="relative group">
             <div className="absolute -inset-4 bg-white/50 blur-xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
             <div className="relative bg-white shadow-2xl border border-white/50 overflow-hidden">
                <div className="h-64 overflow-hidden relative">
                   <img 
                    src="https://github.com/ryoto2323/Lumi-re-Skin---Private-Beauty-Salon/blob/main/i.png?raw=true" 
                    alt="Treatment" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                   />
                   <div className="absolute inset-0 bg-accent/20 mix-blend-overlay"></div>
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 text-xs tracking-widest font-eng uppercase text-accent">
                      Recommended
                   </div>
                </div>
                <div className="p-10 text-center">
                   <h3 className="font-mincho text-2xl text-text mb-4 tracking-widest">{MENU_ITEMS.pickup.name}</h3>
                   <div className="w-12 h-[1px] bg-accent mx-auto mb-6"></div>
                   <p className="text-sm font-light text-text leading-relaxed mb-8">
                     {MENU_ITEMS.pickup.content}
                   </p>
                   <div className="mb-8">
                      <span className="text-xs text-text-light line-through mr-3">通常 {MENU_ITEMS.pickup.price_original}</span>
                      <span className="font-eng text-4xl text-accent font-medium">{MENU_ITEMS.pickup.price_discount}</span>
                      <span className="text-xs ml-1">(税込)</span>
                   </div>
                   <Button fullWidth onClick={onBook}>まずは体験する</Button>
                </div>
             </div>
          </ScrollReveal>

          {/* Right Column: Menu List */}
          <ScrollReveal delay={0.4}>
             <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 border border-white/50 shadow-sm rounded-sm">
                <div className="flex items-center gap-3 mb-8">
                  <Sparkles size={18} className="text-accent" />
                  <h3 className="font-eng text-lg tracking-widest text-text">Standard Menu</h3>
                </div>
                
                <ul className="space-y-8">
                  {MENU_ITEMS.normal.map((item, idx) => (
                    <li key={idx} className="group">
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="font-mincho font-medium text-lg text-text group-hover:text-accent transition-colors tracking-wide">
                          {item.name}
                        </span>
                        <span className="font-eng text-lg text-text/80">{item.price}</span>
                      </div>
                      <div className="w-full h-[1px] bg-gray-200 group-hover:bg-accent/30 transition-colors origin-left"></div>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 bg-[#F9F8F6] p-6 rounded-sm">
                   <h4 className="font-mincho text-sm mb-3 text-text tracking-wide">含まれるサービス</h4>
                   <div className="grid grid-cols-2 gap-3">
                      {['カウンセリング無料', 'シェービング補助', '肌トラブル保証', 'アフターケア'].map((s, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-text-light">
                           <Check size={12} className="text-accent" />
                           {s}
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};