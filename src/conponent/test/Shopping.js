import React, {useEffect} from 'react';
import styled from "@emotion/styled";

const ShoppingStyled = styled.section`
  width: 100vw;
  height: 100vh;
  
  #test {
    display: flex;
    width: 100%; height: 100%; flex-direction: column; background-color: blue; overflow: hidden;
    
    & iframe {
      flex-grow: 1; border: none; margin: 0; padding: 0;
    }
  }
`

function Shopping() {
    useEffect(() => {

        const script = document.createElement('script')
        script.src = '/js/test.js';
        script.async = true;
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script);
        }
    }, [])

  return (
    <ShoppingStyled>
        <div id="test">

        </div>
        <h1>Shopping</h1>
    </ShoppingStyled>
  );
}

export default Shopping;