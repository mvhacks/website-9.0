import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

import project1Img from "../images/projects/book-buddy.jpg";
import project2Img from "../images/projects/2-player-platformer.png";
import project3Img from "../images/projects/template-manager.png";
import project4Img from "../images/projects/aeye-health.png";
import project5Img from "../images/projects/hexnums.png";
import project6Img from "../images/projects/fire-ai.png";

interface Project {
  title: string;
  description: string;
  devPostUrl: string;
  year: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "BookBuddy",
    description: "Your buddy when it comes to books",
    devPostUrl: "https://devpost.com/software/bookbuddy-1a9srx",
    year: "MVHacks (2017)",
    image: project1Img,
  },
  {
    title: "2 Player Platformer",
    description: "An entertaining platformer for two players to work together.",
    devPostUrl: "https://devpost.com/software/2-player-platformer",
    year: "MVHacks 2.0 (2019)",
    image: project2Img,
  },
  {
    title: "Template-Manager",
    description: "Create, Edit, Monitor, and Share code - all at the touch of a button!",
    devPostUrl: "https://devpost.com/software/template-manager",
    year: "MVHacks 4.5 (2021)",
    image: project3Img,
  },
  {
    title: "AEYE Health",
    description: "AEYE Health is an eye-health app designed to use computer vision technology to monitor your blink frequency during screen time.",
    devPostUrl: "https://devpost.com/software/aeye-health",
    year: "MVHacks 6.0 (2023)",
    image: project4Img,
  },
  {
    title: "HexNums",
    description: "HexNums is a simple math game that improves a user's skill and logical thinking. It makes math fun with wizard teachers who emotionally respond to the user, cool wands, gems, a shop, and more!",
    devPostUrl: "https://devpost.com/software/hexnums",
    year: "MVHacks 7.0 (2024)",
    image: project5Img,
  },
  {
    title: "Fire AI",
    description: "FireAI: Predict & Plan. Detect fire risks early, stay safe while traveling, and help governments act fast against wildfires in California.",
    devPostUrl: "https://devpost.com/software/fire-ai",
    year: "MVHacks 8.0 (2025)",
    image: project6Img,
  },
];

export default function PreviousProjects() {
  return (
    <Box sx={{ width: "100%", py: 6, px: { xs: 2, md: 4 }, boxSizing: "border-box" }}>
      <style>{`
        .flip-card {
          perspective: 1000px;
          height: 260px;
          cursor: pointer;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.55s cubic-bezier(0.45, 0.05, 0.55, 0.95);
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 14px;
          box-sizing: border-box;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .flip-card-front {
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.07);
        }

        .flip-card-front-image {
          width: 100%;
          height: 65%;
          object-fit: contain;
          display: block;
          flex-shrink: 0;
          background: rgba(255, 255, 255, 0.06);
          padding: 8px;
          box-sizing: border-box;
        }

        .flip-card-front-image-placeholder {
          width: 100%;
          height: 65%;
          background: rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          flex-shrink: 0;
        }

        .flip-card-front-label {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px 14px;
          gap: 4px;
          background: rgba(255, 255, 255, 0.04);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .flip-card-back {
          transform: rotateY(180deg);
          background: rgba(255, 255, 255, 0.11);
          border: 1px solid rgba(255, 255, 255, 0.25);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 22px 20px 18px;
          gap: 10px;
        }

        .flip-card-back::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 14px;
          background: linear-gradient(
            135deg,
            rgba(180, 230, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.02) 100%
          );
          pointer-events: none;
        }

        .flip-card:hover .flip-card-front,
        .flip-card:hover .flip-card-back {
          border-color: rgba(255, 255, 255, 0.35);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
        }

        .view-project-btn {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
          backdrop-filter: blur(6px);
        }

        .view-project-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.5);
        }
      `}</style>

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
        PREVIOUS PROJECTS
      </Typography>

      <div
        className="liquidGlass-container"
        style={{ padding: "20px", borderRadius: "16px", overflow: "hidden" }}
      >
        <div className="liquidGlass-effect" />
        <div className="liquidGlass-tint" />
        <div className="liquidGlass-shine" />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 2,
            width: "100%",
          }}
        >
          {projects.map((project, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">

                {/* Front */}
                <div className="flip-card-front">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="flip-card-front-image"
                    />
                  ) : (
                    <div className="flip-card-front-image-placeholder">🖥️</div>
                  )}
                  <div className="flip-card-front-label">
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        textAlign: "center",
                        lineHeight: 1.3,
                        textShadow: "0 1px 6px rgba(0,0,0,0.5)",
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.75)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        background: "rgba(0,0,0,0.25)",
                        px: 1.2,
                        py: 0.4,
                        borderRadius: "6px",
                        border: "1px solid rgba(255,255,255,0.15)",
                      }}
                    >
                      hover to learn more
                    </Typography>
                  </div>
                </div>

                {/* Back */}
                <div className="flip-card-back">
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      textAlign: "center",
                      lineHeight: 1.3,
                      textShadow: "0 1px 8px rgba(0,0,0,0.6)",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.85)",
                      fontSize: "0.78rem",
                      textAlign: "center",
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {project.year}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "0.92rem",
                      textAlign: "center",
                      lineHeight: 1.6,
                      flexGrow: 1,
                      display: "flex",
                      alignItems: "center",
                      textShadow: "0 1px 6px rgba(0,0,0,0.5)",
                    }}
                  >
                    {project.description}
                  </Typography>
                  <a
                    href={project.devPostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-project-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View on DevPost ↗
                  </a>
                </div>

              </div>
            </div>
          ))}
        </Box>
      </div>
    </Box>
  );
}