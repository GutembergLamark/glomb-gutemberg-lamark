import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import style from "./style.module.scss";
import { useState } from "react";

const Header = function () {
  const [click, setClick] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`${style.header} wrapper`}>
        <div className={style.header__container}>
          <figure className={style["header__container-image"]}>
            <Image
              src="/assets/img/logo.png"
              alt="Logo Glomb"
              width={135}
              height={50}
            />
          </figure>

          <div
            className={`${style.header__dropdown} ${
              click ? style.active : style.hidden
            }`}
          >
            <button
              className={style["header__dropdown-click"]}
              onClick={() => setClick(!click)}
            >
              <span className={style.header__hamburguer}></span>
            </button>
            <nav className={style.header__navigation}>
              <ul>
                <li>
                  <Link href="">Sobre Nós</Link>
                </li>
                <li>
                  <Link href="">Atuação</Link>
                </li>
                <li>
                  <Link href="">Equipe</Link>
                </li>
                <li>
                  <Link href="">Estrutura</Link>
                </li>
                <li>
                  <Link href="">Blog</Link>
                </li>
                <li>
                  <Link href="">Contato</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
