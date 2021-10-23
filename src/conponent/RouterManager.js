import React, {useContext} from 'react';
import {Route} from "react-router-dom";
import Home from "./home/Home";
import AlreadyAuthRoute from "../auth/AlreadyAuthRoute";
import {UserContext} from "./AuthProvider";
import Login from "./Login";
import Main from "./Main";
import Register from "./Register";
import RegisterForm from "./RegisterForm";
import AuthRoute from "../auth/AuthRoute";
import Comment from "./comment/Comment";
import ProjectCreator from "./project/ProjectCreator";
import ProjectHelp from "./project/ProjectHelp";

function RouterManager() {
    const {user} = useContext(UserContext);
    const authenticated = user != null;

  return (
      <>
          <Route exact path="/" component={Main} />
          <Route exact path="/comment" component={Comment} />
          <Route exact path="/project/create" component={ProjectCreator} />
          <Route exact path="/project/help" component={ProjectHelp} />
          <Route exact path="/:key" component={Main} />
      </>
  );
}

export default RouterManager;