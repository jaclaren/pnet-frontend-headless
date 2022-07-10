import React, { FunctionComponent } from "react";

import './citescroller.scss';

interface PnetWPEndpointReviewRow {
  title?: string;
  summary?: string;
}
interface ICiteScrollerProps {
  reviews: PnetWPEndpointReviewRow[];
}
const CiteScroller: FunctionComponent<ICiteScrollerProps> = (props) => {
  return (
    <div className="citescroller">
      {props.reviews.map((review) => {
        return <div className="cs-cite">{review.summary}</div>;
      })}
    </div>
  );
};

export default CiteScroller;
