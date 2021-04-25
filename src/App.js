import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import BookUs from './Components/BookUs'
import Portfolio from './Components/Portfolio'
import Footer from './Components/Footer'
import Details from './Components/Details'

function App() {
    return ( <
        div className = "App" > { ' ' } <
        div className = "homepage header-collapse" > { ' ' } <
        div id = "site-content" > { ' ' } <
        Router >
        <
        Navbar / >
        <
        Route path = "/"
        exact component = { Home }
        />{' '} <
        Route path = "/portfolio"
        exact component = { Portfolio }
        />{' '} <
        Route path = "/bookus"
        exact component = { BookUs }
        />{' '} <
        Route path = "/details/:id"
        exact component = { Details }
        /> <Footer / > { ' ' } <
        /Router>{' '} <
        /div>{' '} <
        /div>{' '} <
        /div>
    )
}

export default App