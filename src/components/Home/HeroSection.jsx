import React from "react";

function HeroSection() {
	return (
		<>
			<div class="hero carousel slide" id="heroCarousel" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="/hero/skyfall-banner.jpeg"
							alt="Skyfall Estate"
						/>
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
					<button class="carousel-control-prev"
							type="button"
							data-bs-target="#heroCarousel"
							data-bs-slide="prev"
						>
							<span
								class="carousel-control-prev-icon"
								aria-hidden="true"
							></span>
							<span class="visually-hidden">Previous</span>
						</button>
						<button
							class="carousel-control-next"
							type="button"
							data-bs-target="#heroCarousel"
							data-bs-slide="next"
						>
							<span
								class="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span class="visually-hidden">Next</span>
						</button>
			</div>
		</>
	);
}

export default HeroSection;
