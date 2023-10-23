import React from "react";
import style from "./style.module.css";
import { useInput } from "../../../hooks/useInput";

export default function SearchInput() {
  const { input, handleSearch, onChangeSearch } = useInput();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className={`${style.container}`}>
      <form onSubmit={onSubmit}>
        <div className={`${style.relative}`}>
          <input
            className={`${style.input}`}
            type="text"
            placeholder="포켓몬 번호를 검색해보세요"
            value={input}
            onChange={onChangeSearch}
          />
          <img
            className={`${style.icon}`}
            src="/pokeball.png"
            alt="search-icon"
            onClick={handleSearch}
          />
        </div>
      </form>
    </div>
  );
}
