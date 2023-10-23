import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setSearch } from "../store/searchSlice";

export const useInput = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = React.useState("");

  const onChangeSearch = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === input) return;
      setInput(e.target.value);
    },
    [input]
  );

  const handleSearch = React.useCallback(() => {
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
  }, [dispatch, input, searchParams, setSearchParams]);

  React.useEffect(() => {
    const params = searchParams.get("q");

    if (!params) {
      setInput("");
      return;
    }
    setInput(params);
  }, [searchParams]);

  return { input, onChangeSearch, handleSearch };
};
