import React from 'react';
import styled from 'styled-components';
import './Login.css'
import {Button, FloatingLabel, Form} from "react-bootstrap";

const LoginStyled = styled.form`
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
      </LoginStyled>
  );
}

export default Login;