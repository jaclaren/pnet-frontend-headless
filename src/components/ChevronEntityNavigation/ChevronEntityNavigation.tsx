import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import ChevronIcon from "../ChevronIcon";

interface IChevronEntityNavigationProps {
  currentIndex : number;
  maxIndex : number;
  onUserClickedNextPage : Function;
  onUserClickedPreviousPage : Function;
}

export const ChevronEntityNavigation : FunctionComponent<IChevronEntityNavigationProps> = (props) => {
  return <div className="cenavigation">
      <button className="c-topgame__nav__button" onClick={() => props.onUserClickedPreviousPage()}>
        <ChevronIcon direction="left" />
      </button>
      <div className="c-topgame__nav__counter">
        <span>{props.currentIndex + 1}</span>
        <span>/</span>
        <span>{props.maxIndex}</span>
      </div>
      <button className="c-topgame__nav__button" onClick={() => props.onUserClickedNextPage()}>
        <ChevronIcon direction="right" />
      </button>        
  </div>;
}
