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
            color: "#ffffff",
            marginBottom: "2%",
            marginRight: "0.7%",
            marginLeft: "0.7%",
            textAlign: "center",
          }}
        >
          SPONSOR MVHACKS 9.0!
        </Typography>
        <div style={{ 
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: "20px",
            borderRadius: "8px",  
          }}
        >
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
