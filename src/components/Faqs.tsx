import React from "react";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Typography from "@mui/joy/Typography";

export default function Faqs() {
  return (
    <div style={{ padding: "2%" }}>
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
        FREQUENTLY ASKED QUESTIONS
      </Typography>
      <AccordionGroup
        className="liquidGlass-container"
        sx={{
          backgroundColor:'transparent',
          color: "white !important",
          marginLeft: { xs: "3%", sm: "10%", md: "10%" },
          marginRight: { xs: "3%", sm: "10%", md: "10%" },      
          padding: "20px",
          borderRadius: "8px",
          "& .MuiAccordion-root": {
            backgroundColor: "transparent",
          },
          "& button:hover": {
            backgroundColor: "rgba(135, 190, 255, 0.3) !important",
          },
        }}
      >
        <div className="liquidGlass-effect" />
        <div className="liquidGlass-tint" />
        <div className="liquidGlass-shine" />

        <Accordion>
          <AccordionSummary>
            <Typography
              sx={{
                fontWeight: "normal",
                color: "#FFFFFF", 
              }}
            >
              What is a hackathon?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#B0DFFF" }}>
            A hackathon is a competitive educational event in which students
            come together to develop an idea for a project into a real product.
            MVHacks will provide hackers with educational resources, including
            seminars and mentors, and an environment that will enable their
            success.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            <Typography sx={{ fontWeight: "normal", color: "#FFFFFF" }}>
              How much does it cost?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#B0DFFF" }}>
            It is completely free! All food, swag, and prizes are provided at no
            charge.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            <Typography sx={{ fontWeight: "normal", color: "#FFFFFF" }}>
              What about food?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#B0DFFF" }}>
            MVHacks will provide a free lunch to all participants!
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            <Typography sx={{ fontWeight: "normal", color: "#FFFFFF" }}>
              When / Where is this taking place?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#B0DFFF" }}>
            March 28 from 8:30 AM to 8:30 PM in Mountain View.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            <Typography sx={{ fontWeight: "normal", color: "#FFFFFF" }}>
              How long will this hackathon be?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#B0DFFF" }}>
            12 hours (one-day event)!
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            <Typography sx={{ fontWeight: "normal", color: "#FFFFFF" }}>
              Do I need programming experience?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#B0DFFF" }}>
            No programming experience is required. While prior coding experience can be helpful, 
            we encourage participants of all backgrounds and skill levels to join. Hackers will 
            have access to workshops led by industry professionals and guidance from experienced 
            mentors, and will learn how to use AI tools to create and develop their projects. 
            This hackathon is designed to be a welcoming and educational environment for everyone.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            <Typography sx={{ fontWeight: "normal", color: "#FFFFFF" }}>
              Who can attend?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#B0DFFF" }}>
            All high school students are eligible to attend MVHacks as hackers.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            <Typography sx={{ fontWeight: "normal", color: "#FFFFFF" }}>
              What do I need?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#B0DFFF" }}>
            For the event, all you need is your laptop, charger, and
            a desire to hack!
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            <Typography sx={{ fontWeight: "normal", color: "#FFFFFF" }}>
              Do I need a team?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#B0DFFF" }}>
            Teams of up to 3 are allowed. You may work as an individual, but we
            recommend collaborating. There will be a team mixer at start of the
            hackathon.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            <Typography sx={{ fontWeight: "normal", color: "#FFFFFF" }}>
              What are the rules?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#B0DFFF" }}>
            Be nice, respectful, and have fun! Hackers are expected to behave
            appropriately and safely at all times, and abide by the MLH Code of
            Conduct (https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md).
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </div>
  );
}