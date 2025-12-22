import React from "react";
import treasuremap from "../images/treasuremap.png";
import Typography from "@mui/joy/Typography";

const events = [
  { time: "8:30 AM", event: "Opening Ceremony/Breakfast" },
  { time: "9:00 AM", event: "Start Hacking + Workshop" },
  { time: "9:30 AM", event: "Capture the Flag Starts" },
  { time: "11:00 AM", event: "Mini Games" },
  { time: "12:00 PM", event: "Lunch (provided by MVHacks)" },
  { time: "3:00 PM", event: "Mini Game" },
  { time: "5:30 PM", event: "Guest Speaker" },
  { time: "7:15 PM", event: "Submissions + Voting and Judging/Dinner" },
  { time: "8:00 PM", event: "Closing Ceremony" }
];

export default function SeaTimeline() {
  const yourImagePath = treasuremap;
  
  return (
    <div style={{ minHeight: "100vh", padding: "4rem 2rem" }}>
      <Typography
        level="h2"
        sx={{
          color: "#ffffff",
          marginBottom: "2%",
          marginRight: "0.7%",
          marginLeft: "0.7%",
          textAlign: "center",
        }}
      >
        EVENT SCHEDULE
      </Typography>

      <div style={{ width: "100%", overflowX: "auto", overflowY: "hidden" }}>
        <div style={{ display: "inline-flex", minWidth: "100%", position: "relative", paddingBottom: "2rem" }}>
          <svg style={{
            position: "absolute",
            top: "244px",
            left: "15px",
            width: "calc(100% - 30px)",
            height: "18px",
            zIndex: 1
          }}>
            <defs>
              <pattern id="kelpPattern" x="0" y="0" width="40" height="18" patternUnits="userSpaceOnUse">
                <path d="M0,9 Q5,3 10,9 T20,9 T30,9 T40,9" fill="none" stroke="#1B5E3F" strokeWidth="3" opacity="0.6"/>
                <path d="M2,9 Q7,5 12,9 T22,9 T32,9 T42,9" fill="none" stroke="#2E8B57" strokeWidth="2.5" opacity="0.8"/>
                <path d="M0,9 Q5,13 10,9 T20,9 T30,9 T40,9" fill="none" stroke="#1B5E3F" strokeWidth="2" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#kelpPattern)"/>
          </svg>

          {events.map((item, index) => {
            const isTop = index % 2 === 0;
            
            return (
              <div key={index} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: "3rem",
                position: "relative",
                width: "300px",
                flexShrink: 0,
                height: "500px"
              }}>
                <div style={{
                  position: isTop ? "absolute" : "absolute",
                  top: isTop ? "0" : "auto",
                  bottom: isTop ? "auto" : "0",
                  left: "0",
                  right: "0",
                  display: "flex",
                  justifyContent: "center",
                  zIndex: 10
                }}>
                  {yourImagePath && (
                    <div style={{
                      width: "300px",
                      height: "200px",
                      position: "relative",
                      borderRadius: "15px",
                      overflow: "hidden"
                    }}>
                      <img 
                        src={yourImagePath} 
                        alt={item.event}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block"
                        }}
                      />
                      
                      <div style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(255, 255, 255, 0)",
                        padding: "1.5rem",
                        textAlign: "center"
                      }}>
                        <div style={{ fontSize: "1.3rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#040300ff" }}>
                          {item.time}
                        </div>
                        <div style={{ fontSize: "1rem", color: "#000000ff" }}>
                          {item.event}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <svg style={{
                  position: "absolute",
                  left: "50%",
                  top: isTop ? "178px" : "253px",
                  width: "12px",
                  height: "75px",
                  transform: "translateX(-50%)",
                  zIndex: 2
                }}>
                  <defs>
                    <pattern id={`kelpStem${index}`} x="0" y="0" width="12" height="15" patternUnits="userSpaceOnUse">
                      <path d="M6,0 Q3,4 6,8 T6,15" fill="none" stroke="#1B5E3F" strokeWidth="4" opacity="0.7"/>
                      <path d="M6,0 Q8,4 6,8 T6,15" fill="none" stroke="#2E8B57" strokeWidth="3" opacity="0.6"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#kelpStem${index})`}/>
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}