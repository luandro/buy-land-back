import React from 'react';
import image1 from '../assets/img/f_1.jpg';
import image2 from '../assets/img/f_2.jpg';
import image3 from '../assets/img/f_3.jpg';
import image4 from '../assets/img/f_4.jpg';
import image5 from '../assets/img/f_5.jpg';

const How = () => (
	<section className="how py-12 bg-[#dde5b4]">
		<div className="container mx-auto px-4">
			<h2 className="text-3xl font-bold mb-6 text-[#6c584c]">
				How It Works
			</h2>
			<div className="plan-graph">
				<div className="step">
					<img src={image1} alt="Step 1" />
					<p>From one crowd on the land to two, creating the living balance.</p>
				</div>
				<div className="arrow">→</div>
				<div className="step">
					<img src={image2} alt="Step 2" />
					<p>Planning based on the land.</p>
				</div>
				<div className="arrow">→</div>
				<div className="step">
					<img src={image3} alt="Step 3" />
					<p>Construction of infrastructure.</p>
				</div>
				<div className="arrow">→</div>
				<div className="step">
					<img src={image4} alt="Step 4" />
					<p>Living and development.</p>
				</div>
				<div className="arrow">→</div>
				<div className="step">
					<img src={image5} alt="Step 5" />
					<p>The land is giving back to indigenous peoples.</p>
				</div>
				<div className="arrow long-arrow">→</div>
			</div>
		</div>
	</section>
);

export default How;
