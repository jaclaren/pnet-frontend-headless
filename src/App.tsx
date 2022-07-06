import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { ReviewSuccesses } from "./components/ReviewSuccesses/ReviewSuccesses";
import { withFetchedGameData } from "./hocs/WithFetchedGameData";
import { Fragment } from "react";

function TopGamesFull() {
  return <div className="topgames">Top games</div>;
}

function PreviouslyUpdatedGames(props:any) {
  return <div className="pugames">Previously updated games {props.items.length}</div>;
}

function Footer() {
  return <div className="footer">Footer</div>;
}

export function FrontPage() {
  const LatestByReviews = withFetchedGameData(ReviewSuccesses, `http://dev-peliarvostelut.net/wp-json/public/game/get?itemCount=30&mode=latest-by-reviews`)
  const WorthMention = withFetchedGameData(PreviouslyUpdatedGames, `http://dev-peliarvostelut.net/wp-json/public/game/get?itemCount=30&mode=worth-mention`)  

  return (
    <div className="frontpage">            
      <TopGamesFull />
      <LatestByReviews />
      <WorthMention />      
      <Footer />      
    </div>
  );
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
