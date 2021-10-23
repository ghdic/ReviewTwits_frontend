import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import classnames from "classnames";

const HelpCardStyled = styled.div`
    position: relative;
    width: 300px;
    padding: 20px;
    margin: 20px;
    background-color: #3f3f3f;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      border: 20px solid transparent;
      border-top: 20px solid #17e78c;
      border-right: 20px solid #17e78c;
    }

    &.active::before {
      border-top: 20px solid #ff3b7e;
      border-right: 20px solid #ff3b7e;
    }

    & .icon {
      margin-bottom: 10px;

      & img {
        max-width: 90px;
        filter: invert(85%) sepia(27%) saturate(7295%) hue-rotate(99deg) brightness(106%) contrast(82%);
      }

    }
  
    &.active .icon img {
      filter: invert(41%) sepia(48%) saturate(4770%) hue-rotate(317deg) brightness(101%) contrast(103%);
    }

    & .content {
      position: relative;
      height: 215px;
      overflow: hidden;

      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background: linear-gradient(transparent, #3f3f3f);
      }

      & h3 {
        color: #fff;
        font-size: 1.4em;
        font-weight: 600;
        margin-bottom: 10px;
      }

      & p {
        font-weight: 300;
        color: #ccc;
      }
      
      & a {
        color: #fff;
      }
    }

    &.active .content {
      height: auto;
      
      &:before {
        height: 0;
      }
    }

    & .more {
      position: relative;
      width: 50%;
      padding: 10px;
      background: #17e78c;
      margin-top: 15px;
      display: inline-block;
      cursor: pointer;
      text-transform: uppercase;
      color: #383838;
      font-weight: 500;
      letter-spacing: 2px;
      font-size: 14px;
      border: none;
      border-radius: 20px;
    }

    &.active .more {
      background: #ff3b7e;
    }
`

function HelpCard({icon, title, content, link, link_content}) {
    const [open, setOpen] = useState(false)

  return (
      <HelpCardStyled className={classnames({'active':open === true})}>
          <div className="icon">
              <img src={icon} alt=""/>
          </div>
          <div className="content">
              <h3>{title}</h3>
              <p>{content}</p>
              <Link to={link}>{link_content}</Link>
          </div>
          <button className="more" onClick={() => setOpen(!open)}>more</button>
      </HelpCardStyled>
  );
}

export default HelpCard;