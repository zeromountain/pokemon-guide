import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src="/pokemon.png" alt="logo" width={500} height={200} />
      </Link>
    </header>
  );
}
