import React, {useState} from 'react';
import classnames from "classnames";
import review_category from "../../images/review_category.png";
import review_effect1 from "../../images/review_effect1.png";
import review_effect2 from "../../images/review_effect2.png";
import review_not_reward from "../../images/review_not_reward.png";
import review_import from "../../images/review_import.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import styled from "styled-components";

const ChoiceBoxStyled = styled.section`
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
`

function ChoiceBox() {
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
      <ChoiceBoxStyled bgcolor={bgcolor_item[selectThumb]}>
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
      </ChoiceBoxStyled>
  );
}

export default ChoiceBox;