import { motion } from "framer-motion";

function Estates() {
	return (
		<>
			<div className="container-fluid">
				<h1 className="text-center mt-4">
					Featured <span>Estates</span>
				</h1>
				<div className="estates mt-4">
					<div
						id="estatesCarousel"
						class="estates-carousel carousel slide"
						data-bs-ride="carousel"
					>
						<div class="carousel-inner">
							<div class="carousel-item active">
								<div className="content default row">
									<div className="col-md-3">
										<img
											src="/estates/amazon.jpeg"
											alt="Amazon"
											className="img-fluid"
										/>
										<h3>Oakwood Amazone</h3>
									</div>
									<div className="col-md-3">
										<img
											src="/estates/maldives.jpeg"
											alt="The Maldives"
											className="img-fluid"
										/>
										<h3>The Maldives</h3>
									</div>
									<div className="col-md-3">
										<img
											src="/estates/pavilion.jpeg"
											alt="Pavilion Homes"
											className="img-fluid"
										/>
										<h3>Pavilion Homes</h3>
									</div>
									<div className="col-md-3">
										<img
											src="/estates/gardens.jpeg"
											alt="Oakwood Gardens"
											className="img-fluid"
										/>
										<h3>Oakwood Gardens</h3>
									</div>
								</div>
							</div>
							<div class="carousel-item">
								<div className="content default row">
									<div className="col-md-3">
										<img
											src="/estates/cascade.jpeg"
											alt="Cascade Voyage Phase 2"
											className="img-fluid"
										/>
										<h3>Cascade Voyage Phase 2</h3>
									</div>
									<div className="col-md-3">
										<img
											src="/estates/umbrella.jpeg"
											alt="Umbrella City"
											className="img-fluid"
										/>
										<h3>Umbrella City</h3>
									</div>
									<div className="col-md-3">
										<img
											src="/estates/silicon-oasis.jpeg"
											alt="Silicon Oasis"
											className="img-fluid"
										/>
										<h3>Silicon Oasis</h3>
									</div>
									<div className="col-md-3">
										<img
											src="/estates/midsprings-court.jpeg"
											alt="Midsprings Courts"
											className="img-fluid"
										/>
										<h3>Midsprings Courts</h3>
									</div>
								</div>
							</div>
							<div class="carousel-item">
								<div className="content default row">
									<div className="col-md-3">
										<img
											src="/estates/skyfall.jpeg"
											alt="Skyfall By Oakwood"
											className="img-fluid"
										/>
										<h3>Skyfall By Oakwood</h3>
									</div>
									<div className="col-md-3">
										<img
											src="/estates/green-island.jpeg"
											alt="Green Island"
											className="img-fluid"
										/>
										<h3>Green Island</h3>
									</div>
									<div className="col-md-3">
										<img
											src="/estates/midsprings-park.jpeg"
											alt="Misprings Park"
											className="img-fluid"
										/>
										<h3>Misprings Park</h3>
									</div>
								</div>
							</div>
						</div>
						<button
							class="carousel-control-prev"
							type="button"
							data-bs-target="#estatesCarousel"
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
							data-bs-target="#estatesCarousel"
							data-bs-slide="next"
						>
							<span
								class="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span class="visually-hidden">Next</span>
						</button>

						<div className="toggle mb-3">
							<h2>
								<a href="/estates">View all Our Estates</a>
							</h2>
						</div>
					</div>
					<div
						id="mobileCarousel"
						class="mobile-carousel carousel slide"
						data-bs-ride="carousel"
					>
						<div class="carousel-inner">
							<div class="carousel-item active">
								<div className="content row">
									<div className="col-md-3">
										<img
											src="/estates/amazon.jpeg"
											alt="Amazon"
											className="img-fluid"
										/>
										<h3>Oakwood Amazone</h3>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="content row">
									<div className="col-md-3">
										<img
											src="/estates/maldives.jpeg"
											alt="The Maldives"
											className="img-fluid"
										/>
										<h3>The Maldives</h3>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="content row">
									<div className="col-md-3">
										<img
											src="/estates/gardens.jpeg"
											alt="Oakwood Gardens"
											className="img-fluid"
										/>
										<h3>Oakwood Gardens</h3>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="col-md-3">
									<img
										src="/estates/pavilion.jpeg"
										alt="Pavilion Homes"
										className="img-fluid"
									/>
									<h3>Pavilion Homes</h3>
								</div>
							</div>

							<div class="carousel-item">
								<div className="content  row">
									<div className="col-md-3">
										<img
											src="/estates/cascade.jpeg"
											alt="Cascade Voyage Phase 2"
											className="img-fluid"
										/>
										<h3>Cascade Voyage Phase 2</h3>
									</div>
								</div>
							</div>
							<div class="carousel-item">
								<div className="content  row">
									<div className="col-md-3">
										<img
											src="/estates/umbrella.jpeg"
											alt="Umbrella City"
											className="img-fluid"
										/>
										<h3>Umbrella City</h3>
									</div>
								</div>
							</div>
							<div class="carousel-item">
								<div className="content  row">
									<div className="col-md-3">
										<img
											src="/estates/silicon-oasis.jpeg"
											alt="Silicon Oasis"
											className="img-fluid"
										/>
										<h3>Silicon Oasis</h3>
									</div>
								</div>
							</div>
							<div class="carousel-item">
								<div className="content  row">
									<div className="col-md-3">
										<img
											src="/estates/midsprings-court.jpeg"
											alt="Midsprings Courts"
											className="img-fluid"
										/>
										<h3>Midsprings Courts</h3>
									</div>
								</div>
							</div>

							<div class="carousel-item">
								<div className="content row">
									<div className="col-md-3">
										<img
											src="/estates/skyfall.jpeg"
											alt="Skyfall By Oakwood"
											className="img-fluid"
										/>
										<h3>Skyfall By Oakwood</h3>
									</div>
								</div>
							</div>
							<div class="carousel-item">
								<div className="col-md-3">
									<img
										src="/estates/midsprings-park.jpeg"
										alt="Misprings Park"
										className="img-fluid"
									/>
									<h3>Misprings Park</h3>
								</div>
							</div>
							<div class="carousel-item">
								<div className="content row">
									<div className="col-md-3">
										<img
											src="/estates/green-island.jpeg"
											alt="Green Island"
											className="img-fluid"
										/>
										<h3>Green Island</h3>
									</div>
								</div>
							</div>
						</div>
						<button
							class="carousel-control-prev"
							type="button"
							data-bs-target="#mobileCarousel"
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
							data-bs-target="#mobileCarousel"
							data-bs-slide="next"
						>
							<span
								class="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span class="visually-hidden">Next</span>
						</button>

						<div className="toggle mb-3">
							<h2>
								<a href="/estates">View all Our Estates</a>
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-dark p-4 text-white inspect">
				<h1 className="text-center mb-4">
					Our <span>Journals</span>
				</h1>
				<div className="row container-fluid justify-content-around align-items-center">
					<motion.img
						src="/estates/inspect.jpg"
						alt="Book an inspection"
						className="col-md-5"
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
					/>
					<div className="text col-md-5 text-center">
						<h1>Why Wait? Join Us And Achieve Something Great</h1>
						<a
							href="/become-a-consultant"
							className="btn btn-orange icon-left"
						>
							<i class="fa-solid fa-people-group"></i>
							Become a Consultant today
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Estates;
