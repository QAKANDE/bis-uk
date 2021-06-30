import React, { Component } from 'react'
import Navbar from './Navbar'
import Jumbo from '../Components/Jumbo'

import Services from '../Components/Services'
import Team from '../Components/Team'
import About from '../Components/About'
import Footer from '../Components/Footer'
import Carou from './Carou'

class Home extends Component {
  state = {}
  render() {
    return (
      <div className="main-content">
        <Carou />
        <Services />
        <About />
      </div>
    )
  }
}

export default Home
