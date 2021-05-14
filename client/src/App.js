import './App.css';
import Articles from './components/Articles';
import ProtectedRoute from './components/Protected_routes';
import React, {useContext} from "react";
import {AuthenticationContext} from "./components/Authentication";
import Home from './components/HomePage/Home';
import Login from "./components/HomePage/Login";
import Content from "./components/HomePage/Content";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    useContext(AuthenticationContext);
  return (
      <Router>
          <Login />
         <Content />
              <Switch>
                  <Route exact={true} path="/contents"
                         render={() => {
                             if(localStorage.getItem("login") === null) return <Home/>
                             else return <Articles />
                      }}
                  />
                  <ProtectedRoute exact path="/contents" component={Articles} />
                  <Route path="/">
                      <Home/>
                  </Route>
              </Switch>
      </Router>
  );
}

export default App;
