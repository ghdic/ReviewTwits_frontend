import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {defaultHeaders} from "../config/clientConfig";
import RegisterForm from "./RegisterForm";
import {auth} from "../auth/firebaseAuth";
import axios from "axios";

export const UserContext = React.createContext({});


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [registerFormOpen, setRegisterFormOpen] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, async (firebaseUser) => {

            if(firebaseUser) {
                const token = await firebaseUser.getIdToken();
                defaultHeaders.Authorization = `Bearer ${token}`;
                const requestOptions = {
                    method: "Get",
                    headers: defaultHeaders,
                }
                const res = await fetch("http://localhost:8080/user/self", requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        if(data.uid === "0") {
                            setRegisterFormOpen(true);
                        } else {
                            setUser(data)
                        }
                    })
            } else {
                delete defaultHeaders.Authorizations;
                setUser(null);
            }
        })
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {registerFormOpen ?
                (<RegisterForm setRegisterFormOpen={setRegisterFormOpen} />):(children)}
        </UserContext.Provider>
    )
}