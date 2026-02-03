import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // seconds
  direction?: 'up' | 'none';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // thresholdを0にし、少しでも入れば表示するように変更
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 一度表示されたら監視を終了（パフォーマンスとちらつき防止）
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        rootMargin: '50px', // 少し早めに読み込む（画面に入る50px手前）
        threshold: 0 // 要素の1ピクセルでも見えたら発火
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // クリーンアップ時は何もしない（unobserveは発火時に行っているため）
      // ただしコンポーネントアンマウント時のために一応記述
      // observer.disconnect(); // strict modeなどの影響を避けるため必要なら
    };
  }, []);

  const getTransformClass = () => {
    if (isVisible) return 'translate-y-0 opacity-100';
    if (direction === 'up') return 'translate-y-8 opacity-0'; // 移動距離を少し控えめに(12->8)
    return 'opacity-0';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${getTransformClass()} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};