import "./styles/styles.css";
import ImgUnderlay from "../../utils/ImgUnderlay";

function Contact() {
	return (
		<>
			<ImgUnderlay title={"Contact Us"} />
			<div className="container my-4">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4637124075075!2d3.5564813737293592!3d6.462786023868514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7765e0c3cdd%3A0xd4e24943699fda01!2sOakwood%20Group%20Limited!5e0!3m2!1sen!2sng!4v1714777927954!5m2!1sen!2sng"
					width="100%"
					height="500"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
				<div className="contact row mt-4">
					<div className="col-md-3 info">
						<div className="location">
							<i class="fa-solid fa-location-dot"></i>
							<div className="text">
								<h2>Head Office:</h2>
								<p>
									2nd Floor, HealthRite Plaza, Lake View Park,
									Opp. Ikota Shopping Complex, VGC, Ajah
									Lagos.
								</p>
							</div>
						</div>
						<div className="email">
							<i class="fa-solid fa-envelope"></i>
							<div className="text">
								<h2>Email:</h2>
								<p>info@oakwoodgroup.net</p>
							</div>
						</div>
						<div className="phone">
							<i class="fa-solid fa-phone"></i>
							<div className="text">
								<h2>Call:</h2>
								<p>01 - 453 6043</p>
								<p>+234 807 372 7434</p>
								<p>+234 915 845 8545</p>
								<p>+234 916 465 9151</p>
								<p>+234 916 843 4315</p>
							</div>
						</div>
					</div>
					<form name="Contact Form" method="post" className="col-md-8 form" netlify>
						<div className="form-group row">
							<input
								className="col-md-5 form-control"
								type="text"
								name="Name"
								placeholder="Name"
							/>
							<input
								className="col-md-5 form-control"
								type="text"
								name="Email"
								placeholder="Email"
							/>
						</div>
						<div className="form-group">
							<input
								className="form-control"
								type="text"
								name="Subject"
								placeholder="Subject"
							/>
						</div>
						<div className="form-group">
							<textarea
								className="form-control"
								name="Message"
								placeholder="Message"
							></textarea>
						</div>
						<div className="form-btn">
							<a
								href="#"
								className="btn btn-orange icon-left"
								type="submit"
							>
								<i class="fa-solid fa-paper-plane"></i>
								Submit
							</a>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Contact;
