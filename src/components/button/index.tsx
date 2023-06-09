import { ReactNode } from "react";

import style from "./style.module.scss";

type Props = {
  children: ReactNode;
  color?: "blue" | "white";
  modifier?: string;
};

const Button = function ({ children, color, modifier }: Props) {
  const modifierClass = modifier ? `${modifier}` : "";

  return (
    <button
      className={`${style.button} ${modifierClass} ${
        style[`button--${color}`]
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
