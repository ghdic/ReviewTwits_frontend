import React, {useContext, useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./home/Home";
import AlreadyAuthRoute from "../auth/AlreadyAuthRoute";
import {UserContext} from "./AuthProvider";
import Login from "./Login";
import Main from "./Main";
import Register from "./Register";
import RegisterForm from "./RegisterForm";
import AuthRoute from "../auth/AuthRoute";
import Test from "./comment/test";
import ProjectCreator from "./project/ProjectCreator";
import ProjectHelp from "./project/ProjectHelp";
import Logout from "./Logout";
import Twits from "./twits/Twits";
import Shopping from "./test/Shopping";
import ProjectSetting from "./project/ProjectSetting";
import Comment from "./comment/Comment";
import Product from "./Product";
import Sofa from "./product/Sofa";
import Mike from "./product/Mike";
import Camera from "./product/Camera";
import Fire from "./product/Fire";


function RouterManager() {
    const {user} = useContext(UserContext);
    let authenticated = user != null

  return (
      <>
          <Switch>
              <Route exact path="/" component={Twits} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/comment" component={Comment} />
              <Route exact path="/project/create" component={ProjectCreator} />
              <Route exact path="/project/help" component={ProjectHelp} />
              <Route exact path="/test/shopping" component={Shopping} />
              <Route exact path="/projects/:projectId" component={ProjectSetting} />
              <Route exact path="/product/sofa" component={Sofa} />
              <Route exact path="/product/mike" component={Mike} />
              <Route exact path="/product/camera" component={Camera} />
              <Route exact path="/product/fire" component={Fire} />
              <Route exact path="/:key" component={Main} />
          </Switch>
      </>
  );
}

export default RouterManager;