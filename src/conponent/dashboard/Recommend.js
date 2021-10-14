import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import default_user from '../../image/default_user_image.jpg'

const RecommendStyled = styled.div`
  position: relative;
  display: grid;
  min-height: 500px;
  padding: 20px;
  background: var(--white);
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  
  .imgBx {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    
    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  table tr td {
    padding: 12px 10px;
    
    & h4 {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.2em;
    }
  }

  table tr:hover {
    background: var(--blue);
    color: var(--white);
  }
  
  .follow_btn {
    position: relative;
    padding: 3px 5px;
    color: var(--white);
    background: var(--blue);
    border-radius: 6px;
    border: none;
    margin-left: 5px;
  }

  

  @media (max-width: 991px) {
    .main {
      width: 100%;
      left: 0;

      &.active {
        left: 300px;
      }
    }

    .card_box {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media(max-width: 768px) {
    
    .recent_orders {
      overflow-x: auto;
    }

    .status.inprogress {
      white-space: nowrap;
    }
  }

  @media(max-width: 480px) {
    .card_header h2 {
      font-size: 20px;
    }
  }
`

function Recommend() {
  return (
    <RecommendStyled>
        <div className="card_header">
            <h2>Recommend Follower</h2>
        </div>
        <table>
            <tr>
                <td width="60px"><div className="imgBx"><img src={default_user} alt=""/></div></td>
                <td><h4>Marine</h4><span>Korea</span><button className="follow_btn">Follow</button></td>
            </tr>
            <tr>
                <td width="60px"><div className="imgBx"><img src={default_user} alt=""/></div></td>
                <td><h4>Marine</h4><span>Korea</span><button className="follow_btn">Follow</button></td>
            </tr>
            <tr>
                <td width="60px"><div className="imgBx"><img src={default_user} alt=""/></div></td>
                <td><h4>Marine</h4><span>Korea</span><button className="follow_btn">Follow</button></td>
            </tr>
            <tr>
                <td width="60px"><div className="imgBx"><img src={default_user} alt=""/></div></td>
                <td><h4>Marine</h4><span>Korea</span><button className="follow_btn">Follow</button></td>
            </tr>
            <tr>
                <td width="60px"><div className="imgBx"><img src={default_user} alt=""/></div></td>
                <td><h4>Marine</h4><span>Korea</span><button className="follow_btn">Follow</button></td>
            </tr>
            <tr>
                <td width="60px"><div className="imgBx"><img src={default_user} alt=""/></div></td>
                <td><h4>Marine</h4><span>Korea</span><button className="follow_btn">Follow</button></td>
            </tr>
            <tr>
                <td width="60px"><div className="imgBx"><img src={default_user} alt=""/></div></td>
                <td><h4>Marine</h4><span>Korea</span><button className="follow_btn">Follow</button></td>
            </tr>
        </table>
    </RecommendStyled>
  );
}

export default Recommend;