import React from 'react';
import image1 from '../assets/img/f_1.jpg';
import image2 from '../assets/img/f_2.jpg';
import image3 from '../assets/img/f_3.jpg';
import image4 from '../assets/img/f_4.jpg';
import image5 from '../assets/img/f_5.jpg';

const How = () => (
	<section className="how py-12 bg-[#dde5b4]">
		<div className="container mx-auto px-4 text-center">
			<h2 className="text-3xl font-bold mb-6 text-[#6c584c]">
				How It Works
			</h2>
			<div className="plan-graph">
				<div className="step">
					<img src={image1} alt="Step 1" className="step-image" />
					<p>Empathize</p>
				</div>
				<div className="arrow">→</div>
				<div className="step">
					<img src={image2} alt="Step 2" className="step-image" />
					<p>Define</p>
				</div>
				<div className="arrow">→</div>
				<div className="step">
					<img src={image3} alt="Step 3" className="step-image" />
					<p>Ideate</p>
				</div>
				<div className="arrow">→</div>
				<div className="step">
					<img src={image4} alt="Step 4" className="step-image" />
					<p>Prototype</p>
				</div>
				<div className="arrow">→</div>
				<div className="step">
					<img src={image5} alt="Step 5" className="step-image" />
					<p>Test</p>
				</div>
				<div className="arrow">→</div>
				<div className="step">
					<img src={image1} alt="Step 6" className="step-image" />
					<p>Implement</p>
				</div>
			</div>
		</div>
	</section>
);

const styles = {
	'.step-image': {
		width: '65px',
		height: '65px',
		margin: '0 auto',
	},
	'.arrow': {
		fontSize: '24px',
		margin: '0 10px',
	},
	'.plan-graph': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap',
	},
	'.step': {
		textAlign: 'center',
		margin: '10px',
	},
};

export default How;
