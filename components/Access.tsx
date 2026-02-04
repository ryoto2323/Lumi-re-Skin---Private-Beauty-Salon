import React, { useState } from 'react';
import { SectionId } from '../constants';
import { MapPin, Phone, Clock, ExternalLink, Hand } from 'lucide-react';

export const Access: React.FC = () => {
  const [isMapActive, setIsMapActive] = useState(false);

  return (
    <section id={SectionId.ACCESS} className="py-24 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            {/* Info */}
            <div className="order-2 md:order-1 flex flex-col justify-center">
                <div className="mb-12 border-l border-[#BFA588] pl-6">
                  <span className="text-[#BFA588] font-light tracking-[0.2em] text-xs uppercase block mb-4 font-eng">Access</span>
                  <h2 className="text-3xl md:text-4xl font-light text-text font-mincho tracking-widest">店舗情報・アクセス</h2>
                </div>
                
                <div className="bg-white/40 backdrop-blur-sm border border-[#E6DDD3] rounded-sm p-8 md:p-12 space-y-10">
                    <div className="flex items-start gap-6">
                        <div className="w-8 h-8 rounded-full bg-[#FAFAF8] flex items-center justify-center text-[#BFA588] flex-shrink-0 mt-1 border border-[#E6DDD3]">
                           <MapPin size={14} />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-normal text-text mb-3 text-lg font-mincho tracking-wide">Silky 銀座本店</h4>
                            <p className="text-text-light font-light leading-loose text-sm mb-6">
                              〒104-0061<br/>
                              東京都中央区銀座 4-1-2<br/>
                              銀座駅 C4出口 徒歩1分
                            </p>
                            <a 
                              href="https://www.google.com/maps/search/?api=1&query=銀座4-1-2" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-xs text-text font-normal border border-[#E6DDD3] bg-white px-4 py-2 rounded-sm hover:bg-[#F9F8F6] transition-colors tracking-widest"
                            >
                              Googleマップで開く <ExternalLink size={12} />
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                         <div className="w-8 h-8 rounded-full bg-[#FAFAF8] flex items-center justify-center text-[#BFA588] flex-shrink-0 mt-1 border border-[#E6DDD3]">
                           <Phone size={14} />
                        </div>
                        <div>
                            <h4 className="font-normal text-text mb-2 text-lg font-mincho tracking-wide">ご予約・お問い合わせ</h4>
                            <a href="tel:0312345678" className="text-text text-xl md:text-2xl font-light font-eng hover:text-[#BFA588] transition-colors block tracking-widest">
                              03-1234-5678
                            </a>
                        </div>
                    </div>
                    
                     <div className="flex items-start gap-6">
                         <div className="w-8 h-8 rounded-full bg-[#FAFAF8] flex items-center justify-center text-[#BFA588] flex-shrink-0 mt-1 border border-[#E6DDD3]">
                           <Clock size={14} />
                        </div>
                        <div>
                            <h4 className="font-normal text-text mb-3 text-lg font-mincho tracking-wide">営業時間</h4>
                            <p className="text-text-light text-sm leading-loose font-light">
                              平日 11:00〜21:00<br/>
                              土日祝 10:00〜20:00
                            </p>
                            <p className="text-xs text-text-light/70 mt-4 inline-block px-3 py-1 bg-[#FAFAF8]">
                              定休日：火曜日・年末年始
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div 
              className="order-1 md:order-2 h-[400px] w-full bg-[#E6DDD3] grayscale opacity-80 relative group rounded-sm overflow-hidden shadow-lg shadow-[#D8C6C6]/20"
              onClick={() => setIsMapActive(true)}
              onMouseLeave={() => setIsMapActive(false)}
            >
                {!isMapActive && (
                  <div className="absolute inset-0 z-10 bg-black/5 flex items-center justify-center cursor-pointer transition-opacity group-hover:bg-black/10">
                    <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-sm shadow-sm flex items-center gap-2 text-xs font-normal tracking-widest text-text uppercase">
                      <Hand size={12} />
                      Click to Activate
                    </div>
                  </div>
                )}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683745!2d139.7644253152588!3d35.673562480196165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be4f7467a39%3A0x640b10609b4372a2!2sGinza%20Station!5e0!3m2!1sen!2sjp!4v1625624556424!5m2!1sen!2sjp" 
                  width="100%" 
                  height="100%" 
                  style={{border:0, pointerEvents: isMapActive ? 'auto' : 'none'}} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                  className="grayscale hover:grayscale-0 transition-all duration-1000"
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
};