import ReactStars from "react-rating-stars-component";
import React from 'react'
import styled from 'styled-components'
import Rating from 'react-rating'
import { useCallback, useState } from "react";


export default function RatedStar({ratedStar,ratedNumber}) {
    const firstExample = {
        size: 20,
        value: ratedStar,
        number:ratedNumber,
        color : 'black',
        edit: false,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
      };
      
  return (
    <>  
      <div className="rated-infor">
        <ReactStars {...firstExample} /><span>{firstExample.value}</span> <span>|</span> <span>{firstExample.number}</span>
       
      </div>
        
        
    </>
  )
}
