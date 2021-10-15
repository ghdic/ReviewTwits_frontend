import React, {useContext, useState} from 'react';
import {UserContext} from "./AuthProvider";
import styled from "styled-components";
import classnames from "classnames";
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import review_category from '../images/review_category.png'
import review_effect1 from '../images/review_effect1.png'
import review_effect2 from '../images/review_effect2.png'
import review_not_reward from '../images/review_not_reward.png'
import review_import from '../images/review_import.png'
import shopping_price from '../images/shopping_price.png'
import review_confirm from '../images/review_confirm.png'
import review_target from '../images/review_target.png'

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
  
    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${props => props.bgcolor || '#fc4a55'};
        transition: 0.5s;
    
        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 80%;
          height: 100%;
          background: rgba(0, 0, 0, 0.1);
        }
    }
    header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 20px 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      & .logo {
        position: relative;
        font-weight: 600;
        color: #fff;
        text-decoration: none;
        font-size: 2em;
      }
      
      & .navigation {
        position: relative;
        display: flex;
        
        & li {
          list-style: none;
          
          
          & a {
            display: inline-block;
            color: #fff;
            font-weight: 600;
            margin-left: 10px;
            padding: 8px 15px;
            border-radius: 40px;
            text-decoration: none;
            white-space: nowrap;
            
            &:hover {
              background: #fff;
              color: #333;
            }
          }
        }
      }
    }
    
  .content {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    & .textBox {
      position: relative;
      max-width: 600px;
      margin-left: 300px;
      
      & h2 {
        color: #fff;
        font-size: 4em;
        line-height: 1.2em;
        font-weight: 700;
      }
      
      & p {
        color: #fff;
        margin-left: 20px;
        margin-top: 20px;
      }
      
      & a {
        display: inline-block;
        margin-top: 20px;
        padding: 8px 20px;
        background: #fff;
        color: #333;
        border-radius: 40px;
        font-weight: 500;
        letter-spacing: 1px;
        text-decoration: none;
      }
    }

    & .imgBox {
      position: relative;
      z-index: 1;
      width: 700px;
      margin: 50px;
      display: flex;
      justify-content: flex-end;

      & img {
        max-width: 600px;
      }
    }
  }
  
  .thumb {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    display: flex;
    
    & li {
      list-style: none;
      display: inline-block;
      text-align: center;
      margin: 0 10px;
      cursor: pointer;
      transition: 0.5s;
      width: 100px;
      height: 70px;
      background: rgba(255, 255, 255, 0.1);
      padding: 5px;
      border: 2px solid rgba(255, 255, 255, 0.25);
      
      &.active {
        border: 2px solid rgba(255, 255, 255, 1);
      }
      
      &::before {
        position: absolute;
        top: -200px;
        left: -100px;
        content: attr(data-text);
        white-space: nowrap;
        font-size: 8em;
        color: rgba(0, 0, 0, 0.05);
        opacity: 0;
        font-weight: 700;
        pointer-events: none;
      }

      &.active::before {
        opacity: 1;
      }
      
      & img {
        max-width: 80px;
      }
    }
  }
  
  .sci {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    & li {
      list-style: none;
      
      & a {
        display: inline-block;
        margin: 5px 0;
        transform: scale(0.6);
        filter: invert(1);
      }
    }
  }
  
  @media (max-width: 991px) {
    .bg::before {
      display: none;
    }
    
    header {
      padding: 20px;
    }
    
    section {
      padding: 20px 20px 120px 20px;
    }
    
    .content {
      margin-top: 100px;
      flex-direction: column;
      
      & .textBox {
        max-width: 100%;
        margin-left: 0;
        
        & h2 {
          font-size: 2.5em;
          margin-bottom: 15px;
        }
        
        & p {
          margin-left: 0;
        }
      }
      
      & .imgBox{
        max-width: 100%;
        justify-content: center;
        
        & img {
          width: 100%;
        }
      }
    }
    
    .thumb li {
      margin: 0 3px;
      
      &::before {
        position: absolute;
        top: -150px;
        left: 0;
        font-size: 6em;
      }
    }
    
    .sci {
      background: rgba(0, 0, 0, 0.1);
      right: 0;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      padding-left: 0.3em;
      z-index: 100;
    }
  }
  
  .full_img {
    width: 100%;
  }
  
  .contact_section {
    padding: 50px;
  }

  .contact_wrapper {
    width: 100%;
    display: block;
    position: relative;
    
    margin-bottom: 50px;
  }
  
  .contact {
    margin: 0 auto;
    width: 66.66%;
    text-align: center;
    
    & h2 {
      font-weight: 800;
      font-size: 60px;
    }
    
    & p {
      padding: 20px 0;
      font-size: 17px;
      font-weight: bolder;
      color: #555;
    }
  }
  
  .line {
    border: 1px solid #e73131;
    width: 15%;
    margin: 0 auto;
  }
  
  .contact_info {
    
  }
  
  .contact_form {
    padding: 0;
    position: relative;
    top: 20px;
    margin-top: 0;
    margin-bottom: 10px;
    text-align: left;
    color: #333;
    font-size: 14px;
    line-height: 1.4em;
    
    & a {
      text-decoration: none;
      color: #666;
    }
    
    & li {
      display: block;
      padding-bottom: 30px;
      
      & svg {
        color: #666;
        float: left;
        margin-rgiht: 10px;
      }
      
      & h6 {
        font-size: 14px;
        color: #666;
        margin: 0 0 0 20px;
      }
    }
  }
  
  .contact_grid {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    column-gap: 30px;
  }
  
  .col_50 {
    width: 50%;
    float: left;
    padding: 0 15px;
  }
  
  .form_group {
    margin-bottom: 30px;
  }
  
  .form_control {
    display: block;
    width: 100%;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.43;
    color: #555;
    background: #fff;
    border: 1px solid #ccc;
    height: 35px;
    border-radius: 0;
    box-shadow: none;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  }
  
  textarea.form_control {
    min-height: 120px;
    resize: none;
    height: auto;
  }
  
  .btn_send {
    color: #e73131;
    border: 2px solid #e73131;
    padding: 2% 0%;
    font-size: 15px;
    display: block;
    width: 100%;
    position: relative;
    text-decoration: none;
    text-align: center;
  }
`

function Home() {
    const { user }  = useContext(UserContext);

    const [selectThumb, setSelectThumb] = useState('review_category');

    const title_item = {'review_category':'어떤 카테고리의 리뷰를 필요로하시나요?', 'review_effect1':'리뷰를 보고 구매하신적 있으신가요?', 'review_effect2':'리뷰는 신뢰를 줍니다', 'review_not_reward':'리뷰는 이제 하나의 문화입니다', 'review_import':'리뷰는 선택이 아닌 필수입니다'}
    const content_item = {'review_category':'reviewtwits는 다양한 형태의 맞춤형 리뷰를 제공합니다.\n홈페이지에 리뷰를 적용하고 싶으시다면 reviewtwits를 사용해보세요!\n고객님들의 경험이 더욱 풍부해질 것입니다.',
        'review_effect1':'리뷰는 소비자의 구매의향에 많은 영향을 미칩니다!\n리뷰는 사람의 마음을 움직이는 힘이 있습니다. 리뷰 시스템으로 사람들의 마음을 움직여 보세요!',
        'review_effect2':'리뷰를 통해 플랫폼 신뢰도를 올려보세요! 리뷰는 사람들의 구매력을 올리는데 도움이 됩니다.',
        'review_not_reward':'자신의 경험을 공유하는 문화가 활성화 되고 있습니다. 정보를 나눔으로써 느끼는 기쁨을 함께 나눠보세요.',
        'review_import':'리뷰가 없는 상품은 소비자들이 선택을 주저하게 합니다. ReviewTwits와 함께 리뷰를 늘려나가보세요.'}
    const image_item = {'review_category':review_category, 'review_effect1':review_effect1, 'review_effect2':review_effect2, 'review_not_reward':review_not_reward, 'review_import':review_import}
    const bgcolor_item = {'review_category':'#fc4a55', 'review_effect1':'#ffcc02', 'review_effect2':'#92ba3c', 'review_not_reward':'#fb6cb2', 'review_import':'#ffb42b'}
  return (
    <HomeStyled bgcolor={bgcolor_item[selectThumb]}>
        <section>
            <div className="bg"></div>
            <header>
                <a href="#" className="logo">ReviewTwits</a>
                <ul className="navigation">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">What&apos;s Special</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </header>
            <div className="content">
                <div className="textBox">
                    <h2>{title_item[selectThumb]}</h2>
                    <p>{content_item[selectThumb].split('\n').map((line, index) => (<span key={index}>{line}<br/></span>))}</p>
                    <a href="#">Learn More</a>
                </div>
                <div className="imgBox">
                    <img src={image_item[selectThumb]} alt=""/>
                </div>
            </div>
            <ul className="thumb">
                <li data-text="리뷰 카테고리" onClick={() => setSelectThumb('review_category')} className={classnames({'active':selectThumb === 'review_category'})}><img src={review_category} alt=""/></li>
                <li data-text="리뷰 영향력" onClick={() => setSelectThumb('review_effect1')} className={classnames({'active':selectThumb === 'review_effect1'})}><img src={review_effect1} alt=""/></li>
                <li data-text="리뷰 영향력" onClick={() => setSelectThumb('review_effect2')} className={classnames({'active':selectThumb === 'review_effect2'})}><img src={review_effect2} alt=""/></li>
                <li data-text="리뷰의 역할" onClick={() => setSelectThumb('review_not_reward')} className={classnames({'active':selectThumb === 'review_not_reward'})}><img src={review_not_reward} alt=""/></li>
                <li data-text="리뷰 경험" onClick={() => setSelectThumb('review_import')} className={classnames({'active':selectThumb === 'review_import'})}><img src={review_import} alt=""/></li>
            </ul>
            <ul className="sci">
                <li><a href="#"><img src={facebook} alt=""/></a></li>
                <li><a href="#"><img src={twitter} alt=""/></a></li>
                <li><a href="#"><img src={instagram} alt=""/></a></li>
            </ul>
        </section>
        <section>
            <img className="full_img" src={shopping_price} alt=""/>
        </section>
        <section>
            <img className="full_img" src={review_confirm} alt=""/>
        </section>
        <section>
            <img className="full_img" src={review_target} alt=""/>
        </section>
        <section className="contact_section">
            <div>
                <div className="contact_wrapper">
                    <div className="contact">
                        <h2>CONTATCT <span style={{color:'#e73131'}}>US</span></h2>
                        <div className="line"></div>
                        <p>문의나 협의가 필요하시다면 지금 바로 연락주세요. 연락에 사용하신 개인정보는 1개월 후 자동으로 파기 됩니다. </p>
                    </div>
                </div>
                <div className="contact_grid">
                <div className="contact_info">
                    <h4>CONTACT IN<span style={{color:'#e73131'}}>FO</span></h4>
                    <ul className="contact_form">
                        <li>
                            <i className="fa fa-map-marker"></i>
                            <h6><strong>Address:</strong> 충청남도 아산시 배방읍 호서로79길 20</h6>
                        </li>
                        <li>
                            <i className="fa fa-envelope"></i>
                            <h6><strong>Mail Us:</strong> <a href="#">ghdic77@gmail.com</a></h6>
                        </li>
                        <li>
                            <i className="fa fa-phone"></i>
                            <h6><strong>Phone:</strong> 010-5163-0298</h6>
                        </li>
                        <li>
                            <i className="far fa-comments"></i>
                            <h6><strong>Website:</strong> <a href="#">www.reviewtwits.com</a></h6>
                        </li>
                    </ul>
                </div>
                <div className="contact_input">
                    <form method="post" action="#">
                        <div style={{marginRight:'-15px', marginLeft:'-15px'}}>
                            <div className="col_50">
                                <div className="form_group">
                                    <input type="text" className="form_control" name="name" placeholder="Name"/>
                                </div>
                            </div>
                            <div className="col_50">
                                <div className="form_group">
                                    <input type="email" className="form_control" name="email" placeholder="Email Address"/>
                                </div>
                            </div>
                        </div>
                        <div className="form_group">
                            <input type="text" className="form_control" name="subject" placeholder="Subject"/>
                        </div>
                        <div className="form_group">
                            <textarea name="message" rows="4" className="form_control"
                                      placeholder="Enter your message"></textarea>
                        </div>
                        <a className="btn_send" href="#">Send Now</a>
                    </form>
                </div>
            </div>
            </div>
        </section>
    </HomeStyled>
  );
}

export default Home;