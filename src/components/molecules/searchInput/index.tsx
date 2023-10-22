import React from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../store/searchSlice";
import { useSearchParams } from "react-router-dom";

export default function SearchInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = React.useState(searchParams.get("q") || "");
  const dispatch = useDispatch();

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === input) return;
    setInput(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  const handleSearch = () => {
    if (input.trim() === "") {
      searchParams.delete("q");
      setSearchParams(searchParams);
      dispatch(setSearch(""));
      return;
    }
    if (isNaN(Number(input))) {
      alert("숫자만 입력해주세요");
      return;
    } else {
      searchParams.set("q", input);
      setSearchParams(searchParams);
      dispatch(setSearch(input));
    }
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
