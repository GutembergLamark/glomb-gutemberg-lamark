import { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";

import style from "./style.module.scss";

type Props = {
  children: ReactNode;
};

const Layout = function ({ children }: Props) {
  return (
    <>
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
