import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import {AuthProvider} from "./conponent/AuthProvider";
import {BrowserRouter, Switch} from "react-router-dom";
import RouterManager from "./conponent/RouterManager";
import React from "react";

function App() {
    return (
        <BrowserRouter>

            <Switch>
                <AuthProvider>
                    <RouterManager/>
                </AuthProvider>
            </Switch>

        </BrowserRouter>
    );
}

export default App;
