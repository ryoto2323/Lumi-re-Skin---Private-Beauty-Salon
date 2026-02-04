import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SALON_NAME, SALON_SUB, SectionId } from '../constants';
import { Button } from './ui/Button';

interface NavbarProps {
  onBook: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBook }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          isScrolled ? 'bg-[#F9F8F6]/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex flex-col cursor-pointer group" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="font-eng font-normal text-2xl md:text-3xl tracking-widest text-text group-hover:opacity-70 transition-opacity">
                {SALON_NAME}
              </span>
              <span className="font-eng text-[9px] md:text-[10px] tracking-[0.3em] text-accent uppercase">
                {SALON_SUB}
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-12">
              {NAV_LINKS.map(link => (
                <button 
                  key={link.to}
                  onClick={() => scrollToSection(link.to)}
                  className="font-eng text-xs tracking-[0.2em] text-text hover:text-accent transition-colors relative group py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[0.5px] bg-accent transition-all duration-500 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-6">
               <button onClick={onBook} className="text-xs tracking-widest text-text hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-0.5 font-light">
                  無料カウンセリング
               </button>
              <Button size="sm" variant="secondary" onClick={onBook}>
                WEB予約
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-text p-2 hover:bg-black/5 rounded-full transition-colors z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#F9F8F6]/98 backdrop-blur-md z-40 transition-all duration-700 lg:hidden flex items-center justify-center ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-10 w-full px-8">
           {NAV_LINKS.map((link, idx) => (
              <button 
                key={link.to}
                onClick={() => scrollToSection(link.to)}
                className={`font-eng text-xl font-light tracking-[0.2em] text-text hover:text-accent transition-all duration-700 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {link.label}
              </button>
            ))}
            <div 
              className={`w-8 h-[1px] bg-accent/30 my-6 transition-all duration-700 delay-500 ${isMobileMenuOpen ? 'scale-x-100' : 'scale-x-0'}`}
            ></div>
            <div 
              className={`w-full transition-all duration-700 delay-700 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <Button variant="primary" fullWidth onClick={() => { onBook(); setIsMobileMenuOpen(false); }}>
                無料カウンセリング予約
              </Button>
            </div>
        </div>
      </div>
    </>
  );
};