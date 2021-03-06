import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return ( <
        div className = "App" >
        <
        Router >
        <
        div className = "homepage header-collapse" >
        <
        div id = "site-content" > < /div> <Navbar / > { " " } <
        Route path = "/"
        exact component = { Home } > { " " } <
        /Route>{" "} <
        /div>{" "} <
        /Router>{" "} <
        /div>
    );
}

export default App;