import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import BookUs from "./Components/BookUs";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import Details from "./Components/Details";
import Payment from "./Components/Payment";
import PaymentSuccess from "./Components/PaymentSuccess";
import Team from "./Components/Team";
import Videos from "./Components/Videos";

function App() {
  const [videos, setVideos] = useState();
  return (
    <div className="App">
      <div className="homepage header-collapse">
        <div id="site-content">
          <Router>
            <Navbar />
            {/* <Team /> */}
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/bookus" exact component={BookUs} />
            <Route path="/details/:id" exact component={Details} />
            <Route path="/payment" exact component={Payment} />
            <Route path="/team" exact component={Team} />
            <Route path="/videos" exact component={Videos} />
            <Route
              path="/payment-success/:name"
              exact
              component={PaymentSuccess}
            />
            <Footer />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
