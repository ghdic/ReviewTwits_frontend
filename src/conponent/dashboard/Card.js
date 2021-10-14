import React from 'react';
import styled from "styled-components";

const CardStyled = styled.div`
  .card {
    position: relative;
    background: var(--white);
    padding: 30px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    cursor: pointer;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    
    &:hover {
      background: var(--blue);
      
      & .numbers,
      & .cardName,
      & .iconBox {
        color: var(--white);
      }
    }
    
    & .numbers {
      position: relative;
      font-weight: 500;
      font-size: 2.5em;
      color: var(--blue);
    }
    
    & .cardName {
      color: var(--black2);
      font-size: 1.1em;
      margin-top: 5px;
    }
    
    & .iconBox {
      font-size: 3.5em;
      color: var(--black2);
    }
  }
`

function Card({number, cardName, iconName}) {
  return (
    <CardStyled>
        <div className="card">
            <div>
                <div className="numbers">{number}</div>
                <div className="cardName">{cardName}</div>
            </div>
            <div className="iconBox">
                <ion-icon name={iconName}></ion-icon>
            </div>
        </div>
    </CardStyled>
  );
}

export default Card;