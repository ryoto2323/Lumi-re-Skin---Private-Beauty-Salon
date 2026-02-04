import React, { useState } from 'react';
import { SALON_NAME } from '../constants';
import { Button } from './ui/Button';
import { ScrollReveal } from './ui/ScrollReveal';

export const Footer: React.FC = () => {
  const [isMapActive, setIsMapActive] = useState(false);

  return (
    <footer id="footer" className="bg-[#2C2A26] text-[#E6DDD3] pt-32 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between gap-16 mb-24 border-b border-[#E6DDD3]/10 pb-20">
            {/* Info */}
            <div className="w-full md:w-1/2">
               <h3 className="font-eng text-4xl tracking-widest mb-12 text-[#E6DDD3] font-light opacity-90">{SALON_NAME}</h3>
               <div className="font-sans font-light text-sm leading-loose space-y-6 tracking-wide opacity-70">
                 <p>
                   Lumière Skin (ルミエール・スキン) 銀座店<br/>
                   〒104-0061 東京都中央区銀座 1-2-3 (銀座駅 徒歩3分)
                 </p>
                 <p>
                   平日 11:00-21:00 / 土日祝 10:00-20:00<br/>
                   (定休日: 不定休)
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 mt-12">
                    <Button variant="primary" size="sm" className="bg-[#E6DDD3] text-[#2C2A26] hover:bg-white border-none shadow-none">WEB予約</Button>
                    <Button variant="outline" size="sm" className="border-[#E6DDD3]/30 text-[#E6DDD3] hover:bg-[#E6DDD3] hover:text-[#2C2A26]">LINE公式アカウント</Button>
                 </div>
               </div>
            </div>

            {/* Map */}
            <div 
              className="w-full md:w-1/2 h-[350px] bg-[#3A3834] grayscale opacity-60 relative group rounded-sm overflow-hidden border border-[#E6DDD3]/10"
              onClick={() => setIsMapActive(true)}
              onMouseLeave={() => setIsMapActive(false)}
            >
              {!isMapActive && (
                <div className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer bg-black/40 group-hover:bg-transparent transition-colors">
                   <div className="bg-white/90 text-[#2C2A26] px-6 py-3 text-[10px] tracking-widest rounded-sm font-medium uppercase shadow-lg">Click to Interact</div>
                </div>
              )}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683745!2d139.7644253152588!3d35.673562480196165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be4f7467a39%3A0x640b10609b4372a2!2sGinza%20Station!5e0!3m2!1sen!2sjp!4v1625624556424!5m2!1sen!2sjp" 
                width="100%" 
                height="100%" 
                style={{border:0, pointerEvents: isMapActive ? 'auto' : 'none'}} 
                allowFullScreen={false} 
                loading="lazy" 
                title="Google Map"
                className="mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
              ></iframe>
            </div>
          </div>

          <div className="text-center font-eng text-[10px] tracking-widest text-[#E6DDD3]/30">
             &copy; {SALON_NAME} All Rights Reserved.
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};