import "./App.css";
import Button from "@mui/joy/Button";
import arrow from "./images/arrow.png";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
      <div>
      <Button
        sx={{ borderRadius: "25px" }}
        id="alert"
        component="a"
        href="https://docs.google.com/forms/d/e/1FAIpQLSefTr6730BXSMYYdAnDXS5hFu_NZ5FHyzNYkv2MYqZoxvkgyQ/viewform"
      >
        ALERT ME
        <img src={arrow} height="25" width="25" id="arrow"/>
      </Button>
      </div>
      <br />
      <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
