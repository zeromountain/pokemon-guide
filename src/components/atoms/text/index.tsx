import React from "react";
import style from "./style.module.css";

export default function Text({ children }: React.PropsWithChildren) {
  return <span className={`${style.text}`}>{children}</span>;
}
