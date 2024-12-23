import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const slider = (
  <AwesomeSlider
    className="slider"
    bullets={false} /*cssModule={AwesomeSliderStyles}*/
  >
    <div data-src="/presentation.jpg" />
    <div data-src="/mrnguyen.jpg" />
    <div data-src="/hackers.jpg" />
    <div data-src="/food.jpg" />
    <div data-src="/awards.jpg" />
  </AwesomeSlider>
);

export default function Carousel() {
  return slider;
}
