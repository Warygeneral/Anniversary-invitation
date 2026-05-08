import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import EnvelopeCard from './components/EnvelopeCard';
import PetalsBackground from './components/PetalsBackground';
import HeroSection from './components/HeroSection';
import DetailsSection from './components/DetailsSection';

function App() {
  const [showEnvelope, setShowEnvelope] = useState(true);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    // Only start scrolling after envelope is gone
    if (showEnvelope) {
      document.body.style.overflow = 'hidden';
      return;
    } else {
      document.body.style.overflow = 'auto';
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [showEnvelope]);

  return (
    <div className="relative min-h-screen">
      {/* 3D Envelope Opening overlay */}
      {showEnvelope && (
        <EnvelopeCard onComplete={() => setShowEnvelope(false)} />
      )}

      {/* Main Content Container - visible but underneath envelope */}
      <main 
        className="w-full min-h-screen"
        style={{ 
          // Fade in very slightly after envelope goes away
          opacity: showEnvelope ? 0 : 1, 
          transition: 'opacity 1s ease-in-out',
          transitionDelay: '0.2s' 
        }}
      >
        <PetalsBackground />
        
        <HeroSection />
        <DetailsSection />

        <footer className="py-12 text-center text-gray-500 font-sans text-sm">
          <p>Looking forward to celebrating with you.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;