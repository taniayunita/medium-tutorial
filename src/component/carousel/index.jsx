import React, { useState } from "react";
import "./index.scss";

const Carousel = (props) => {
  const { datas } = props;
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleSlideRight = () => {
    // if (carouselIndex === cities.length - 1) {
    //   return setCarouselIndex(0);
    // }
    return setCarouselIndex(carouselIndex + 1);
  };
  const handleSlideLeft = () => {
    // if (carouselIndex === 0) {
    //   return setCarouselIndex(cities.length - 1);
    // }
    return setCarouselIndex(carouselIndex - 1);
  };
  return (
    <div className="container-carousel">
      <div className="carousel">
        {datas.map((data, index) => (
          <div
            className="carousel-item"
            style={{ transform: `translate(-${carouselIndex * 100}%)` }}
            key={index}
          >
            <div className="item-left">
              <p className="title">{data.name}</p>
              <p className="population">Population {data.population}</p>
              <p className="description">{data.description}</p>
            </div>
            <div className="item-right">
              <img src={data.image} alt={data.name} />
            </div>
          </div>
        ))}
      </div>
      <button
        className={`btn btn-left ${carouselIndex !== 0 ? "active" : ""}`}
        onClick={handleSlideLeft}
        disabled={carouselIndex === 0}
      >
        <i class="fa-solid fa-chevron-left icon"></i>
      </button>
      <button
        className={`btn btn-right ${
          carouselIndex !== datas.length - 1 ? "active" : ""
        }`}
        onClick={handleSlideRight}
        disabled={carouselIndex === datas.length - 1}
      >
        <i class="fa-solid fa-chevron-right icon"></i>
      </button>
    </div>
  );
};

export default Carousel;
