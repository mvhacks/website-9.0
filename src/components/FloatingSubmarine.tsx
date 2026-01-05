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

  return (
    <div
      className="submarine-wrapper"
      style={{
        transform: `translateY(${scrollY * 0.35}px)`
      }}
    >
      <div className="floating-submarine">
        <img src={submarineImg} alt="Floating submarine" draggable={false} />
      </div>
    </div>
  );
};

export default FloatingSubmarine;
