import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import { useEffect, useState } from "react";

import Image from "next/image";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import style from "./style.module.scss";

type ISplideObject = {
  index: number;
};

const SliderText = function () {
  return (
    <>
      <Splide
        hasTrack={false}
        options={{
          arrows: true,
          pagination: false,
        }}
        className={style["slider-text"]}
      >
        <SplideTrack>
          <SplideSlide className={style["slider-text__slide"]}>
            <p className="paragraph paragraph--sub margin-bottom-small">
              Gratidão pela justiça alcançada
            </p>
            <div className={style.stars}>
              {Array(5)
                .fill(null)
                .map((index) => {
                  return (
                    <Image
                      key={index}
                      className={style.star}
                      src="/assets/img/svg/star.svg"
                      alt="Estrela"
                      width={20}
                      height={20}
                    />
                  );
                })}
            </div>
            <p className="paragraph">
              Agradeço por transformarem minha vida através da justiça,
              proporcionando tranquilidade e segurança na defesa dos meus
              direitos de pensão. O atendimento personalizado e a clareza nas
              informações foram excepcionais. Sua competência e comprometimento
              concretizaram meus direitos. Muito obrigada por serem verdadeiros
              agentes de justiça!
            </p>
            <h3 className="heading-quarter">Jussa Miranda</h3>
            <p className="paragraph">
              <span>Pensionista</span>
            </p>
          </SplideSlide>
          <SplideSlide className={style["slider-text__slide"]}>
            <p className="paragraph paragraph--sub margin-bottom-small">
              Gratidão pela justiça alcançada
            </p>
            <div className={style.stars}>
              {Array(5)
                .fill(null)
                .map((index) => {
                  return (
                    <Image
                      key={index}
                      className={style.star}
                      src="/assets/img/svg/star.svg"
                      alt="Estrela"
                      width={20}
                      height={20}
                    />
                  );
                })}
            </div>
            <p className="paragraph">
              Agradeço por transformarem minha vida através da justiça,
              proporcionando tranquilidade e segurança na defesa dos meus
              direitos de pensão. O atendimento personalizado e a clareza nas
              informações foram excepcionais. Sua competência e comprometimento
              concretizaram meus direitos. Muito obrigada por serem verdadeiros
              agentes de justiça!
            </p>
            <h3 className="heading-quarter">Jussa Miranda</h3>
            <p className="paragraph">
              <span>Pensionista</span>
            </p>
          </SplideSlide>
          <SplideSlide className={style["slider-text__slide"]}>
            <p className="paragraph paragraph--sub margin-bottom-small">
              Gratidão pela justiça alcançada
            </p>
            <div className={style.stars}>
              {Array(5)
                .fill(null)
                .map((index) => {
                  return (
                    <Image
                      key={index}
                      className={style.star}
                      src="/assets/img/svg/star.svg"
                      alt="Estrela"
                      width={20}
                      height={20}
                    />
                  );
                })}
            </div>
            <p className="paragraph">
              Agradeço por transformarem minha vida através da justiça,
              proporcionando tranquilidade e segurança na defesa dos meus
              direitos de pensão. O atendimento personalizado e a clareza nas
              informações foram excepcionais. Sua competência e comprometimento
              concretizaram meus direitos. Muito obrigada por serem verdadeiros
              agentes de justiça!
            </p>
            <h3 className="heading-quarter">Jussa Miranda</h3>
            <p className="paragraph">
              <span>Pensionista</span>
            </p>
          </SplideSlide>
          <SplideSlide className={style["slider-text__slide"]}>
            <p className="paragraph paragraph--sub margin-bottom-small">
              Gratidão pela justiça alcançada
            </p>
            <div className={style.stars}>
              {Array(5)
                .fill(null)
                .map((index) => {
                  return (
                    <Image
                      key={index}
                      className={style.star}
                      src="/assets/img/svg/star.svg"
                      alt="Estrela"
                      width={20}
                      height={20}
                    />
                  );
                })}
            </div>
            <p className="paragraph">
              Agradeço por transformarem minha vida através da justiça,
              proporcionando tranquilidade e segurança na defesa dos meus
              direitos de pensão. O atendimento personalizado e a clareza nas
              informações foram excepcionais. Sua competência e comprometimento
              concretizaram meus direitos. Muito obrigada por serem verdadeiros
              agentes de justiça!
            </p>
            <h3 className="heading-quarter">Jussa Miranda</h3>
            <p className="paragraph">
              <span>Pensionista</span>
            </p>
          </SplideSlide>
        </SplideTrack>

        <div className={`${style["slider-text__arrows"]} splide__arrows`}>
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
      </Splide>
    </>
  );
};

export default SliderText;
