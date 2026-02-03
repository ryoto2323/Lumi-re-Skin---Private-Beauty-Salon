import React, { useState, useEffect, useRef } from 'react';
import { SectionId } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';
import { Loader2 } from 'lucide-react';

export const Reservation: React.FC = () => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // 画面に入る200px手前で読み込み開始
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id={SectionId.RESERVATION} className="py-24 md:py-32 bg-white">
      {/* max-w-xl で幅をさらにコンパクトに制限 */}
      <div className="container mx-auto px-4 md:px-8 max-w-xl" ref={containerRef}>
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="font-eng text-accent tracking-[0.2em] text-sm block mb-4">Reservation</span>
            <h2 className="text-2xl md:text-3xl font-mincho text-text tracking-widest mb-4">
              Web予約
            </h2>
            <p className="text-xs text-text-light">
              24時間いつでもご予約いただけます。
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="w-full bg-white shadow-lg border border-gray-100 rounded-sm overflow-hidden min-h-[400px] relative">
             {shouldLoad ? (
               <>
                 <div className="w-full overflow-hidden">
                   {/* 高さを600pxに縮小 */}
                   <iframe 
                     title="AirReserve Calendar"
                     className="w-full"
                     frameBorder="0" 
                     width="100%" 
                     height="600px" 
                     src="//airrsv.net/demosite0000/calendar/embed/" 
                     loading="lazy"
                   />
                 </div>
                 <div className="bg-gray-50 px-4 py-2 border-t border-gray-100" style={{textAlign: 'right', fontSize: '10px', color: '#555', lineHeight: '160%'}}>
                   この予約システムは
                   <a style={{color: '#555', textDecoration: 'underline', marginLeft: '4px'}} href="https://airregi.jp/reserve/?vos=otrsvxototzzx00000099" target="_blank" rel="noopener noreferrer">
                     Airリザーブ
                     <img src="https://cdn.airrsv.net/img/icon/open_link_black.svg" style={{margin: '2px 2px 4px', verticalAlign: 'top', display: 'inline'}} alt="external link" />
                   </a>
                   が提供しています
                 </div>
               </>
             ) : (
               <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                 <Loader2 className="animate-spin text-accent" size={32} />
               </div>
             )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};