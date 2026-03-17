import React from "react";
import jellyfish from "../images/jellyfish.png";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import { motion } from "framer-motion"; // Ensure framer-motion is installed

const events = [
  { time: "8:15 AM", event: "Check-In" },
  { time: "8:30 AM", event: "Opening Ceremony" },
  { time: "9:15 AM", event: "Google AI Workshop" },
  { time: "10:15 AM", event: "Work Time" },
  { time: "12:00 PM", event: "Lunch + Games" },
  { time: "1:15 PM", event: "Work Time" },
  { time: "4:15 PM", event: "Guest Speaker" },
  { time: "4:45 PM", event: "Work Time" },
  { time: "7:00 PM", event: "Projects/Coding Challenge Submission Deadline" },
  { time: "7:00 PM - 7:45 PM", event: "Dinner + Hackathon Presentations" },
  { time: "7:45 PM - 8:00 PM", event: "Game" },
  { time: "8:00 PM - 8:30 PM", event: "Closing Ceremony" }
];

export default function SeaTimeline() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "1.5rem", md: "4rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 2, md: 10 },
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {/* Floating Jellyfish Animation */}
        <Box
          sx={{
            flex: { md: "1" },
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            width: "100%",
          }}
        >
          <motion.div
            animate={{ y: [-15, 15, -15] }} // Move up and down 15 pixels
            transition={{ 
              duration: 6,           // 6 seconds per cycle
              repeat: Infinity,      // Loop forever
              ease: "easeInOut"      // Smooth movement
            }}
          >
            <Box
              component="img"
              src={jellyfish}
              alt="Jellyfish"
              sx={{
                width: { xs: "200px", md: "350px" },
                height: "auto",
              }}
            />
          </motion.div>
        </Box>

        {/* Liquid Glass Schedule Container */}
        <Box
          sx={{
            flex: { md: "1" },
            width: "100%",
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <div 
            className="liquidGlass-container" 
            style={{ 
              padding: "40px", 
              borderRadius: "40px",
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <div className="liquidGlass-effect" />
            <div className="liquidGlass-tint" />
            <div className="liquidGlass-shine" />

            <Typography
              level="h2"
              sx={{
                color: "rgba(180, 230, 255, 0.9)",
                marginBottom: "2%",
                marginRight: "0.7%",
                marginLeft: "0.7%",
                textAlign: "center",
                textShadow: "0 1px 0 rgba(255, 255, 255, 0.5), 0 3px 8px rgba(0, 50, 100, 0.5)",
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)",
              }}
            >
              EVENT SCHEDULE
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, position: "relative", zIndex: 2 }}>
              {events.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: "700",
                      fontSize: { xs: "0.95rem", md: "1.1rem" },
                      minWidth: "100px"
                    }}
                  >
                    {item.time}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: { xs: "0.95rem", md: "1.1rem" },
                      textAlign: "right",
                    }}
                  >
                    {item.event}
                  </Typography>
                </Box>
              ))}
            </Box>
          </div>
        </Box>
      </Box>
    </Box>
  );
}