import React from "react";
import treasuremap from "../images/treasuremap.png";


const events = [
  { time: "8:30 AM", event: "Opening Ceremony/Breakfast", imageUrl: "" },
  { time: "9:00 AM", event: "Start Hacking + Workshop", imageUrl: "" },
  { time: "9:30 AM", event: "Capture the Flag Starts", imageUrl: "" },
  { time: "11:00 AM", event: "Mini Games", imageUrl: "" },
  { time: "12:00 PM", event: "Lunch (provided by MVHacks)", imageUrl: "" },
  { time: "3:00 PM", event: "Mini Game", imageUrl: "" },
  { time: "5:30 PM", event: "Guest Speaker", imageUrl: "" },
  { time: "7:15 PM", event: "Submissions + Voting and Judging/Dinner", imageUrl: "" },
  { time: "8:00 PM", event: "Closing Ceremony", imageUrl: "" }
];

export default function SeaTimeline() {
  
  const yourImagePath = treasuremap;
  
  return (
    <div style={{
      minHeight: "100vh",
      padding: "4rem 2rem"
    }}>
      <h2 style={{
        color: "#87CEEB",
        textAlign: "center",
        marginBottom: "4rem",
        fontSize: "3rem",
        fontWeight: "bold",
        letterSpacing: "2px"
      }}>
        EVENT SCHEDULE
      </h2>

      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        position: "relative"
      }}>
        {/* Vertical seaweed/kelp stem in the center */}
        <div style={{
          position: "absolute",
          left: "50%",
          top: "15px",
          height: `calc(100% - 30px)`,
          width: "6px",
          background: "linear-gradient(180deg, #2E8B57 0%, #3CB371 50%, #2E8B57 100%)",
          transform: "translateX(-50%)",
          zIndex: 1
        }} />

        {events.map((item, index) => {
          const isLeft = index % 2 === 0;
          
          return (
            <div key={index} style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "3rem",
              position: "relative",
              flexDirection: isLeft ? "row" : "row-reverse",
              height: "200px"
            }}>
              {/* Image box side */}
              <div style={{
                flex: 1,
                paddingRight: isLeft ? "6rem" : "0",
                paddingLeft: isLeft ? "0" : "6rem",
                display: "flex",
                justifyContent: isLeft ? "flex-end" : "flex-start",
                position: "relative",
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
                    
                    {/* Text overlay */}
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
                      background: "rgba(139, 69, 19, 0.85)",
                      padding: "1.5rem",
                      textAlign: "center"
                    }}>
                      <div style={{ fontSize: "1.3rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#FFE4B5" }}>
                        {item.time}
                      </div>
                      <div style={{ fontSize: "1rem", color: "#F5DEB3" }}>
                        {item.event}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Center connection point */}
              <div style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: "radial-gradient(circle, #3CB371 0%, #2E8B57 100%)",
                border: "3px solid #87CEEB",
                zIndex: 2
              }}>
                {/* Branch connecting to the image */}
                <div style={{
                  position: "absolute",
                  top: "50%",
                  [isLeft ? "right" : "left"]: "100%",
                  width: "calc(4rem + 15px)",
                  height: "4px",
                  background: "linear-gradient(90deg, #3CB371, #2E8B57)",
                  transform: "translateY(-50%)",
                  zIndex: 0
                }} />
              </div>

              {/* Empty space on opposite side */}
              <div style={{ flex: 1 }} />
            </div>
          );
        })}
      </div>

    </div>
  );
}