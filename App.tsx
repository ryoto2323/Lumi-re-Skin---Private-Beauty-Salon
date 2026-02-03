import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Problem';
import { News } from './components/News';
import { Promises } from './components/Features';
import { Machine } from './components/Evidence';
import { Menu } from './components/Pricing';
import { Gallery } from './components/Gallery';
import { Staff } from './components/Staff';
import { Voice } from './components/Voice';
import { Flow } from './components/Process';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ChatWidget } from './components/ChatWidget';
import { FloatingCTA } from './components/FloatingCTA';
import { SALON_NAME, SALON_SUB } from './constants';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showOpener, setShowOpener] = useState(true);

  useEffect(() => {
    // Opener timeout
    const timer = setTimeout(() => {
      setShowOpener(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleBook = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-base overflow-x-hidden">
      {/* Opening Animation */}
      <div 
        className={`fixed inset-0 z-[100] bg-[#F9F8F6] flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out pointer-events-none ${
          showOpener ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center animate-fade-in-up">
           <span className="font-eng font-medium text-4xl md:text-5xl tracking-widest text-text mb-4">
              {SALON_NAME}
            </span>
            <span className="font-eng text-xs tracking-[0.3em] text-accent uppercase">
              {SALON_SUB}
            </span>
            <div className="w-[1px] h-12 bg-accent/50 mt-8 animate-pulse"></div>
        </div>
      </div>

      <Navbar onBook={handleBook} />
      
      <main>
        <Hero onBook={handleBook} />
        <Introduction />
        <News />
        <Promises />
        <Machine />
        <Menu onBook={handleBook} />
        <Gallery />
        <Staff />
        <Voice />
        <Flow />
        <Faq />
      </main>

      <Footer />
      <FloatingCTA onBook={handleBook} />

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />

      <ChatWidget />
    </div>
  );
};

export default App;