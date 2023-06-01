import Image from "next/image";
import Link from "next/link";
import style from "./style.module.scss";

const Header = function () {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <figure>
          <Image
            src="/assets/img/logo.png"
            alt="Logo Glomb"
            width={135}
            height={50}
          />
        </figure>

        <nav>
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
    </header>
  );
};

export default Header;
