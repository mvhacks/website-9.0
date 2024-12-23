import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ImageCarousel() {
  const images = [
    { src: "/presentation.jpg", alt: "Presentation" },
    { src: "/mrnguyen.jpg", alt: "Mr. Nguyen" },
    { src: "/hackers.jpg", alt: "Hackers" },
    { src: "/food.jpg", alt: "Food" },
    { src: "/awards.jpg", alt: "Awards" },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        arrows
        showDots={false}
        swipeable
        draggable
        containerClass="carousel-container"
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              boxSizing: "border-box",
              textAlign: "center",
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
