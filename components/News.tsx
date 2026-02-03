import React from 'react';
import { NEWS_ITEMS } from '../constants';
import { ScrollReveal } from './ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export const News: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-base border-b border-text/5">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-2xl font-mincho text-text tracking-widest">
              お知らせ
            </h2>
            <span className="font-eng text-xs tracking-widest text-text-light">NEWS & TOPICS</span>
          </div>
          
          <div className="space-y-6">
            {NEWS_ITEMS.map((item, idx) => (
              <a key={idx} href="#" className="group block border-b border-text/10 pb-6 hover:border-accent/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                  <span className="font-eng text-sm text-text-light tracking-widest">{item.date}</span>
                  <div className="flex-1 flex justify-between items-center">
                    <h3 className="text-sm md:text-base font-sans font-light text-text group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <ArrowRight size={16} className="text-text-light opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};