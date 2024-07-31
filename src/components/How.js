import React from 'react';

const How = () => (
	<section className="how py-12 bg-[#f0ead2]">
		<div className="container mx-auto px-4">
			<h2 className="text-3xl font-bold mb-6 text-[#6c584c]">
				How It Works
			</h2>
			<div className="plan-graph">
				<div className="step">
					<img src="path/to/image1.jpg" alt="Step 1" />
					<p>From one crowd on the land to two, creating the living balance.</p>
				</div>
				<div className="arrow">→</div>
				<div className="step">
					<img src="path/to/image2.jpg" alt="Step 2" />
					<p>Planning based on the land.</p>
				</div>
				<div className="arrow">→</div>
				<div className="step">
					<img src="path/to/image3.jpg" alt="Step 3" />
					<p>Construction of infrastructure.</p>
				</div>
				<div className="arrow">→</div>
				<div className="step">
					<img src="path/to/image4.jpg" alt="Step 4" />
					<p>Living and development.</p>
				</div>
				<div className="arrow">→</div>
				<div className="step">
					<img src="path/to/image5.jpg" alt="Step 5" />
					<p>The land is giving back to indigenous peoples.</p>
				</div>
				<div className="arrow long-arrow">→</div>
			</div>
		</div>
	</section>
);

export default How;
