import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import dashboard_icon from '../images/dashboard_icon.png'
import project_icon from '../images/project_icon.png'
import classnames from "classnames";
import {logout} from "../auth/firebaseAuth";

const NavigatorStyled = styled.div`
  position: fixed;
  width: 300px;
  top: 0;
  left: 0;
  height: 100%;
  background: var(--blue);
  border-left: 10px solid var(--blue);
  transition: 0.5s;
  overflow: hidden;
  
  &.active {
    width: 80px;
  }

  .img_icon img {
    width: 60px;
    padding: 15px;
  }
  
  ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0;
    
    & li {
      position: relative;
      width: 100%;
      list-style: none;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      
      &.active {
        background: var(--blue2)
      }
      
      & a {
        position: relative;
        display: block;
        width: 100%;
        display: flex;
        text-decoration: none;
        color: var(--white);
        
        .icon {
          position: relative;
          display: block;
          min-width: 60px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          font-size: 1.75em;
        }
        
        .title {
          position: relative;
          display: block;
          padding: 0 10px;
          height: 60px;
          line-height: 60px;
          text-align: start;
          white-space: nowrap;
        }
      }
      
      //&:hover a::before {
      //    content: '';
      //    position: absolute;
      //    right: 0;
      //    top: -50px;
      //    width: 50px;
      //    height: 50px;
      //    background: transparent;
      //    border-radius: 50px;
      //    box-shadow: 35px 35px 0 10px var(--blue2);
      //    pointer-events: none;
      //}
      //
      //&:hover a::after {
      //  content: '';
      //  position: absolute;
      //  right: 0;
      //  bottom: -50px;
      //  width: 50px;
      //  height: 50px;
      //  background: transparent;
      //  border-radius: 50px;
      //  box-shadow: 35px -35px 0 10px var(--blue2);
      //  pointer-events: none;
      //}
      
      &:nth-child(1) {
        margin-bottom: 40px;
        pointer-events: none;
      }
      
      &:hover {
        background: var(--blue2)
      }
    }
  }

  @media (max-width: 991px) {

      left: -300px;
    
      &.active {
        width: 300px;
        left: 0;
      }
  }

  @media(max-width: 480px) {
      width: 100%;
      left: -100%;
      z-index: 1000;
    
      &.active {
        width: 100%;
        left: 0;
      }
  }
`


function Navigator({menuActive, menu, setMenu}) {
  return (
    <NavigatorStyled className={classnames({active:menuActive})}>
        <ul>
            <li>
                <Link to="#">
                    <span className="icon"><ion-icon name="logo-twitter"></ion-icon></span>
                    <span className="title">ReviewTwits</span>
                </Link>
            </li>
            <li className={classnames({active: menu === 'Home'})} onClick={() => setMenu('Home')}>
                <Link to="#">
                    <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                    <span className="title">Home</span>
                </Link>
            </li>
            <li className={classnames({active: menu === 'Dashboard'})} onClick={() => setMenu('Dashboard')}>
                <Link to="#">
                    <span className="icon"><i className="img_icon"><img src={dashboard_icon} alt=""/></i></span>
                    <span className="title">Dashboard</span>
                </Link>
            </li>
            <li className={classnames({active: menu === 'Follower'})} onClick={() => setMenu('Follower')}>
                <Link to="#">
                    <span className="icon"><ion-icon name="people-outline"></ion-icon></span>
                    <span className="title">Follower</span>
                </Link>
            </li>
            <li className={classnames({active: menu === 'Project'})} onClick={() => setMenu('Project')}>
                <Link to="#">
                    <span className="icon"><i className="img_icon"><img src={project_icon} alt=""/></i></span>
                    <span className="title">Project</span>
                </Link>
            </li>
            <li className={classnames({active: menu === 'Setting'})} onClick={() => setMenu('Setting')}>
                <Link to="#">
                    <span className="icon"><ion-icon name="settings-outline"></ion-icon></span>
                    <span className="title">Setting</span>
                </Link>
            </li>
            <li className={classnames({active: menu === 'Sign In'})} onClick={() => setMenu('Sign In')}>
                <Link to="#">
                    <span className="icon"><ion-icon name="log-in-outline"></ion-icon></span>
                    <span className="title">Sign In</span>
                </Link>
            </li>
            <li className={classnames({active: menu === 'Sign Out'})} onClick={() => setMenu('Sign Out')}>
                <Link to="#">
                    <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                    <span className="title" onClick={logout}>Sign Out</span>
                </Link>
            </li>
        </ul>
    </NavigatorStyled>
  );
}

export default Navigator;