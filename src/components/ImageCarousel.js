import React from "react";
import Carousel from "react-elastic-carousel";
// import ModalImages from "./ModalImages";
import { Image } from "semantic-ui-react";

export default function ImageCarousel({ screenshots }) {
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div>
      <Carousel breakpoints={breakpoints}>
        {screenshots.map((screenshot, index) => (
          <Image
            alt=""
            number={index + 1}
            key={screenshot.id}
            src={screenshot.image}
          />
        ))}
      </Carousel>
    </div>
  );
}
