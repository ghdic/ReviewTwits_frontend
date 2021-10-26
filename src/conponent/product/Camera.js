import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import {UserContext} from "../AuthProvider";
import {defaultHeaders} from "../../config/clientConfig";
import camera from '../../images/코닥필름카메라.png'

const MyStyled = styled.div`
  display: flex;
  flex-direction: column;
  
  .my_img {
    width: 800px;
  }
  
  .my_btn {
    width: 800px;
    border-radius: 50px;
    background-color: var(--blue);
    font-size: 50px;
  }
`

function Camera() {
    const {user} = useContext(UserContext);

    useEffect(() => {

        const script = document.createElement('script')
        script.src = '/js/test.js';
        script.async = true;
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script);
        }
    }, [])

    const createReport = () => {
        let payload = {
            domainUrl: window.location.pathname,
            projectId: '127ic28bspxxchz1jdqr',
            uid: user.uid,
            goodsName: "카메라",
            price: 153000,
            payment: "Paid",
            status: "pending"
        }

        const requestOptions = {
            method: "POST",
            headers: defaultHeaders,
            body: JSON.stringify(payload)
        }

        fetch("http://localhost:8080/order", requestOptions)
            .then(response => response.json())
            .then(data => {
                alert(data.toString())
            })
            .catch(error => {

            })
    }

    return (
        <MyStyled>
            <img className="my_img" src={camera} alt=""/>
            <button className="my_btn" onClick={createReport}>구매하기</button>
            <div id="test">

            </div>
        </MyStyled>
    );
}

export default Camera;