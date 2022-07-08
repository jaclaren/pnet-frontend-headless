import React, { useState, useEffect } from "react";
import { ChevronEntityNavigation } from "../ChevronEntityNavigation/ChevronEntityNavigation";

import ChevronIcon from "../ChevronIcon";
import GameVideo from "../GameVideo";
// import GameQuoteBox from '../GameQuoteBox/index.tsx'

interface PnetWPEndpointGameRow {
  title: string;
  platforms: any[];
  reviews: any[];
  score: number | string;
  href: string;
}

interface ITopGamesProps {
  maxItems: number;
  items: PnetWPEndpointGameRow[];
  compilationLinkText: string;
}

const TopGames = (props: ITopGamesProps) => {
  const [index, _setIndex] = React.useState(0);

  const resetIndex = () => {
    _setIndex(0);
  };

  const nextPage = () => {
    const nextIndex = index + 1;
    _setIndex(nextIndex > props.maxItems - 1 ? 0 : nextIndex);
  };

  const previousPage = () => {
    const previousIndex = index - 1;
    _setIndex(previousIndex < 0 ? props.maxItems - 1 : previousIndex);
  };

  if (props.items.length < index || props.items.length == 0) return <></>;

  return (
    <React.Fragment>
      <ChevronEntityNavigation	  	
        onUserClickedPreviousPage={previousPage}
        maxIndex={props.maxItems}
        currentIndex={index}
        onUserClickedNextPage={nextPage}
		baseClassName="cenavigation"
		classNameModifier="--size-large"
		showPagination={true}
		size="large"
      />
      <div className="c-topgame__video">
        <GameVideo />
      </div>
      <div className="c-topgame__gameinfo">
        <div
          key={"topgame-gi-title-".concat(`${index}`)}
          className="fade-in fade-in--speed1 c-topgame__title"
        >
          {props.items[index].title}
        </div>
        <div
          key={"topgame-gi-platforms-".concat(`${index}`)}
          className="fade-in fade-in--speed1 c-topgame__platforms"
        >
          {props.items[index].platforms.join(",")}
        </div>
        <div
          key={"topgame-gi-darkmeta-".concat(`${index}`)}
          className="fade-in fade-in--speed1 c-topgame__darkmeta"
        >
          {!!props.items[index].reviews ? props.items[index].reviews.length : 0}{" "}
          arvostelua
        </div>
        <div
          key={"topgame-gi-score-".concat(`${index}`)}
          className={[
            "fade-in fade-in--speed1 c-topgame__score score-tag",
            "score-tag--score-".concat(`${props.items[index].score}`),
          ].join(" ")}
        >
          {props.items[index].score}
        </div>
      </div>
      {/* <GameQuoteBox 
	  	index={index}
	  	quotes={
			props.items[index].reviews.map(t => {
				return {
					quote : t.cite,
					siteName : t.site_data.name,
					siteScore : t.score,
					url : t.url
				}
			})		  
		  }
	  /> */}
      <footer className="c-topgame__footer">
        <a
          href={props.items[index].href}
          className="c-topgame__btn-compilation button button--thin button--bright"
        >
          {props.compilationLinkText}
        </a>
      </footer>
    </React.Fragment>
  );
};

TopGames.defaultProps = {
  maxItems: 10,
  compilationLinkText: "Pelin kooste",
};

// const anim = () => {
// 	_setAnimationClass("u-fadeout");
// 	// _setAnimationComplete(false)

// 	setTimeout(() => {
// 		_setAnimationClass("u-fadein");
// 		setTimeout(() => {
// 			_setAnimationComplete(true);
// 		}, 1000);
// 	}, 0);
// };

export default TopGames;
