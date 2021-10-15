import React, {useState} from 'react';
import styled from 'styled-components';
import {Button, FloatingLabel, Form} from "react-bootstrap";
import google_icon from '../images/google_icon.png'
import facebook_icon from '../images/facebook_icon.png'
import twitter_icon from '../images/twitter_icon.png'
import {loginEmailAndPassword, loginFacebook, loginGoogle, loginTwitter} from "../auth/firebaseAuth";
import {Link} from "react-router-dom";

const LoginStyled = styled.div`
  width: 400px;
  margin: 8rem auto;
  padding: 5rem;
  background-color: white;
  box-shadow: 0 7px 25px rgb(0 0 0 / 8%);
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
  
  .register_text {
    font-weight: 600;
    text-align: right;
    margin: 10px;
  }
`

function Login() {

    const [userForm, setUserForm] = useState({
        email:'',
        password:''
    })

  return (
      <LoginStyled>
          <h3 className="login_title">Log in</h3>

          <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
          >
              <Form.Control type="email" placeholder="name@example.com" value={userForm.email} onChange={(e) => {setUserForm({...userForm, email:e.currentTarget.value})}} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" value={userForm.password} onKeyPress={(e)=>{if(e.keyCode === 13)loginEmailAndPassword(userForm.email, userForm.password)}} onChange={(e) => {setUserForm({...userForm, password:e.currentTarget.value})}} />
          </FloatingLabel>
          <Button variant="primary" size="lg" className="login_button" onClick={() => loginEmailAndPassword(userForm.email, userForm.password)}>로그인</Button>
          <div className="register_text">계정이 없으십니까?<br/> <Link to="/register">회원가입</Link>하러가기</div>
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