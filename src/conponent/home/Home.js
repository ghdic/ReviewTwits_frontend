import React, {useContext, useState} from 'react';
import {UserContext} from "../AuthProvider";
import styled from "styled-components";
import classnames from "classnames";
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import instagram from '../../images/instagram.png'
import review_category from '../../images/review_category.png'
import review_effect1 from '../../images/review_effect1.png'
import review_effect2 from '../../images/review_effect2.png'
import review_not_reward from '../../images/review_not_reward.png'
import review_import from '../../images/review_import.png'
import shopping_price from '../../images/shopping_price.png'
import review_confirm from '../../images/review_confirm.png'
import review_target from '../../images/review_target.png'
import Contact from "./Contact";
import ChoiceBox from "./ChoiceBox";
import WeirdCard from "../project/WeirdCard";
import Price from "../project/Price";
import WaveFooter from "../WaveFooter";

const HomeStyled = styled.div`
  section {
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    word-break: keep-all;
  }
  
    
  
  .full_img {
    width: 100%;
  }
`

function Home() {
    const { user }  = useContext(UserContext);


  return (
    <HomeStyled>
        <ChoiceBox />
        <section>
            <img className="full_img" src={shopping_price} alt=""/>
        </section>
        <section>
            <img className="full_img" src={review_confirm} alt=""/>
        </section>
        <section>
            <img className="full_img" src={review_target} alt=""/>
        </section>
        <Price/>
        <Contact />
        <WaveFooter/>
    </HomeStyled>
  );
}

export default Home;