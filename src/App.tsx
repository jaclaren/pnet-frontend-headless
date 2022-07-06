import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { ReviewSuccesses } from "./components/ReviewSuccesses/ReviewSuccesses";
import { withFetchedGameData } from "./hocs/WithFetchedGameData";
import { Fragment } from "react";
import { PreviouslyUpdatedGames } from "./components/PreviouslyUpdatedGames/PreviouslyUpdatedGames";

function TopGamesFull(props:any) {
  return <div className="topgames">Top games {props.items.length}</div>;
}

function Footer() {
  return <div className="footer">Footer</div>;
}

export function FrontPage() {
  const LatestByReviews = withFetchedGameData(ReviewSuccesses, `http://dev-peliarvostelut.net/wp-json/public/game/get?itemCount=30&mode=latest-by-reviews`, `Virhe ladattaessa pelejä`)
  const WorthMention = withFetchedGameData(PreviouslyUpdatedGames, `http://dev-peliarvostelut.net/wp-json/public/game/get?itemCount=30&mode=worth-mention`, `Virhe ladattaessa pelejä`)  
  const TopGames = withFetchedGameData(TopGamesFull, `http://dev-peliarvostelut.net/wp-json/public/game/get?itemCount=30&mode=topgames`, `Virhe ladattaessa pelejä`)  

  return (
    <div className="frontpage">            
      <TopGames />
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
