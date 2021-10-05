import React, {useContext} from 'react';
import {Route} from "react-router-dom";
import Home from "./Home";
import AlreadyAuthRoute from "../auth/AlreadyAuthRoute";
import {UserContext} from "./AuthProvider";
import Login from "./Login";

function RouterManager() {
    const {user} = useContext(UserContext);
    const authenticated = user != null;

  return (
      <>
          <Route exact path="/" component={Home} />
          <AlreadyAuthRoute exact path="/login" authenticated={authenticated} component={Login}  />
      </>
  );
}

export default RouterManager;