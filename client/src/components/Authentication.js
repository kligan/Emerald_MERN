import React, {useState} from "react";

export const AuthenticationContext = React.createContext(null);

const Authentication = ({children}) =>{
    const [isUserLoggedIn, setUserLoggedIn] = useState(false);

    const login = () =>{
        setUserLoggedIn(true);
        console.log("Logged in");
        localStorage.setItem("login", "true");
    }

    const logout = () =>{
        setUserLoggedIn(false);
        console.log("Logged out")
        localStorage.removeItem("login");
    }

    return (
        <AuthenticationContext.Provider value={ {isUserLoggedIn, login, logout}}>
            {children}
        </AuthenticationContext.Provider>
    )
}


export default Authentication;