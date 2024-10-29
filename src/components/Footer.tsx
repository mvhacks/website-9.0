import React from "react";
import Button from "@mui/joy/Button";
import arrow from "../images/arrow.png";
import insta_logo from "../images/insta_logo.png";
import { keyframes } from "@mui/system";

export default function Footer() {

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
  
  return (
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
  );
}