import React from "react";
import Carousel from "nuka-carousel";

export default function Slide() {
  return (
    <Carousel autoplay>
      <img src="https://picsum.photos/500/200" alt="" className="w-full" />
      <img src="https://picsum.photos/500/200" alt="" className="w-full" />
      <img src="https://picsum.photos/500/200" alt="" className="w-full" />
    </Carousel>
  );
}
