import react, { useState, useRef } from 'react';
import "./App.css";
import Button from "@mui/joy/Button";
import arrow from "./images/arrow.png";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [selectedScrollOption, setSelectedScrollOption] = useState("");
  const home = useRef(null);
  const info = useRef(null);
  const schedule = useRef(null);
  const sponsor = useRef(null);
  const faqs = useRef(null);
  const team = useRef(null);

  const scroll = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  const handleOptionChange = (option: any) => {
    setSelectedScrollOption(option);
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
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
      <Navbar onOptionSelect={handleOptionChange}/>
      <div>
      <div className="home" ref={home}>
        <h2>HOME</h2>
      </div>
      <div className="info" ref={info}>
        <h2>INFO</h2>
      </div>
      <div className="schedule" ref={schedule}>
        <h2>SCHEDULE</h2>
      </div>
      <div className="sponsor" ref={sponsor}>
        <h2>SPONSOR</h2>
      </div>
      <div className="faqs" ref={faqs}>
        <h2>FAQS</h2>
      </div>
      <div className="team" ref={team}>
        <h2>TEAM</h2>
      </div>
      <Button
        sx={{ borderRadius: "25px" }}
        id="alert"
        component="a"
        href="https://docs.google.com/forms/d/e/1FAIpQLSefTr6730BXSMYYdAnDXS5hFu_NZ5FHyzNYkv2MYqZoxvkgyQ/viewform"
      >
        ALERT ME
        <img src={arrow} height="25" width="25" id="arrow"/>
      </Button>
      </div>
      <br />
      <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
