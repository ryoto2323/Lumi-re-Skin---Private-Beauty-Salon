
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
import { SectionId } from './constants';

const App: React.FC = () => {
  const [isOpeningDone, setIsOpeningDone] = useState(false);

  const handleBook = () => {
    const element = document.getElementById(SectionId.RESERVATION);
    if (element) {
      // Offset for header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-base overflow-x-hidden">
      {/* Opening Animation Component */}
      {!isOpeningDone && <OpeningScreen onComplete={() => setIsOpeningDone(true)} />}

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
        <Reservation />
      </main>

      <Footer />
      <FloatingCTA onBook={handleBook} />

      <ChatWidget />
    </div>
  );
};

export default App;