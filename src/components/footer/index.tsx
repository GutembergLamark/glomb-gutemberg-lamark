import Image from "next/image";
import Button from "../button";

import style from "./style.module.scss";

const Footer = function () {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={`${style.footer__top} wrapper`}>
          <div>
            <h3 className="heading-tertiary">Avalie seu caso em 1 minuto</h3>
            <p className="paragraph">
              Avalie seu caso sem compromisso e descubra seus direitos.
            </p>
            <Button color="white">Quero ser atendido</Button>
          </div>
        </div>
        <div className={`${style.footer__bottom} wrapper`}>
          <div>
            <figure>
              <Image
                src="/assets/img/logo-white.png"
                alt="Logo"
                width={172}
                height={65}
              />
            </figure>
            <p className="paragraph">Inscrição OAB nº 403</p>
            <div className={style.footer__socials}>
              <Image
                src="/assets/img/svg/facebook.svg"
                alt="Rede Social"
                width={25}
                height={25}
              />
              <Image
                src="/assets/img/svg/instagram.svg"
                alt="Rede Social"
                width={25}
                height={25}
              />
              <Image
                src="/assets/img/svg/youtube.svg"
                alt="Rede Social"
                width={25}
                height={25}
              />
              <Image
                src="/assets/img/svg/linkedin.svg"
                alt="Rede Social"
                width={25}
                height={25}
              />
              <Image
                src="/assets/img/svg/email.svg"
                alt="Rede Social"
                width={25}
                height={25}
              />
            </div>
            <p className="paragraph">
              <span>Curitiba - PR</span>
              <span>R. Visconde do Rio Branco, 1488 - 19º andar</span>
              <span> Fone: 41 3223-9132</span>
              <span>CEP 80.420-210</span>
            </p>
            <p className="paragraph">
              <span>São Paulo - SP</span>
              <span>Av. Marquês de São Vicente, 446 - 2º andar</span>
              <span>CEP 01.139-000</span>
            </p>
            <p className={`${style["last-has-span"]} paragraph`}>
              <span>Rio de Janeiro - RJ</span>
              <span>R. Teófilo Otoni, 15 - sala 815</span>
              <span>CEP 22.290-080</span>
            </p>
            <p className="paragraph">Política de Privacidade</p>
            <p className="paragraph">Glomb 2022. Todos direitos reservados.</p>
            <p className="paragraph">
              Desenvolvido por <strong>Legist + Blu</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
