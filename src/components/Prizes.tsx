import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import Card from "@mui/joy/Card";
import Divider from "@mui/joy/Divider";
import Chip from "@mui/joy/Chip";

export default function Prizes() {
  return (
    <Box sx={{ width: "100%", py: 6, px: { xs: 2, md: 4 }, boxSizing: "border-box" }}>
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
        PRIZES
      </Typography>

      <div className="liquidGlass-container" style={{ padding: "20px", borderRadius: "16px", overflow: "hidden" }}>
        <div className="liquidGlass-effect" />
        <div className="liquidGlass-tint" />
        <div className="liquidGlass-shine" />

        <Grid
          container
          spacing={2}
          columns={12}
          sx={{
            width: "100%",
            mx: 0,
            "--Grid-borderWidth": "0px",
          }}
        >
          {/* 1st Place */}
          <Grid xs={12} sm={6} md={4} sx={{ display: "flex" }}>
            <Card
              variant="soft"
              sx={{
                width: "100%",
                p: 2,
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(12px)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography level="h3" sx={{ color: "#FFF", textAlign: "center", fontSize: "1.5rem" }}>
                1st Place
              </Typography>
              <Typography level="body-xs" sx={{ textAlign: "center", color: "rgba(255,255,255,0.8)" }}>
                (Up to 4 winners)
              </Typography>
              <Divider sx={{ my: 1.5, bgcolor: "rgba(255,255,255,0.2)" }} />
              <Typography level="title-sm" sx={{ color: "#b4e6ff", mb: 0.5 }}>
                First Pick from Prize Bank:
              </Typography>
              <Box component="ul" sx={{ pl: 2, m: 0, fontSize: "0.85rem", color: "#FFF", lineHeight: 1.4, flexGrow: 1 }}>
                <li>Amazon Echo Spot</li>
                <li>Fujifilm Instax Mini 12 Camera</li>
                <li>Sony WH-CH520 Headphones</li>
              </Box>
              <Chip color="success" size="sm" variant="solid" sx={{ mt: 2, alignSelf: "center", fontWeight: "bold" }}>
                YubiKey 5C NFC Included
              </Chip>
            </Card>
          </Grid>

          {/* 2nd Place */}
          <Grid xs={12} sm={6} md={4} sx={{ display: "flex" }}>
            <Card
              variant="soft"
              sx={{
                width: "100%",
                p: 2,
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(12px)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography level="h3" sx={{ color: "#FFF", textAlign: "center", fontSize: "1.5rem" }}>
                2nd Place
              </Typography>
              <Typography level="body-xs" sx={{ textAlign: "center", color: "rgba(255,255,255,0.8)" }}>
                (Up to 4 winners)
              </Typography>
              <Divider sx={{ my: 1.5, bgcolor: "rgba(255,255,255,0.2)" }} />
              <Typography level="title-sm" sx={{ color: "#b4e6ff", mb: 0.5 }}>
                Second Pick from Prize Bank
              </Typography>
              <Typography level="body-sm" sx={{ color: "#FFF", flexGrow: 1 }}>
                Access to remaining prize bank inventory.
              </Typography>
              <Chip color="success" size="sm" variant="solid" sx={{ mt: 2, alignSelf: "center", fontWeight: "bold" }}>
                YubiKey 5C NFC Included
              </Chip>
            </Card>
          </Grid>

          {/* 3rd Place */}
          <Grid xs={12} sm={12} md={4} sx={{ display: "flex" }}>
            <Card
              variant="soft"
              sx={{
                width: "100%",
                p: 2,
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(12px)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography level="h3" sx={{ color: "#FFF", textAlign: "center", fontSize: "1.5rem" }}>
                3rd Place
              </Typography>
              <Typography level="body-xs" sx={{ textAlign: "center", color: "rgba(255,255,255,0.8)" }}>
                (Up to 4 winners)
              </Typography>
              <Divider sx={{ my: 1.5, bgcolor: "rgba(255,255,255,0.2)" }} />
              <Typography level="title-sm" sx={{ color: "#b4e6ff", mb: 0.5 }}>
                Third Pick from Prize Bank
              </Typography>
              <Typography level="body-sm" sx={{ color: "#FFF", flexGrow: 1 }}>
                Final selection from the project prize pool.
              </Typography>
            </Card>
          </Grid>

          {/* Special Awards */}
          <Grid xs={12} md={6} sx={{ display: "flex" }}>
            <Card
              variant="soft"
              sx={{
                width: "100%",
                p: 2,
                background: "rgba(0, 150, 255, 0.15)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <Typography level="title-lg" sx={{ color: "#FFF" }}>
                Best Under the Sea Project
              </Typography>
              <Typography level="body-xs" sx={{ color: "rgba(255,255,255,0.7)" }}>
                Mini-Theme (Up to 4 winners)
              </Typography>
              <Divider sx={{ my: 1, bgcolor: "rgba(255,255,255,0.1)" }} />
              <Typography level="body-md" fontWeight="bold" sx={{ color: "#9ddaf9" }}>
                Lego Shark (x4)
              </Typography>
            </Card>
          </Grid>

          <Grid xs={12} md={6} sx={{ display: "flex" }}>
            <Card
              variant="soft"
              sx={{
                width: "100%",
                p: 2,
                background: "rgba(0, 150, 255, 0.15)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <Typography level="title-lg" sx={{ color: "#FFF" }}>
                Coding Challenge
              </Typography>
              <Typography level="body-xs" sx={{ color: "rgba(255,255,255,0.7)" }}>
                1st, 2nd, and 3rd Place
              </Typography>
              <Divider sx={{ my: 1, bgcolor: "rgba(255,255,255,0.1)" }} />
              <Typography level="body-md" fontWeight="bold" sx={{ color: "#9ddaf9" }}>
                ELEGOO UNO Project Super Starter Kit & YubiKey 5C NFC
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}