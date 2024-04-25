import DatePicker from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "./styles/styles.css";

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
            <div className="underlay">
                <img src="/underlay.jpg" alt="Underlay" />
                <h1>Schedule an Inspection</h1>
            </div>
			<div className="bookInspection container row">
				<div className="col-md-5">
					<img
						src="/inspect.jpeg"
						alt="Book an Inspection"
						className="rounded img-fluid"
					/>
				</div>
				<div className="col-md-6 text">
					<form action="#" className="mt-5 mx-4">
						<div className="mb-3">
							<label for="name" className="form-label">
								Name
							</label>
							<input
								type="text"
								className="form-control"
								id="name"
								name="name"
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
							<label for="phone" className="form-label">
								Phone Number
							</label>
							<input
								type="number"
								className="form-control"
								id="phone"
								name="phone"
								required
							/>
						</div>
						<div className="mb-3">
							<label for="property" className="form-label">
								Property
							</label>
							<select
								name="property"
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
								name="message"
								id="message"
								className="form-control"
							></textarea>
						</div>
						<div className="submitBtn">
							<button className="btn btn-orange">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default BookInspection;
