import React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import circle from "../images/circle.gif";

export default function Title() {
  const random = Math.floor(Math.random() * 10000);

  return (
    <Box>
      <div id="title">
        <Typography
          level="h1"
          textColor="common.white"
          sx={{ fontWeight: "bold", fontSize: { xs: "12vw", sm: "10vw", md: "9vw", lg: "7vw" }, marginLeft: "10%", lineHeight: "80%", marginTop: "7%"}}
        >
          MV HACKS
          <br />
          <span style={{ color: "rgb(200,172,212)" }}>9.0</span>
        </Typography>
      </div>

      <div id="subtitle">
        <Typography
          level="title-lg"
          textColor="common.white"
          sx={{ 
            fontWeight: "normal", 
            marginLeft: "10%", 
            fontSize: {xs: "6vw", sm: "4vw", md: "3vw", lg: "1.65vw"},
            marginTop: "2%",
            marginBottom: "1%", 
          }}
        >
          THE HACKATHON FOR{" "}
          <Box
            position="relative"
            display="inline-block"
            style={{ justifyContent: "center", width: "fit-content", alignItems: "center"}}
          >
            <img
              alt="circle"
              src={`${circle}?refresh=${random}`}
              style={{ position: "absolute", width: "120%", height: "170%", left: "-7%", top: "-25%"}}
            />

            <Typography
              level="title-lg"
              textColor="common.white"
              sx={{ fontWeight: "normal", fontSize: {xs: "6vw", sm: "4vw", md: "3vw", lg: "1.65vw"}  }}
            >
              EVERYONE
            </Typography>
          </Box>
        </Typography>
        <Typography 
          level="body-lg" 
          variant="plain" 
          textColor="common.white" 
          sx={{maxWidth: "1000px", marginLeft: "10%", marginRight: "10%", marginBottom:"20px", marginTop: "2%", fontSize: {xs: "3vw", sm: "2vw", md: "2vw", lg: "1.25vw"} }}
        >
          Each year, high school hackers from across the Bay Area come together at MVHacks to create cool projects, learn from experts, and participate in 12 hours of hacking! Hackers of all skill levels are welcome to compete, individually or as a group. 
          The date and location of MVHacks 9.0 are to be announced. 
        </Typography>
      </div>
    </Box>
  );
}