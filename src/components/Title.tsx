import React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
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
          <span style={{ color: "#1800ad" }}>mv</span>
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
          textColor="#1800ad" 
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
      </div>
    </Box>
  );
}