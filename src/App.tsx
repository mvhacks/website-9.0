import { useRef } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Prospectus from "./components/Prospectus"
import Faqs from "./components/Faqs";
import Title from "./components/Title";
import Schedule from "./components/Schedule";
import InfoPage from './components/InfoPage';
import Carousel from "./components/Carousel";
import Team from "./components/Team";
import Sponsors from "./components/Sponsors";
import BubbleCursor from './components/BubbleCursor';
import LiquidFilter from './LiquidGlassFilter';
import FloatingSubmarine from "./components/FloatingSubmarine";

function App() {
  const home = useRef(null);
  const info = useRef(null);
  const schedule = useRef(null);
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
    } else if (option === "schedule") {
      scroll(schedule);
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
          <Title></Title>
        </div>
        <div ref={info}>
          <InfoPage></InfoPage>
          <Carousel></Carousel>
        </div>
        <div ref={schedule}>
          <Schedule></Schedule>
        </div>
        <div ref={faqs}>
          <Faqs></Faqs>
        </div>
        <div ref={sponsor}>
            <Prospectus></Prospectus>
        </div>
        <div ref={team}>
          <Team></Team>
        </div>
        <div ref={sponsors}>
          <Sponsors></Sponsors>
        </div>
      </div>
      <br />
      <br />
      <Footer></Footer>
    </div>
  );
}
export default App;