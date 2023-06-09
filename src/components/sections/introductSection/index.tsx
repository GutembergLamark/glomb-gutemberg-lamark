import TextBlock from "@/components/textBlock";

import style from "./style.module.scss";
import Button from "@/components/button";
import Image from "next/image";
import { MutableRefObject } from "react";

const IntroductSection = function ({
  reference,
}: {
  reference: MutableRefObject<null>;
}) {
  return (
    <section className={`${style.intro} wrapper`} ref={reference}>
      <div className={style.intro__container}>
        <TextBlock>
          <h2 className="heading-primary grid--col-1-of-2">
            DOBRE O VALOR DA SUA APOSENTADORIA
          </h2>
          <p className="paragraph grid--col-1-of-2">
            A Revisão da Vida Toda permite <strong>aumentar o valor</strong> de
            milhares de aposentadorias e pensões e, ainda cobrar uma{" "}
            <strong>indenização</strong> pelas diferenças dos últimos 5 anos.
          </p>
          <Button color="blue" modifier="grid--col-1-of-2">
            Quero ser atendido
          </Button>
          <ul className={`${style.intro__list} grid--col-1-of-2`}>
            <li>
              <figure>
                <Image
                  src="/assets/img/svg/check.svg"
                  alt="Check"
                  width={15}
                  height={10}
                />
              </figure>
              <p className="paragraph">Sem compromisso</p>
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
              <p className="paragraph">100% on-line</p>
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
              <p className="paragraph">Atendimento especializado</p>
            </li>
          </ul>
        </TextBlock>
        <figure className={style["intro__container-image"]}>
          <Image
            src="/assets/img/background-desktop.png"
            alt="Mais de mil clientes"
            width={595}
            height={650}
          />
        </figure>
      </div>
    </section>
  );
};

export default IntroductSection;
