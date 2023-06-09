import { MutableRefObject, ReactNode } from "react";

import TextBlock from "@/components/textBlock";

import style from "./style.module.scss";
import Button from "@/components/button";

type Props = {
  children: ReactNode;
  modifier?: string;
  reference: MutableRefObject<null>;
};

const MiddleSection = function ({ children, modifier, reference }: Props) {
  const modifierClass = modifier ? style[`middle--${modifier}`] : "";

  return (
    <section
      className={`${style.middle} wrapper ${modifierClass}`}
      ref={reference}
    >
      <div className={style.middle__container}>
        <TextBlock>{children}</TextBlock>
      </div>
    </section>
  );
};

export default MiddleSection;
