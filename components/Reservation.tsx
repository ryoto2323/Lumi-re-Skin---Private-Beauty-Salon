import React, { useState, useEffect, useRef } from 'react';
import { SectionId } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';
import { Loader2, Calendar, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Reservation: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadCalendar = () => {
    setShowCalendar(true);
    setTimeout(() => setIsLoading(false), 800);
  };

  return (
    <section id={SectionId.RESERVATION} className="py-32 md:py-48 bg-transparent">
      <div className="container mx-auto px-4 md:px-8 max-w-2xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-eng text-accent tracking-[0.2em] text-xs block mb-6 uppercase">Reservation</span>
            <h2 className="text-3xl md:text-4xl font-mincho text-text tracking-widest font-light mb-4">
              Web予約
            </h2>
            <p className="text-xs text-text-light font-light tracking-widest">
              24時間いつでもご予約いただけます。
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="w-full bg-white shadow-2xl shadow-[#D8C6C6]/20 border border-[#E6DDD3] rounded-sm overflow-hidden min-h-[600px] relative transition-all duration-700">
             
             {!showCalendar ? (
                // Cover Design
                <div className="absolute inset-0 z-10 bg-[#FAFAF8] flex flex-col items-center justify-center p-12 text-center">
                    <div className="mb-10 relative">
                       <div className="absolute inset-0 bg-[#BFA588]/10 blur-2xl rounded-full"></div>
                       <Calendar size={48} className="text-[#BFA588] relative z-10" strokeWidth={0.8} />
                    </div>
                    <h3 className="font-mincho text-xl text-text mb-6 tracking-widest font-normal">空き状況を確認・予約する</h3>
                    <p className="font-sans font-light text-sm text-text-light mb-12 leading-loose opacity-80">
                       リアルタイムの空き状況をご確認いただけます。<br/>
                       ご希望の日時を選択して予約へお進みください。
                    </p>
                    <Button onClick={handleLoadCalendar} className="group" variant="outline">
                       カレンダーを表示する <ChevronRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
             ) : (
               // Iframe Container
               <>
                 <div className={`w-full overflow-hidden transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                   <iframe 
                     title="AirReserve Calendar"
                     className="w-full"
                     frameBorder="0" 
                     width="100%" 
                     height="600px" 
                     src="//airrsv.net/demosite0000/calendar/embed/" 
                     loading="lazy"
                     onLoad={() => setIsLoading(false)}
                   />
                 </div>
                 
                 {isLoading && (
                   <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#FAFAF8] z-20">
                     <Loader2 className="animate-spin text-[#BFA588] mb-4" size={24} strokeWidth={1} />
                     <p className="font-eng text-xs tracking-widest text-text-light">Loading Calendar...</p>
                   </div>
                 )}
               </>
             )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};