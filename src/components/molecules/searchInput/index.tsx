import React from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../store/searchSlice";

export default function SearchInput() {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === input) return;
    setInput(e.target.value);
  };

  const handleSearch = () => {
    if (isNaN(Number(input))) {
      alert("숫자만 입력해주세요");
      return;
    }
    alert(input);
    dispatch(setSearch(input));
  };

  return (
    <div className={`${style.container}`}>
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
    </div>
  );
}
