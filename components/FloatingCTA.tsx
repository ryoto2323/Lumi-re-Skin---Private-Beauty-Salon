import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

interface FloatingCTAProps {
  onBook: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onBook }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past 500px (approx height of Hero)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 left-6 right-6 z-40 md:hidden transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <Button 
        variant="secondary" 
        fullWidth 
        className="shadow-xl py-4 flex flex-col items-center justify-center gap-1 leading-none border border-white/20"
        onClick={onBook}
      >
        <span className="text-sm tracking-widest font-medium">無料カウンセリングを予約する</span>
        <span className="text-[10px] font-light opacity-90 tracking-wide">【今月残り5名様】初回トライアル 2,980円</span>
      </Button>
    </div>
  );
};