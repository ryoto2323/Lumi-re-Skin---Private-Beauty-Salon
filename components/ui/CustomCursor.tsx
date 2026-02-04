import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Dot */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-text rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out mix-blend-difference"
        style={{ 
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)` 
        }}
      />
      
      {/* Trailing Circle */}
      <div 
        className={`fixed top-0 left-0 rounded-full border border-text/30 pointer-events-none z-[9998] transition-all duration-300 ease-out mix-blend-difference flex items-center justify-center`}
        style={{ 
          width: isHovering ? '64px' : '32px',
          height: isHovering ? '64px' : '32px',
          transform: `translate3d(${position.x - (isHovering ? 32 : 16)}px, ${position.y - (isHovering ? 32 : 16)}px, 0)`,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
        }}
      >
        <span className={`text-[8px] font-eng tracking-widest text-white transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
          VIEW
        </span>
      </div>
    </>
  );
};