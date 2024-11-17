import "./App.css";
import Button from "@mui/joy/Button";
import arrow from "./images/arrow.png";
import Footer from "./components/Footer";
import Prospectus from "./images/prospectus.png"

function App() {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
      <div>
      <div id="blurbSponsors"><h1>Sponsor MVHacks 7.0!</h1><p>MVHacks is now in its 8th year of inspiring high school students throughout the country to get together and build great projects. As a prestigious, in-person hackathon, our past events have consistently attracted over 200 unique and diverse attendees. With your support, we aim to engage over 250+ students for MVHacks.</p><p>To discover more about sponsorship opportunities, please download our Sponsorship Prospectus below and reach out to us at <a id="email" href="mailto:hello@mvhacks.io">hello@mvhacks.io</a>.</p><p>Join us, and let's make MVHacks 8.0 an unforgettable experience. We eagerly await the participation of your company!</p><a id="downloadProspectus" href="about:blank">Download the Sponsorship Prospectus</a></div>
      <img src={Prospectus} id="prospectus" width="80%" height="auto"/>
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
