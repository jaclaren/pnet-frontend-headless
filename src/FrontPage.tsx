import { FunctionComponent, useEffect } from "react";
import { PreviouslyUpdatedGames } from "./components/PreviouslyUpdatedGames/PreviouslyUpdatedGames";
import { ReviewSuccesses } from "./components/ReviewSuccesses/ReviewSuccesses";
import TopGames from "./components/TopGames";
import { Footer } from "./Footer";
import { withFetchedGameData } from "./hocs/WithFetchedGameData";

const LatestByReviews = withFetchedGameData(ReviewSuccesses, `http://dev-peliarvostelut.net/wp-json/public/game/get?itemCount=30&mode=latest-by-reviews`, `Virhe ladattaessa pelejä`)
const WorthMention = withFetchedGameData(PreviouslyUpdatedGames, `http://dev-peliarvostelut.net/wp-json/public/game/get?itemCount=30&mode=worth-mention`, `Virhe ladattaessa pelejä`)  
const TGames = withFetchedGameData(TopGames, `http://dev-peliarvostelut.net/wp-json/public/game/get?itemCount=30&mode=top-recent`, `Virhe ladattaessa pelejä`)  

export function FrontPage() {  
  return (
    <div className="frontpage">
      <TGames />
      <LatestByReviews />
      <WorthMention />
      <Footer />
    </div>
  );
}
