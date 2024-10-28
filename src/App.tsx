import "./App.css";
import Button from "@mui/joy/Button";
import arrow from "./arrow.png";
import insta_logo from "./insta_logo.png";
import { keyframes } from "@mui/system";

const glow = keyframes`
  0% {
    box-shadow: 0 0 3px rgba(138, 43, 226, 0.3), 0 0 6px rgba(138, 43, 226, 0.3);
  }
  50% {
    box-shadow: 0 0 8px rgba(138, 43, 2265, 0.5), 0 0 12px rgba(138, 43, 226, 0.5);
  }
  100% {
    box-shadow: 0 0 3px rgba(138, 43, 226, 0.3), 0 0 6px rgba(138, 43, 226, 0.3);
  }
`;
function App() {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
      <div>
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
      <div id="footer">
        <Button
          sx={{ animation: `${glow} 2s infinite alternate` }}
          id="devpost"
          component="a"
          href="https://mvhacks-6-0.devpost.com/project-gallery"
        >
          Previous Projects
        </Button>
        <br />
        <br />
        <Button
          sx={{ animation: `${glow} 2s infinite alternate` }}
          id="contactUs"
          component="a"
          href="mailto:alexm@mvhacks.io"
        >
          Contact Us
        </Button>
        <br />
        <br />
        <a id="instagram" href="https://www.instagram.com/mvhacks/">
          <img src={insta_logo} width={50} height={50} />
        </a>
      </div>
    </div>
  );
}

export default App;
