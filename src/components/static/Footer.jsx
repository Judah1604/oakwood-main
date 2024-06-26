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
					<p>Opening Hours - 09AM - 05PM</p>
					<p>2nd Floor, Healthrite Plaza, Opp. Ikota </p>
					<p>Shopping Complex, Lekki - Ajah </p>
					<p>Exp.way. Ajah</p>
				</div>
				<div className="contact-info">
					<div className="icons">
						<a href="https://x.com/oakwoodgroupltd?s=21">
							<i class="fa-brands fa-x-twitter"></i>
						</a>
						<a href="https://www.instagram.com/oakwoodgroupltd?igsh=MXE2eXdtZjZnY3NhdQ%3D%3D&utm_source=qr">
							<i class="fa-brands fa-instagram"></i>
						</a>
						<a href="#">
							<i class="fa-brands fa-linkedin-in"></i>
						</a>
						<a href="https://wa.me/+2349168434315">
							<i class="fa-brands fa-whatsapp"></i>
						</a>
					</div>
					<p>Oakwoodgroupltd</p>
					<h3>01-4536043</h3>
					<h3>+234 9168434315</h3>
				</div>
			</footer>
			<div className="whatsapp-btn">
				<a href="https://wa.me/+2349168434315">
					<i class="fa-brands fa-whatsapp"></i>
				</a>
			</div>
		</>
	);
}

export default Footer;
