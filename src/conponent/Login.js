import React from 'react';
import styled from 'styled-components';
import './Login.css'
import {Button, FloatingLabel, Form} from "react-bootstrap";
import google_icon from '../image/google_icon.png'
import facebook_icon from '../image/facebook_icon.png'
import twitter_icon from '../image/twitter_icon.png'
import {loginFacebook, loginGoogle, loginTwitter} from "../auth/firebaseAuth";

const LoginStyled = styled.div`
  width: 400px;
  margin: 8rem auto;
  padding: 5rem;
  background-color: white;
  border-radius: 2.5rem;
  
  .login_title {
    margin: 0px 1px 20px 0px;
  }
  
  .login_button {
    width: 100%;
    margin-top: 15px;
  }
  
  .sign_with {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    
    & .login_div {
      width: 110px;
      border: 1px solid black;
      height: 0px;
      margin-top: 10px;
      border: 1px solid #DBDBDB;
    }
    
    & .text {
      margin: 0 25px;
      font-width: bold;
      color: #8E8E8E;
      white-space: nowrap;
    }
  }
  
  .login_logo {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
  
  .oauth_icon {
    width: 54px;
    height: 54px;
    padding: 0;
    border: 1px solid #DBDBDB;
    border-radius: 50px;
  }
  
  .icon_image {
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }
`

function Login() {
  return (
      <LoginStyled>
          <h3 className="login_title">Log in</h3>

          <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
          >
              <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <Button variant="primary" size="lg" className="login_button">로그인</Button>
          <div className="sign_with">
              <div className="login_div"></div>
              <div className="text">Sign With</div>
              <div className="login_div"></div>
          </div>
          <div className="login_logo">
              <button className="oauth_icon" onClick={loginGoogle}><img className="icon_image" src={google_icon} alt=""/></button>
              <button className="oauth_icon" onClick={loginFacebook}><img className="icon_image" src={facebook_icon} alt=""/></button>
              <button className="oauth_icon" onClick={loginTwitter}><img className="icon_image" src={twitter_icon} alt=""/></button>
          </div>
      </LoginStyled>
  );
}

export default Login;