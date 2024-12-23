import React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import circle from "../images/circle.gif";
import Button from "@mui/joy/Button";
import arrow from "../images/arrow.png";

export default function Title() {
  const random = Math.floor(Math.random() * 10000);

  return (
    <Box>
      <div id="title">
        <Typography
          level="h1"
          textColor="common.white"
          sx={{ fontWeight: "bold", fontSize: { xs: "14vw", sm: "10vw", md: "9vw", lg: "7vw" }, marginLeft: "10%", lineHeight: "80%", marginTop: "1%"}}
        >
          MV HACKS
          <br />
          <span style={{ color: "rgb(200,172,212)" }}>8.0</span>
        </Typography>
      </div>

      <div id="subtitle">
        <Typography
          level="h3"
          textColor="common.white"
          sx={{ fontWeight: "normal", marginLeft: "10%" }}
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
              style={{ position: "absolute", width: "110%", height: "160%", left: "-5%", top: "-25%"}}
            />

            <Typography
              level="h3"
              textColor="common.white"
              sx={{ fontWeight: "normal" }}
            >
              EVERYONE
            </Typography>
          </Box>
        </Typography>
      </div>
      <Button
        sx={{ borderRadius: "25px", marginLeft: "10%", marginBottom: "8%", marginTop: "2%"}}
        id="alert"
        component="a"
        href="https://docs.google.com/forms/d/e/1FAIpQLSefTr6730BXSMYYdAnDXS5hFu_NZ5FHyzNYkv2MYqZoxvkgyQ/viewform"
      >
        ALERT ME
        <img src={arrow} height="25" width="25" id="arrow" alt="arrow-icon" />
      </Button>
    </Box>
  );
}