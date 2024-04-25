import { motion } from "framer-motion";

const Objectives = () => {
	return (
		<>
			<div className="objectives container-fluid row">
				<div className="col-md-3 bg-dark p-5">
					<i class="fa-solid fa-bullseye"></i>
					<h1>Our Mission</h1>
					<p>
						To simplify, and modernize through the use of Artificial
						Intelligence and progress our services hinging on
						collaboration and innovative ideas through integrity.
					</p>
				</div>
				<div className="col-md-3 bg-orange p-5">
					<i class="fa-solid fa-chart-line"></i>
					<h1>Our Vision</h1>
					<p>
						Thrive to be the best Real Estate Broker, providing
						excellent and consistent customer experience while
						establishing long term productive relationships with
						clients
					</p>
				</div>
				<div className="col-md-3 bg-dark p-5">
					<i class="fa-solid fa-coins"></i>
					<h1>Our Values</h1>
					<p>
						A culture of respect, integrity, humility, service,
						responsiveness, team-spirit and excellence shapes our
						approach to every opportunity and every customer.
					</p>
				</div>
			</div>
			<div className="bg-dark-subtle p-4">
				<h1 className="text-center mb-3">
					Our <span>Services</span>
				</h1>
				<div className="services container-fluid row">
					<div className="col-md-4">
						<img
							src="/service1.jpg"
							alt="Real Estate Investment"
							className="img-fluid mb-3"
						/>
						<h2 className="text-center">
							Real Estate <span>Investment</span>
						</h2>
					</div>
					<div className="col-md-4">
						<img
							src="/service1.jpg"
							alt="Property Development"
							className="img-fluid mb-3"
						/>
						<h2 className="text-center">
							Property <span>Development</span>
						</h2>
					</div>
					<div className="col-md-4">
						<img
							src="/service1.jpg"
							alt="Real Estate Consultancy"
							className="img-fluid mb-3"
						/>
						<h2 className="text-center">
							Real Estate <span>Consultancy</span>
						</h2>
					</div>
					<div className="col-md-4">
						<img
							src="/service1.jpg"
							alt="Real Estate Management"
							className="img-fluid mb-3"
						/>
						<h2 className="text-center">
							Real Estate <span>Management</span>
						</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export default Objectives;
