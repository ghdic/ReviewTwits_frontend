import React, {useContext, useEffect} from 'react';
import Header from "./Header";
import MainContent from "./MainContent";
import {UserContext} from "../AuthProvider";
import {useHistory} from "react-router-dom";

function Twits() {
    const {user} = useContext(UserContext);
    const authenticated = user != null;
    console.log(user)
  return (
    <div>
        {
            authenticated ? <div><Header/>
                <MainContent/></div>:null
        }
    </div>
  );
}

export default Twits;