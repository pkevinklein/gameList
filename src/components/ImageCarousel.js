import React from "react";
import Carousel from "react-elastic-carousel";
import ModalImages from "./ModalImages";

export default function ImageCarousel({ screenshots }) {
  return (
    <div>
      <Carousel>
        <ModalImages screenshots={screenshots} />
      </Carousel>
    </div>
  );
}
