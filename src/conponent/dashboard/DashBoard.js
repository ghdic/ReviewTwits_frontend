import React from 'react';
import Card from "./Card";
import styled from "styled-components";
import OrderDetails from "./OrderDetails";
import Recommend from "./Recommend";
import WaveFooter from "../WaveFooter";

const data = [
    {
        number: "1,504",
        cardName: "Daily Views",
        iconName: "eye-outline"
    },
    {
        number: "80",
        cardName: "Sales",
        iconName: "cart-outline"
    },
    {
        number: "284",
        cardName: "Reviews",
        iconName: "chatbubbles-outline"
    },
    {
        number: "30,623,000₩",
        cardName: "Monthly Income",
        iconName: "cash-outline"
    },
]

const DashBoardStyled = styled.div`
  .card_box {
    position: relative;
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
  }
  
  .card_group {
    position: relative;
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 30px;
    margin-top: 10px;
  }

  @media (max-width: 991px) {

    .card_box {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media(max-width: 768px) {
    .card_group{
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media(max-width: 480px) {
    .card_box {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

function DashBoard() {
  return (
      <DashBoardStyled>
        <div className="card_box">
            {
                data.map((item, index) => (
                    <Card number={item.number} cardName={item.cardName} iconName={item.iconName} key={index} />
                ))
            }
        </div>
          <div className="card_group">
              <OrderDetails/>
              <Recommend/>
          </div>
          <WaveFooter/>
      </DashBoardStyled>
  );
}

export default DashBoard;