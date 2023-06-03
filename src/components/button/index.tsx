import { ReactNode } from "react";

import style from "./style.module.scss";

type Props = {
  children: ReactNode;
  modifier?: "blue" | "white";
};

const Button = function ({ children, modifier }: Props) {
  const modifierClass = modifier ? style[`button--${modifier}`] : "";

  return (
    <button className={`${style.button} ${modifierClass}`}>{children}</button>
  );
};

export default Button;
