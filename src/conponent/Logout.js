import React, {useContext, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {logout} from "../auth/firebaseAuth";
import {UserContext} from "./AuthProvider";

function Logout() {
    const history = useHistory()
    const {setUser} = useContext(UserContext);

    useEffect(() => {
        logout()
        setUser(null)
        history.push('/home')
    }, [])
  return (
    <div>

    </div>
  );
}

export default Logout;