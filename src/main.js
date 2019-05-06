import React, { Component} from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

const Index = document.getElementById("app");

class Main extends Component {
    render() {
        return(
            <div>
               <h1>now will yhou work?</h1>
            </div>
        )
    }
}

ReactDOM.render(
<Main />, Index);

