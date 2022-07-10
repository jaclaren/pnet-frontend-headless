import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { ReviewSuccesses } from "./components/ReviewSuccesses/ReviewSuccesses";
import { Fragment } from "react";
import { PreviouslyUpdatedGames } from "./components/PreviouslyUpdatedGames/PreviouslyUpdatedGames";
import TopGamesOriginal from "./components/TopGames";

import './shared/styles/main.scss';

function TopGamesFull(props:any) {
  return <div className="topgames">Top games {props.items.length}</div>;
}

export function CompilationsPage() {
  return (
    <div className="frontpage">
      Koostesivu
    </div>
  );
}

export function InformationPage() {
  return (
    <div className="infopage">
      infopage
    </div>
  );
}

function App() {
  return (
    <div className="main">      
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
