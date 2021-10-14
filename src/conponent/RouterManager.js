import React, {useContext} from 'react';
import {Route} from "react-router-dom";
import Home from "./Home";
import AlreadyAuthRoute from "../auth/AlreadyAuthRoute";
import {UserContext} from "./AuthProvider";
import Login from "./Login";
import Main from "./Main";
import Register from "./Register";
import RegisterForm from "./RegisterForm";
import AuthRoute from "../auth/AuthRoute";
import Comment from "./comment/Comment";

function RouterManager() {
    const {user} = useContext(UserContext);
    console.log(user)
    const authenticated = user != null;

  return (
      <>
          <Route exact path="/" component={Main} />
          <AlreadyAuthRoute exact path="/login" authenticated={authenticated} component={Login}  />
          <Route exact path="/comment" component={Comment} />
      </>
  );
}

export default RouterManager;