import TextBlock from "@/components/textBlock";

import style from "./style.module.scss";
import { MutableRefObject } from "react";

const CardsSection = function ({
  reference,
}: {
  reference: MutableRefObject<null>;
}) {
  return (
    <section className={`${style.cards} wrapper`} ref={reference}>
      <div className={style.cards__container}>
        <TextBlock modifier="block--card">
          <div></div>
          <h2 className="heading-tertiary">Poupe seu tempo</h2>
          <p className="paragraph">
            Avaliamos seu caso sem compromisso e indicamos a melhor forma de
            conquistar seus direitos.
          </p>
        </TextBlock>
        <TextBlock modifier="block--card">
          <div></div>
          <h2 className="heading-tertiary">Resolva sua necessidade</h2>
          <p className="paragraph">
            Nossos advogados especialistas entrarão em contato para atendê-lo e
            indicar a melhor solução.
          </p>
        </TextBlock>
        <TextBlock modifier="block--card">
          <div></div>
          <h2 className="heading-tertiary">Conquiste seus direitos</h2>
          <p className="paragraph">
            Conte com nossa experiência de 45 anos e descubra se você tem
            direito a revisão da vida toda.
          </p>
        </TextBlock>
      </div>
    </section>
  );
};

export default CardsSection;
