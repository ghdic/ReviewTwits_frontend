import React, {useContext, useState} from "react";
import { UserContext } from "./AuthProvider";
import { defaultHeaders } from "../config/clientConfig";
import '../index.css';
import styled from "styled-components";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import {storage} from "../auth/firebaseAuth";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import default_user from '../images/default_user_image.jpg'

const RegisterFormStyled = styled.div`
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
  
  .user_profile {
    width: 240px;
    height: 240px;
  }
  
  .form-label {
    display: block;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }
  
  .gender {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
  }

  input[type='radio'] {
    height: 0;
    width: 0;
    position: absolute;
    left: -9999px;
  }

  input[type='radio'] + label {
    width: 50%;
    margin: 0.5rem 0;
    padding: 0.75rem 1.5rem;
    position: relative;
    display: inline-block;
    border: solid 1px #dddddd;
    background-color: #ffffff;
    line-height: 140%;
    text-align: center;
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
    transition: border-color 0.15s ease-out, color 0.25s ease-out, background-color 0.15s ease-out, box-shadow 0.15s ease-out;
    cursor: pointer;
  }

  input[type='radio']:checked + label {
    background-color: #0C6EFD;
    color: #fff;
    box-shadow: 0 0 10px rgba(102, 179, 251, 0.5);
    border-color: #0C6EFD;
    z-index: 1;
  }
`

const RegisterForm =  ({ setRegisterFormOpen }) => {
    const { setUser } = useContext(UserContext);
    const [userForm, setUserForm] = useState({
        nickname:'',
        profileImage:'',
        birthday:'',
        age:'',
        gender:''
    })

    let upload_image = (e) => {
        let image = e.target.files[0];
        if(image === null || image === undefined)
            return;
        let uploadTask = ref(storage ,"profile/" + image.name);

        uploadBytes(uploadTask, image).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setUserForm({...userForm, profileImage: url})
            })
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res =  await fetch("http://localhost:8080/user", {
            method: "POST",
            headers: defaultHeaders,
            body: JSON.stringify({
                nickname: userForm.nickname,
                profileImage: userForm.profileImage,
                birthday: userForm.birthday,
                age: userForm.age,
                gender: userForm.gender
            }),
        });
        if(res.status != 200) {
            alert("error resposne from server")
            return
        }
        const data = res.json()
        setRegisterFormOpen(false);
        setUser(data);
    };

    return (
        <RegisterFormStyled>
            <h3 className="register_title">Add Your Info</h3>

            <FloatingLabel
                controlId="floatingInput"
                label="닉네임"
                className="mb-3"
            >
                <Form.Control type="text" autocomplete="off" placeholder="사용할 닉네임을 입력해주세요"  value={userForm.nickname} onChange={(e) => {setUserForm({...userForm, nickname:e.currentTarget.value})}} />
            </FloatingLabel>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>프로필 이미지</Form.Label>
                <img src={userForm.profileImage == '' ? default_user: userForm.profileImage} className="user_profile" alt="profile"/>
                <Form.Control type="file" onChange={upload_image} accept="image/png, image/jpeg, image/gif" />
            </Form.Group>
            <FloatingLabel
                controlId="floatingInput"
                label="생일"
                className="mb-3"
            >
                <Form.Control type="date" value={userForm.birthday} onChange={(e) => {setUserForm({...userForm, birthday:e.currentTarget.value})}} />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="나이"
                className="mb-3"
            >
                <Form.Control type="text" autocomplete="off" placeholder="나이를 입력해주세요" value={userForm.age} onChange={(e) => {setUserForm({...userForm, age:e.currentTarget.value})}} />
            </FloatingLabel>
            <Form.Group controlId="formgender" className="mb-3">
                <Form.Label>성별</Form.Label>
                <div className="gender">
                    <input type="radio" id="boy" name="gender" onClick={(e) => {setUserForm({...userForm, gender:e.currentTarget.value})}} value="1"/>
                    <label htmlFor="boy">남자</label>
                    <input type="radio" id="girl" name="gender" onClick={(e) => {setUserForm({...userForm, gender:e.currentTarget.value})}} value="2"/>
                    <label htmlFor="girl">여자</label>
                </div>
            </Form.Group>

            <Button variant="primary" size="lg" className="register_button" onClick={handleSubmit}>정보 등록</Button>

        </RegisterFormStyled>

    );
}

export default RegisterForm;