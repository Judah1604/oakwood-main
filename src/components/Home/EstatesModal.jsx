import { Modal } from "bootstrap";
import { useEffect } from "react";

function EstatesModal() {
	useEffect(() => {
		const modal = new Modal(
			document.querySelector("#estatesModal")
		);

		window.onload = () => {
			modal.show();
		};
	}, []);

	return (
		<div className="modal modal-xxl" id="estatesModal">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Our Estates</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
							data-bs-target="#estatesModal"
						></button>
					</div>
					<div className="modal-body">
						<div className="estates mt-4">
							<div
								id="estatesCarousel"
								class="carousel slide"
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
													src="/public/estates/midsprings-court.jpeg"
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
											<div className="col-md-3">
												<img
													src="/public/estates/midsprings-court.jpeg"
													alt="Midsprings Courts"
													className="img-fluid"
												/>
												<h3>Midsprings Courts</h3>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EstatesModal;
