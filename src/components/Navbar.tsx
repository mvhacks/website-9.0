import "../App.css";
import logo from "../images/MVH9Logo.png";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import React, { useState, useEffect } from "react";

export default function Navbar({ onOptionSelect }: any) {
  const [isVisible, setIsVisible] = useState<Boolean>(true);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 1100);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(inOpen);
    };

  const handleDrawerOption = (option: string) => {
    setDrawerOpen(false);
    onOptionSelect(option);
  };

  // Single source of truth for nav order
  const navItems = [
    { label: "info", key: "info" },
    { label: "previous projects", key: "previousprojects" },
    { label: "schedule", key: "schedule" },
    { label: "prizes", key: "prizes" },
    { label: "sponsors", key: "sponsor" },
    { label: "faqs", key: "faqs" },
    { label: "team", key: "team" },
  ];

  return (
    <div
      style={{ width: "100%", backgroundColor: "transparent", zIndex: "10" }}
    >
      <div style={{ display: "flex", marginLeft: "11%" }}>
        {!isVisible && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "25px",
                marginBottom: "20px",
                paddingTop: { xs: "5px", sm: "7px" },
              }}
            >
              <img
                src={logo}
                alt="mvhackslogo"
                width="30"
                height="30"
                style={{ marginTop: "10px" }}
              />
              <Link
                overlay
                underline="none"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => onOptionSelect("home")}
              >
                <Typography
                  id="mvhackstext"
                  sx={{
                    color: "white",
                    paddingLeft: "10%",
                    marginRight: "auto",
                    fontSize: { xs: "6vw", sm: "4vw", md: "3vw" },
                    fontWeight: "bold",
                  }}
                  level="h1"
                >
                  <span style={{ color: "#003caa" }}>mv</span>
                  <span style={{ color: "black" }}>hacks</span>
                  <sup style={{ color: "black", fontSize: "0.6em", verticalAlign: "super" }}>9.0</sup>
                </Typography>
              </Link>
            </Box>
            <IconButton
              color="neutral"
              size="md"
              style={{ border: "none", transform: "scale(1.5)" }}
              sx={{ position: "absolute", top: "5px", left: "2%" }}
              onClick={() => setDrawerOpen(true)}
            >
              <Menu />
            </IconButton>
            <Drawer open={drawerOpen} onClose={toggleDrawer(true)}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "15px",
                  backgroundColor: "black",
                  borderBottom: "1px solid #333",
                }}
              >
                <img src={logo} alt="mvhackslogo" width="40" height="40" />
                <IconButton
                  color="neutral"
                  onClick={() => setDrawerOpen(false)}
                  sx={{ color: "white" }}
                >
                  <Close />
                </IconButton>
              </Box>
              <List
                size="lg"
                component="nav"
                sx={{
                  color: "black",
                  height: "100%",
                  width: "100%",
                  backgroundColor: "black",
                }}
              >
                {navItems.map((item) => (
                  <ListItemButton
                    key={item.key}
                    sx={{
                      fontWeight: "lg",
                      color: "white",
                      backgroundColor: "black",
                      textAlign: "center",
                      justifyContent: "center",
                      "&:hover": {
                        backgroundColor: "black !important",
                      },
                    }}
                    onClick={() => handleDrawerOption(item.key)}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        "&:hover": { color: "#003caa" },
                      }}
                      level="h4"
                    >
                      {item.label}
                    </Typography>
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          </Box>
        )}
      </div>

      {isVisible && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "25px",
            }}
          >
            <img
              src={logo}
              alt="mvhackslogo"
              width="50"
              height="50"
              style={{
                width: "50px",
                height: "50px",
                maxWidth: "50px",
                maxHeight: "50px",
                marginTop: "15px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                id="mvhackstext"
                sx={{
                  color: "white",
                  paddingLeft: "10%",
                  marginRight: "auto",
                  fontWeight: "bold",
                  fontSize: { xs: "4vw", sm: "3vw", md: "2.5vw", lg: "2vw" },
                  lineHeight: "80%",
                  whiteSpace: "nowrap",
                }}
                level="h1"
              >
                <span style={{ color: "#003caa" }}>mv</span>
                <span style={{ color: "black" }}>hacks</span>
                <sup style={{ color: "black", fontSize: "0.6em", verticalAlign: "super" }}>9.0</sup>
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "25px",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.key}
                style={{ margin: 10, color: "white", paddingLeft: 10 }}
                sx={{ "&:hover": { backgroundColor: "transparent" } }}
                component="button"
                color="neutral"
                level="h3"
                underline="none"
                variant="plain"
                onClick={() => onOptionSelect(item.key)}
              >
                <Typography
                  sx={{
                    color: "white",
                    "&:hover": { color: "#003caa" },
                  }}
                  level="h3"
                >
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>
      )}
    </div>
  );
}