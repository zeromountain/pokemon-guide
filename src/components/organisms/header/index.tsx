import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src="/pokemon.png" alt="logo" />
      </Link>
    </header>
  );
}
