import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import style from "./style.module.scss";

type ISplideObject = {
  index: number;
};

const SliderImages = function () {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  const handleSlideChange = (splide: ISplideObject) => {
    setCurrentSlide(splide.index);
    console.log(splide.index);
  };

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      <Splide
        hasTrack={false}
        onMoved={handleSlideChange}
        options={{
          type: "loop",
          perPage: 1,
          arrows: true,
          perMove: 1,
          autoWidth: true,
          focus: "center",
          rewind: true,
          clones: 10,

          /* pagination: false, */
        }}
        className={style.slider}
      >
        <div className={`${style["slider__arrows"]} splide__arrows`}>
          <button className="splide__arrow splide__arrow--prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              width="40"
              height="40"
              fill="white"
            >
              <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
            </svg>
          </button>
          <button className="splide__arrow splide__arrow--next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              width="40"
              height="40"
              fill="white"
            >
              <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
            </svg>
          </button>
        </div>
        <SplideTrack>
          <SplideSlide
            className={`${style["slider__slide"]} ${
              currentSlide !== 0 ? style["slider__slide--inactive"] : ""
            }`}
          >
            {currentSlide !== 0 ? (
              <Image
                className={`${style.imageWrapper} ${
                  loaded ? style.loaded : ""
                }`}
                src="/assets/img/slide-1.jpg"
                alt="Slide 1"
                height={300}
                width={60}
                onLoad={handleImageLoad}
              />
            ) : (
              <Image
                className={`${style.imageWrapper} ${
                  loaded ? style.loaded : ""
                }`}
                src="/assets/img/slide-1.jpg"
                alt="Slide 1"
                height={300}
                width={200}
                onLoad={handleImageLoad}
              />
            )}
          </SplideSlide>
          <SplideSlide
            className={`${style["slider__slide"]} ${
              currentSlide !== 1 ? style["slider__slide--inactive"] : ""
            }`}
          >
            <Image
              className={`${style.imageWrapper} ${loaded ? style.loaded : ""}`}
              src="/assets/img/slide-2.jpg"
              alt="Slide 1"
              height={300}
              width={currentSlide !== 1 ? 60 : 200}
              onLoad={handleImageLoad}
            />
          </SplideSlide>
          <SplideSlide
            className={`${style["slider__slide"]} ${
              currentSlide !== 2 ? style["slider__slide--inactive"] : ""
            }`}
          >
            <Image
              className={`${style.imageWrapper} ${loaded ? style.loaded : ""}`}
              src="/assets/img/slide-3.jpg"
              alt="Slide 1"
              height={300}
              width={currentSlide !== 2 ? 60 : 200}
              onLoad={handleImageLoad}
            />
          </SplideSlide>
          <SplideSlide
            className={`${style["slider__slide"]} ${
              currentSlide !== 3 ? style["slider__slide--inactive"] : ""
            }`}
          >
            <Image
              className={`${style.imageWrapper} ${loaded ? style.loaded : ""}`}
              src="/assets/img/slide-4.jpg"
              alt="Slide 1"
              height={300}
              width={currentSlide !== 3 ? 60 : 200}
              onLoad={handleImageLoad}
            />
          </SplideSlide>
          <SplideSlide
            className={`${style["slider__slide"]} ${
              currentSlide !== 4 ? style["slider__slide--inactive"] : ""
            }`}
          >
            <Image
              className={`${style.imageWrapper} ${loaded ? style.loaded : ""}`}
              src="/assets/img/slide-5.jpg"
              alt="Slide 1"
              height={300}
              width={currentSlide !== 4 ? 60 : 200}
              onLoad={handleImageLoad}
            />
          </SplideSlide>
          <SplideSlide
            className={`${style["slider__slide"]} ${
              currentSlide !== 5 ? style["slider__slide--inactive"] : ""
            }`}
          >
            <Image
              className={`${style.imageWrapper} ${loaded ? style.loaded : ""}`}
              src="/assets/img/slide-6.jpg"
              alt="Slide 1"
              height={300}
              width={currentSlide !== 5 ? 60 : 200}
              onLoad={handleImageLoad}
            />
          </SplideSlide>
          <SplideSlide
            className={`${style["slider__slide"]} ${
              currentSlide !== 6 ? style["slider__slide--inactive"] : ""
            }`}
          >
            <Image
              className={`${style.imageWrapper} ${loaded ? style.loaded : ""}`}
              src="/assets/img/slide-7.jpg"
              alt="Slide 1"
              height={300}
              width={currentSlide !== 6 ? 60 : 200}
              onLoad={handleImageLoad}
            />
          </SplideSlide>
          <SplideSlide
            className={`${style["slider__slide"]} ${
              currentSlide !== 7 ? style["slider__slide--inactive"] : ""
            }`}
          >
            <Image
              className={`${style.imageWrapper} ${loaded ? style.loaded : ""}`}
              src="/assets/img/slide-8.jpg"
              alt="Slide 1"
              height={300}
              width={currentSlide !== 7 ? 60 : 200}
              onLoad={handleImageLoad}
            />
          </SplideSlide>
          <SplideSlide
            className={`${style["slider__slide"]} ${
              currentSlide !== 8 ? style["slider__slide--inactive"] : ""
            }`}
          >
            <Image
              className={`${style.imageWrapper} ${loaded ? style.loaded : ""}`}
              src="/assets/img/slide-9.jpg"
              alt="Slide 1"
              height={300}
              width={currentSlide !== 8 ? 60 : 200}
              onLoad={handleImageLoad}
            />
          </SplideSlide>
          <SplideSlide
            className={`${style["slider__slide"]} ${
              currentSlide !== 9 ? style["slider__slide--inactive"] : ""
            }`}
          >
            <Image
              className={`${style.imageWrapper} ${loaded ? style.loaded : ""}`}
              src="/assets/img/slide-10.jpg"
              alt="Slide 1"
              height={300}
              width={currentSlide !== 9 ? 60 : 200}
              onLoad={handleImageLoad}
            />
          </SplideSlide>
          <SplideSlide
            className={`${style["slider__slide"]} ${
              currentSlide !== 10 ? style["slider__slide--inactive"] : ""
            }`}
          >
            <Image
              className={`${style.imageWrapper} ${loaded ? style.loaded : ""}`}
              src="/assets/img/slide-11.jpg"
              alt="Slide 1"
              height={300}
              width={currentSlide !== 10 ? 60 : 200}
              onLoad={handleImageLoad}
            />
          </SplideSlide>
          <SplideSlide
            className={`${style["slider__slide"]} ${
              currentSlide !== 11 ? style["slider__slide--inactive"] : ""
            }`}
          >
            <Image
              className={`${style.imageWrapper} ${loaded ? style.loaded : ""}`}
              src="/assets/img/slide-12.jpg"
              alt="Slide 1"
              height={300}
              width={currentSlide !== 11 ? 60 : 200}
              onLoad={handleImageLoad}
            />
          </SplideSlide>
          <SplideSlide
            className={`${style["slider__slide"]} ${
              currentSlide !== 12 ? style["slider__slide--inactive"] : ""
            }`}
          >
            <Image
              className={`${style.imageWrapper} ${loaded ? style.loaded : ""}`}
              src="/assets/img/slide-13.jpg"
              alt="Slide 1"
              height={300}
              width={currentSlide !== 12 ? 60 : 200}
              onLoad={handleImageLoad}
            />
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </>
  );
};

export default SliderImages;
