import React, { Component} from "react"
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from "./header"
import Home from "../pages/Home"
// import TodoStore from "./components/TodoStore"

class Main extends Component {
    render() {
        return(
            <Router>
                <Header />
                <Switch>
                   <h1>wowo it can work</h1>
                </Switch>
            </Router>
        )
    }
}

export default Main;

