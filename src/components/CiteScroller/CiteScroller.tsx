import React, { FunctionComponent, useEffect, useState } from "react";
import Swiper, { Navigation, Pagination } from "swiper";

import './citescroller.scss';

Swiper.use([Navigation, Pagination])

export const entityToChar = (str:any) => { 
  const textarea = document.createElement('textarea'); 
  textarea.innerHTML = str; 
  return textarea.value; 
}


interface PnetWPEndpointReviewRow {
  title?: string;
  cite?: string;
  url?: string;
}
interface ICiteScrollerProps {
  reviews: PnetWPEndpointReviewRow[];
  index?: number;
  baseClassName?: string;
}

interface ICiteWithLinkProps {
  cite?: string | undefined;
  url: string | undefined;
}

const CiteWithLink: FunctionComponent<ICiteWithLinkProps> = (props) => {
  return (
    <div className="cite">      
      <blockquote className="game-quotebox__quote fade-in">{entityToChar(props.cite)}</blockquote>
      <a className="button" href={props.url}>Lue</a>
    </div>
  );
};

const CiteScroller: FunctionComponent<ICiteScrollerProps> = (props) => {
  // @ts-ignore
	const [swiperObject, _setSwiperObject] = useState(null) as Swiper

  useEffect(() => {
	_setSwiperObject(new Swiper('.game-quoteboxlist', {        
		navigation: {
			nextEl: ".game-quoteboxlist__nav--next",
			prevEl: ".game-quoteboxlist__nav--previous",
		  },
        pagination: {
          el : '.game-quoteboxlist__pagination'
        }
    }) )
  }, [])

  useEffect(() => {
	if(swiperObject) {		
	swiperObject.slideTo(0, 0)
	}	  		  
  }, [props.index])

  const sorted = props.reviews.sort((t1:any, t2:any) => { 
	return t2.cite.length - t1.cite.length
 	})		 

  return (
		<div className="game-quoteboxlist swiper-container">			
		<div className="game-quoteboxlist__navcontainer">
			<div className="game-quoteboxlist__nav--previous"></div>
			<div className="game-quoteboxlist__nav--next"></div>
		</div>

			<div className="game-quoteboxlist__wrapper swiper-wrapper">						
      {props.reviews.map(review => {
        return (<CiteWithLink cite={review.cite} url={review.url} />)
      })}
				
				{/* {props.quotes.map((t) => {
					return <GameQuoteBox index={props.index} {...t} />;
				})} */}
			</div>

      		<div className="game-quoteboxlist__pagination"></div>
		</div>
	);
};

CiteScroller.defaultProps = {
  baseClassName : `citescroller`
}


export default CiteScroller;
