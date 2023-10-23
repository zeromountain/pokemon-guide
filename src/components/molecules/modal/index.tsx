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
        <img
          src="/pikachu-loading.gif"
          alt="loading"
          width={300}
          height={300}
        />
        <div className={style["modal-text"]}>{children}</div>
      </div>
    </div>
  );
}
