import React, { useEffect, useState } from 'react';
import { SALON_NAME, SALON_SUB } from '../constants';

interface OpeningScreenProps {
  onComplete: () => void;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // アニメーション完了に合わせて親に通知
      setTimeout(onComplete, 1500); 
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#F9F8F6] flex flex-col items-center justify-center transition-opacity duration-[1500ms] ease-in-out pointer-events-none ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center animate-fade-in-up">
         <span className="font-eng font-medium text-4xl md:text-6xl tracking-[0.3em] text-text mb-6">
            {SALON_NAME}
          </span>
          <div className="flex items-center gap-4">
            <div className="w-8 h-[1px] bg-accent/40"></div>
            <span className="font-eng text-xs tracking-[0.4em] text-accent uppercase">
              {SALON_SUB}
            </span>
            <div className="w-8 h-[1px] bg-accent/40"></div>
          </div>
      </div>
    </div>
  );
};