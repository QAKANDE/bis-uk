import React, { Component } from 'react';
import figure1 from '../Assets/Images/figure-1.jpg';

class About extends Component {
	state = {};
	render() {
		return <div className="fullwidth-block information-section">
				<div className="container">
					<h2 className="section-title">Information</h2>
					<div className="row">
						<div className="col-md-4">
							<p>
								To ensure a flawless face beat, please ensure your eyebrows are in good shape.
							</p>
							<p>
								If you'd like to book us for travel for events such as weddings, please contact
								us for more information.
							</p>
						</div>
						<div className="col-md-4">
							<p>
								Please ensure to inform us if you would like to cancel or rebook your
								appointment 3 days before the day of your initial appointment.
							</p>
						</div>
						<div className="col-md-4">
							<p>
								Please note all makeup will be provided for you by us. If you choose to bring
								your own products - the price will remain the same.
							</p>
							<p>
								If you'd like to book us for travel for events such as weddings, please contact
								us for more information.
							</p>
						</div>
					</div>
				</div>
			</div>;
	}
}

export default About;
