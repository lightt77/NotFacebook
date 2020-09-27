import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
    render() {
        return <div className="App">
            <Router>
                <Switch>
                    <Route path="/login" exact><Login/></Route>
                    <Route path="/dashboard" exact><Dashboard/></Route>
                    <Route path="" exact><Login/></Route>
                </Switch>
            </Router>
        </div>;
    }
}

export default App;
