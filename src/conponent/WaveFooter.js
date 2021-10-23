import React from 'react';
import styled from "styled-components";
import wave from '../images/wave.png';

const WaveFooterStyled = styled.section`
  
  display: flex;
  justify-content: flex-end !important;
  align-items: flex-end !important;
  min-height: 50vh !important;
  background: #fff;
  padding: 0px !important;
  
  footer {
    position: relative;
    width: 100%;
    background: #287BFF;
    min-height: 100px;
    padding: 20px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    & .social_icon, & .menu {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 0;
      flex-wrap: wrap;
      
      & li {
        list-style: none;
        
        & a {
          font-size: 2em;
          color: #fff;
          margin: 0 10px;
          display: inline-block;
          transition: 0.5s;
          
          &:hover {
            transform: translateY(-10px);
          }
        }
      }
    }
    
    & .menu li a {
      font-size: 1.2em;
      color: #fff;
      margin: 0 10px;
      display: inline-block;
      text-decoration: none;
      opacity: 0.75;
      
      &:hover {
        opacity: 1;
      }
    }
    
    & p {
      color: #fff;
      text-align: center;
      margin-top: 15px;
      margin-bottom: 10px;
      font-size: 1.1em;
    }
    
    & .wave {
      position: absolute;
      top: -100px;
      left: 0;
      width: 100%;
      height: 100px;
      background: url(${wave});
      background-size: 1000px 100px;
      
      &#wave1 {
        z-index: 1000;
        opacity: 1;
        bottom: 0;
        animation: animateWave 4s linear infinite;
      }

      &#wave2 {
        z-index: 999;
        opacity: 0.5;
        bottom: 10px;
        animation: animateWave_02 4s linear infinite;
      }

      &#wave3 {
        z-index: 1000;
        opacity: 0.2;
        bottom: 15px;
        animation: animateWave 3s linear infinite;
      }

      &#wave4 {
        z-index: 999;
        opacity: 0.7;
        bottom: 20px;
        animation: animateWave_02 3s linear infinite;
      }
      
      @keyframes animateWave {
        0% {
          background-position-x: 1000px;
        }
        100% {
          background-position-x: 0px;
        }
      }

      @keyframes animateWave_02 {
        0% {
          background-position-x: 0px;
        }
        100% {
          background-position-x: 1000px;
        }
      }
    }
  }
`

function WaveFooter() {
  return (
    <WaveFooterStyled>
        <footer>
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <ul className="social_icon">
                <li><a href=""><ion-icon name='logo-facebook'></ion-icon></a></li>
                <li><a href=""><ion-icon name='logo-twitter'></ion-icon></a></li>
                <li><a href=""><ion-icon name='logo-linkedin'></ion-icon></a></li>
                <li><a href=""><ion-icon name='logo-instagram'></ion-icon></a></li>
            </ul>
            <ul className="menu">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <p>&copy;2021 ReviewTwits | All Rights Reserved</p>
        </footer>

    </WaveFooterStyled>
  );
}

export default WaveFooter;