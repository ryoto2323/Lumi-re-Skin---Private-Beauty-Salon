import React, { useState } from 'react';
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
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { FloatingCTA } from './components/FloatingCTA';
import { OpeningScreen } from './components/OpeningScreen';
import { CustomCursor } from './components/ui/CustomCursor';
import { SectionId } from './constants';

const App: React.FC = () => {
  const [isOpeningDone, setIsOpeningDone] = useState(false);

  const handleBook = () => {
    // Directly navigate to the specified reservation URL
    window.location.href = 'https://airrsv.net/demosite0000/calendar';
  };

  return (
    <div className="relative min-h-screen bg-canvas overflow-x-hidden">
      <CustomCursor />
      
      {/* Ambient Light Orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-main/5 rounded-full blur-[120px] animate-float-delayed" />
      </div>

      {/* Opening Animation Component */}
      {!isOpeningDone && <OpeningScreen onComplete={() => setIsOpeningDone(true)} />}

      <Navbar onBook={handleBook} />
      
      <main className="relative z-10">
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
        <Reservation />
      </main>

      <Footer />
      <FloatingCTA onBook={handleBook} />

      <ChatWidget />
    </div>
  );
};

export default App;