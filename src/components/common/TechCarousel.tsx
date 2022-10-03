import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //
import { Carousel } from "react-responsive-carousel";
import { BodyText } from "src/styles/Typograph";

function TechCarousel() {
  return (
    <div>
      <BodyText className="text-primary text-center mb-4">
        veja mais sobre minha habilidade
      </BodyText>
      <div className="border border-white">
        <Carousel
          centerMode
          infiniteLoop
          centerSlidePercentage={25}
          showIndicators={false}
          showThumbs={false}
        >
          <div>
            <div className="w-14 h-14 mx-auto">
              <img src="https://via.placeholder.com/56" />
            </div>
          </div>
          <div>
            <div className="w-14 h-14 mx-auto">
              <img src="https://via.placeholder.com/56" />
            </div>
          </div>
          <div>
            <div className="w-14 h-14 mx-auto">
              <img src="https://via.placeholder.com/56" />
            </div>
          </div>
          <div>
            <div className="w-14 h-14 mx-auto">
              <img src="https://via.placeholder.com/56" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default TechCarousel;
