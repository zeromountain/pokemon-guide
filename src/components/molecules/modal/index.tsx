import React from "react";
import style from "./style.module.css";

interface ModalProps {
  isLoading: boolean;
}

export default function Modal({
  children,
  isLoading,
}: React.PropsWithChildren<ModalProps>) {
  return (
    <div
      style={{ display: isLoading ? "flex" : "none" }}
      className={style.modal}
    >
      <div className={style["modal-content"]}>
        <div className={style.loader}></div>
        <div className={style["modal-text"]}>Loading...</div>
        {children}
      </div>
    </div>
  );
}
