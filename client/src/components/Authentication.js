import React, {useState} from "react";

export const AuthenticationContext = React.createContext(null);

const Authentication = ({children}) =>{
    const [isUserLoggedIn, setUserLoggedIn] = useState(localStorage.getItem("login") !== null);

    const login = () =>{
        setUserLoggedIn(true);
        localStorage.setItem("login", "true");
    }

    const logout = () =>{
        setUserLoggedIn(false);
        localStorage.removeItem("login");
    }

    return (
        <AuthenticationContext.Provider value={ {isUserLoggedIn, login, logout}}>
            {children}
        </AuthenticationContext.Provider>
    )
}


export default Authentication;