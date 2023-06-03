import { ReactNode } from "react";

import style from "./style.module.scss";

type Props = {
  children: ReactNode;
  modifier?: string;
};

const TextBlock = function ({ children, modifier }: Props) {
  const modifierClass = modifier ? style[`${modifier}`] : "";

  return (
    <article className={`${style.block} ${modifierClass}`}>{children}</article>
  );
};

export default TextBlock;
