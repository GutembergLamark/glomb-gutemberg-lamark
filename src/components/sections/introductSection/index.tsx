import TextBlock from "@/components/textBlock";

import style from "./style.module.scss";
import Button from "@/components/button";
import Image from "next/image";

const IntroductSection = function () {
  return (
    <section className={`${style.about} wrapper`}>
      <div className={style.about__container}>
        <TextBlock modifier="grid--col-1">
          <h2 className="heading-primary">
            DOBRE O VALOR DA SUA APOSENTADORIA
          </h2>
          <p className="paragraph">
            A Revisão da Vida Toda permite <strong>aumentar o valor</strong> de
            milhares de aposentadorias e pensões e, ainda cobrar uma{" "}
            <strong>indenização</strong> pelas diferenças dos últimos 5 anos.
          </p>
          <Button modifier="blue">Quero ser atendido</Button>
          <ul>
            <li>
              <figure>
                <Image
                  src="/assets/img/svg/check.svg"
                  alt="Check"
                  width={15}
                  height={10}
                />
              </figure>
              <p>Sem compromisso</p>
            </li>
            <li>
              <figure>
                <Image
                  src="/assets/img/svg/check.svg"
                  alt="Check"
                  width={15}
                  height={10}
                />
              </figure>
              <p>100% on-line</p>
            </li>
            <li>
              <figure>
                <Image
                  src="/assets/img/svg/check.svg"
                  alt="Check"
                  width={15}
                  height={10}
                />
              </figure>
              <p>Atendimento especializado</p>
            </li>
          </ul>
        </TextBlock>
        <figure></figure>
      </div>
    </section>
  );
};

export default IntroductSection;
