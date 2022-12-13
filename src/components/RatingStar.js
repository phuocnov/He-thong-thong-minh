import ReactStars from "react-rating-stars-component";
import React from 'react'
import styled from 'styled-components'
import Rating from 'react-rating'
import { useCallback, useState } from "react";

export default function RatingStar({ratingStar}) {
    const [rate,setRate] = useState(0);
    const secondExample = {
        size: 20,
        count: 5,
        color: "black",
        activeColor: "rgb(255, 215, 0)",
        value: ratingStar,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
          setRate(newValue);
        }
      };
  return (
    <>
        <ReactStars {...secondExample} />
    </>
  )
}
