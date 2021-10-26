import React from 'react';
import styled from "styled-components";

const ReviewStarStyled = styled.div`
  ul {
    display: flex;
    overflow: hidden;
    position: relative;
    list-style: none;
    font-size: 3em;
    line-height: 1;
  }

  ul, li {
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: .25em;
  }

  input {
    display: none;
  }

  label {
    display: block;
    color: transparent;
    width: 1em;
    height: 1em;
    cursor: pointer;

    &::before {
      pointer-events: none;
      position: absolute;
      left: 0;
      top: 0;
      color: #404849;
      letter-spacing: .25em;
      z-index: 1;
    }
  }

  input:checked + label::before {
    color: #F8B84E;
    z-index: 2;
  }

  label:hover::before {
    color: #F8B84E;
    z-index: 3;
    text-shadow: 0 0 .125em #F5D27C;
  }


  li:nth-child(1) label::before {
    content: '★';
  }

  li:nth-child(2) label::before {
    content: '★★';
  }

  li:nth-child(3) label::before {
    content: '★★★';
  }

  li:nth-child(4) label::before {
    content: '★★★★';
  }

  li:nth-child(5) label::before {
    content: '★★★★★';
  }

`

function ReviewStar({star, setStar}) {
  return (
    <ReviewStarStyled>
        <ul>
            <li>
                <input type="radio" id="rating-1" name="rating" checked={star===1}/>
                <label htmlFor="rating-1" onClick={()=>setStar(1)}>Rate 1 star</label>
            </li>
            <li>
                <input type="radio" id="rating-2" name="rating" checked={star===2}/>
                <label htmlFor="rating-2" onClick={()=>setStar(2)}>Rate 2 stars</label>
            </li>
            <li>
                <input type="radio" id="rating-3" name="rating" checked={star===3}/>
                <label htmlFor="rating-3" onClick={()=>setStar(3)}>Rate 3 stars</label>
            </li>
            <li>
                <input type="radio" id="rating-4" name="rating" checked={star===4}/>
                <label htmlFor="rating-4" onClick={()=>setStar(4)}>Rate 4 stars</label>
            </li>
            <li>
                <input type="radio" id="rating-5" name="rating" checked={star===5}/>
                <label htmlFor="rating-5" onClick={()=>setStar(5)}>Rate 5 stars</label>
            </li>
        </ul>
    </ReviewStarStyled>
  );
}

export default ReviewStar;