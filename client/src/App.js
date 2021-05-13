import logo from './logo.svg';
import './App.css';
import Loggedin from './components/Loggedin';
import {useState,useContext} from "react";
import ProtectedRoute from './components/Protected_routes';
import Home from './components/Home';
import {AuthenticationContext} from "./components/Authentication";
import Button from "@material-ui/core/Button";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function About() {
    return <h2>About</h2>;
}

function App() {
const {isUserLoggedIn, login, logout} = useContext(AuthenticationContext)
  return (
      <Router>
          <div>
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
              <div className="LoginBtn">
              <nav>
                  <ul>
                      <li>
                          <Link to="/contents">Contents</Link>
                          <h6>Protected Route: Press login to gain access</h6>
                      </li>
                  </ul>
              </nav>
              </div>
              <Switch>
                  <Route path="/about">
                      <About />
                  </Route>

                  <Route exact={true} path="/contents"
                         render={() => {
                             if(localStorage.getItem("login") === null) return <Home/>
                             else  return <Loggedin />
                      }}
                  />
                  <ProtectedRoute exact path="/contents" component={Loggedin} />
                  <Route path="/">
                      <Home/>
                  </Route>
              </Switch>
          </div>
      </Router>


  );
}

export default App;
