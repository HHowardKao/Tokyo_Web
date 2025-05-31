import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  margin-bottom: 24px;
  .slick-slide {
    text-align: center;
    height: 400px;
    line-height: 400px;
    background: #364d79;
    overflow: hidden;
  }

  .carousel-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

const ImageCarousel: React.FC = () => {
  const images = [
    "/images/tokyo1.jpg",
    "/images/tokyo2.jpg",
    "/images/tokyo3.jpg",
    "/images/tokyo4.jpg",
    "/images/tokyo5.jpg",
  ];

  return (
    <CarouselWrapper>
      <Carousel autoplay>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Tokyo Scene ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

export default ImageCarousel;
