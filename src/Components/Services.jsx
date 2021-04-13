import React, { Component } from 'react';
import icon1 from '../Assets/Images/icon-1.png';
import icon2 from '../Assets/Images/icon-2.png';
import icon3 from '../Assets/Images/icon-3.png';
import icon4 from '../Assets/Images/icon-4.png';

class Services extends Component {
	state = {};
	render() {
		return (
			<div className="fullwidth-block features-section">
				<div className="container">
					<h2 className="section-title">our Services</h2>
					<div className="row">
						<div className="col-md-4">
							<div className="feature">
								<img src={icon1} className="feature-image" />
								<h3 className="feature-title">Full glam</h3>
								<p>£ 45</p>
							</div>
						</div>
						<div class="col-md-4">
							<div class="feature">
								<img src={icon2} class="feature-image" />
								<h3 class="feature-title">Soft glam</h3>
								<p>£ 40</p>
							</div>
						</div>
						<div class="col-md-4">
							<div class="feature">
								<img src={icon3} class="feature-image" />
								<h3 class="feature-title">Natural glam</h3>
								<p>£ 40</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Services;
