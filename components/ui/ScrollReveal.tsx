import React from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // seconds
  direction?: 'up' | 'none';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  // delay, direction はアニメーション無効化により使用しませんが、
  // 呼び出し元の互換性のためにProps定義は残します。
}) => {
  // バグ修正: アニメーションによる初期非表示（opacity-0）を廃止し、
  // 常に不透明（opacity-100）で表示されるように変更
  return (
    <div className={`opacity-100 translate-y-0 ${className}`}>
      {children}
    </div>
  );
};