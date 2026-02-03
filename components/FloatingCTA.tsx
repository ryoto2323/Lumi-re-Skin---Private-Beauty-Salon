import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

interface FloatingCTAProps {
  onBook: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onBook }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show if scrolling UP and past the initial hero section (300px)
      // Hide if scrolling DOWN
      if (currentScrollY > 300) {
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`fixed bottom-6 left-4 right-4 z-40 md:hidden transition-all duration-500 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg p-1.5">
        <Button 
          variant="primary" 
          fullWidth 
          className="py-3 flex flex-col items-center justify-center gap-0.5 leading-none"
          onClick={onBook}
        >
          <span className="text-[10px] tracking-[0.2em] font-medium uppercase font-eng opacity-90">Reservation</span>
          <span className="text-sm tracking-widest font-medium">無料カウンセリング予約</span>
        </Button>
      </div>
    </div>
  );
};