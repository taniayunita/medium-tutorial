import React, { useState } from "react";
import "./index.scss";
import { cities } from "./dataCarousel.js";

const Carousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleSlideRight = () => {
    if (carouselIndex === cities.length - 1) {
      return setCarouselIndex(0);
    }
    return setCarouselIndex(carouselIndex + 1);
  };
  const handleSlideLeft = () => {
    if (carouselIndex === 0) {
      return setCarouselIndex(cities.length - 1);
    }
    return setCarouselIndex(carouselIndex - 1);
  };
  return (
    <div className="container-carousel">
      <div className="carousel">
        {cities.map((city, index) => (
          <div
            className="carousel-item"
            style={{ transform: `translate(-${carouselIndex * 100}%)` }}
            key={index}
          >
            <div className="item-left">
              <p className="title">{city.name}</p>
              <p className="population">Population {city.population}</p>
              <p className="description">{city.description}</p>
            </div>
            <div className="item-right">
              <img src={city.image} alt={city.name} />
            </div>
          </div>
        ))}
      </div>
      <button
        className={`btn btn-left ${carouselIndex !== 0 ? "active" : ""}`}
        onClick={handleSlideLeft}
        disabled={carouselIndex === 0}
      >
        left
      </button>
      <button
        className={`btn btn-right ${
          carouselIndex !== cities.length - 1 ? "active" : ""
        }`}
        onClick={handleSlideRight}
        disabled={carouselIndex === cities.length - 1}
      >
        right
      </button>
    </div>
  );
};

export default Carousel;
