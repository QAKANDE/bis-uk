import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import BookUs from './Components/BookUs';

function App() {
    return ( <
        div className = "App" > { ' ' } { ' ' } <
        div className = "homepage header-collapse" > { ' ' } { ' ' } <
        div id = "site-content" > { ' ' } { ' ' } <
        Router >
        <
        Navbar / >
        <
        Route path = "/"
        exact component = { Home }
        /> <Route path="/
        " exact component={Home} /> {' '} <
        Route path = " / portfolio "
        exact component = { Portfolio }
        /> {' '} <
        Route path = " / bookus "
        exact component = { BookUs }
        />  {' '} <
        /Router>{' '} { ' ' } <
        /div>{' '} { ' ' } <
        /div>{' '} { ' ' } <
        /div>
    );
}

export default App;