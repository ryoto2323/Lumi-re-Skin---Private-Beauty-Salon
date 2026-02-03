import React, { useState } from 'react';
import { SectionId, SALON_NAME } from '../constants';
import { Button } from './ui/Button';
import { ScrollReveal } from './ui/ScrollReveal';

export const Footer: React.FC = () => {
  const [isMapActive, setIsMapActive] = useState(false);

  return (
    <footer id="footer" className="bg-[#EBE9E5] text-text pt-20 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-16 border-b border-text/10 pb-16">
            {/* Info */}
            <div className="w-full md:w-1/2">
               <h3 className="font-eng text-2xl tracking-widest mb-8">{SALON_NAME}</h3>
               <div className="font-sans font-light text-sm leading-loose space-y-4">
                 <p>
                   Lumière Skin (ルミエール・スキン) 銀座店<br/>
                   〒104-0061 東京都中央区銀座 1-2-3 (銀座駅 徒歩3分)
                 </p>
                 <p>
                   平日 11:00-21:00 / 土日祝 10:00-20:00<br/>
                   (定休日: 不定休)
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button variant="primary" size="sm" className="bg-text text-white hover:bg-black">WEB予約</Button>
                    <Button variant="outline" size="sm" className="border-text text-text hover:bg-text hover:text-white">LINE公式アカウント</Button>
                 </div>
               </div>
            </div>

            {/* Map */}
            <div 
              className="w-full md:w-1/2 h-[300px] bg-gray-200 grayscale opacity-80 mix-blend-multiply relative group"
              onClick={() => setIsMapActive(true)}
              onMouseLeave={() => setIsMapActive(false)}
            >
              {!isMapActive && (
                <div className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer">
                   <div className="bg-white/80 px-3 py-1 text-[10px] tracking-widest rounded-sm">Click to Interact</div>
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
              ></iframe>
            </div>
          </div>

          <div className="text-center font-eng text-[10px] tracking-widest text-text/70">
             &copy; {SALON_NAME} All Rights Reserved.
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};