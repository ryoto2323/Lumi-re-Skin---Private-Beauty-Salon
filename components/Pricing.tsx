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
    <section id={SectionId.MENU} className="py-32 md:py-48 bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        
        <ScrollReveal>
          <div className="text-center mb-32">
            <span className="font-eng text-accent tracking-extreme text-xs block mb-8 uppercase">Menu & Price</span>
            <h2 className="text-3xl md:text-5xl font-mincho font-light text-text tracking-widest mb-10 leading-loose">
              あなたに最適なプランを
            </h2>
            <p className="font-sans font-light text-sm md:text-base text-text-light leading-loose tracking-airy max-w-2xl mx-auto">
              必要な回数を、明確な価格で。<br className="hidden md:block"/>
              入会金・追加料金はいっさいございません。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column: Visual Recommended Plan */}
          <ScrollReveal delay={0.2} className="relative group">
             {/* Glow effect */}
             <div className="absolute -inset-8 bg-[#D8C6C6]/20 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>
             
             {/* Card - Glassmorphism & Floating */}
             <div className="relative bg-white/60 backdrop-blur-md shadow-2xl shadow-[#D8C6C6]/20 border border-white/40 rounded-sm overflow-hidden transform hover:-translate-y-2 transition-transform duration-700">
                <div className="h-72 overflow-hidden relative">
                   <img 
                    src="https://github.com/ryoto2323/Lumi-re-Skin---Private-Beauty-Salon/blob/main/i.png?raw=true" 
                    alt="Treatment" 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-90 grayscale-[0.1]" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent"></div>
                   <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-6 py-2 text-[10px] tracking-widest font-eng uppercase text-accent border border-[#BFA588]/20 shadow-sm">
                      Recommended
                   </div>
                </div>
                <div className="p-12 text-center relative -mt-20">
                   <h3 className="font-mincho text-2xl md:text-3xl text-text mb-8 tracking-widest relative z-10">{MENU_ITEMS.pickup.name}</h3>
                   <div className="w-8 h-[1px] bg-[#BFA588] mx-auto mb-10"></div>
                   <p className="text-sm font-light text-text-light leading-loose mb-10">
                     {MENU_ITEMS.pickup.content}
                   </p>
                   <div className="mb-12 py-6 rounded-sm border-t border-b border-[#E6DDD3]">
                      <span className="text-xs text-text-light line-through mr-4">通常 {MENU_ITEMS.pickup.price_original}</span>
                      <span className="font-eng text-5xl text-[#BFA588] font-light">{MENU_ITEMS.pickup.price_discount}</span>
                      <span className="text-xs ml-2 text-text">(税込)</span>
                   </div>
                   <Button fullWidth onClick={onBook} variant="primary">まずは体験する</Button>
                </div>
             </div>
          </ScrollReveal>

          {/* Right Column: Menu List */}
          <ScrollReveal delay={0.4}>
             <div className="p-8 md:p-12 border-l border-[#E6DDD3]">
                <div className="flex items-center gap-3 mb-12">
                  <Sparkles size={16} className="text-[#BFA588]" />
                  <h3 className="font-eng text-lg tracking-widest text-text">Standard Menu</h3>
                </div>
                
                <ul className="space-y-8">
                  {MENU_ITEMS.normal.map((item, idx) => (
                    <li key={idx} className="group py-6 border-b border-[#E6DDD3]/50 last:border-0 hover:pl-4 transition-all duration-500">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                        <span className="font-mincho font-normal text-lg md:text-xl text-text group-hover:text-[#BFA588] transition-colors tracking-wide">
                          {item.name}
                        </span>
                        <span className="font-eng text-base text-text-light font-light">{item.price}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-16 bg-[#F3F1EE] p-10 rounded-sm">
                   <h4 className="font-mincho text-sm mb-6 text-text tracking-wide border-b border-text/10 pb-2 inline-block">含まれるサービス</h4>
                   <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      {['カウンセリング無料', 'シェービング補助', '肌トラブル保証', 'アフターケア'].map((s, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs text-text-light font-light">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#D8C6C6]"></div>
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