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
          color: "rgba(180, 230, 255, 0.9)",
          mb: 4,
          textAlign: "center",
          textShadow: "0 1px 0 rgba(255, 255, 255, 0.5), 0 3px 8px rgba(0, 50, 100, 0.5)",
          WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)",
        }}
      >
        SPONSORS
      </Typography>

      {/* --- Bronze Tier Section --- */}
      <Box sx={{ mb: 6 }}>
        <Typography
          level="h4"
          sx={{
            color: "rgb(196, 234, 252)",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.1rem",
            mb: 3,
          }}
        >
          Bronze Sponsors
        </Typography>
      
        <Divider sx={{ width: "100px", mx: "auto", mb: 3, bgcolor: "rgba(205, 127, 50, 0.3)" }} />

        {/* Logos Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 4, md: 8 }, 
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ maxWidth: { xs: "140px", md: "220px" } }}>
            <img
              src={yubico}
              alt="Yubico"
              style={{ width: "100%", height: "auto", filter: "grayscale(20%)" }}
            />
          </Box>

          <Box sx={{ maxWidth: { xs: "140px", md: "220px" } }}>
            <img
              src={balsamiq}
              alt="Balsamiq"
              style={{ width: "100%", height: "auto", filter: "grayscale(20%)" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}