import React from "react";
import Button from "@mui/joy/Button";
import insta_logo from "../images/insta_logo.png";
import { Box, keyframes } from "@mui/system";
import { Typography } from "@mui/joy";

export default function Footer() {

  const glow = keyframes`
  0% {
    box-shadow: 0 0 3px rgba(83, 100, 197, 0.3), 0 0 6px rgba(83, 100, 197, 0.3);
  }
  50% {
    box-shadow: 0 0 8px rgba(83, 100, 197, 0.5), 0 0 12px rgba(83, 100, 197, 0.5);
  }
  100% {
    box-shadow: 0 0 3px rgba(83, 100, 197, 0.3), 0 0 6px rgba(83, 100, 197, 0.3);
  }
`;
  
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#4049a0",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
        flexWrap: "wrap",
        py: 4,
        px: 2,
        flexDirection: "column"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
          flexWrap: "wrap",
        }}
      >
        <Button
          sx={{ animation: `${glow} 2s infinite alternate`,color: "white", }}
          id="devpost"
          component="a"
          href="https://mvhacks-6-0.devpost.com/project-gallery"
        >
          Previous Projects
        </Button>
        <Button
          sx={{ animation: `${glow} 2s infinite alternate` }}
          id="contactUs"
          component="a"
          href="mailto:emily@mvhacks.io"
        >
          Contact Us
        </Button>
        <a 
        id="instagram"
        href="https://www.instagram.com/mvhacks/"
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          <img src={insta_logo} alt="Instagram logo" width={50} height={50} />
        </a>
      </Box>
      <Typography
        sx={{textAlign: "center", color: "#ccc" }}
      >
        © 2025 MVHACKS. All rights reserved.
      </Typography>
    </Box>
  );
}