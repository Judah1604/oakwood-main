import { motion } from "framer-motion";
import "./styles/home.css";

const Objectives = () => {
	return (
		<>
			<div className="objectives container-fluid row">
				<motion.div
					className="col-md-3 bg-dark p-5"
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
				>
					<div className="text">
						<i class="fa-solid fa-bullseye"></i>
						<h1>Our Mission</h1>
						<p>
							To simplify, and modernize through the use of
							Artificial Intelligence and progress our services
							hinging on collaboration and innovative ideas
							through integrity.
						</p>
					</div>
				</motion.div>
				<motion.div
					className="col-md-3 bg-orange p-5"
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
				>
					<div className="text">
						<i class="fa-solid fa-chart-line"></i>
						<h1>Our Vision</h1>
						<p>
							Thrive to be the best Real Estate Broker, providing
							excellent and consistent customer experience while
							establishing long term productive relationships with
							clients
						</p>
					</div>
				</motion.div>
				<motion.div
					className="col-md-3 bg-dark p-5"
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
				>
					<div className="text">
						<i class="fa-solid fa-coins"></i>
						<h1>Our Values</h1>
						<p>
							A culture of respect, integrity, humility, service,
							responsiveness, team-spirit and excellence shapes
							our approach to every opportunity and every
							customer.
						</p>
					</div>
				</motion.div>
			</div>
			<div className="bg-dark-subtle p-4">
				<h1 className="text-center uppercase mb-3">
					Our <span>Services</span>
				</h1>
				<div className="services container-fluid">
					<div
						className="services-carousel carousel slide"
						data-bs-ride="carousel"
					>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<div className="content row justify-content-center">
									<div className="col-md-4">
										<img
											src="/services/investment.jpeg"
											alt="Real Estate Investment"
											className="img-fluid mb-3"
										/>
										<h2 className="text-center">
											Real Estate <span>Investment</span>
										</h2>
									</div>
									<div className="col-md-4">
										<img
											src="/services/property.jpeg"
											alt="Property Development"
											className="img-fluid mb-3"
										/>
										<h2 className="text-center">
											Property <span>Development</span>
										</h2>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="content row justify-content-center">
									<div className="col-md-4">
										<img
											src="/services/consultancy.jpeg"
											alt="Real Estate Consultancy"
											className="img-fluid mb-3"
										/>
										<h2 className="text-center">
											Real Estate <span>Consultancy</span>
										</h2>
									</div>
									<div className="col-md-4">
										<img
											src="/services/management.jpeg"
											alt="Real Estate Management"
											className="img-fluid mb-3"
										/>
										<h2 className="text-center">
											Real Estate <span>Management</span>
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						id="mobileServicesCarousel"
						className="mobile-carousel carousel slide"
						data-bs-ride="carousel"
					>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<div className="content row justify-content-center">
									<motion.div
										className="col-md-4"
										initial={{ y: 100, opacity: 0 }}
										whileInView={{ y: 0, opacity: 1 }}
										viewport={{ once: true }}
									>
										<img
											src="/services/investment.jpeg"
											alt="Real Estate Investment"
											className="img-fluid mb-3"
										/>
										<h2 className="text-center">
											Real Estate <span>Investment</span>
										</h2>
									</motion.div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="content row justify-content-center">
									<motion.div
										className="col-md-4"
										initial={{ y: 100, opacity: 0 }}
										whileInView={{ y: 0, opacity: 1 }}
										viewport={{ once: true }}
									>
										<img
											src="/services/property.jpeg"
											alt="Property Development"
											className="img-fluid mb-3"
										/>
										<h2 className="text-center">
											Property <span>Development</span>
										</h2>
									</motion.div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="content row justify-content-center">
									<motion.div
										className="col-md-4"
										initial={{ y: 100, opacity: 0 }}
										whileInView={{ y: 0, opacity: 1 }}
										viewport={{ once: true }}
									>
										<img
											src="/services/management.jpeg"
											alt="Real Estate Management"
											className="img-fluid mb-3"
										/>
										<h2 className="text-center">
											Real Estate <span>Management</span>
										</h2>
									</motion.div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="content row justify-content-center">
									<motion.div
										className="col-md-4"
										initial={{ y: 100, opacity: 0 }}
										whileInView={{ y: 0, opacity: 1 }}
										viewport={{ once: true }}
									>
										<img
											src="/services/consultancy.jpeg"
											alt="Real Estate Consultancy"
											className="img-fluid mb-3"
										/>
										<h2 className="text-center">
											Real Estate <span>Consultancy</span>
										</h2>
									</motion.div>
								</div>
							</div>
						</div>
						<button
							class="carousel-control-prev"
							type="button"
							data-bs-target="#mobileServicesCarousel"
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
							data-bs-target="#mobileServicesCarousel"
							data-bs-slide="next"
						>
							<span
								class="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span class="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Objectives;
