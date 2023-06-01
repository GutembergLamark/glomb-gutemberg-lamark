import { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";

type Props = {
  children: ReactNode;
};

const Layout = function ({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
