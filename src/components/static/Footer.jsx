import "./styles/static.css";

function Footer() {

	return (
		<>
			<footer className="footer bg-dark text-white">
				<div className="brand">
					<img src="/Logo.png" alt="Oakwood Group" className="logo" />
					<h1>Oakwood Group Ltd</h1>
				</div>
				<div className="address">
					<p>Opening Hours - 08AM - 06PM</p>
					<p>2nd Floor, Healthrite Plaza, Opp. Ikota </p>
					<p>Shopping Complex, Lekki - Ajah </p>
					<p>Exp.way. Ajah</p>
				</div>
				<div className="contact-info">
					<div className="icons">
						<a href="#">
							<i class="fa-brands fa-facebook-f"></i>
						</a>
						<a href="#">
							<i class="fa-brands fa-x-twitter"></i>
						</a>
						<a href="#">
							<i class="fa-brands fa-instagram"></i>
						</a>
						<a href="#">
							<i class="fa-brands fa-youtube"></i>
						</a>
					</div>
					<p>Oakwoodgroupltd</p>
					<h2>01-4536043</h2>
				</div>
			</footer>
		</>
	);
}

export default Footer;
