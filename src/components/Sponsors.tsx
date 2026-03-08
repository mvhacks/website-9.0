import google from "../images/google-logo.png";
import yubico from "../images/yubico-logo.png";
import balsamiq from "../images/balsamiq-logo.png";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider"; 

export default function Sponsors() {
  return (
    <Box sx={{ width: "100%", py: 4 }}>
      <Typography
        level="h2"
        sx={{
          color: "rgba(200, 240, 255, 1)", 
          marginBottom: "2%",
          marginRight: "0.7%",
          marginLeft: "0.7%",
          textAlign: "center",
          textShadow: "0 1px 0 rgba(255, 255, 255, 0.5), 0 3px 8px rgba(0, 50, 100, 0.5)",
          WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)",
        }}
      >
        SPONSORS
      </Typography>
      
      {/* --- Partner Tier Section --- */}
      <Box sx={{ mb: 8 }}>
        <Typography
          level="h4"
          sx={{
            color: "rgb(196, 234, 252)",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.2rem",
            mb: 4,
          }}
        >
          Partner Sponsors
        </Typography>

        <Divider sx={{ width: "150px", mx: "auto", mb: 5, bgcolor: "rgba(196, 234, 252, 0.5)" }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box 
            sx={{ 
              maxWidth: { xs: "200px", md: "400px" }, 
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.05)" } 
            }}
          >
            <img
              src={google}
              alt="Google"
              style={{ 
                width: "100%", 
                height: "auto", 
                filter: "grayscale(0%)",
                display: "block"
              }}
            />
          </Box>
        </Box>
      </Box>
      
      {/* --- Bronze Tier Section --- */}
      <Box sx={{ mb: 6 }}>
        <Typography
          level="h4"
          sx={{
            color: "rgba(196, 234, 252, 0.7)", 
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.1rem",
            mb: 3,
          }}
        >
          Bronze Sponsors
        </Typography>

        <Divider sx={{ width: "80px", mx: "auto", mb: 4, bgcolor: "rgba(205, 127, 50, 0.2)" }} />

        {/* Logos Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 3, md: 6 },
            flexWrap: "wrap",
          }}
        >
          {[
            { src: yubico, alt: "Yubico" },
            { src: balsamiq, alt: "Balsamiq" }
          ].map((logo) => (
            <Box 
              key={logo.alt}
              sx={{ 
                maxWidth: { xs: "100px", md: "160px" }, 
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" } 
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}