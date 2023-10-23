import React from "react";
import style from "./style.module.css";

export default function SubTitle({ children }: React.PropsWithChildren) {
  return <p className={`${style.subtitle}`}>{children}</p>;
}
