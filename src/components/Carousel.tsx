import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
/*import image1 from "../images/presentation.jpg";
import image2 from "../images/mrnguyen.jpg";
import image3 from "../images/hackers.jpg";
import image4 from "../images/food.jpg";
import image5 from "../images/awards.jpg";*/


const slider = (
  <AwesomeSlider className="slider">
    <div data-src="/presentation.jpg"/>
    <div data-src="/mrnguyen.jpg"/>
    <div data-src="/hackers.jpg"/>
    <div data-src="/food.jpg"/>
    <div data-src="/awards.jpg"/>

  </AwesomeSlider>
);

export default function Carousel() {
    return(slider);
}