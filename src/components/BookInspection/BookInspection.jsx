import DatePicker from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "./styles/styles.css";
import ImgUnderlay from "../../utils/ImgUnderlay";

function BookInspection() {
	const listOfEstates = [
		"",
		"PAVILLION ESTATE-1 - Sangotedo",
		"MIDSPRINGS COURT - Alatishe",
		"MIDE COURT - Ilamija Kekere(Ibeju Lekki)",
		"OAKWOOD GARDEN -1 - Orofin",
		"OAKWOOD GARDEN -2 - Ibeju Lekki",
		"OAKWOOD GARDEN AMAZON - Ketu Epe",
		"UMBRELLA CITY (GREEN ISLAND) - Eloko Junction",
		"THE ATLANTIS - Ado,Ajah",
		"SKY FALL BY OAKWOOD - eko akete",
		"MIDSPRINGS PARK - Imokun, Epe",
		"UMBRELLA CITY - Araromi, Ibeju Lekki",
		"UMBRELLA CITY 2  - Ilamija, Ibeju Lekki",
		"URBAN PACIFIC -  Bigije",
		"CASCADE VOYAGE 2 - Igbonla, Epe",
		"CASCADE VOYAGE 3  - Iji, Epe",
		"TERICA COURT - Ilara, Epe",
		"PAVILLION ESTATE-2 - Ilara, Epe",
		"THE MALDIVES – Behind Shoprite ",
		"THE ICONIC -Okun Ajah, Ogombo",
	];

	const disOtherDays = (current) => {
		return current.day() == 2 || current.day() == 4 || current.day() == 5;
	};

	return (
		<>
			<ImgUnderlay title={"Schedule an Inspection"} />
			<div className="bookInspection container row">
				<div className="col-md-5">
					<img
						src="/inspect.jpeg"
						alt="Book an Inspection"
						className="rounded img-fluid"
					/>
				</div>
				<div className="col-md-6 text">
					<form
						method="post"
						name="Book an Inspection Form"
						className="mt-3 mx-4"
						netlify
					>
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
								name="Email address"
								required
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
							<label for="property" className="form-label">
								Property
							</label>
							<select
								name="Property"
								id="property"
								className="form-control"
								required
							>
								{listOfEstates.map((item, index) => (
									<option key={index} value={item}>
										{item}
									</option>
								))}
							</select>
						</div>
						<div className="mb-3">
							<label for="date" className="form-label">
								Date
							</label>
							<DatePicker
								timeFormat={false}
								isValidDate={disOtherDays}
							/>
						</div>
						<div className="mb-3">
							<label for="message" className="form-label">
								Message
							</label>
							<textarea
								name="Message"
								id="message"
								className="form-control"
							></textarea>
						</div>
						<div className="submitBtn">
							<button
								className="btn btn-orange icon-left"
								type="submit"
							>
								<i class="fa-solid fa-paper-plane"></i>Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default BookInspection;
