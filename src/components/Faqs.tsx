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
          color: "rgba(180, 230, 255, 0.9)",
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
            backgroundColor: "rgba(105, 173, 255, 0.41) !important",
          },
        }}
      >
        <div className="liquidGlass-effect" />
        <div className="liquidGlass-tint" />
        <div className="liquidGlass-shine" />

        <Accordion>
          <AccordionSummary>
            <Typography
              textColor="common.white"
              sx={{
                fontWeight: "normal",
              }}
            >
              What is a hackathon?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#cfdbf1" }}>
            A hackathon is a competitive educational event in which students
            come together to develop an idea for a project into a real product.
            MVHacks will provide hackers with educational resources, including
            seminars and mentors, and an environment that will enable their
            success.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography
              textColor="common.white"
              sx={{
                fontWeight: "normal",
              }}
            >
              How much does it cost?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#cfdbf1" }}>
            It is completely free! All food, swag, and prizes are provided at no
            charge.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography
              textColor="common.white"
              sx={{
                fontWeight: "normal",
              }}
            >
              What about food?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#cfdbf1" }}>
            MVHacks will provide a free lunch to all participants!
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography
              textColor="common.white"
              sx={{
                fontWeight: "normal",
              }}
            >
              When / Where is this taking place?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#cfdbf1" }}>
          The specific date and time are to be determined. 
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography
              textColor="common.white"
              sx={{
                fontWeight: "normal",
              }}
            >
              How long will this hackathon be?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#cfdbf1" }}>
            12 hours (one-day event)!
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography
              textColor="common.white"
              sx={{
                fontWeight: "normal",
              }}
            >
              Do I need programming experience?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#cfdbf1" }}>
            No - this is a fantastic learning opportunity! Hackers can expect to
            be able to attend educational workshops run by industry
            professionals in addition to experienced adult mentors to help them
            learn and succeed.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography
              textColor="common.white"
              sx={{
                fontWeight: "normal",
              }}
            >
              Who can attend?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#cfdbf1" }}>
            All high school and middle school students are eligible to attend MVHacks as hackers.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography
              textColor="common.white"
              sx={{
                fontWeight: "normal",
              }}
            >
              What do I need?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#cfdbf1" }}>
            For the event, all you need is your laptop, charger, and
            a desire to hack!
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography
              textColor="common.white"
              sx={{
                fontWeight: "normal",
              }}
            >
              Do I need a team?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#cfdbf1" }}>
            Teams of up to 3 are allowed. You may work as an individual, but we
            recommend collaborating. There will be a team mixer at start of the
            hackathon.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography
              textColor="common.white"
              sx={{
                fontWeight: "normal",
              }}
            >
              What are the rules?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#cfdbf1" }}>
            Be nice, respectful, and have fun! Hackers are expected to behave
            appropriately and safely at all times, and abide by the MLH Code of
            Conduct (https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md).
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </div>
  );
}