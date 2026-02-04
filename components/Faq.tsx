import React, { useState } from 'react';
import { SectionId, FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={SectionId.FAQ} className="py-32 md:py-48 bg-canvas">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-eng text-accent tracking-[0.2em] text-sm block mb-4">FAQ</span>
            <h2 className="text-2xl md:text-3xl font-mincho text-text tracking-widest">
              よくある質問
            </h2>
          </div>
        </ScrollReveal>

        <div className="border-t border-text/10">
          {FAQS.map((faq, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="border-b border-text/10">
                <button
                  className="w-full flex items-center justify-between py-6 text-left hover:bg-white/50 transition-colors px-2"
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="flex items-start gap-4 pr-4">
                    <span className="font-eng text-accent text-xl">Q{idx + 1}</span>
                    <span className="font-mincho text-text tracking-wide leading-loose text-lg">{faq.question}</span>
                  </div>
                  <div className="text-accent/50 flex-shrink-0">
                    {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-8 pl-10 pr-4 text-text font-sans font-light text-base leading-loose">
                    <span className="font-eng text-text-light mr-2">A.</span>
                    {faq.answer}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};