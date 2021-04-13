import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbo from '../Components/Jumbo';
import LatestNews from './LatestNews';
import Services from '../Components/Services';
import Team from '../Components/Team';
import About from '../Components/About';
import Footer from '../Components/Footer';

class Home extends Component {
	state = {};
	render() {
		return (
			<div className="main-content">
				<Jumbo />
				<Services />
				<About />
				<Footer />
			</div>
		);
	}
}

export default Home;
