import { useRef } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Title from "./components/Title";
import InfoPage from './components/InfoPage';
import PreviousProjects from './components/PreviousProjects';
import Schedule from "./components/Schedule";
import Carousel from "./components/Carousel";
import Prizes from './components/Prizes';
import Sponsors from "./components/Sponsors";
import Prospectus from "./components/Prospectus";
import Faqs from "./components/Faqs";
import Team from "./components/Team";
import BubbleCursor from './components/BubbleCursor';
import LiquidFilter from './LiquidGlassFilter';
import FloatingSubmarine from "./components/FloatingSubmarine";

function App() {
  const home = useRef(null);
  const info = useRef(null);
  const previousProjects = useRef(null);
  const schedule = useRef(null);
  const prizes = useRef(null);
  const sponsor = useRef(null);
  const faqs = useRef(null);
  const team = useRef(null);
  const sponsors = useRef(null);

  const scroll = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  const handleOptionChange = (option: any) => {
    if (option === 'home') {
      scroll(home);
    } else if (option === "info") {
      scroll(info);
    } else if (option === "previousprojects") {
      scroll(previousProjects);
    } else if (option === "schedule") {
      scroll(schedule);
    } else if (option === "prizes") {
      scroll(prizes);
    } else if (option === "sponsor") {
      scroll(sponsor);
    } else if (option === "faqs") {
      scroll(faqs);
    } else if (option === "team") {
      scroll(team);
    }
  };

  return (
    <div className="app-background">
      <BubbleCursor />
      <FloatingSubmarine />
      <LiquidFilter/>
      <Navbar onOptionSelect={handleOptionChange} />
      <div>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
        </style>
        <div ref={home}>
          <Title />
        </div>
        <div ref={info}>
          <InfoPage />
          <Carousel />
        </div>
        <div ref={previousProjects}>
          <PreviousProjects />
        </div>
        <div ref={schedule}>
          <Schedule />
        </div>
        <div ref={prizes}>
          <Prizes />
        </div>
        <div ref={sponsor}>
          <Prospectus />
        </div>
        <div ref={faqs}>
          <Faqs />
        </div>
        <div ref={team}>
          <Team />
        </div>
        <div ref={sponsors}>
          <Sponsors />
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;