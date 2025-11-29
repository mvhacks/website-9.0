import React from "react";
import treasuremap from "../images/treasuremap.png";

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
      <h2 style={{ color: "#87CEEB", textAlign: "center", marginBottom: "4rem", fontSize: "3rem", fontWeight: "bold", letterSpacing: "2px" }}>
        EVENT SCHEDULE
      </h2>

      <div style={{ width: "100%", overflowX: "auto", overflowY: "hidden" }}>
        <div style={{ display: "inline-flex", minWidth: "100%", position: "relative", paddingBottom: "2rem" }}>
          <div style={{
            position: "absolute",
            top: "250px",
            left: "15px",
            width: "calc(100% - 30px)",
            height: "6px",
            background: "linear-gradient(90deg, #1B5E3F 0%, #2E8B57 50%, #1B5E3F 100%)",
            zIndex: 1
          }} />

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

                <div style={{
                  position: "absolute",
                  left: "50%",
                  top: "250px",
                  transform: "translate(-50%, -50%)",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #1B5E3F 0%, #2E8B57 100%)",
                  border: "3px solid #87CEEB",
                  zIndex: 2
                }}>
                  <div style={{
                    position: "absolute",
                    left: "50%",
                    [isTop ? "bottom" : "top"]: "100%",
                    width: "4px",
                    height: "135px",
                    background: "linear-gradient(180deg, #1B5E3F, #2E8B57)",
                    transform: "translateX(-50%)",
                    zIndex: -1
                  }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}