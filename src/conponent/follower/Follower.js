import React from 'react';
import styled from "styled-components";
import default_user from "../../images/default_user_image.jpg";

const FollowerStyled = styled.section`
  min-height: 100vh;
  background-color: #fff;
  padding: 200px 100px;

  
  .follower_box {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 500px;
    min-width: 800px;
    padding: 20px;
    background: var(--white);
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    
    & .card_header {
      margin: 20px 0px 10px 30px;
      border-bottom: 1px solid #ebeef2;
    }
    & .follower_wrap {
      padding: 20px 40px;
      display: flex;
      justify-content: start;
      align-items: start;
      flex-wrap: wrap;
      
      
      & .follower {
        width: 200px;
        padding: 12px 10px;
        margin: 20px;
        display: flex;
        flex-direction: row;

        & .imgBx {
          position: relative;
          width: 40px;
          height: 40px;
          min-width: 40px;
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
        
        & .user_info {
          margin-left: 15px;
          
          & .user_head {
            display: flex;
            flex-display: row;
            margin-bottom: 5px;
            
            & h4 {
              font-size: 16px;
              font-weight: 500;
              line-height: 1.7em;
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
            
            .followed_btn {
              position: relative;
              padding: 3px 5px;
              color: var(--gray);
              background: rgba(0, 0, 0, 0.05);
              border-radius: 6px;
              border: none;
              margin-left: 5px;
            }
          }

          
        }
      }
    }
  }
`

function Follower() {
  return (
    <FollowerStyled>
        <div className="follower_box">
            <div className="card_header">
                <h2>Your Follower (20)</h2>
            </div>
            <div className="follower_wrap">
                <div className="follower">
                    <div className="imgBx">
                        <img src={default_user} alt=""/>
                    </div>
                    <div className="user_info">
                        <div className="user_head">
                            <h4>Marine</h4>
                            <button className="follow_btn">Follow</button>
                        </div>
                        <span>하하하</span>
                    </div>
                </div>
                <div className="follower">
                    <div className="imgBx">
                        <img src={default_user} alt=""/>
                    </div>
                    <div className="user_info">
                        <div className="user_head">
                            <h4>Marine</h4>
                            <button className="followed_btn">Followed</button>
                        </div>
                        <span>자기소개 한번해볼게요 후하하하하하하</span>
                    </div>
                </div>
                <div className="follower">
                    <div className="imgBx">
                        <img src={default_user} alt=""/>
                    </div>
                    <div className="user_info">
                        <div className="user_head">
                            <h4>Marine</h4>
                            <button className="follow_btn">Follow</button>
                        </div>
                        <span>자기소개 한번해볼게요 후하하하하하하</span>
                    </div>
                </div>
                <div className="follower">
                    <div className="imgBx">
                        <img src={default_user} alt=""/>
                    </div>
                    <div className="user_info">
                        <div className="user_head">
                            <h4>Marine</h4>
                            <button className="follow_btn">Follow</button>
                        </div>
                        <span>자기소개 한번해볼게요 후하하하하하하</span>
                    </div>
                </div>
                <div className="follower">
                    <div className="imgBx">
                        <img src={default_user} alt=""/>
                    </div>
                    <div className="user_info">
                        <div className="user_head">
                            <h4>Marine</h4>
                            <button className="follow_btn">Follow</button>
                        </div>
                        <span>자기소개 한번해볼게요 후하하하하하하</span>
                    </div>
                </div>
                <div className="follower">
                    <div className="imgBx">
                        <img src={default_user} alt=""/>
                    </div>
                    <div className="user_info">
                        <div className="user_head">
                            <h4>Marine</h4>
                            <button className="follow_btn">Follow</button>
                        </div>
                        <span>자기소개 한번해볼게요 후하하하하하하</span>
                    </div>
                </div>
                <div className="follower">
                    <div className="imgBx">
                        <img src={default_user} alt=""/>
                    </div>
                    <div className="user_info">
                        <div className="user_head">
                            <h4>Marine</h4>
                            <button className="follow_btn">Follow</button>
                        </div>
                        <span>자기소개 한번해볼게요 후하하하하하하</span>
                    </div>
                </div>
                <div className="follower">
                    <div className="imgBx">
                        <img src={default_user} alt=""/>
                    </div>
                    <div className="user_info">
                        <div className="user_head">
                            <h4>Marine</h4>
                            <button className="follow_btn">Follow</button>
                        </div>
                        <span>자기소개 한번해볼게요 후하하하하하하</span>
                    </div>
                </div>
                <div className="follower">
                    <div className="imgBx">
                        <img src={default_user} alt=""/>
                    </div>
                    <div className="user_info">
                        <div className="user_head">
                            <h4>Marine</h4>
                            <button className="follow_btn">Follow</button>
                        </div>
                        <span>자기소개 한번해볼게요 후하하하하하하</span>
                    </div>
                </div>
            </div>
        </div>
    </FollowerStyled>
  );
}

export default Follower;