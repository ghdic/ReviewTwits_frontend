import React from 'react';
import styled from "styled-components";

const WeirdCardStyled = styled.div`
    position: relative;
    width: 320px;
    height: 450px;
    margin: 30px;
    background: ${props => props.color || '#287bff'};
    border-radius: 20px;
    border-bottom-left-radius: 160px;
    border-bottom-right-radius: 160px;
    box-shadow: 0 15px 0 #fff,
    inset 0 -15px 0 rgba(255, 255, 255, 0.25),
    0 45px 0 rgba(0, 0, 0.15);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
    &::before {
      content: '';
      position: absolute;
      top: -140px;
      left: -40%;
      width: 100%;
      height: 150%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2));
      transform: rotate(35deg);
      pointer-events: none;
      filter: blur(5px);
    }

    .icon {
      position: relative;
      width: 140px;
      height: 140px;
      background: #3c2846;
      border-bottom-left-radius: 100px;
      border-bottom-right-radius: 100px;
      box-shadow: 0 10px 0 rgba(0, 0, 0, 0.1),
      inset 0 -8px 0 #fff;
      z-index: 1000;
      display: flex;
      justify-content: center;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        width: 50px;
        height: 50px;
        background: transparent;
        border-top-right-radius: 50px;
        box-shadow: 15px -15px 0 15px #3c2846;
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: -50px;
        width: 50px;
        height: 50px;
        background: transparent;
        border-top-left-radius: 50px;
        box-shadow: -15px -15px 0 15px #3c2846;
      }

      & ion-icon {
        color: #fff;
        position: relative;
        font-size: 6em;
        z-index: 10000;
        --ionicon-stroke-width: 16px;
      }
    }

    .content {
      position: absolute;
      width: 100%;
      padding: 30px;
      padding-top: 130px;
      text-align: center;

      & h2 {
        font-size: 1.75em;
        color: #fff;
        margin-top: 20px;
      }
      
      & h4 {
        font-size: 1.25em;
        color: #f4f4f4;
        text-align: left;
        margin-left: 20px;
        font-weight: 800;
      }
      
      & ul {
        list-style: none;
        margin-right: 20px;
        
        & li {
          text-align: left;
          white-space: nowrap;
        }
      }

      & p {
        color: #fff;
        line-height: 1.5em;
      }
    }

  .buy_btn {
    width: 170px;
    height: 40px;
    position: absolute;
    margin-top: 350px;
    border: none;
    border-radius: 20px;
    background: #fff;
  }
  
`

function WeirdCard({icon_name, title, price, content, color}) {
  return (
    <WeirdCardStyled color={color}>
        <div className="icon">
            <ion-icon name={icon_name}></ion-icon>
        </div>
        <div className="content">
            <h2>{title}</h2>
            <h4>{price}</h4>
            <ul>
            {
                content.map((item, index) => (
                    <li key={index}><ion-icon name="checkmark-circle-outline" style={{color: 'green'}}></ion-icon> {item}</li>
                ))
            }
            </ul>
        </div>
        <button className="buy_btn">Buy Now</button>
    </WeirdCardStyled>
  );
}

export default WeirdCard;