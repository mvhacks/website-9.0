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
import React, { useState, useEffect } from "react";

export default function Navbar({ onOptionSelect }: any) {
  const [isVisible, setIsVisible] = useState<Boolean>(true);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 1100); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on component mount

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
                style={{ borderRadius: "50%", marginTop: "10px" }}
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
                  <span style={{ color: "#1800ad" }}>mv</span>
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
                <ListItemButton
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
                  onClick={() => handleDrawerOption("info")}
                >
                  <Typography
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: "#003caa",
                      },
                    }}
                    level="h4"
                  >
                    info
                  </Typography>
                </ListItemButton>
                <ListItemButton
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
                  onClick={() => handleDrawerOption("schedule")}
                >
                  <Typography
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: "#003caa",
                      },
                    }}
                    level="h4"
                  >
                    schedule
                  </Typography>
                </ListItemButton>
                <ListItemButton
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
                  onClick={() => handleDrawerOption("faqs")}
                >
                  <Typography
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: "#003caa",
                      },
                    }}
                    level="h4"
                  >
                    faqs
                  </Typography>
                </ListItemButton>
                <ListItemButton
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
                  onClick={() => handleDrawerOption("sponsor")}
                >
                  <Typography
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: "#003caa",
                      },
                    }}
                    level="h4"
                  >
                    sponsors
                  </Typography>
                </ListItemButton>
                <ListItemButton
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
                  onClick={() => handleDrawerOption("team")}
                >
                  <Typography
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: "#003caa",
                      },
                    }}
                    level="h4"
                  >
                    team
                  </Typography>
                </ListItemButton>
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
                borderRadius: "50%",
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
                <span style={{ color: "#1800ad" }}>mv</span>
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
            <Link
              style={{ margin: 10, color: "white", paddingLeft: 10 }}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              component="button"
              color="neutral"
              level="h3"
              underline="none"
              variant="plain"
              onClick={() => onOptionSelect("info")}
            >
              <Typography
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "#003caa",
                  },
                }}
                level="h3"
              >
                info
              </Typography>
            </Link>
            <Link
              style={{ margin: 10, color: "white", paddingLeft: 10 }}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              component="button"
              color="neutral"
              level="h3"
              underline="none"
              variant="plain"
              onClick={() => onOptionSelect("schedule")}
            >
              <Typography
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "#003caa",
                  },
                }}
                level="h3"
              >
                schedule
              </Typography>
            </Link>
            <Link
              style={{ margin: 10, color: "white", paddingLeft: 10 }}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              component="button"
              color="neutral"
              level="h3"
              underline="none"
              variant="plain"
              onClick={() => onOptionSelect("faqs")}
            >
              <Typography
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "#003caa",
                  },
                }}
                level="h3"
              >
                faqs
              </Typography>
            </Link>
            <Link
              style={{ margin: 10, color: "white", paddingLeft: 10 }}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              component="button"
              color="neutral"
              level="h3"
              underline="none"
              variant="plain"
              onClick={() => onOptionSelect("sponsor")}
            >
              <Typography
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "#003caa",
                  },
                }}
                level="h3"
              >
                sponsors
              </Typography>
            </Link>
            <Link
              style={{ margin: 10, color: "white", paddingLeft: 10 }}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              component="button"
              color="neutral"
              level="h3"
              underline="none"
              variant="plain"
              onClick={() => onOptionSelect("team")}
            >
              <Typography
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "#003caa",
                  },
                }}
                level="h3"
              >
                team
              </Typography>
            </Link>
          </Box>
        </Box>
      )}
    </div>
  );
}