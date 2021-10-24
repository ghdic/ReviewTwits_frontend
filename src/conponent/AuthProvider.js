import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {defaultHeaders} from "../config/clientConfig";
import RegisterForm from "./RegisterForm";
import {auth} from "../auth/firebaseAuth";

export const UserContext = React.createContext({});


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [registerFormOpen, setRegisterFormOpen] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, async (firebaseUser) => {

            if(firebaseUser) {
                const token = await firebaseUser.getIdToken();
                defaultHeaders.Authorization = `Bearer ${token}`;
                const res = await fetch("http://localhost:8080/user/self", {
                    method: "GET",
                    headers: defaultHeaders,
                });
                if(res.status === 200) {
                    const user = await res.json();
                    setUser(user)
                } else if (res.status === 401) {
                    const data = await res.json();
                    if(data.code === "USER_NOT_FOUND") {
                        setRegisterFormOpen(true);
                    }
                }
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