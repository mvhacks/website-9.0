import React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import fishCircle from "../images/fish_circle.png";

export default function Title() {

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "0 10px",
        backgroundImage: `url(${fishCircle})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: { xs: "140%", sm: "112%", md: "110%", lg: "63%" },
      }}
    >
      <div id="title"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "1rem",
          marginTop: "5%"
        }}
      >
        <Typography
          level="h1"
          sx={{ 
            fontWeight: "bold", 
            fontSize: { xs: "10vw", sm: "10vw", md: "9vw", lg: "6vw" }, 
            lineHeight: "80%",
            color: "black",
            textAlign: "center",
            marginTop: { 
              xs: "0vh",   // Small phones
              sm: "0vh",   // Tablets
              md: "-10vh",   // Small laptops
              lg: "-12vh",   // Desktop
              xl: "-6vh"    // Large screens
            }
          }}
        >
          <span style={{ color: "#003caa" }}>mv</span>
          <span style={{ color: "black" }}>hacks</span>
          <sup style={{ color: "black", fontSize: "0.6em", verticalAlign: "super" }}>9.0</sup>
        </Typography>
      </div>

      <div id="subtitle">
        <Typography
          level="title-lg"
          sx={{ 
            fontWeight: "bold", 
            fontSize: {xs: "3vw", sm: "3vw", md: "2.5vw", lg: "2vw"},
            marginBottom: "1%",
            color: "black",
            textAlign: "center"
          }}
        >
          let's dive in
        </Typography>
        <Typography 
          level="body-lg" 
          variant="plain" 
          textColor="#003caa" 
          sx={{
            maxWidth: { xs: "300px", sm: "500px", md: "600px", lg: "500px" }, // Responsive max width
            marginLeft: "auto", 
            marginRight: "auto", 
            marginBottom: "20px", 
            marginTop: "5%", 
            fontSize: { xs: "3vw", sm: "2vw", md: "2vw", lg: "1vw" },
            textAlign: "center"
          }}
        >
          MVHacks is a student-led hackathon that invites student hackers from across the Bay Area come together and develop innovative projects, learn from experts, and participate in 12 hours of hacking to win awards! Hackers of all skill levels are welcome to compete, individually or as a group.
          The date and location of MVHacks 9.0 are to be announced. 
        </Typography>

        <Button
          component="a"
          href="YOUR_GOOGLE_FORM_URL_HERE"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            // Liquid Glass Styling
            background: "linear-gradient(135deg, rgba(143, 231, 251, 0.7) 0%, rgba(152, 208, 206, 0.4) 100%)",
            backdropFilter: "blur(10px)", // Blurs the fish circle background behind the button
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            boxShadow: "0 8px 32px 0 rgba(0, 60, 170, 0.15)",
            borderRadius: "50px",
            
            // Text Styling
            color: "#003caa",
            fontWeight: "bold",
            letterSpacing: "0.5px",
            fontSize: { xs: "0.8rem", md: "0.9rem" },
            padding: "12px 35px",
            marginTop: "20px",
            transition: "all 0.4s ease-in-out",

            '&:hover': {
              // "Deep Dive" effect on hover
              background: "linear-gradient(135deg, rgba(152, 208, 206, 0.5) 0%, rgba(143, 231, 251, 0.8) 100%)",
              transform: "translateY(-3px)",
              boxShadow: "0 12px 40px 0 rgba(0, 60, 170, 0.25)",
              border: "1px solid rgba(0, 60, 170, 0.4)",
            },
            '&:active': {
              transform: "translateY(0px)",
            }
          }}
        >
          notify me for march 2026
        </Button>
      </div>
    </Box>
  );
}