import React from 'react';
import styled from "styled-components";

const NotFound404Styled = styled.section`
  min-height: 100vh;
  background-color: #fff;
  padding: 200px 100px;
  
  .notfound {
    width: 70%;
    margin: 100px auto;
    
    & h2 {
      text-align: center;
      font-size: 100px;
    }
    
    & p {
      text-align: center;
      font-size: 40px;
    }
  }
`

function NotFound404() {
  return (
    <NotFound404Styled>
        <div className='notfound'>
            <h2>404 Not Found Page</h2>
            <p>올바른 페이지 URL을 접근해주세요</p>
        </div>
    </NotFound404Styled>
  );
}

export default NotFound404;