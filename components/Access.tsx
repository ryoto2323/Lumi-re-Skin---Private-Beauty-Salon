import React, { useState } from 'react';
import { SectionId } from '../constants';
import { MapPin, Phone, Clock, ExternalLink, Hand } from 'lucide-react';

export const Access: React.FC = () => {
  const [isMapActive, setIsMapActive] = useState(false);

  return (
    <section id={SectionId.ACCESS} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Info */}
            <div className="order-2 md:order-1 flex flex-col justify-center">
                <div className="mb-8 border-l-4 border-sky-500 pl-4">
                  <span className="text-sky-500 font-bold tracking-wider text-xs uppercase block mb-1">Access</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 font-serif">店舗情報・アクセス</h2>
                </div>
                
                <div className="bg-sky-50/50 rounded-2xl p-6 md:p-8 space-y-6 md:space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-sky-500 flex-shrink-0 mt-1">
                           <MapPin size={20} />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-slate-800 mb-1 text-lg font-serif">Silky 銀座本店</h4>
                            <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-3">
                              〒104-0061<br/>
                              東京都中央区銀座 4-1-2<br/>
                              銀座駅 C4出口 徒歩1分
                            </p>
                            <a 
                              href="https://www.google.com/maps/search/?api=1&query=銀座4-1-2" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-sky-600 font-bold border border-sky-200 bg-white px-3 py-1.5 rounded-full hover:bg-sky-50 transition-colors"
                            >
                              Googleマップで開く <ExternalLink size={12} />
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                         <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-sky-500 flex-shrink-0 mt-1">
                           <Phone size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 mb-1 font-serif">ご予約・お問い合わせ</h4>
                            <a href="tel:0312345678" className="text-slate-800 text-xl md:text-2xl font-bold font-sans hover:text-sky-500 transition-colors block">
                              03-1234-5678
                            </a>
                        </div>
                    </div>
                    
                     <div className="flex items-start gap-4">
                         <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-sky-500 flex-shrink-0 mt-1">
                           <Clock size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 mb-1 font-serif">営業時間</h4>
                            <p className="text-slate-600 text-sm md:text-base">
                              平日 11:00〜21:00<br/>
                              土日祝 10:00〜20:00
                            </p>
                            <p className="text-xs text-slate-500 mt-2 bg-white inline-block px-2 py-1 rounded border border-sky-100">
                              定休日：火曜日・年末年始
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div 
              className="order-1 md:order-2 h-[300px] md:h-auto min-h-[300px] w-full bg-slate-100 rounded-3xl overflow-hidden relative shadow-lg border-4 border-white group"
              onClick={() => setIsMapActive(true)}
              onMouseLeave={() => setIsMapActive(false)}
            >
                {!isMapActive && (
                  <div className="absolute inset-0 z-10 bg-black/5 flex items-center justify-center cursor-pointer transition-opacity group-hover:bg-black/10">
                    <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm flex items-center gap-2 text-xs font-bold text-slate-600">
                      <Hand size={14} />
                      タップして地図を操作
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
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
};