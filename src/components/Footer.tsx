import React from "react";
import contact_icon from "../images/contact-icon.png";
import insta_icon from "../images/instagram-icon.png";
import projects_icon from "../images/projects-icon.png";
import { Box, keyframes } from "@mui/system";
import { Typography, Link, Stack } from "@mui/joy";

export default function Footer() {
  const glowAnimation = keyframes`
    0% { 
      filter: drop-shadow(0 0 2px rgba(175, 184, 235, 0.4)); 
    }
    50% { 
      filter: drop-shadow(0 0 12px rgba(146, 154, 201, 0.9)); 
    }
    100% { 
      filter: drop-shadow(0 0 2px rgba(105, 112, 152, 0.4)); 
    }
  `;

  // Styling for the glow container
  const iconBoxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: `${glowAnimation} 3s infinite ease-in-out`,
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0a192f",
        py: 6,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 5, sm: 8 }}
        alignItems="center"
        justifyContent="center"
      >
        {/* Past Projects */}
        <Link
          href="https://mvhacks-6-0.devpost.com/project-gallery"
          underline="none"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1.5,
            color: "white",
            "&:hover": { transform: "scale(1.05)", color: "rgba(255, 255, 255, 0.8)" },
          }}
        >
          <Box sx={iconBoxStyle}>
            <img src={projects_icon} alt="past projects" style={{ width: 50, height: 50, objectFit: "contain" }} />
          </Box>
          <Typography level="body-md" sx={{ color: "inherit", fontWeight: 500 }}>
            past projects
          </Typography>
        </Link>

        {/* Contact Us */}
        <Link
          href="mailto:emily@mvhacks.io"
          underline="none"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1.5,
            color: "white",
            "&:hover": { transform: "scale(1.05)", color: "rgba(255, 255, 255, 0.8)" },
          }}
        >
          <Box sx={iconBoxStyle}>
            <img src={contact_icon} alt="contact us" style={{ width: 50, height: 50, objectFit: "contain" }} />
          </Box>
          <Typography level="body-md" sx={{ color: "inherit", fontWeight: 500 }}>
            contact us
          </Typography>
        </Link>

        {/* Instagram */}
        <Link
          href="https://www.instagram.com/mvhacks/"
          underline="none"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1.5,
            color: "white",
            "&:hover": { transform: "scale(1.05)", color: "rgba(255, 255, 255, 0.8)" },
          }}
        >
          <Box sx={iconBoxStyle}>
            <img src={insta_icon} alt="instagram" style={{ width: 50, height: 50, objectFit: "contain" }} />
          </Box>
          <Typography level="body-md" sx={{ color: "inherit", fontWeight: 500 }}>
            instagram
          </Typography>
        </Link>
      </Stack>

      <Typography sx={{ textAlign: "center", color: "rgba(255,255,255,0.5)", mt: 2 }}>
        © 2025 MVHACKS. All rights reserved.
      </Typography>
    </Box>
  );
}