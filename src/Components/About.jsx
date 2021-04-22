import React, { Component } from 'react';
import figure1 from '../Assets/Images/bisbeautyylogo.jpg';

class About extends Component {
	state = {};
	render() {
		return (
			<div className="fullwidth-block information-section">
				<div className="container">
					<h2 className="section-title">Information</h2>
					<div className="row">
						<div className="col-md-4">
							<figure>
								<img src={figure1} />
							</figure>
						</div>
						<div className="col-md-8">
							<ul>
								<li className="mb-3">
									To ensure a flawless face beat, please ensure your eyebrows are in good shape.
								</li>
								<li className="mb-3">
									If you'd like to book us for travel for events such as weddings, please contact us
									for more information.
								</li>
								<li className="mb-3">
									Please ensure to inform us if you would like to cancel or rebook your appointment 3
									days before the day of your initial appointment.
								</li>
								<li className="mb-3">
									Please note all makeup will be provided for you by us. If you choose to bring your
									own products - the price will remain the same.
								</li>
								<li className="mb-3">
									If you'd like to book us for travel for events such as weddings, please contact us
									for more information.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
