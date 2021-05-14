import React, {useContext} from 'react';
import Button from "@material-ui/core/Button";
import {AuthenticationContext} from "../Authentication";

const Login = () => {
    const {isUserLoggedIn, login, logout} = useContext(AuthenticationContext);
    return (
            <div className="LoginBtn">
                {
                    (isUserLoggedIn ) ? (
                        <Button variant="contained" color="primary" onClick={()=>{
                            logout()
                        }}> Log Out</Button>
                    ):(
                        <Button variant="contained" color="primary" onClick={() =>{
                            login()
                        }}>Log In</Button>
                    )
                }
            </div>
    );
};

export default Login;