import React from "react";

function HeroSection() {
	return (
		<div class="hero carousel slide" data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src="/hero/skyfall-banner.jpeg" alt="Skyfall Estate" />
				</div>
				<div className="carousel-item">
					<img
						src="/hero/umbrella-banner.jpeg"
						alt="Umbrella Estate"
					/>
				</div>
				<div className="carousel-item">
					<img
						src="/hero/cascade-banner.jpeg"
						alt="Cascade Voyage Estate"
					/>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
