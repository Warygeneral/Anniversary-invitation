import { useEffect, useState } from "react";

// Realistic red rose petal SVG path
const PetalSVG = () => (
  <svg viewBox="0 0 51.5 60.1" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current text-brand-red opacity-80 mix-blend-multiply">
    <path d="M25.7,0C10.5,14.6-2.5,33.3,0.4,47.9c3.3,16.4,19.2,12.7,25.3,12.2c6.1,0.5,22,4.2,25.3-12.2 C54,33.3,41,14.6,25.7,0z"/>
  </svg>
);

const PetalsBackground = () => {
  const [petals, setPetals] = useState<Array<{ id: number; left: string; animationDuration: string; delay: string; scale: number; rotation: number }>>([]);

  useEffect(() => {
    // Generate static details for petals on client side to avoid hydration mismatch if SSR (though Vite is SPA mostly)
    const newPetals = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${10 + Math.random() * 15}s`,
      delay: `-${Math.random() * 20}s`, // Negative delay makes them already falling on load
      scale: 0.4 + Math.random() * 0.8,
      rotation: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-[-10%] petal-fall"
          style={{
            left: petal.left,
            width: `${25 * petal.scale}px`,
            height: `${30 * petal.scale}px`,
            animationDuration: petal.animationDuration,
            animationDelay: petal.delay,
            filter: `blur(${petal.scale < 0.6 ? 2 : 0}px)`
          }}
        >
          <div 
            className="w-full h-full petal-tumble"
            style={{
              animationDuration: `${3 + Math.random() * 4}s`,
              animationDelay: petal.delay,
            }}
          >
            <div style={{ transform: `rotate(${petal.rotation}deg)` }} className="w-full h-full">
              <PetalSVG />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PetalsBackground;