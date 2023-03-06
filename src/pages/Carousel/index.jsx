import React from "react";
import Carousel from "../../component/carousel/index";
import { cities } from "./dataCarousel.js";

const Index = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Carousel Component</h1>
      <Carousel datas={cities} />
      <div className="mt-[4rem]">
        <p className="text-2xl font-bold mb-[2rem]">
          Steps to create carousel or slider like above
        </p>
        <ul>
          <li> create 3 div like this</li>
        </ul>
      </div>
    </>
  );
};

export default Index;
