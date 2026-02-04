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
            <p className="font-sans font-light text-sm md:text-base text-text-light leading-loose tracking-airy max-w-2xl mx-auto opacity-80">
              必要な回数を、明確な価格で。<br className="hidden md:block"/>
              入会金・追加料金はいっさいございません。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          {/* Left Column: Visual Recommended Plan with Material Sharing */}
          <ScrollReveal delay={0.2} className="relative group">
             {/* Dynamic Glow effect */}
             <div className="absolute -inset-16 bg-main/5 blur-[120px] rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-[2s]"></div>
             
             {/* Card - Integrated Material Design */}
             <div className="relative bg-white/50 backdrop-blur-2xl shadow-2xl shadow-main/5 border border-white/80 rounded-sm overflow-hidden transform hover:-translate-y-2 transition-all duration-1000">
                <div className="h-96 overflow-hidden relative">
                   <img 
                    src="https://github.com/ryoto2323/Lumi-re-Skin---Private-Beauty-Salon/blob/main/i.png?raw=true" 
                    alt="Treatment" 
                    className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105 opacity-90 grayscale-[0.05]" 
                   />
                   {/* Material Sharing Overlay: Bleed bottom to card body color */}
                   <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-80"></div>
                   
                   <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md px-8 py-3 text-[10px] tracking-[0.4em] font-eng uppercase text-accent border border-accent/10 shadow-lg">
                      Recommended Plan
                   </div>
                </div>
                
                <div className="p-12 md:p-16 text-center relative -mt-20 bg-white/90 backdrop-blur-md border-t border-white/50">
                   <div className="inline-block font-eng text-[11px] tracking-widest text-main mb-6 uppercase font-medium">Limited Trial Offer</div>
                   <h3 className="font-mincho text-2xl md:text-3xl text-text mb-10 tracking-[0.2em]">{MENU_ITEMS.pickup.name}</h3>
                   <div className="w-16 h-[0.5px] bg-accent/30 mx-auto mb-12"></div>
                   <p className="text-sm font-light text-text-light leading-extra-loose mb-14 max-w-xs mx-auto text-balance">
                     {MENU_ITEMS.pickup.content}
                   </p>
                   <div className="mb-16 py-10 rounded-sm border-y border-sand/40 bg-canvas/30">
                      <span className="text-xs text-text-light/50 line-through mr-6 font-light tracking-widest uppercase">Standard {MENU_ITEMS.pickup.price_original}</span>
                      <span className="font-eng text-6xl text-accent font-light tracking-tighter">{MENU_ITEMS.pickup.price_discount}</span>
                      <span className="text-xs ml-3 text-text font-light tracking-widest">(税込)</span>
                   </div>
                   <Button fullWidth onClick={onBook} variant="primary" size="lg" className="shadow-2xl shadow-accent/20">今すぐ体験予約へ進む</Button>
                </div>
             </div>
          </ScrollReveal>

          {/* Right Column: Menu List */}
          <ScrollReveal delay={0.4}>
             <div className="p-8 md:p-12 lg:pl-16">
                <div className="flex items-center gap-6 mb-20 border-b border-sand pb-8">
                  <Sparkles size={20} className="text-accent" />
                  <h3 className="font-eng text-xl tracking-[0.5em] text-text uppercase font-light">Price List</h3>
                </div>
                
                <ul className="space-y-12">
                  {MENU_ITEMS.normal.map((item, idx) => (
                    <li key={idx} className="group py-6 transition-all duration-700">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4 mb-4">
                        <span className="font-mincho font-normal text-xl text-text group-hover:text-accent transition-colors tracking-[0.1em]">
                          {item.name}
                        </span>
                        <div className="h-[0.5px] flex-1 bg-sand/50 mx-6 hidden md:block"></div>
                        <span className="font-eng text-lg text-text-light font-light whitespace-nowrap tracking-wide">{item.price}</span>
                      </div>
                      <div className="h-[0.5px] w-0 bg-accent/30 group-hover:w-full transition-all duration-1000 ease-in-out"></div>
                    </li>
                  ))}
                </ul>

                <div className="mt-24 bg-white/60 backdrop-blur-md p-12 border border-sand/50 rounded-sm shadow-xl shadow-black/5">
                   <h4 className="font-mincho text-xs mb-10 text-accent tracking-[0.4em] uppercase border-b border-accent/20 pb-4 inline-block">Service Excellence</h4>
                   <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                      {['カウンセリング無料', 'シェービング補助', '肌トラブル保証', 'パウダールーム完備'].map((s, i) => (
                        <div key={i} className="flex items-center gap-5 text-[14px] text-text-light font-light tracking-wide">
                           <div className="w-1.5 h-1.5 rounded-full bg-main/60"></div>
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