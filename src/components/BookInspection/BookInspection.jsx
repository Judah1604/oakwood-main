import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/styles.css";
import ImgUnderlay from "../../utils/ImgUnderlay";
import { useRef, useState } from "react";

function BookInspection() {
	const form = useRef();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		date: new Date(),
		property: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("oakwood_email", "inspection_form", form.current, {
				publicKey: "LxuvrmRXGTb0fw2rh",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error);
				}
			);

		setFormData({
			name: "",
			email: "",
			phone: "",
			date: new Date(),
			property: "",
			message: "",
		});
	};

	const disableOtherDays = (date) => {
		const day = date.getDay();
		return day !== 2 && day !== 4 && day !== 5;
	};

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
						name="Book an Inspection Form"
						className="mt-3 mx-4"
						onSubmit={sendEmail}
						ref={form}
					>
						<div className="mb-3">
							<label htmlFor="name" className="form-label">
								Full Name
							</label>
							<input
								type="text"
								className="form-control"
								id="name"
								name="name"
								required
								value={formData.name}
								onChange={handleChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="email" className="form-label">
								Email address
							</label>
							<input
								type="email"
								className="form-control"
								id="email"
								name="email"
								required
								value={formData.email}
								onChange={handleChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="phone" className="form-label">
								Phone Number
							</label>
							<input
								type="number"
								className="form-control"
								id="phone"
								name="phone"
								required
								value={formData.phone}
								onChange={handleChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="property" className="form-label">
								Property
							</label>
							<select
								name="property"
								id="property"
								className="form-control"
								required
								value={formData.property}
								onChange={handleChange}
							>
								{listOfEstates.map((item, index) => (
									<option key={index} value={item}>
										{item}
									</option>
								))}
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="date" className="form-label">
								Date
							</label>
							<DatePicker
                                name="date"
                                className="form-control date"
								selected={formData.date}
								onChange={(date) =>
									setFormData({ ...formData, date: date })
								}
                                filterDate={disableOtherDays}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="message" className="form-label">
								Message
							</label>
							<textarea
								name="message"
								id="message"
								className="form-control"
								value={formData.message}
								onChange={handleChange}
							></textarea>
						</div>
						<div className="submitBtn">
							<button
								className="btn btn-orange icon-left"
								type="submit"
							>
								<i className="fa-solid fa-paper-plane"></i>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default BookInspection;
