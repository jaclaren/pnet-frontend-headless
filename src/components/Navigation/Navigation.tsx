import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  return <div className="navigation">
    <Link to="/">Etusivu</Link>
    <Link to="/koosteet">Koosteet</Link>
    <Link to="/tiedot">Tiedot</Link>
  </div>;
}
