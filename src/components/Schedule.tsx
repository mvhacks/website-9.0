import React from "react";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";

function createData(time: string, event: string) {
  return { event, time };
}

const rows = [
  createData("9:30 AM", "Opening Ceremony"),
  createData("10:00 AM", "Start Hacking"),
  createData("10:30 AM", "Capture the Flag Starts"),
  createData("12:00 AM", "Workshop"),
  createData("1:00 PM", "Lunch (provided by MVHacks)"),
  createData("2:30 PM", "Company Presentation"),
  createData("3:30 PM", "Marshmallow Towers"),
  createData("4:30 PM", "Developing Websites With React Workshop"),
  createData("6:00 PM", "Skribbl.io"),
  createData("8:30 PM", "Submissions"),
  createData("8:45 PM", "Voting and Judging"),
  createData("9:00 PM", "Closing Ceremony"),
];

export default function Schedule() {
  return (
    <div
      style={{
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop: "8%",
        paddingBottom: "5%",
      }}
    >
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
        EVENT SCHEDULE
      </Typography>
      <Table
        hoverRow
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: "80%", md: "60%", lg: "50%" },
          margin: "0 auto",
          backgroundColor: "#221a46",
          color: "white !important",
          border: "6px solid #c6add4",
          borderRadius: "16px",
          overflow: "hidden",
          "& td, & th": {
            padding: { xs: "8px 10px", sm: "12px 16px" },
            fontSize: { xs: "0.9rem", sm: "1.1rem" },
            whiteSpace: "normal",
          },
          "& th": {
            backgroundColor: "#221a46",
          },
          "& tr": {
            transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          },
          ".data:hover": {
            backgroundColor: "rgba(158, 138, 169, 0.6) !important",
            boxShadow: "0 0 12px rgba(198, 173, 212, 0.6)",
          },
        }}
      >
        <thead>
          <tr>
            <th
              style={{ width: "30%", textAlign: "center", fontWeight: "bold" }}
            >
              <Typography level="h3" sx={{ color: "#ffffff" }}>
                Time
              </Typography>
            </th>
            <th style={{ textAlign: "center" }}>
              <Typography level="h3" sx={{ color: "#ffffff" }}>
                Event
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr className="data" key={row.time}>
              <td>
                <Typography
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {row.time}
                </Typography>
              </td>
              <td>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: [
                      "Opening Ceremony",
                      "Workshop",
                      "Company Presentation",
                      "Developing Websites With React Workshop",
                      "Closing Ceremony",
                    ].includes(row.event)
                      ? "bold"
                      : "normal",
                  }}
                >
                  {row.event}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
