import { useEffect, useState } from "react";
import "./FloatingSubmarine.css";
import submarineImg from "../images/submarine.png";

const FloatingSubmarine: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const onScroll = (): void => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Settings for the movement
  const frequency = 0.0005; // Lower = wider, slower zig-zags
  const verticalSpeed = 0.07; // How fast it moves down the page
  
  // Calculate horizontal position (-45 to 45% of viewport width)
  const xPos = Math.sin(scrollY * frequency) * 45;
  
  // Calculate direction: if cosine is negative, it's moving left
  // We flip the image by setting scaleX to -1
  const direction = Math.cos(scrollY * frequency) >= 0 ? 1 : -1;

  return (
    <div
      className="submarine-wrapper"
      style={{
        // Using left: 50% and translate -50% to keep it centered as a starting point
        left: "50%",
        transform: `translate(calc(-50% + ${xPos}vw), ${scrollY * verticalSpeed}px)`,
      }}
    >
      <div 
        className="submarine-flipper"
        style={{ 
          transform: `scaleX(${direction})`,
          transition: "transform 0.4s ease-in-out" // Smoothly turns the sub around
        }}
      >
        <div className="floating-bobbing-animation">
          <img src={submarineImg} alt="Submarine" draggable={false} />
        </div>
      </div>
    </div>
  );
};

export default FloatingSubmarine;