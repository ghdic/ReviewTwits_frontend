import React, {useState} from 'react';
import styled from 'styled-components';
import {Button, FloatingLabel, Form} from "react-bootstrap";
import {registerEmailAndPassword} from "../auth/firebaseAuth";
import {Link} from "react-router-dom";


const RegisterStyled = styled.div`
  width: 400px;
  margin: 8rem auto;
  padding: 5rem;
  background-color: white;
  box-shadow: 0 7px 25px rgb(0 0 0 / 8%);
  border-radius: 2.5rem;
  
  .register_title {
    margin: 0px 1px 20px 0px;
  }
  
  .register_button {
    width: 100%;
    margin-top: 15px;
  }

  .register_text {
    font-weight: 600;
    text-align: right;
    margin: 10px;
  }
`

function Register() {

    const [userForm, setUserForm] = useState({
        email:'',
        password:''
    })

    return (
        <RegisterStyled>
            <h3 className="register_title">Register</h3>

            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" value={userForm.email} onChange={(e) => {setUserForm({...userForm, email:e.currentTarget.value})}} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" value={userForm.password} onKeyPress={(e)=>{if(e.keyCode === 13)registerEmailAndPassword(userForm.email, userForm.password)}} onChange={(e) => {setUserForm({...userForm, password:e.currentTarget.value})}} />
            </FloatingLabel>
            <Button variant="primary" size="lg" className="register_button" onClick={() => registerEmailAndPassword(userForm.email, userForm.password)}>회원가입</Button>
            <div className="register_text">이미 계정이 있습니까?<br/> <Link to="/login">로그인</Link>하러가기</div>
        </RegisterStyled>
    );
}

export default Register;