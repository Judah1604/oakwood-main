import ImgUnderlay from "../../utils/ImgUnderlay";
import './styles/styles.css';

function Consultant() {
	return (
		<>
			<ImgUnderlay title={"Become a Consultant Today"} />
			<div className="consultant container row">
				<div className="col-md-5">
					<img
						src="/consultant.jpg"
						alt="Book an Inspection"
						className="rounded img-fluid"
					/>
				</div>
				<div className="col-md-7 text">
					<form action="#" className="mt-3 mx-4">
						<div className="mb-3">
							<label for="name" className="form-label">
								Full Name
							</label>
							<input
								type="text"
								className="form-control"
								id="name"
								name="Full Name"
								required
							/>
						</div>
						<div className="mb-3">
							<label for="email" className="form-label">
								Email address
							</label>
							<input
								type="email"
								className="form-control"
								id="email"
								name="email"
								required
							/>
						</div>
						<div className="mb-3">
							<label for="address" className="form-label">
								Address
							</label>
							<input
								type="text"
								className="form-control"
								id="address"
								name="Address"
								required
							/>
						</div>
						<div className="mb-3">
							<label for="passport" className="form-label">
								Passport Photograph
							</label>
							<input
								type="file"
								className="form-control"
								id="passport"
								name="Passport Photograph"
								required
                                accept=".pdf"
							/>
						</div>
						<div className="mb-3">
							<label for="phone" className="form-label">
								Phone Number
							</label>
							<input
								type="number"
								className="form-control"
								id="phone"
								name="Phone Number"
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="experience" className="form-label">
								Do you have any experience in real estate
							</label>
							<div className="radios">
								<div className="yes">
									<input
										type="radio"
										id="yes"
										name="Experience in Real Estate"
										required
									/>
									<label htmlFor="yes">Yes</label>
								</div>
								<div className="no">
									<input
										type="radio"
										id="no"
										name="Experience in Real Estate"
										required
									/>
									<label htmlFor="no">No</label>
								</div>
							</div>
						</div>
						<div className="mb-3">
							<label htmlFor="gender" className="form-label">
								Gender
							</label>
							<div className="radios">
								<div className="male">
									<input
										type="radio"
										id="yes"
										name="Gender"
										value="Male"
										required
									/>
									<label htmlFor="male">Male</label>
								</div>
								<div className="female">
									<input
										type="radio"
										id="female"
										name="Gender"
										value="Female"
										required
									/>
									<label htmlFor="female">Female</label>
								</div>
							</div>
						</div>
						<div className="mb-3">
							<label for="guarantor-name" className="form-label">
								Guarantor Name
							</label>
							<input
								type="text"
								className="form-control"
								id="guarantor-name"
								name="Guarantor Name"
								required
							/>
						</div>
						<div className="mb-3">
							<label
								for="guarantor-number"
								className="form-label"
							>
								Guarantor Phone Number
							</label>
							<input
								type="text"
								className="form-control"
								id="guarantor-number"
								name="Guarantor Phone Number"
								required
							/>
						</div>
						<div className="mb-3">
							<label
								for="guarantor-address"
								className="form-label"
							>
								Guarantor Address
							</label>
							<input
								type="text"
								className="form-control"
								id="guarantor-address"
								name="Guarantor Address"
								required
							/>
						</div>
						<div className="submitBtn">
							<button className="btn btn-orange icon-left">
								<i class="fa-solid fa-paper-plane"></i>Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Consultant;
