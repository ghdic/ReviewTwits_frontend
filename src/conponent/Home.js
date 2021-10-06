import React, {useContext} from 'react';
import {UserContext} from "./AuthProvider";
import {loginFacebook, loginGoogle, logout} from "../auth/firebaseAuth";

function Home() {
    const { user }  = useContext(UserContext);
  return (
    <div>
        {user ? ( <div className='main'> <p>{user.nickname} <br/> {user.email} </p> </div> ) :
            ( <div className='main'> <p>SNS Sample</p> </div> )}
        {user ? (  <button className='signin' onClick={logout}>Sign Out</button> ) :
            (
                <div>
                <button className='signin' onClick={loginGoogle}>Sign in With Google</button>
                    <button className="signin" onClick={loginFacebook}>Sign in With Facebook</button>
                </div>
            )}
    </div>
  );
}

export default Home;