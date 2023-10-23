import React from "react";
import { useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { setSearch } from "../../../store/searchSlice";

export default function Header() {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  const resetSearch = () => {
    searchParams.delete("q");
    setSearchParams(searchParams);
    dispatch(setSearch(""));
  };

  return (
    <header className="header">
      <Link to="/" onClick={resetSearch}>
        <img className="logo" src="/pokemon.png" alt="logo" />
      </Link>
    </header>
  );
}
