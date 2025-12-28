import prospectusImage from "../images/MVH9Prospectus.png";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";

export default function Prospectus() {
  return (
    <div>
      <div id="blurbSponsors">
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
    SPONSOR MVHACKS 9.0!
  </Typography>
        <div
          className="liquidGlass-container"
          style={{ 
              backgroundColor: "transparent",
              padding: "20px",
              borderRadius: "8px",  
            }}
        >
          <div className="liquidGlass-effect" />
          <div className="liquidGlass-tint" />
          <div className="liquidGlass-shine" />

          <p>
            MVHacks is now in its 9th year of inspiring students
            throughout the country to get together and build great projects. As a
            prestigious, in-person hackathon, our past events have consistently
            attracted over 200 unique and diverse attendees. With your support, we
            aim to engage over 250+ students for MVHacks.
          </p>
          <p>
            To discover more about sponsorship opportunities, please download our
            Sponsorship Prospectus below and reach out to us at&nbsp;
            <a
              id="email"
              href="mailto:emily@mvhacks.io"
              style={{ color: "#b4c6e2" }}
            >
              emily@mvhacks.io
            </a>
            .
          </p>
          <p>
            Join us, and let's make MVHacks 9.0 an unforgettable experience. We
            eagerly await the participation of your company!
          </p>
          <a
            id="prospectusDownload"
            href={"MVH9SponsorshipProspectus.pdf"}
            download
            style={{ color: "#b4c6e2" }}
          >
            Download the Sponsorship Prospectus
          </a>
        </div>
        
      </div>
      <Box
        alignItems="center"
        textAlign="center"
        display="flex"
        justifyContent="center"
        width="100%"
      >
        <Box maxWidth="800px">
          <img
            src={prospectusImage}
            alt="prospectus"
            id="prospectusImage"
            width="80%"
            height="auto"
          />
        </Box>
      </Box>
    </div>
  );
}
