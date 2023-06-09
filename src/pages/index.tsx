import IntroductSection from "@/components/sections/introductSection";
import CardsSection from "@/components/sections/cardsSection";
import MiddleSection from "@/components/sections/middleSection";
import Image from "next/image";
import SliderImages from "@/components/sliderImages";
import SliderText from "@/components/sliderText";
import Button from "@/components/button";
import { useEffect, useRef } from "react";

export default function Home() {
  const introductRef = useRef(null);
  const cardsRef = useRef(null);
  const middleSection1Ref = useRef(null);
  const middleSection2Ref = useRef(null);
  const middleSection3Ref = useRef(null);
  const sliderImagesRef = useRef(null);
  const sliderTextRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20px",
      threshold: 0.2,
    };

    const handleIntersection = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const introductObserver = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const cardsObserver = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const middleSection1Observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const middleSection2Observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const middleSection3Observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const sliderImagesObserver = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const sliderTextObserver = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    if (introductRef.current) introductObserver.observe(introductRef.current);
    if (cardsRef.current) cardsObserver.observe(cardsRef.current);
    if (middleSection1Ref.current)
      middleSection1Observer.observe(middleSection1Ref.current);
    if (middleSection2Ref.current)
      middleSection2Observer.observe(middleSection2Ref.current);
    if (middleSection3Ref.current)
      middleSection3Observer.observe(middleSection3Ref.current);
    if (sliderImagesRef.current)
      sliderImagesObserver.observe(sliderImagesRef.current);
    if (sliderTextRef.current)
      sliderTextObserver.observe(sliderTextRef.current);

    return () => {
      introductObserver.disconnect();
      cardsObserver.disconnect();
      middleSection1Observer.disconnect();
      middleSection2Observer.disconnect();
      middleSection3Observer.disconnect();
      sliderImagesObserver.disconnect();
      sliderTextObserver.disconnect();
    };
  }, []);

  return (
    <>
      <IntroductSection reference={introductRef} />
      <CardsSection reference={cardsRef} />
      <MiddleSection reference={middleSection1Ref}>
        <figure>
          <Image
            src="/assets/img/image-section-1.jpeg"
            alt="Idosos Abraçados"
            width={327}
            height={213}
          />
        </figure>
        <div>
          <h2 className="heading-secondary">
            Você pode ter uma aposentadoria melhor
          </h2>
          <p className="paragraph">
            Em 01 de dezembro de 2022 o STF aprovou a Revisão da Vida Toda. A
            partir dessa decisão, Aposentados e Pensionistas que contribuíram
            para o INSS antes de 1994 podem revisar seus benefícios na justiça e
            aumentar o valor mensal em até 5x. Ainda, é possível pedir o
            pagamento dos valores atrasados e corrigidos dos últimos 5 anos.
          </p>
          <Button color="blue">Quero ser atendido</Button>
        </div>
      </MiddleSection>
      <MiddleSection modifier={"invert"} reference={middleSection2Ref}>
        <figure>
          <Image
            src="/assets/img/image-section-2.jpeg"
            alt="Idosos Abraçados"
            width={327}
            height={213}
          />
        </figure>
        <div>
          <h2 className="heading-secondary">
            Vantagens da Revisão da Vida Toda
          </h2>
          <p className="paragraph">
            Até dezembro de 2022, no cálculo para definir o valor das
            aposentadorias e pensões, o INSS considerava apenas as contribuições
            feitas após julho de 1994, excluindo todas as anteriores. Por esse
            motivo, o valor dos benefícios ficava, em muitos casos, mais baixo
            do que realmente deveria ser. A partir da nova decisão do STF, é
            possível considerar todas as contribuições realizadas ao longo da
            vida para recalcular o valor das Aposentadorias e Pensões. Isso pode
            refletir em um aumento de até 5 vezes no valor mensal dos
            benefícios.
          </p>
          <Button color="blue">Quero ser atendido</Button>
        </div>
      </MiddleSection>
      <MiddleSection reference={middleSection3Ref}>
        <figure>
          <Image
            src="/assets/img/image-section-3.jpeg"
            alt="Idosos Abraçados"
            width={327}
            height={213}
          />
        </figure>
        <div>
          <h2 className="heading-secondary">Quem tem direito?</h2>
          <p className="paragraph">
            A Revisão da Vida Toda se aplica aos Aposentados e Pensionistas que:
          </p>
          <ul>
            <li>
              <p className="paragraph">
                Contribuíram com valores altos antes de 07/1994 e, após essa
                data, tiveram contribuições mais baixas;
              </p>
            </li>
            <li>
              <p className="paragraph">
                Tiveram muitas contribuições antes de 07/1994 e, após essa data,
                tiveram poucas contribuições.
              </p>
            </li>
          </ul>
          <p className="paragraph paragraph--block">
            A Revisão da Vida Toda se aplica apenas aos aposentados ou
            pensionistas que estejam recebendo o benefício há{" "}
            <strong>menos de 10 anos.</strong>
          </p>
          <Button color="blue">Quero ser atendido</Button>
        </div>
      </MiddleSection>
      <MiddleSection modifier="slider" reference={sliderImagesRef}>
        <h2 className="heading-tertiary heading-tertiary--slider">
          Transformar vidas por meio da justiça é nosso propósito
        </h2>
        <p className="paragraph">
          <strong className="item">46+ anos de atuação</strong>{" "}
          <strong className="item">25.000+ clientes atendidos</strong>
        </p>
        <SliderImages />
      </MiddleSection>
      <MiddleSection modifier="heading" reference={sliderTextRef}>
        <h2 className="heading-tertiary heading-tertiary--slim">
          Atendemos <strong>100% on-line</strong> em todo o Brasil
        </h2>
        <figure>
          <Image
            src="/assets/img/gallery.jpeg"
            alt="Galeria"
            width={327}
            height={230}
          />
        </figure>
        <div>
          <h3 className="heading-tertiary margin-bottom-top">
            O que nossos clientes dizem
          </h3>
          <SliderText />
        </div>
      </MiddleSection>
    </>
  );
}
